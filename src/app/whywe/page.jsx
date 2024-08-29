import Image from "next/image";
import React from "react";

const page = ({ contentData, heading }) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h3 className="text-green-color text-md tracking-wide font-extrabold flex items-center justify-center before:content-[''] before:h-3px before:w-10 before:bg-green-color before:mr-2 after:content-[''] after:h-3px after:w-10 after:bg-green-color after:ml-2">
            Why we
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {heading}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {contentData.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="rounded-xl shadow-md -shadow-md"
                  width={400}
                  height={250}
                />
              </div>
              <div className="md:w-full mt-4 md:mt-0 px-6 py-8 bg-li-gray shadow-md rounded-r-xl space-y-8">
                <h3 className="text-3xl font-bold text-heading-color mb-4">
                  {item.title}
                </h3>
                <p className="text-text-color taxt-md">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
