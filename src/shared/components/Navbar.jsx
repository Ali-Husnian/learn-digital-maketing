"use client";
import { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosMail } from "react-icons/io";
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
import { MdLocationOn, MdPhoneInTalk } from "react-icons/md";

// Navigation items data
const navItems = [
  {
    label: "For Professionals",
    link: "#",
    children: [
      { label: "Diploma Digital Marketing", link: "/digital-marketing" },
      {
        label: "Certification Ecommerce Web Developmemt",
        link: "/website-developmemt",
      },
      {
        label: "Certificates Mastering in Search Engine Optimization (SEO)",
        link: "/search-engine-optimization",
      },
      {
        label: "Certificates Mastering Social Media Marketing",
        link: "/social-media-marketing",
      },
      {
        label: "Certificates Mastering in Google Marketing",
        link: "/google-marketing",
      },
      {
        label: "Certificates Mastering in Google Analytics",
        link: "/google-analytics",
      },
      {
        label: "Certificates Mastering in Email Marketing",
        link: "/email-marketing",
      },
      {
        label: "Certificates Start your Online Busieness in 30 Days",
        link: "/online-busieness",
      },
    ],
  },

  {
    label: "For Entrepreneur",
    link: "/",
    children: [
      { label: "Diploma digital Marketing", link: "/digital-marketing" },
      {
        label: "Business Setup + (1 To 1 Session)",
        link: "/business-setup-1-to-1-session",
      },
    ],
  },

  { label: "Other institutes", link: "/other-institute" },
  { label: "For Companies", link: "/for-companies" },
  {
    label: "About",
    link: "#",
    children: [
      { label: "About Academy", link: "/about-us" },
      { label: "Why Choose Us", link: "/why-choose-us" },
      { label: "Blog", link: "http://blog.learndigitalmarketing.com" },
    ],
  },
];

export default function Navbar() {
  const router = useRouter();
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenu] = useState(false);
  const [token, setToken] = useState(null); // Default to null, indicating no user logged in

  // Fetch token from cookies on component mount
  useEffect(() => {
    const storedToken = Cookies.get("token");
    setToken(storedToken || null); // Set token or null if it doesn't exist
  }, []);

  // Listen for token changes in cookies and update the state
  useEffect(() => {
    const intervalId = setInterval(() => {
      const storedToken = Cookies.get("token");
      setToken(storedToken || null);
    }, 1000); // Poll every second to check for token changes

    return () => clearInterval(intervalId); // Cleanup the interval on unmount
  }, []);

  function openSideMenu() {
    setSideMenu(true);
  }

  function closeSideMenu() {
    setSideMenu(false);
  }

  // Logout functionality
  const handleLogout = async () => {
    try {
      await axios.get(`/api/users/logout`);
      toast.success("Logout Successfully!");
      Cookies.remove("token");
      setToken(null); // Ensure token is null after logout
      closeSideMenu();
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
          className={`m-auto right-0 left-0 flex w-full max-w-6xl justify-between max-sm:justify-between px-4 md:px-[100px] ${
            !isSideMenuOpen && "py-3"
          } lg:py-0 text-sm shadow-md bg-white lg:bg-blue-navi-color`}
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
              <MobileNav
                closeSideMenu={closeSideMenu}
                handleLogout={handleLogout}
              />
            )}
          </section>

          <FiMenu
            onClick={openSideMenu}
            className={`cursor-pointer text-4xl block lg:hidden ${
              isSideMenuOpen && "hidden"
            }`}
          />

          {/* Desktop Login/Logout Button */}
          <div className="hidden lg:flex items-center gap-2">
            {token !== null ? (
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

function MobileNav({ closeSideMenu, handleLogout }) {
  const [token, setToken] = useState(() => Cookies.get("token"));

  useEffect(() => {
    const storedToken = Cookies.get("token");
    setToken(storedToken || null);
  }, []);

  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-start bg-black/60 md:flex lg:hidden">
      <div className="h-full w-[65%] overflow-auto bg-white px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl"
          />
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
              href="/sign-in"
              onClick={() => closeSideMenu()}
              className="bg-orange-color text-white font-medium text-17px p-2 flex items-center gap-2 justify-center rounded-md hover:bg-blue-hover-color hover:text-white transition-all cursor-pointer"
            >
              Login
              <HiOutlineLogin />
            </Link>
          )}
        </section>

        {/* Contact Info Section */}
        <section className="flex flex-col gap-4 mt-4 items-start text-gray-800">
          <a href="tel:+96871197788" className="flex items-center space-x-2">
            <MdPhoneInTalk className="text-orange-color text-3xl font-bold" />
            <span>
              <b className="text-heading-color">Call Now:</b> <br />
              <strong className="text-sm font-light text-text-color">
                +971501384504
              </strong>
            </span>
          </a>

          <Link
            href="mailto:info@learndigitalmarketing.academy"
            className="flex items-center space-x-2"
          >
            <IoIosMail className="text-orange-color text-3xl font-bold" />
            <span>
              <b className="text-heading-color">Mail us for help:</b> <br />
              <strong className="text-sm font-light text-text-color">
                info@learndigitalmarketing.academy
              </strong>
            </span>
          </Link>

          <Link
            href="https://maps.app.goo.gl/rKQU2nfkKxoG4DUN9"
            target="_blank"
            className="flex items-center space-x-2"
          >
            <MdLocationOn className="text-orange-color text-3xl font-bold" />
            <span>
              <b className="text-heading-color">09, SAIF Zone 514789</b> <br />
              <strong className="text-sm font-light text-text-color">
                Dubai UAE
              </strong>
            </span>
          </Link>
        </section>
        {/* End */}
      </div>
    </div>
  );
}

function SingleNavItem({ label, link, children, closeSideMenu }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  function toggleDropdown() {
    setDropdownOpen(!isDropdownOpen);
  }

  return (
    <div className="w-full border-b-[1px] border-gray-200">
      {!children ? (
        <Link
          href={link}
          onClick={closeSideMenu}
          className="text-[15px] font-normal flex justify-start items-center py-2 px-2 gap-2 cursor-pointer hover:bg-slate-200 w-full"
        >
          {label}
        </Link>
      ) : (
        <div className="py-1 transition-all">
          <button
            className="text-[15px] font-normal flex justify-between items-center py-2 px-2 gap-2 cursor-pointer hover:bg-slate-200 w-full"
            onClick={toggleDropdown}
          >
            {label}
            <IoIosArrowDown
              className={`${
                isDropdownOpen ? "rotate-0" : "rotate-180"
              } transition-all`}
            />
          </button>
          {isDropdownOpen && (
            <div className="bg-white py-2">
              {children.map((ch, i) => (
                <Link
                  href={ch.link ?? "#"}
                  key={i}
                  onClick={closeSideMenu}
                  className="text-[15px] font-normal flex justify-start items-center py-2 px-2 gap-2 cursor-pointer hover:bg-slate-200 w-full"
                >
                  {ch.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
