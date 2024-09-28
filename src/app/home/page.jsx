import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

import {
  FaCalendarAlt,
  FaCertificate,
  FaDownload,
  FaMoneyBillWave,
  FaMouse,
  FaVideo,
} from "react-icons/fa";
import CheckoutButton from "@/app/goToCheckout/page";

function Home() {
  return (
    <>
      <div className="h-auto bg-cover bg-[url('/new.png')]">
        <div className="border border-transparent">
          <div className="items-center text-[#1D1B4C] lg:mt-44 mt-70px pl-4 md:mt-16 w-full max-w-6xl lg:mx-auto">
            <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-balance">
              #1 Full Stack Digital Marketing Course IN UAE With Assured
              Placement Support
            </p>
            <br />
            <p className="text-16px md:1xl lg:text-3xl font-normal text-balance">
              Equip yourself with the skills and knowledge needed to excel in
              the dynamic field of digital marketing with live online training
              in Dubai.
            </p>

            <div className="flex gap-5 my-5 justify-between flex-col md:flex-row">
              <ul className="space-y-0 mt-5 text-xl font-extrabold italic text-[#1D1B4C]">
                <li className="flex items-center">
                  <FaLocationArrow className="mr-2 text-orange-color rotate-45" />
                  <span className="">➢ 80% Scholarship.</span>
                </li>
                <li className="flex items-center">
                  <FaLocationArrow className="mr-2 text-orange-color rotate-45" />
                  <span className="">
                    Course Fee:{" "}
                    <span className="line-through text-pink-500">AED 7000</span>{" "}
                    <b className="text-black underline">AED 1400</b>
                  </span>
                </li>
                <li className="flex items-center">
                  <FaLocationArrow className="mr-2 text-orange-color rotate-45" />
                  <span className="">Live Training with Zoom</span>
                </li>
                <li className="flex items-cente r">
                  <FaLocationArrow className="mr-2 text-orange-color rotate-45" />
                  <span className="">20 Modules – 7 Certifications.</span>
                </li>
                <li className="flex items-center">
                  <FaLocationArrow className="mr-2 text-orange-color rotate-45" />
                  <span className="">Course Duration: 7.5 Months.</span>
                </li>
                <li className="flex items-center">
                  <FaLocationArrow className="mr-2 text-orange-color rotate-45" />
                  <span className="">
                    {" "}
                    Classes Schedule: Every Saturday (09:00 AM GMT+4).
                  </span>
                </li>
              </ul>
              <Image src="/scholership.webp" width={300} height={300} />
            </div>
            <div className="flex flex-wrap my-5 gap-y-4 gap-x-24">
              {/*Price 1400*/}
              <CheckoutButton
                icon={<FaMouse className="hover:bg-[#1D1B4C]" />}
                price="1400"
                details="Full Stack Digital Marketing"
                className="border border-[#1D1B4C] bg-[#1D1B4C] text-white font-medium text-17px flex items-center gap-2 justify-center w-250px h-50px hover:scale-90 hover:bg-white hover:text-[#1D1B4C] transition-all cursor-pointer"
                btnText="Click Here To Enroll"
              />
              <button className="border border-[#1D1B4C] bg-[#1D1B4C] text-white font-medium text-17px flex items-center gap-2 justify-center w-280px h-50px hover:scale-90 hover:bg-white hover:text-[#1D1B4C] transition-all cursor-pointer">
                <FaDownload />
                Download Course Curiculum
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
