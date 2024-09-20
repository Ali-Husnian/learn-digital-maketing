import React from "react";
import TrainingProcess from "@/app/training-process/page";
import CheckoutButton from "@/app/goToCheckout/page";
import FAQ from "@/app/faq-component/page";
import Image from "next/image";
import {
  FiDownload,
  FiFileMinus,
  FiLayers,
  FiTarget,
  FiTrendingUp,
} from "react-icons/fi";
import {
  FaCertificate,
  FaChalkboardTeacher,
  FaCheckCircle,
  FaCogs,
  FaTools,
  FaUserAlt,
  FaUsers,
  FaUserShield,
} from "react-icons/fa";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const trainingSteps = [
  { icon: FaChalkboardTeacher, title: "Live Lectures", subtitle: "On Zoom" },
  {
    icon: FiTrendingUp,
    title: "Always Up-to-Date",
    subtitle: "New Models & Skills",
  },
  {
    icon: FaUserShield,
    title: "Top Notch Support",
    subtitle: "In Group, Lectures, Inbox",
  },
  {
    icon: FaTools,
    title: "Custom Tools Portal",
    subtitle: "#LDM Special Tools",
  },
  { icon: FaCogs, title: "Proven Systems", subtitle: "Legit & Workable" },
  {
    icon: FiLayers,
    title: "Advance Strategies",
    subtitle: "Bamboo Approaches",
  },
  {
    icon: FaCheckCircle,
    title: "#LDM Certifications",
    subtitle: "Become Certified",
  },
  {
    icon: FiTarget,
    title: "Actionable and Practical",
    subtitle: "Leaning Combination",
  },
  {
    icon: FaCertificate,
    title: "#LDM Certifications",
    subtitle: "Become Certified",
  },
  {
    icon: FiFileMinus,
    title: "Actionable and Practical",
    subtitle: "Leaning Combination",
  },
];
const cardData = [
  {
    icon: <FaUserShield className="text-4xl" />,
    number: "250+",
    description: "Batches Closed",
  },
  {
    icon: <FaUserAlt className="text-4xl" />,
    number: "10K+",
    description: "Professionals Trained",
  },
  {
    icon: <FaTools className="text-4xl" />,
    number: "17+",
    description: "Modules",
  },
  {
    icon: <FaUsers className="text-4xl" />,
    number: "2000+",
    description: "Success Stories",
  },
];
const faqs = [
  {
    question: "Who can join this training?",
    answer: "Anyone with Basic or Advanced Knowledge Can Join our training.",
  },
  {
    question: "What is the Classes Schedule of Training?",
    answer: "There are 2 Classes Every Week, Saturday & Sunday",
  },
  {
    question: "Is it a Physical Training?",
    answer: "No, Its an Online Training via Zoom Meetings.",
  },
  {
    question: "Do you update content of training?",
    answer:
      "Yes, absolutely. We consistently update and adjust our content and strategies to align with the latest changes and advancements in the industry.",
  },
  {
    question: "What Digital Marketing Skills I am Going to Learn?",
    answer:
      "Check our detailed Content Outline Here, It will Give you a More Clear Idea about All the Skills we are going to cover.",
  },
  {
    question: "Is it Live Training?",
    answer:
      "Yes, Its a Live Training & Classes held on Every Weekend via Zoom.",
  },
  {
    question: "Is There Any Discount Available?",
    answer: "Already Giving 50% off for our new batch in September.",
  },
];

const page = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-100px px-4 bg-white">
        {/* Text Content */}
        <div className="max-w-lg">
          <p className="text-3xl font-bold text-heading-color mb-6 flex items-center justify-start before:content-[''] before:h-4px before:w-10 before:bg-orange-color before:mr-3">
            Why Choose Us ?
          </p>
          <p className="text-text-color mb-6">
            As a leading digital marketing training institute, we are dedicated
            to providing a comprehensive, hands-on learning experience that
            prepares you for the real world. Our courses go beyond theoretical
            concepts, focusing on practical skills that you can immediately
            apply in today’s competitive market. With live, interactive Zoom
            sessions, industry-recognized certifications, and affordable fees,
          </p>
        </div>

        {/* Image Content */}
        <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
          <div className="relative">
            <Image
              src="/chose-us.webp"
              alt="Course Image"
              className="rounded-3xl"
              width={450} // Adjust these values as per your image
              height={450}
            />
          </div>
        </div>
      </section>
      <section className="bg-orange-color text-white py-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="bg-white text-orange-color w-full p-6 rounded-lg flex flex-col items-center border-2 border-dashed"
              >
                <div className="flex items-center justify-center mb-4 text-white bg-orange-color rounded-full p-3 w-80px h-80px">
                  {card.icon}
                </div>
                <h3 className="text-xl text-black font-bold mb-2">
                  {card.number}
                </h3>
                <p className="text-md font-medium text-orange-color">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TrainingProcess trainingSteps={trainingSteps} />

      {/* Why we Differnt */}

      <section className=" bg-orange-color">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-60px px-4">
          {/* Text Content */}

          <div className="max-w-lg">
            <div className=" text-white">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center justify-start before:content-[''] before:h-4px before:w-10 before:bg-white before:mr-3">
                Why We’re Different?
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="h-10">
                    <IoArrowForwardCircleOutline size={25} />
                  </div>
                  <div>
                    <strong>Hands-On Learning:</strong>
                    We prioritize practical training, ensuring you gain
                    real-world experience with tools and strategies used in the
                    industry.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-10">
                    <IoArrowForwardCircleOutline size={25} />
                  </div>
                  <div>
                    <strong>Interactive Live Sessions:</strong> Our live Zoom
                    classes offer real-time engagement with instructors, making
                    your learning experience dynamic and personalized.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-10">
                    <IoArrowForwardCircleOutline size={25} />
                  </div>
                  <div>
                    <strong>Industry-Recognized:</strong> Earn certifications
                    that showcase your expertise and give you a competitive edge
                    in the job market.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-10">
                    <IoArrowForwardCircleOutline size={25} />
                  </div>
                  <div>
                    <strong>Affordable Fees:</strong> We provide top-tier
                    digital marketing education at lower fees, making it
                    accessible without compromising on quality.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-10">
                    <IoArrowForwardCircleOutline size={25} />
                  </div>
                  <div>
                    <strong>Job-Ready Skills:</strong> Our focus is on equipping
                    you with the knowledge and skills that prepare you to excel
                    in today’s competitive digital marketing industry.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Image Content */}
          <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
            <div className="relative">
              <Image
                src="/why-diffrent.webp"
                alt="Course Image"
                className="rounded-3xl"
                width={450} // Adjust these values as per your image
                height={450}
              />
            </div>
          </div>
        </div>
      </section>

      <FAQ faqArray={faqs} />

      {/*Paralex-bg*/}
      <section className="relative h-55vh ">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed bg-[url('/paralex-bg.webp')]"></div>

        {/* Overlay */}
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white bg-black/50">
          <h1 className="text-4xl font-bold mb-4 max-w-4xl">
            Learn More About Our Digital Marketing Certification Course
          </h1>
          <br />
          <h2 className="text-3xl font-bold max-w-4xl">
            For Professionals, Entrepreneurs & Job-Seekers (Become a Google &
            Facebook Certified Professional)
          </h2>
          <br />
          <CheckoutButton
            price="3500"
            details="Full Stack Digital Marketing"
            className="bg-orange-color hover:text-orange-color text-white text-lg font-semibold px-6 py-2 border border-orange-color hover:bg-white transition-colors"
            btnText="Enroll now"
          />
        </div>
      </section>
    </>
  );
};

export default page;
