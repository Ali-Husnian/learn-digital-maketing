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
    description: "Introduction to Google Analytics",
    link: "/",
    details: [
      "Overview of Digital Analytics",
      "What is Google Analytics?",
      "How Google Analytics Works",
      "Setting Up Google Analytics Account",
      "Understanding Google Analytics Dashboard",
    ],
    imageSrc: "/module-1.png",
    borderColor: "border-purple-500",
  },
  {
    id: 2,
    title: "Module 2:",
    description: "Analytics and Data Interpretation (6 Hours)",
    link: "/",
    details: [
      "Importance of data in digital marketing.",
      "Google Analytics: setup, key metrics, reporting.",
      "Data driven decision making and KPI tracking.",
    ],

    imageSrc: "/modules-15.webp",
    borderColor: "border-orange-500",
  },
  {
    id: 3,
    title: "Module 3:",
    description: "Conversion Rate Optimization (CRO) (3 Hours)",
    link: "/",
    details: [
      "Techniques for improving website conversions.",
      "A/B testing and multivariate testing.",
      "Analyzing and interpreting test results.",
    ],
    imageSrc: "/module-13.webp",
    borderColor: "border-green-500",
  },
];
const mName = "Ouer Modules";
const mDescription =
  "Here’s a comprehensive list of Mastering in Google Analytics .";

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
  "Boost Your Career: Gain a competitive edge with expert knowledge in Google Analytics.",
  "Hands-On Learning: Analyze real-world data and gain practical experience with Google Analytics tools.",
  "Expert Instruction: Learn from industry professionals who are experts in data analytics and digital marketing.",
  "Flexible Study Options: Access the course at your convenience, designed to fit your busy schedule.",
  "Networking Opportunities: Connect with other analytics enthusiasts and professionals.",
  "Career Support: Receive guidance on leveraging your analytics skills for career advancement.",
];
{
  /*Weyewsection*/
}
const contentData = [
  {
    title: "Unlock Data-Driven Decision Making",
    description:
      "Our Mastering Google Analytics program is designed to turn data into actionable insights. Learn how to track, analyze, and interpret data to make informed decisions that drive business growth. From understanding user behavior to optimizing conversion rates.",
    image: "/web-1.jpg",
  },
  {
    title: "Hands-On Learning with Real-World Applications",
    description:
      "We believe the best way to master Google Analytics is by doing. Our program offers a hands-on approach, with live projects and case studies that mirror real-world scenarios. You’ll learn how to set up tracking codes, configure goals, and analyze key metrics",
    image: "/web-2.jpg",
  },
  {
    title: "Expert-Led Training with Industry Insights",
    description:
      "Our program is led by Google Analytics-certified professionals who bring years of industry experience to the table. Benefit from their expertise as they guide you through both basic and advanced analytics techniques.",
    image: "/web-3.jpg",
  },
];

{
  /*faqs*/
}
const faqs = [
  {
    question: "Who is this program designed for?",
    answer:
      "This program is designed for digital marketers, business analysts, website managers, and anyone looking to gain a deeper understanding of Google Analytics. Whether you’re a beginner or have some experience with the platform, our course content is tailored to provide valuable insights and skills at all levels.",
  },
  {
    question: "What will I learn in this program?",
    answer:
      "You will learn how to set up and configure Google Analytics, track key metrics, analyze user behavior, and create custom reports. The program also covers advanced topics like goal tracking, conversion optimization, and integrating Google Analytics with other marketing tools. By the end of the course, you’ll have a comprehensive understanding of how to use Google Analytics to drive data-driven decisions.",
  },
  {
    question: "Is the program suitable for beginners?",
    answer:
      "Yes, our program is suitable for beginners as well as those with some experience in Google Analytics. We start with the basics and gradually move to more advanced topics, ensuring that all participants can follow along and gain valuable insights, regardless of their prior knowledge.",
  },
  {
    question: "What kind of support is available during the course?",
    answer:
      "Throughout the program, you will have access to expert instructors who can answer your questions and provide guidance. We also offer supplementary resources, such as video tutorials, case studies, and discussion forums, to enhance your learning experience.",
  },
  {
    question: "Will I receive a certification upon completion?",
    answer:
      "Yes, upon successfully completing the program, you will receive a certification that recognizes your proficiency in Google Analytics. This certification can be a valuable addition to your resume, helping you to stand out in the job market or advance in your current role.",
  },
  {
    question: "How are the classes conducted?",
    answer:
      "Our classes are conducted online, offering you the flexibility to learn from anywhere. Sessions are live and interactive, allowing you to engage with instructors and fellow participants in real-time. Recorded sessions are also available if you need to review the material at your own pace.",
  },
  {
    question: "What are the prerequisites for enrolling in the program?",
    answer:
      "There are no strict prerequisites for enrolling in the Mastering Google Analytics program. However, having a basic understanding of digital marketing or website management can be beneficial. We also recommend familiarity with Google tools, but it’s not required as the program covers everything you need to know.",
  },
  {
    question: "How is the Google Analytics course structured?",
    answer:
      "The course is divided into modules, each focusing on different aspects of Google Analytics, with a mix of theoretical and practical learning.",
  },
  {
    question: "How is the course assessed?",
    answer:
      "The course is assessed through quizzes, practical tasks, and a final project where you will analyze website data using Google Analytics.",
  },
  {
    question: "Can I use this certification to advance my career?",
    answer:
      "Yes, the certification is recognized by employers and can help you advance in roles related to digital marketing, data analysis, and web management.",
  },
];

const page = () => {
  return (
    <>
      {/* Course Enroll section*/}
      <CourseEnroll
        title="The Only Training You'll Ever Need"
        heading="Mastering in Google Analytics"
        description="Mastering Google Analytics is a comprehensive course designed to equip participants with advanced skills in tracking, analyzing, and optimizing website performance. This course covers in-depth strategies for leveraging Google Analytics to gain actionable insights."
        img="/Google-Analytics-barner.png"
        btnAction={false}
        btnText="RESERVE YOUR SEAT"
      />

      {/*Pricing Schedule section*/}
      <PricingSchedule
        duration="3 Weeks"
        price="2000 AED"
        Schedule="Every Saturday ( 09:00 AM GMT+4)"
      />

      {/*View full details*/}
      <CourseDetails
        heading="Become Certified in Google Analytics Marketing (GAM)"
        content1=" Google Analytics Marketing (GAM) "
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
        heading="Unlock the power of data and transform insights into action. Master Google Analytics, and turn every click into an opportunity for growth."
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
              UAE Leading Mastering in Google Analytics
            </h3>
            <DynamicDate heading="Next Mastering in Google Analytics Batch is Starting" />
          </div>
          {/* Countdown Timer */}
          <CountdownTimer />
        </div>
      </section>

      {/* LevelUpSection */}
      <LevelUpSection
        levels={levels}
        heading="Unlock Data-Driven Success with Mastering Google Analytics"
      />

      {/*Whyewsection*/}
      <Whyewsection
        contentData={contentData}
        heading="Why we are Dubai’s Best Live Online Mastering in Google Analytics Program Provider"
      />

      {/*certification*/}
      <Certification CertificateImage="/Google-Analytics-Certificate-4.png" />

      {/*faq-component*/}
      <FAQ faqArray={faqs} />
    </>
  );
};

export default page;
