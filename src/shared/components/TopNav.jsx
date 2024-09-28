"use client";
import React from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";

import { MdPhoneInTalk } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";

import Link from "next/link";
import Image from "next/image";

const TopNav = () => {
  const [animationParent] = useAutoAnimate();
  return (
    <>
      {/*Top Nav*/}
      <section
        ref={animationParent}
        className="bg-top-nav-color max-xs:hidden transition-all"
      >
        <div className="flex items-center justify-between w-full max-w-6xl h-[50px] px-4 mx-auto">
          {/*left*/}
          <p className="text-white font-normal tracking-wide">
            Welcome to{" "}
            <span className="text-orange-500">Learn Digital Marketing</span>
          </p>
          {/*right*/}
          <div className="flex gap-2">
            <Link href="https://www.fb.com" target="_blank">
              <TiSocialFacebook className="bg-white text-blue-800 p-1 text-2xl rounded-full hover:scale-125 transition-all cursor-pointer" />
            </Link>
            <Link href="https://www.twitter.com" target="_blank">
              <TiSocialTwitter className="bg-white text-blue-400 p-1 text-2xl rounded-full hover:scale-125 transition-all cursor-pointer" />
            </Link>
            <Link href="https://www.instagram.com" target="_blank">
              <IoLogoInstagram className="bg-white text-pink-400 p-1 text-2xl rounded-full hover:scale-125 transition-all cursor-pointer" />
            </Link>
            <Link href="https://www.linkedin.com" target="_blank">
              <TiSocialLinkedin className="bg-white text-blue-600 p-1 text-2xl rounded-full hover:scale-125 transition-all cursor-pointer" />
            </Link>
          </div>
        </div>
      </section>
      {/*Middel Nav*/}
      <section ref={animationParent} className="hidden lg:block transition-all">
        <div className=" flex items-center justify-between w-full max-w-6xl mx-auto bg-white p-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Learn Digital Marketing Logo"
                width={220}
                height={110}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Contact Info Section */}
          <div className="flex items-center space-x-8 text-sm text-gray-600">
            {/* Phone */}
            <div className="flex items-center space-x-4">
              <MdPhoneInTalk className="text-orange-color text-4xl font-bold" />
              <span>
                <b className="text-heading-color">WhatsApp Now:</b> <br />
                <Link href="https://wa.me/+971501384504">
                  <strong className="text-sm font-light text-text-color">
                    UAE: +971501384504
                  </strong>
                </Link>
                <br />
                <Link href="https://wa.me/+96871197788">
                  <strong className="text-sm font-light text-text-color">
                    Oman: +96871197788
                  </strong>
                </Link>
              </span>
            </div>

            {/* Divider */}
            <div className="border-l h-8 border-gray-300"></div>

            {/* Email */}
            <Link
              href="mailto:info@learndigitalmarketing.academy"
              className="flex items-center space-x-4"
            >
              <IoIosMail className="text-orange-color text-4xl font-bold" />
              <span>
                <b className="text-heading-color">Mail us for help:</b> <br />
                <strong className="text-sm font-light text-text-color">
                  info@learndigitalmarketing.academy
                </strong>
              </span>
            </Link>

            {/* Divider */}
            <div className="border-l h-8 border-gray-300"></div>

            {/* Location */}
            <Link
              href="https://maps.app.goo.gl/rKQU2nfkKxoG4DUN9"
              target="_blank"
              className="flex items-center space-x-4"
            >
              <MdLocationOn className="text-orange-color text-4xl font-bold" />
              <span>
                <b className="text-heading-color">09, SAIF Zone 514789</b>{" "}
                <br />
                <strong className="text-sm font-light text-text-color">
                  Dubai UAE
                </strong>
                <br />
                <strong className="text-sm font-light text-text-color">
                  Sultanate of Oman
                </strong>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopNav;
