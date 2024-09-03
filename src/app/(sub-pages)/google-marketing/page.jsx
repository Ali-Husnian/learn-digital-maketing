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
    description: "Introduction to PPC and search engine marketing.",
    link: "/",
    details: [
      "Google Ads: campaign setup, keyword research, ad creation.",
      "Display advertising and remarketing.",
      " Mobile applications and videos Ads that run on YouTube and mobile apps developed for Android.",
      " PPC analytics and optimization.",
    ],

    imageSrc: "/module-1.png",
    borderColor: "border-orange-500",
  },
  {
    id: 2,
    title: "Module 2:",
    description: "Mobile Apps Marketing (3 Hours)",
    link: "/",
    details: [
      "Mobile app marketing and optimization.",
      " SMS and push notifications.",
      "Mobile ad formats and strategies.",
    ],
    imageSrc: "/module-2.png",
    borderColor: "border-green-500",
  },
  {
    id: 3,
    title: "Module 3:",
    description: "YouTube Marketing (3 Hours)",
    link: "/",
    details: [
      "Video ads creation and strategies.",
      "Video Formats and Size.",
      "Video ads vs Image ads.",
    ],
    imageSrc: "/module-3.png",
    borderColor: "border-purple-500",
  },
  {
    id: 4,
    title: "Module 4:",
    description: "Display Ads Marketing (3 Hours)",
    link: "/",
    details: ["Audience targeting", "Creative Design", "Clear Call To Action"],
    imageSrc: "/module-4.png",
    borderColor: "border-yellow-500",
  },
  {
    id: 5,
    title: "Module 5:",
    description: "Register your Business on Google (3 Hours)",
    link: "/",
    details: [
      "Claim. Create a Business Profile, or manage an existing profile on Search and Maps.",
      "Personalize. Add hours, photos, and other details and get discovered by customers near you.",
      "Manage Share updates, respond to reviews, and connect with customers on Google",
    ],
    imageSrc: "/module-5.png",
    borderColor: "border-blue-500",
  },
];
const mName = "Ouer Modules";
const mDescription =
  "Here’s a comprehensive list Mastering in Google Marketing modules.";

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
  "Boost Your Career: Elevate your professional profile with an industry-recognized SEM certification.",
  "Hands-On Training: Gain practical experience with real-world projects and tools.",
  "Learn from Experts: Get insights and strategies from industry leaders in digital marketing.",
  "Flexible Learning: Access self-paced modules tailored to fit your schedule.",
  "Career Support: Receive job placement assistance and resume building tips.",
  "Certified for Success: Obtain a globally recognized certification to enhance your credibility.",
];
{
  /*Weyewsection*/
}
const contentData = [
  {
    title: "Expert-Led, Interactive Learning Experience",
    description:
      "Our Search Engine Marketing (SEM) certification program is crafted and delivered by industry experts with years of hands-on experience. Unlike pre-recorded courses, our live online sessions allow you to interact directly with seasoned professionals.",
    image: "/web-20.jpg",
  },
  {
    title: "Cutting-Edge Curriculum Aligned with Industry Standards",
    description:
      "Stay ahead of the curve with a curriculum that’s constantly updated to reflect the latest trends and best practices in SEM. Our program covers everything from foundational principles to advanced techniques, ensuring you have the comprehensive knowledge needed to succeed.",
    image: "/web-21.jpg",
  },
  {
    title: "Flexible Learning with Real-World Application",
    description:
      "We understand that our students have busy schedules, which is why our program offers flexible learning options without compromising quality. With our live online certification, you can attend classes from anywhere in the world and apply what you learn in real-time to your projects or job.",
    image: "/media-2.jpg",
  },
];

{
  /*faqs*/
}
const faqs = [
  {
    question: "What is the Certification in Mastering in Google Marketing?",
    answer:
      "The Certification in Search Engine Marketing (SEM) is a specialized course designed to teach you the skills needed to effectively promote websites through paid advertising on search engines like Google and Bing.",
  },
  {
    question: "Who should take this certification program?",
    answer:
      "This program is ideal for digital marketers, business owners, marketing professionals, and anyone looking to enhance their knowledge and skills in paid search marketing.",
  },
  {
    question: "Are there any prerequisites for enrolling in this course?",
    answer:
      "No specific prerequisites are required. However, a basic understanding of digital marketing concepts and familiarity with search engines will be beneficial.",
  },
  {
    question: "How is the program delivered?",
    answer:
      "The program is delivered online through a mix of video lectures, live webinars, quizzes, assignments, and hands-on projects. Some programs may also include case studies and group discussions.",
  },
  {
    question: "What kind of support will I receive during the course?",
    answer:
      "You will have access to instructors, course materials, and a community of peers. Some programs also offer dedicated mentoring or office hours for additional support.",
  },
  {
    question: "Will I receive hands-on training in SEM during the course?",
    answer:
      "Yes, the course includes practical assignments and projects that provide hands-on experience in running and optimizing SEM campaigns.",
  },
  {
    question: "Is the SEM Certification recognized globally?",
    answer:
      "Yes, the certification is recognized both in the UAE and internationally, making it valuable for global career opportunities.",
  },
  {
    question: "How is the SEM course structured?",
    answer:
      "The course is divided into modules, each focusing on a different aspect of SEM, with a blend of theoretical knowledge and practical application.",
  },
  {
    question: "What types of SEM projects will I work on during the course?",
    answer:
      "You will work on projects such as setting up and optimizing paid search campaigns, conducting keyword research, and analyzing campaign performance.",
  },
  {
    question: "How do I enroll in the SEM Certification course?",
    answer:
      "Enrollment is easy and can be completed online through our website by selecting your preferred course schedule and filling out the registration form.",
  },
];

const page = () => {
  return (
    <>
      {/* Course Enroll section*/}
      <CourseEnroll
        title="The Only Training You'll Ever Need"
        heading="Mastering in Google Marketing in UAE"
        description="The “Certification in Search Engine Marketing” in the UAE is a specialized course designed to equip you with essential skills in optimizing online visibility and driving targeted traffic through search engines."
        img="/Google-maketing-barner.webp"
        btnAction={false}
        btnText="RESERVE YOUR SEAT"
      />

      {/*Pricing Schedule section*/}
      <PricingSchedule
        duration="6 Weeks"
        price="200 AED"
        Schedule="Every Saturday (09:00 AM GMT+4)"
      />

      {/*View full details*/}
      <CourseDetails
        heading="Become Certified in Search Engine Marketing (SEM)"
        content1="Search Engine Marketing (SEM)"
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
        heading="Every keyword is a step closer to success, keep optimizing, keep growing."
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
              UAE Leading Mastering in Google Marketing
            </h3>
            <DynamicDate heading="Next Mastering in Google Marketing Batch is Starting From" />
          </div>
          {/* Countdown Timer */}
          <CountdownTimer />
        </div>
      </section>

      {/* LevelUpSection */}
      <LevelUpSection
        levels={levels}
        heading="Unlock Your Future with a Mastering in Google Marketing"
      />

      {/*Whyewsection*/}
      <Whyewsection
        contentData={contentData}
        heading="Why we are Dubai’s Best Live Online Mastering in Google Marketing Program Provider."
      />

      {/*certification*/}
      <Certification CertificateImage="/Google-Marketing-Certificate-3.png" />

      {/*faq-component*/}
      <FAQ faqArray={faqs} />
    </>
  );
};

export default page;
