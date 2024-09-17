import {
  FaChalkboardTeacher,
  FaTools,
  FaUserShield,
  FaCogs,
  FaCheckCircle,
  FaCertificate,
} from "react-icons/fa"; // Import icons from React Icons
import { FiTrendingUp, FiLayers, FiTarget, FiFileMinus } from "react-icons/fi";
import CountdownTimer from "@/app/countdowntimer/page";
import Certification from "@/app/certification/page";
import FAQ from "@/app/faq-component/page";
import Whyewsection from "@/app/whywe/page";
import LevelUpSection from "@/app/levelup/page";
import Modules from "@/app/modules/page";
import DynamicDate from "@/app/dynamicDate/page";
import TrainingProcess from "@/app/training-process/page";
import CourseEnroll from "@/app/course-enroll/page";
import PricingSchedule from "@/app/pricing-schedule/page";
import ParallaxBackground from "@/app/parallax-background/page";
import CourseDetails from "@/app/course-details/page";

const modules = [
  {
    id: 1,
    title: "Module 1:",
    description: "Email Marketing",
    link: "/",
    details: [
      "Building and managing email lists.",
      "Crafting effective email campaigns.",
      "Email automation and drip campaigns.",
      "Analyzing email performance (open rates, clickthrough rates).",
    ],

    imageSrc: "/Email-marketing-2.png",
    borderColor: "border-orange-500",
  },
];
const mName = "Ouer Modules";
const mDescription =
  "Here’s a comprehensive list of Mastering in Email Marketing modules.";

// components/TrainingProcess.js

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
{
  /* LevelUpSection */
}
const levels = [
  "Elevate Your Career: Gain a certification that showcases your expertise in email marketing.",
  "Actionable Skills: Master the art of crafting compelling emails that convert.",
  "Expert Guidance: Learn from industry-leading email marketers and strategists.",
  "Flexible Learning Options: Study at your own pace with courses designed for your busy lifestyle.",
  "Network & Collaborate: Connect with a community of email marketing professionals and peers.",
  "Access Premium Tools: Use advanced tools, templates, and resources to enhance your email marketing strategy.",
];
{
  /*Weyewsection*/
}
const contentData = [
  {
    title: "Learn from Industry Experts in Real Time",
    description:
      "Our live online Email Marketing certification is designed and delivered by top professionals who have mastered the art of crafting effective email campaigns. Engage directly with these experts in interactive sessions where you can ask questions.",
    image: "/media-1.jpg",
  },
  {
    title: "Cutting-Edge Curriculum Tailored to Modern Marketers",
    description:
      "Stay ahead in the fast-evolving world of email marketing with our comprehensive and up-to-date curriculum. From building engaging email lists and designing impactful newsletters to mastering automation and analytics, our course covers every aspect of modern email marketing.",
    image: "/media-2.jpg",
  },
  {
    title: "Flexible Learning, Real-World Results",
    description:
      "Our program is designed for busy professionals who need flexibility without compromising on quality. Attend live sessions from anywhere in the world, with the freedom to balance your learning with other commitments.",
    image: "/media-3.jpg",
  },
];

{
  /*faqs*/
}
const faqs = [
  {
    question: "What is the Certification in Email Marketing?",
    answer:
      "The Certification in Email Marketing is a comprehensive course designed to equip you with the skills and knowledge needed to create effective email marketing campaigns. You’ll learn about best practices, tools, and strategies to engage your audience and drive conversions through email marketing.",
  },
  {
    question:
      "Do I need any prior experience in email marketing to take this course?",
    answer:
      "No prior experience is required. The course covers both basic and advanced concepts, making it suitable for beginners as well as those with some marketing experience.",
  },
  {
    question: "What will I learn in this course?",
    answer: `In this course, you will learn:
    The fundamentals of email marketing.
    How to design and implement successful email campaigns.
    Segmentation and personalization techniques.
    How to analyze email campaign performance.
    Best practices for avoiding spam filters and maximizing deliverability.`,
  },
  {
    question: "Is the certification recognized?",
    answer:
      "Yes, the certification is recognized, making it a valuable addition to your professional credentials.",
  },
  {
    question:
      "Will I have access to course materials after completing the course?",
    answer:
      "Yes, you will have lifetime access to all course materials, including any updates to the content, even after you complete the course.",
  },
  {
    question: "Are there any additional resources or tools provided?",
    answer:
      "Yes, you will receive access to a range of resources, including templates, case studies, and software tools to help you implement what you learn.",
  },
  {
    question: "Is this certification recognized internationally?",
    answer:
      "Yes, the certification is recognized both in the UAE and internationally, making it valuable for career growth globally.",
  },
  {
    question: "Will I receive hands-on training in creating email campaigns?",
    answer:
      "Yes, the course includes practical assignments and projects to provide hands-on experience in designing and executing email marketing campaigns.",
  },
  {
    question: "How is the course assessed?",
    answer:
      "The course is assessed through quizzes, practical tasks, and a final project where you will create and analyze a complete email marketing campaign.",
  },
  {
    question: "How do I enroll in the Email Marketing Certification course?",
    answer:
      "Enrollment is straightforward and can be done online through our website by selecting your preferred course schedule and completing the registration form.",
  },
];

const page = () => {
  return (
    <>
      {/* Course Enroll section*/}
      <CourseEnroll
        title="The Only Training You'll Ever Need"
        heading="Mastering in Email Marketing in UAE"
        description="The “Certification in Email Marketing” in the UAE is a targeted program that helps you master the art of creating impactful email campaigns that engage audiences and drive conversions."
        img="/Email-marketing-1.png"
        btnAction={false}
        btnText="RESERVE YOUR SEAT"
        details="Mastering in Email Marketing in UAE"
        price={800}
      />

      {/*Pricing Schedule section*/}
      <PricingSchedule
        duration="3 Weeks"
        realFee="4000 "
        details="Mastering in Email Marketing in UAE"
        descountFee="800"
        Schedule="Every Saturday (09:00 AM GMT+4)"
      />

      {/*View full details*/}
      <CourseDetails
        heading="Become Certified in Email Marketing "
        content1=" Email Marketing"
        content2="Full Stack Digital Marketing Course"
      />
      {/*Modules section*/}
      <Modules
        moduleName={mName}
        moduleDescription={mDescription}
        moduleObj={modules}
        visableButton={false}
      />
      {/* Parallax Background */}
      <ParallaxBackground
        title=""
        heading="Every email you craft has the power to build relationships—certification ensures those emails truly resonate."
        bgImg="/website-001.jpg"
      />

      {/*TrainingProcess */}
      <TrainingProcess trainingSteps={trainingSteps} />

      {/* NextCourse */}
      <section className="bg-light-gray">
        <div className="max-w-6xl mx-auto px-4 py-10">
          {/* Title Section */}
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-green-color text-md tracking-wide font-extrabold flex items-center justify-center before:content-[''] before:h-3px before:w-10 before:bg-green-color before:mr-2 after:content-[''] after:h-3px after:w-10 after:bg-green-color after:ml-2">
              UAE Leading Mastering in Email Marketing
            </h3>
            <DynamicDate heading="Next Mastering in Email Marketing Batch is Starting From" />
          </div>
          {/* Countdown Timer */}
          <CountdownTimer />
        </div>
      </section>

      {/* LevelUpSection */}
      <LevelUpSection
        price={800}
        details="Mastering in Email Marketing in UAE"
        levels={levels}
        heading="Transform Your Outreach with a Mastering in Email Marketing"
      />

      {/*Whyewsection*/}
      <Whyewsection
        contentData={contentData}
        heading="Why we are Dubai’s Best Live Online Mastering in Email Marketing Program Provider."
      />

      {/*certification*/}
      <Certification CertificateImage="/Email-marketing-3.png" />

      {/*faq-component*/}
      <FAQ faqArray={faqs} />
    </>
  );
};

export default page;
