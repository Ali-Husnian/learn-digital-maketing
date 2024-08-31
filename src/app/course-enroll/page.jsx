"use client";
import Image from "next/image";
import React from "react";
import { FaDownload, FaPercent } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import CountUp from "react-countup";
import Link from "next/link";

const page = ({
  title,
  heading,
  description,
  img,
  btnAction = true,
  btnText = "Enroll Now !",
}) => {
  const today = new Date();
  const nextBatchDate = new Date(today.getFullYear(), today.getMonth() + 1);

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = nextBatchDate.toLocaleDateString("en-US", options);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-100px px-4 bg-white">
      {/* Text Content */}
      <div className="max-w-lg">
        <p className="text-black mb-6 text-md tracking-wide font-semibold flex items-center justify-start before:content-[''] before:h-3px before:w-10 before:bg-orange-color before:mr-2">
          {title}
        </p>
        <h2 className="text-3xl font-bold text-heading-color mb-6">
          {heading}
        </h2>
        <p className="text-text-color mb-6">{description}</p>
        <div className="flex justify-between">
          <Link href={"/checkout"}>
            <button className="border border-orange-color bg-orange-color text-white font-medium text-17px flex items-center gap-2 justify-center px-4 py-2  hover:bg-white hover:text-orange-color transition-all cursor-pointer">
              <MdDone className="hover:bg-[#1D1B4C]" />
              {btnText}
            </button>
          </Link>
          {btnAction && (
            <button className="border border-orange-color bg-orange-color text-white font-medium text-17px flex items-center gap-2 justify-center px-4 py-2  hover:bg-white hover:text-orange-color transition-all cursor-pointer">
              <FaDownload />
              Download Brochure
            </button>
          )}
        </div>
        <div className="mt-5 text-center text-sm text-text-color">
          <span>5 Star Rating & Reviewed by 4693+ Students</span>
          <div className="flex mt-2 items-center justify-center">
            <span className="text-yellow-500">⭐</span>
            <span className="text-yellow-500">⭐</span>
            <span className="text-yellow-500">⭐</span>
            <span className="text-yellow-500">⭐</span>
            <span className="text-yellow-500">⭐</span>
          </div>
        </div>
      </div>

      {/* Image Content */}
      <div className="relative mt-6 md:mt-0 md:w-1/2 flex justify-center">
        <div className="relative">
          <Image
            src={img}
            alt="Course Image"
            className=""
            width={450} // Adjust these values as per your image
            height={450}
          />
          <div className="absolute top-14 right-0 bg-white p-2 rounded-lg  shadow-lg">
            <div className="flex justify-between items-center gap-2">
              <div className="bg-orange-color text-white text-2xl font-bold rounded-full p-3">
                <FaPercent />
              </div>
              <div>
                <span className="text-2xl font-bold">
                  <CountUp start={0} end={50} duration={2} delay={0} />%
                </span>
                <p>Off for Next Batch</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white font-bold text-sm text-blue-950 p-2">
          Next Batch Starting from {formattedDate}
        </div>
      </div>
    </section>
  );
};

export default page;
