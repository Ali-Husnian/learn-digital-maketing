import React from "react";
import Home from "./home/page";
import DigitalMarketingCard from "./details/page";
import LearningMethodologies from "./learning-methodologies/page";
import Modules from "./modules/page";
import Success from "./success/Success";
import CourseInfoCard from "./courseInfocard/page";
import TransformativeOutcomes from "./transformative-outcomes/page";
import Certification from "./certification/page";
import FAQComponent from "./faq-component/page";
import NextCourse from "./nextcourse/page";
import CoursePathAway from "./cource-pathaway/page";

const page = () => {
  return (
    <>
      <Home />
      <CoursePathAway />
      {/*add new Full Stack Digital Marketing Course*/}
      <Success />
      <Modules />
      {/*add Button*/}

      <CourseInfoCard />
      {/*add LDM Certifications*/}
      <div className="my-20">
        <DigitalMarketingCard />
      </div>
      <LearningMethodologies />
      <TransformativeOutcomes />
      <Certification />
      <FAQComponent />
      <NextCourse />
    </>
  );
};

export default page;
