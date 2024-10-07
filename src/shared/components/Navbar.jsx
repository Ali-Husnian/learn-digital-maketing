"use client";
import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Image from "next/image";
import { HiOutlineLogin, HiOutlineLogout } from "react-icons/hi";
import Headroom from "react-headroom";
import Link from "next/link";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

// Navigation items data
const navItems = [
  /* navItems definition */
];

export default function Navbar() {
  const router = useRouter();
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenu] = useState(false);
  const [token, setToken] = useState(null); // Initialize token state

  useEffect(() => {
    // Fetch the token from cookies on component mount
    const storedToken = Cookies.get("token");
    setToken(storedToken);
  }, []);

  useEffect(() => {
    // Update token state if there's a change in the token (re-fetch)
    const storedToken = Cookies.get("token");
    setToken(storedToken);
  }, [token]); // Dependency ensures re-render on token change

  function openSideMenu() {
    setSideMenu(true);
  }

  function closeSideMenu() {
    setSideMenu(false);
  }

  const handleLogout = async () => {
    try {
      await axios.get(`/api/users/logout`);
      toast.success("Logout Successfully!");
      closeSideMenu();
      Cookies.remove("token");
      setToken(null); // Update token to reflect the logout
      router.push("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      {/* Navbar */}
      <Headroom className="absolute m-auto right-0 left-0">
        <div
          className={`m-auto right-0 left-0 flex w-full max-w-6xl justify-between max-sm:justify-between px-4 md:px-[100px] ${!isSideMenuOpen && "py-3"} lg:py-0 text-sm shadow-md bg-white lg:bg-blue-navi-color`}
        >
          <section ref={animationParent} className="flex items-center gap-10">
            {!isSideMenuOpen && (
              <Link href="/">
                <Image
                  src="/logo.png"
                  width={100}
                  height={100}
                  alt="logo"
                  className="block lg:hidden"
                />
              </Link>
            )}

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-4 transition-all">
              {navItems.map((d, i) => (
                <div
                  key={i}
                  className="relative group px-2 py-5 transition-all border-b-4 border-transparent hover:border-orange-color"
                >
                  <Link href={d.link ?? "#"}>
                    <p className="flex cursor-pointer items-center gap-2 text-heading-color lg:text-white font-bold">
                      <span>{d.label}</span>
                      {d.children && (
                        <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
                      )}
                    </p>
                  </Link>
                  {d.children && (
                    <div className="absolute group left-0 top-[64px] hidden w-auto flex-col gap-1 rounded-b-sm bg-white py-3 shadow-md transition-all group-hover:flex">
                      {d.children.map((ch, i) => (
                        <Link
                          key={i}
                          href={ch.link ?? "#"}
                          className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-text-color hover:text-green-color"
                        >
                          <span className="whitespace-nowrap pl-3">
                            {ch.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {isSideMenuOpen && (
              <MobileNav closeSideMenu={closeSideMenu} handleLogout={handleLogout} />
            )}
          </section>

          {/* Mobile Menu Button */}
          <FiMenu
            onClick={openSideMenu}
            className={`cursor-pointer text-4xl block lg:hidden ${isSideMenuOpen && "hidden"}`}
          />

          {/* Desktop View Login/Logout Button */}
          <div className="hidden lg:flex items-center gap-2">
            {token ? (
              <button
                onClick={handleLogout}
                className="bg-orange-color text-white font-medium text-17px p-2 flex items-center gap-2 justify-center rounded-md hover:bg-blue-hover-color hover:text-white transition-all cursor-pointer"
              >
                Logout
                <HiOutlineLogout />
              </button>
            ) : (
              <Link
                href="/sign-in"
                className="bg-orange-color text-white font-medium text-17px p-2 flex items-center gap-2 justify-center rounded-md hover:bg-blue-hover-color hover:text-white transition-all cursor-pointer"
              >
                Login
                <HiOutlineLogin />
              </Link>
            )}
          </div>
        </div>
      </Headroom>
    </>
  );
}

// Mobile Nav Component
function MobileNav({ closeSideMenu, handleLogout }) {
  const [token, setToken] = useState(() => Cookies.get("token"));

  useEffect(() => {
    const storedToken = Cookies.get("token");
    setToken(storedToken);
  }, []);

  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-start bg-black/60 md:flex lg:hidden">
      <div className="h-full w-[65%] overflow-auto bg-white px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose onClick={closeSideMenu} className="cursor-pointer text-4xl" />
        </section>
        <div className="flex flex-col text-base gap-2 transition-all">
          <Link href="/">
            <Image src="/logo.png" width={150} height={75} alt="logo" />
          </Link>

          {navItems.map((d, i) => (
            <SingleNavItem
              key={i}
              label={d.label}
              link={d.link}
              children={d.children}
              closeSideMenu={closeSideMenu}
            />
          ))}
        </div>

        {/* Mobile View Login/Logout Buttons */}
        <section className="flex flex-col gap-4 mt-4 items-start text-gray-800">
          {token ? (
            <button
              onClick={handleLogout}
              className="bg-orange-color text-white font-medium text-17px p-2 flex items-center gap-2 justify-center rounded-md hover:bg-blue-hover-color hover:text-white transition-all cursor-pointer"
            >
              Logout
              <HiOutlineLogout />
            </button>
          ) : (
            <Link
              onClick={closeSideMenu}
              href="/sign-in"
              className="bg-orange-color text-white font-medium text-17px p-2 flex items-center gap-2 justify-center rounded-md hover:bg-blue-hover-color hover:text-white transition-all cursor-pointer"
            >
              Login
              <HiOutlineLogin />
            </Link>
          )}
        </section>
      </div>
    </div>
  );
}
