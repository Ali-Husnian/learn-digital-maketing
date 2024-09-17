import React from "react";
import { FaHome, FaExpand, FaMouse } from "react-icons/fa";
import Image from "next/image";
import CheckoutButton from "@/app/goToCheckout/page";
const countries = [
  { name: "United Arab Emirates", img: "/con2-United-Arab-Emirates.png" },
  { name: "Saudi Arabia", img: "/con3-Saudi-Arabia.png" },
  { name: "Oman", img: "/con4-Oman.png" },
  { name: "Qatar", img: "/con1-Qatar.png" },
  { name: "Kuwait", img: "/con5-Kuwait.png" },
  { name: "Bahrain", img: "/con6-Bahrain.png" },
];

const page = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center space-y-4 mb-12">
        <h3 className="text-orange-color text-md tracking-wide font-extrabold flex items-center justify-center before:content-[''] before:h-3px before:w-10 before:bg-orange-color before:mr-2 after:content-[''] after:h-3px after:w-10 after:bg-orange-color after:ml-2">
          Full Stack Digital Marketing Course
        </h3>
        <h2 className="text-3xl md:text-4xl max-w-3xl mx-auto font-bold text-heading-color">
          Tailor Your Learning Experience Choose What Works Best for You
        </h2>
        <p className="text-md text-text-color">
          20 Modules | 7 Certifications.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
        <div className="bg-white rounded-lg drop-shadow-md border-2 border-slate-50 hover:shadow-2xl transition-all p-6">
          <div className="flex items-center justify-center bg-orange-color mb-4 w-50px h-50px mx-auto rounded-full">
            <FaHome className="text-white text-4xl p-2" />
          </div>
          <h3 className="text-3xl text-center font-bold text-orange-color">
            Complete Course Pathway
          </h3>
          <p className="mt-2 text-text-color text-center">
            Master the Entire Digital Marketing Landscape
          </p>
          <p className="mt-4 text-text-color text-center">
            Complete all 7 certifications and 20 modules to become a Full Stack
            Digital Marketing expert. Ideal for those looking to gain a
            comprehensive understanding and command of digital marketing.
          </p>
        </div>
        <div className="bg-white rounded-lg drop-shadow-md border-2 border-slate-50 hover:shadow-2xl transition-all p-6">
          <div className="flex items-center justify-center bg-orange-color mb-4 w-50px h-50px mx-auto rounded-full">
            <FaExpand className="text-white text-4xl p-2" />
          </div>
          <h3 className="text-3xl text-center font-bold text-orange-color">
            Individual Certification Pathway
          </h3>
          <p className="mt-2 text-text-color text-center">
            Specialize in What Matters Most to You
          </p>
          <p className="mt-4 text-text-color text-center">
            Choose any of the 7 certifications independently. Whether you're
            interested in SEO, Social Media, or Content Marketing, focus on the
            areas that align with your career goals and interests.
          </p>
        </div>
      </div>
      <div className="mt-12 text-center">
        <h2 className="text-4xl font-bold text-orange-color">
          Exclusive Digital Marketing Training for Gulf.
        </h2>
        <p className="mt-5 text-lg text-text-color">
          We offer personalized digital marketing training for entrepreneurs
          across the Gulf region. Learn from experts, gain practical skills, and
          elevate your business with training designed to meet your unique needs
          and goals.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 py-8">
          {countries.map((country, index) => (
            <div key={index} className="text-center">
              <Image
                src={country.img}
                alt={country.name}
                className="rounded-full shadow-md"
                width={200}
                height={200}
                quality={100}
              />
              <p className="mt-2 text-sm font-medium">{country.name}</p>
            </div>
          ))}
        </div>
        <center className="mt-10">
          <CheckoutButton
            price="1400"
            details="Full Stack Digital Marketing"
            className="border border-[#1D1B4C] bg-[#1D1B4C] text-white font-medium text-17px flex items-center gap-2 justify-center w-250px h-50px hover:scale-90 hover:bg-white hover:text-[#1D1B4C] transition-all cursor-pointer"
            btnText="Click Here To Enroll"
            icon=<FaMouse className="hover:bg-[#1D1B4C] " />
          />
        </center>
      </div>
    </div>
  );
};

export default page;
