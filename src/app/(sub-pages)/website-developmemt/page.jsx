import Image from "next/image";
import { FaPercent } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { FaRegClock, FaMoneyBillWave, FaCalendarAlt } from "react-icons/fa";

const page = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto my-100px px-4 bg-white">
        {/* Text Content */}
        <div className="max-w-lg">
          <p className="text-black mb-6 text-md tracking-wide font-semibold flex items-center justify-start before:content-[''] before:h-3px before:w-10 before:bg-orange-color before:mr-2">
            The Only Training You'll Ever Need
          </p>
          <h2 className="text-3xl font-bold text-heading-color mb-6">
            Affordable Full Stack Digital Marketing Course in UAE
          </h2>
          <p className="text-text-color mb-6">
            Discover top-tier Full Stack Digital Marketing courses in the UAE at
            prices that won’t break the bank. Gain the skills you need to excel
            in the digital world, all while staying within your budget. Unlock
            your potential today!
          </p>
          <div className="flex justify-between">
            <button className="border border-orange-color bg-orange-color text-white font-medium text-17px flex items-center gap-2 justify-center px-4 py-2  hover:bg-white hover:text-orange-color transition-all cursor-pointer">
              <MdDone className="hover:bg-[#1D1B4C]" />
              Enroll Now!
            </button>
            <button className="border border-orange-color bg-orange-color text-white font-medium text-17px flex items-center gap-2 justify-center px-4 py-2  hover:bg-white hover:text-orange-color transition-all cursor-pointer">
              <FaDownload />
              Download Brochure
            </button>
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
              src="/website-1.png"
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
                  <span className="text-2xl font-bold">50%</span>
                  <p>Off for Next Batch</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white font-bold text-sm text-blue-950 p-2">
            Next Batch Starting from September
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-orange-500 to-orange-600 text-white py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Pricing & Schedule</h2>
          <p className="text-lg mb-8">
            <span role="img" aria-label="thumbs-up">
              👍
            </span>{" "}
            50% Discount on upcoming Batch.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
            {/* Duration Card */}
            <div className="bg-white text-orange-600 p-6 rounded-lg shadow-lg flex flex-col items-center">
              <FaRegClock size={40} className="mb-4" />
              <h3 className="text-xl font-bold mb-2">DURATION</h3>
              <p className="text-md font-medium">Almost 6 Months</p>
            </div>

            {/* Course Fee Card */}
            <div className="bg-white text-orange-600 p-6 rounded-lg shadow-lg flex flex-col items-center">
              <FaMoneyBillWave size={40} className="mb-4" />
              <h3 className="text-xl font-bold mb-2">Course Fee</h3>
              <p className="text-md font-medium">3000 AED</p>
            </div>

            {/* Classes Schedule Card */}
            <div className="bg-white text-orange-600 p-6 rounded-lg shadow-lg flex flex-col items-center">
              <FaCalendarAlt size={40} className="mb-4" />
              <h3 className="text-xl font-bold mb-2">Classes Schedule</h3>
              <p className="text-md font-medium">Once a Week Every Thursday</p>
            </div>
          </div>

          <div className="mt-8">
            <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800">
              ✔️ Register your Seat Today
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
