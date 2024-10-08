import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaQuoteLeft } from "react-icons/fa";

const page = ({ bgImg, title, heading }) => {
  return (
    <section className="relative h-55vh ">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      ></div>

      {/* Overlay */}
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white bg-black/50">
        <h1 className="text-5xl font-bold mb-4">
          <span className="text-orange-color line-through">{title}</span>
        </h1>
        <h2 className="text-4xl font-bold max-w-4xl flex gap-0">
          <span className="text-orange-color">
            <RiDoubleQuotesL
              className="border-l-4 border-orange-color"
              size={50}
            />
          </span>
          {heading}
        </h2>
      </div>
    </section>
  );
};

export default page;
