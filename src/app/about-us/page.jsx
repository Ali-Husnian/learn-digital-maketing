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
      <div className="relative h-55vh ">
        <div className="absolute inset-0 bg-cover bg-center bg-[url('/About-us1.webp')]"></div>

        {/* Overlay */}
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white bg-black/50">
          <h1 className="text-5xl font-bold mb-4">
            <span>About us</span>
          </h1>
          <h2 className="text-lg tracking-wide flex gap-0">Home - About</h2>
        </div>
      </div>
      <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-100px px-4 bg-white">
        {/* Text Content */}
        <div className="max-w-lg">
          <p className="text-3xl font-bold text-heading-color mb-6 flex items-center justify-start before:content-[''] before:h-4px before:w-10 before:bg-orange-color before:mr-3">
            Welcome to Learn Digital Marketing
          </p>
          <p className="text-text-color mb-6">
            As a leading digital marketing training institute, we are committed
            to delivering comprehensive and cutting-edge education that goes
            beyond theoretical concepts. Our vision is to provide practical
            training, equipping our students with real-world skills and
            expertise that will set them apart in today’s competitive market.
            <br />
            <br />
            Learn Digital Marketing is the official training partner of Google &
            Facebook UAE and has partnerships with Global Social Media giants
            such as LinkedIn, NASSCOM and Vskills.
          </p>
        </div>

        {/* Image Content */}
        <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
          <div className="relative">
            <Image
              src="/about-cart.png"
              alt="Course Image"
              className=""
              width={450} // Adjust these values as per your image
              height={450}
            />
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto flex flex-wrap md:justify-between text-start md:items-center px-4 lg:px-0 bg-orange-color p-6 rounded-lg">
        {/* Left Side Text */}
        <div className="ml-6 flex flex-wrap items-center">
          <h2 className="font-bold text-white text-lg lg:text-xl">
            Want to know more about us?
          </h2>
          <span className="text-slate-200 ml-2">Just download brochure...</span>
        </div>

        {/* Right Side Button */}
        <div className="mr-6 mt-2 md:mt-0">
          <a
            href="/path-to-brochure.pdf"
            download
            className="bg-white text-black shadow-md hover:shadow-lg transition-shadow flex items-center py-3 px-5 rounded-md font-medium"
          >
            <FiDownload className="mr-2 text-xl" /> Download Brochure
          </a>
        </div>
      </div>
      <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-100px px-4 bg-white">
        {/* Text Content */}
        <div className="max-w-lg">
          <p className="text-3xl font-bold text-heading-color mb-6 flex items-center justify-start before:content-[''] before:h-4px before:w-10 before:bg-orange-color before:mr-3">
            Welcome to Learn Digital Marketing
          </p>
        </div>

        {/* Image Content */}
        <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
          <p className="text-text-color mb-6">
            Join our premium mentorship program after course completion to get
            connected with mentors with proven expertise in industries of your
            choice.
          </p>
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

      {/*Paralex-bg*/}

      <section className="relative h-55vh ">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed bg-[url('/paralex-bg.webp')]"></div>

        {/* Overlay */}
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white bg-black/50">
          <h1 className="text-2xl md:text-4xl  font-bold mb-4 max-w-4xl">
            Learn More About Our Digital Marketing Certification Course
          </h1>
          <br />
          <h2 className="text-1xl md:text-3xl font-bold max-w-4xl">
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

      <FAQ faqArray={faqs} />
    </>
  );
};

export default page;
