import Link from "next/link";
import React from "react";

const page = ({ heading, content1, content2 }) => {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="mx-4 py-12 my-12 px-5 border-2 border-dashed border-orange-color shadow-lg rounded-lg ">
        <div className="text-center space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-heading-color">
            {heading}
          </h2>
          <p className="text-text-color">
            Enhance your skills with our Certification in{" "}
            <span className="text-orange-color font-semibold">{content1}</span>.
            This certification is available as a standalone program, designed to
            give you the specialized knowledge you need in the field of digital
            marketing.
          </p>
          <p className="text-text-color">
            Additionally, this certification is a key component of our{" "}
            <span className="text-orange-color font-semibold">{content2}</span>,
            allowing you to integrate this expertise into a broader marketing
            skill set.
          </p>
        </div>
        <div className="text-center mt-6">
          <Link
            href="/"
            className="bg-orange-color hover:text-orange-color text-white text-lg font-semibold px-6 py-2 border border-orange-color hover:bg-white transition-colors"
          >
            View Full Stack Digital Marketing Course
          </Link>
        </div>
      </div>
    </section>
  );
};

export default page;
