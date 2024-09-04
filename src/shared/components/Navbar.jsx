"use client";
import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Image from "next/image";
import { MdPhoneInTalk } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineLogin } from "react-icons/hi";
import Headroom from "react-headroom";
import Link from "next/link";

const navItems = [
  {
    label: "For Professionals",
    link: "#",
    children: [
      { label: "Diploma Digital Marketing", link: "/digital-marketing" },
      { label: "Ecommerce Website Developmemt", link: "/website-developmemt" },
      {
        label: "Mastering in Search Engine Optimization (SEO)",
        link: "/search-engine-optimization",
      },
      {
        label: "Mastering Social Media Marketing",
        link: "/social-media-marketing",
      },
      { label: "Mastering in Google Marketing", link: "/google-marketing" },
      { label: "Mastering in Google Analytics", link: "/google-analytics" },
      { label: "Mastering in Email Marketing", link: "/email-marketing" },
      {
        label: "Start your Online Busieness in 30 Days",
        link: "/online-busieness",
      },
    ],
  },

  {
    label: "For Entrepreneur",
    link: "/",
    children: [
      { label: "Diploma digital Marketing", link: "#" },
      { label: "Business Setup + (1 To 1 Session)", link: "#" },
      { label: "On Demand Modules", link: "#" },
    ],
  },

  { label: "Other institutes", link: "/other-institute" },
  {
    label: "For Companies",
    link: "#",
    children: [
      { label: "eCommerce Development", link: "#" },
      { label: "Lead Generation", link: "#" },
      { label: "Customize Modules", link: "#" },
    ],
  },
  {
    label: "About",
    link: "#",
    children: [
      { label: "About Academy", link: "#" },
      { label: "Mhy Choose Us", link: "#" },
      { label: "Testimonials", link: "#" },
      { label: "Linkein Recommendations", link: "#" },
      { label: "Alumni Network", link: "#" },
      { label: "Blog", link: "#" },
    ],
  },
  { label: "Login", link: "/sign-in", login: ["login"] },
];

export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenu] = useState(false);

  useEffect(() => {
    setSideMenu(false);
  }, []);
  function openSideMenu() {
    setSideMenu(true);
  }
  function closeSideMenu() {
    setSideMenu(false);
  }
  return (
    <>
      {/*Navbar*/}
      <Headroom className="absolute m-auto right-0 left-0">
        <div
          className={`m-auto right-0 left-0 flex w-full max-w-6xl justify-start max-sm:justify-between px-4 md:px-[100px] ${!isSideMenuOpen && "py-3"
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
                  className="hidden max-sm:block"
                />
              </Link>
            )}

            <div className="hidden md:flex items-center gap-4 transition-all">
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
                      {d.login && (
                        <HiOutlineLogin
                          size={20}
                          className=" text-orange-color font-bold transition-all"
                        />
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
            {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
          </section>

          <FiMenu
            onClick={openSideMenu}
            className={`cursor-pointer text-4xl md:hidden ${isSideMenuOpen && "hidden"
              }`}
          />
        </div>
      </Headroom>
    </>
  );
}

function MobileNav({ closeSideMenu }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-start bg-black/60 md:hidden">
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
            <SingleNavItem key={i} label={d.label} link={d.link}>
              {d.children}
            </SingleNavItem>
          ))}
        </div>
        <section className="flex flex-col gap-4 mt-4 items-start text-gray-800 md:hidden">
          {/* Contact Info Section */}
          <div className="space-y-2 text-start ">
            <Link href="#" className="flex items-center space-x-2">
              <MdPhoneInTalk className="text-orange-color text-3xl font-bold" />
              <span>
                <b className="text-heading-color">Requesting a Call:</b> <br />
                <strong className="text-sm font-light text-text-color">
                  (210) 123 451
                </strong>
              </span>
            </Link>

            {/* Email */}
            <Link href="#" className="flex items-center space-x-2">
              <IoIosMail className="text-orange-color text-3xl font-bold" />
              <span>
                <b className="text-heading-color">Mail us for help:</b> <br />
                <strong className="text-sm font-light text-text-color">
                  info@learndigitalmarketing.academy
                </strong>
              </span>
            </Link>

            {/* Location */}
            <Link href="#" className="flex items-center space-x-2">
              <MdLocationOn className="text-orange-color text-3xl font-bold" />
              <span>
                <b className="text-heading-color">09, SAIF Zone 514789</b>{" "}
                <br />
                <strong className="text-sm font-light text-text-color">
                  Dubai UAE
                </strong>
              </span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

function SingleNavItem(d) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    setItem(!isItemOpen);
  }

  return (
    <div
      ref={animationParent}
      onClick={toggleItem}
      className="relative px-2 py-1 transition-all"
    >
      <Link href={d.link ?? "#"}>
        <p className="flex cursor-pointer items-center gap-2 text-text-color group-hover:text-green-color">
          <span>{d.label}</span>
          {d.children && (
            <IoIosArrowDown
              className={`text-xs transition-all ${isItemOpen && "rotate-180"}`}
            />
          )}
        </p>
      </Link>
      {isItemOpen && d.children && (
        <div className="w-auto flex-col gap-1 rounded-lg bg-white py-3 transition-all flex">
          {d.children.map((ch, i) => (
            <Link
              key={i}
              href={ch.link ?? "#"}
              className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-text-color hover:text-green-color"
            >
              <span className="whitespace-nowrap pl-3">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
