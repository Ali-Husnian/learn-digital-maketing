import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import CheckoutButton from "@/app/goToCheckout/page";

const Page = ({ levels, heading, price, details, icon }) => {
  return (
    <section className="bg-orange-color py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Left Column */}
        <div className="md:w-3/5">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {heading}
          </h2>
          <ul className="space-y-4 text-white text-lg">
            {Array.isArray(levels) && levels.length > 0 ? (
              levels.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span>
                    <FaCheckCircle size={25} className="text-white mr-3" />
                  </span>
                  {item}
                </li>
              ))
            ) : (
              <p>No levels available.</p>
            )}
          </ul>
        </div>

        {/* Right Column */}
        <div className="mt-8 md:mt-0 md:w-2/5 text-center">
          <p className="text-white text-lg font-semibold mb-4">
            Have Any Questions?
          </p>
          <div className="text-white text-lg font-semibold mb-4">
            <p>WhatsApp:</p>
            <p>+971509139489</p>
            <p>+96871197788</p>
          </div>
          <div className="space-y-6">
            {/*
              <button className="bg-blue-hover-color text-white font-bold py-2 px-6 rounded-md shadow-lg hover:bg-white hover:text-orange-color transition duration-300">
              🏆 Success Stories
            </button>
              */}
            <br />
            <CheckoutButton
              icon={icon}
              price={price}
              details={details}
              btnText="📚 Register Your Seat"
              className="bg-blue-hover-color text-white font-bold py-2 px-6 rounded-md shadow-lg hover:bg-white hover:text-orange-color transition duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
