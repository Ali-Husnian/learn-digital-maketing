import React from "react";

const page = ({ trainingSteps }) => {
  return (
    <div className="max-w-6xl mx-auto py-16">
      <div className="text-center space-y-4 mb-12">
        <h3 className="text-green-color text-md tracking-wide font-extrabold flex items-center justify-center before:content-[''] before:h-3px before:w-10 before:bg-green-color before:mr-2 after:content-[''] after:h-3px after:w-10 after:bg-green-color after:ml-2">
          Our Process
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Here is How We Process This Training
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4">
        {trainingSteps.map((step, index) => (
          <div
            key={index}
            className="border-dashed border-2 border-orange-color justify-center p-2 rounded-lg flex flex-col items-center text-center h-52"
          >
            <div className="text-white bg-orange-color rounded-full w-14 h-14 mb-4 flex items-center justify-center">
              <step.icon className="text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-blue-900">{step.title}</h3>
            <p className="text-orange-color font-semibold">{step.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
