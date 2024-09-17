import React from "react";
import { FaCalendarAlt, FaMoneyBillWave, FaRegClock } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import CheckoutButtom from "@/app/goToCheckout/page";
const page = ({ duration, realFee, descountFee, Schedule, details }) => {
  return (
    <section className="bg-orange-color text-white py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 tracking-wider">
          Pricing & Schedule
        </h2>
        <p className="text-4xl font-bold mb-8 tracking-wider">
          <span role="img" aria-label="thumbs-up">
            👍
          </span>{" "}
          80% Discount on upcoming Batch.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
          {/* Duration Card */}
          <div className="bg-white text-orange-color w-full p-6 rounded-lg flex flex-col items-center border-2 border-dashed">
            <div className="flex items-center justify-center mb-4 text-white bg-orange-color rounded-full p-3 w-80px h-80px">
              <FaRegClock className="text-4xl" />
            </div>
            <h3 className="text-xl text-black font-bold mb-2">DURATION</h3>
            <p className="text-md font-medium">{duration}</p>
          </div>

          {/* Course Fee Card */}
          <div className="bg-white text-orange-color w-full p-6 rounded-lg flex flex-col items-center border-2 border-dashed">
            <div className="flex items-center justify-center mb-4 text-white bg-orange-color rounded-full p-3 w-80px h-80px">
              <FaMoneyBillWave className="text-4xl" />
            </div>
            <h3 className="text-xl text-black font-bold mb-2">Course Fee</h3>
            <p className="text-md font-medium">
              <span className="line-through mr-2">{realFee} AED</span>{" "}
              {descountFee} AED
            </p>
          </div>

          {/* Classes Schedule Card */}
          <div className="bg-white text-orange-color w-full p-6 rounded-lg shadow-lg flex flex-col items-center border-2 border-dashed">
            <div className="flex items-center justify-center mb-4 text-white bg-orange-color rounded-full p-3 w-80px h-80px">
              <FaCalendarAlt className="text-4xl" />
            </div>
            <h3 className="text-xl text-black font-bold mb-2">
              Classes Schedule
            </h3>
            <p className="text-md font-medium">{Schedule}</p>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center">
          <CheckoutButtom
            price={descountFee}
            btnText="Register your Seat Today"
            className="border-2 border-orange-500 text-2xl tracking-wider bg-black text-white font-bold text-center text-17px flex items-center gap-2 justify-center px-5 py-2  hover:bg-white hover:text-orange-color transition-all cursor-pointer"
            details={details}
            icon={<MdDone className="hover:bg-[#1D1B4C]" />}
          />
        </div>
      </div>
    </section>
  );
};

export default page;
