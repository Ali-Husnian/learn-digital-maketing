import Image from "next/image";
import { FaPercent } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { MdDescription, MdDone } from "react-icons/md";
import { FaRegClock, FaMoneyBillWave, FaCalendarAlt } from "react-icons/fa";
import Modules from "@/app/modules/page";
import DinamicDate from "@/app/dynamicDate/page";

const modules = [
  {
    id: 1,
    title: "Module 1:",
    description: "Introduction to Digital Marketing (3 hours)",
    link: "/",
    details: [
      "Overview of digital marketing and its importance.",
      "Key concepts and terminology.",
      "Comparison with traditional marketing.",
    ],
    imageSrc: "/module-1.png",
    borderColor: "border-orange-500",
  },
  {
    id: 2,
    title: "Module 2:",
    description: "Social Media Marketing (9 hours)",
    link: "/",
    details: [
      "Overview of major platforms: Facebook, Instagram, Twitter, LinkedIn, TikTok.",
      "Social media strategy and content planning.",
      "Paid social media advertising (Facebook Ads, Instagram Ads).",
      "Social media analytics and tools (Hootsuite, Buffer).",
    ],
    imageSrc: "/module-2.png",
    borderColor: "border-green-500",
  },
  {
    id: 3,
    title: "Module 3:",
    description: " Search Engine Marketing (SEM) Google (6 hours)",
    link: "/",
    details: [
      "Introduction to PPC and search engine marketing.",
      "Google Ads: campaign setup, keyword research, ad creation.",
      "Display advertising and remarketing.",
      "Mobile applications and videos Ads that run on YouTube and mobile apps developed for Android.",
      "PPC analytics and optimization.",
    ],
    imageSrc: "/module-3.png",
    borderColor: "border-purple-500",
  },
  {
    id: 4,
    title: "Module 4:",
    description: "Engine Optimization (6 hours)",
    link: "/",
    details: [
      "On-page SEO: keywords, meta tags, content optimization.",
      "Off-page SEO: backlinks, domain authority.",
      "Technical SEO: site speed, mobile-friendliness, crawlability.",
      "SEO tools and analytics (Google Search Console, SEMrush).",
    ],
    imageSrc: "/module-4.png",
    borderColor: "border-yellow-500",
  },
  {
    id: 5,
    title: "Module 5:",
    description: "Web Development using WordPress (9 hours)",
    link: "/",
    details: [
      "Website design and development basics.",
      "Importance of UX and UI.",
      "Mobile responsiveness.",
      "Domain and Website Hosting",
    ],
    imageSrc: "/module-5.png",
    borderColor: "border-blue-500",
  },
  {
    id: 6,
    title: "Module 6:",
    description: "Email Marketing (6 hours)",
    link: "/",
    details: [
      "Introduction to Email Marketing",
      "Building and Managing Email Lists",
      "Crafting Effective Emails",
      "Email Marketing Platforms and Tools",
    ],
    imageSrc: "/module-6.png",
    borderColor: "border-red-500",
  },
  {
    id: 7,
    title: "Module 7:",
    description: "Affiliate & Ecommerce (9 hours)",
    link: "/",
    details: [
      "Affiliate Marketing Training",
      "Dropshipping Training",
      "Ecommerce Marketing Training",
    ],
    imageSrc: "/module-2.png",
    borderColor: "border-black-500",
  },
  {
    id: 8,
    title: "Module 8:",
    description: "Affiliate & Ecommerce (9 hours)",
    link: "/",
    details: [
      "Affiliate Marketing Training",
      "Dropshipping Training",
      "Ecommerce Marketing Training",
    ],
    imageSrc: "/module-2.png",
    borderColor: "border-black-500",
  },
  {
    id: 9,
    title: "Module 9:",
    description: "Affiliate & Ecommerce (9 hours)",
    link: "/",
    details: [
      "Affiliate Marketing Training",
      "Dropshipping Training",
      "Ecommerce Marketing Training",
    ],
    imageSrc: "/module-2.png",
    borderColor: "border-black-500",
  },
  {
    id: 10,
    title: "Module 10:",
    description: "Affiliate & Ecommerce (9 hours)",
    link: "/",
    details: [
      "Affiliate Marketing Training",
      "Dropshipping Training",
      "Ecommerce Marketing Training",
    ],
    imageSrc: "/module-2.png",
    borderColor: "border-black-500",
  },
  {
    id: 11,
    title: "Module 11:",
    description: "Affiliate & Ecommerce (9 hours)",
    link: "/",
    details: [
      "Affiliate Marketing Training",
      "Dropshipping Training",
      "Ecommerce Marketing Training",
    ],
    imageSrc: "/module-2.png",
    borderColor: "border-black-500",
  },
  {
    id: 12,
    title: "Module 12:",
    description: "Affiliate & Ecommerce (9 hours)",
    link: "/",
    details: [
      "Affiliate Marketing Training",
      "Dropshipping Training",
      "Ecommerce Marketing Training",
    ],
    imageSrc: "/module-2.png",
    borderColor: "border-black-500",
  },
  {
    id: 13,
    title: "Module 13:",
    description: "Introduction to Digital Marketing (3 hours)",
    link: "/",
    details: [
      "Overview of digital marketing and its importance.",
      "Key concepts and terminology.",
      "Comparison with traditional marketing.",
    ],
    imageSrc: "/module-1.png",
    borderColor: "border-orange-500",
  },
  {
    id: 14,
    title: "Module 14:",
    description: "Social Media Marketing (9 hours)",
    link: "/",
    details: [
      "Overview of major platforms: Facebook, Instagram, Twitter, LinkedIn, TikTok.",
      "Social media strategy and content planning.",
      "Paid social media advertising (Facebook Ads, Instagram Ads).",
      "Social media analytics and tools (Hootsuite, Buffer).",
    ],
    imageSrc: "/module-2.png",
    borderColor: "border-green-500",
  },
  {
    id: 15,
    title: "Module 15:",
    description: " Search Engine Marketing (SEM) Google (6 hours)",
    link: "/",
    details: [
      "Introduction to PPC and search engine marketing.",
      "Google Ads: campaign setup, keyword research, ad creation.",
      "Display advertising and remarketing.",
      "Mobile applications and videos Ads that run on YouTube and mobile apps developed for Android.",
      "PPC analytics and optimization.",
    ],
    imageSrc: "/module-3.png",
    borderColor: "border-purple-500",
  },
  {
    id: 16,
    title: "Module 16:",
    description: "Engine Optimization (6 hours)",
    link: "/",
    details: [
      "On-page SEO: keywords, meta tags, content optimization.",
      "Off-page SEO: backlinks, domain authority.",
      "Technical SEO: site speed, mobile-friendliness, crawlability.",
      "SEO tools and analytics (Google Search Console, SEMrush).",
    ],
    imageSrc: "/module-4.png",
    borderColor: "border-yellow-500",
  },
  {
    id: 17,
    title: "Module 17:",
    description: "Web Development using WordPress (9 hours)",
    link: "/",
    details: [
      "Website design and development basics.",
      "Importance of UX and UI.",
      "Mobile responsiveness.",
      "Domain and Website Hosting",
    ],
    imageSrc: "/module-5.png",
    borderColor: "border-blue-500",
  },
  {
    id: 18,
    title: "Module 18:",
    description: "Email Marketing (6 hours)",
    link: "/",
    details: [
      "Introduction to Email Marketing",
      "Building and Managing Email Lists",
      "Crafting Effective Emails",
      "Email Marketing Platforms and Tools",
    ],
    imageSrc: "/module-6.png",
    borderColor: "border-red-500",
  },
  {
    id: 19,
    title: "Module 19:",
    description: "Affiliate & Ecommerce (9 hours)",
    link: "/",
    details: [
      "Affiliate Marketing Training",
      "Dropshipping Training",
      "Ecommerce Marketing Training",
    ],
    imageSrc: "/module-2.png",
    borderColor: "border-black-500",
  },
  {
    id: 20,
    title: "Module 20:",
    description: "Affiliate & Ecommerce (9 hours)",
    link: "/",
    details: [
      "Affiliate Marketing Training",
      "Dropshipping Training",
      "Ecommerce Marketing Training",
    ],
    imageSrc: "/module-2.png",
    borderColor: "border-black-500",
  },
];
const mName = "Ouer new Modules";
const mDescription =
  "Here’s a comprehensive list of Full Stack Digital Marketing modules that form a robust training curriculum";

// components/TrainingProcess.js
import {
  FaChalkboardTeacher,
  FaTools,
  FaUserShield,
  FaCogs,
  FaCheckCircle,
} from "react-icons/fa"; // Import icons from React Icons
import { FiTrendingUp, FiLayers, FiTarget } from "react-icons/fi";
import CountdownTimer from "@/app/countdowntimer/page";
import Certification from "@/app/certification/page";
import FAQ from "@/app/faq-component/page";

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
    icon: FaCheckCircle,
    title: "#LDM Certifications",
    subtitle: "Become Certified",
  },
  {
    icon: FiTarget,
    title: "Actionable and Practical",
    subtitle: "Leaning Combination",
  },
];
{
  /* LevelUpSection */
}
const items = [
  "Are you a student who wants to learn powerful skills for the future?",
  "Are you a job holder who wants to be his own boss with financial freedom?",
  "Are you a female who wants to pursue a career in digital marketing?",
  "Are you a housewife seeking a steady income stream while working from home?",
  "Are you a beginner in the online field and want to learn things professionally?",
  "Are you someone who has had a bad experience with online trainings?",
];
{
  /*Weyewsection*/
}
const contentData = [
  {
    title: "Work On Live Industry Projects",
    description:
      "We ensure you are industry-ready through exposure to live projects. Apply your learning to hands-on practical projects, assignments, and tests that bring out your skill and excite growth. Join our Online Live Digital Marketing Training for real-time learning and practical skills.",
    image: "/digital-3.webp",
  },
  {
    title: "Learn From Industry Experts",
    description:
      "Get guidance from top professionals in the field who bring their real-world experience to the classroom. Their insights and feedback will help you understand complex concepts and apply them effectively.",
    image: "/digital-1.jpg",
  },
  {
    title: "Flexible Learning Schedules",
    description:
      "With our online platform, you can learn at your own pace. Whether you're a full-time professional or a student, our flexible schedules allow you to balance your studies with other commitments.",
    image: "/digital-2.jpg",
  },
];

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

      <section className="bg-orange-color text-white py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 tracking-wider">
            Pricing & Schedule
          </h2>
          <p className="text-4xl font-bold mb-8 tracking-wider">
            <span role="img" aria-label="thumbs-up">
              👍
            </span>{" "}
            50% Discount on upcoming Batch.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
            {/* Duration Card */}
            <div className="bg-white text-orange-color w-full p-6 rounded-lg flex flex-col items-center border-2 border-dashed">
              <div className="flex items-center justify-center mb-4 text-white bg-orange-color rounded-full p-3 w-80px h-80px">
                <FaRegClock className="text-4xl" />
              </div>
              <h3 className="text-xl text-black font-bold mb-2">DURATION</h3>
              <p className="text-md font-medium">Almost 6 Months</p>
            </div>

            {/* Course Fee Card */}
            <div className="bg-white text-orange-color w-full p-6 rounded-lg flex flex-col items-center border-2 border-dashed">
              <div className="flex items-center justify-center mb-4 text-white bg-orange-color rounded-full p-3 w-80px h-80px">
                <FaMoneyBillWave className="text-4xl" />
              </div>
              <h3 className="text-xl text-black font-bold mb-2">Course Fee</h3>
              <p className="text-md font-medium">3000 AED</p>
            </div>

            {/* Classes Schedule Card */}
            <div className="bg-white text-orange-color w-full p-6 rounded-lg shadow-lg flex flex-col items-center border-2 border-dashed">
              <div className="flex items-center justify-center mb-4 text-white bg-orange-color rounded-full p-3 w-80px h-80px">
                <FaCalendarAlt className="text-4xl" />
              </div>
              <h3 className="text-xl text-black font-bold mb-2">
                Classes Schedule
              </h3>
              <p className="text-md font-medium">Once a Week Every Thursday</p>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center">
            <button className="border-2 border-orange-500 text-2xl tracking-wider bg-black text-white font-bold text-center text-17px flex items-center gap-2 justify-center px-5 py-2  hover:bg-white hover:text-orange-color transition-all cursor-pointer">
              <MdDone className="hover:bg-[#1D1B4C]" />
              Register your Seat Today
            </button>
          </div>
        </div>
      </section>

      <Modules
        moduleName={mName}
        moduleDescription={mDescription}
        moduleObj={modules}
      />
      <section className="relative h-55vh ">
        {/* Parallax Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/Home.png')",
          }}
        ></div>

        {/* Overlay */}
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white bg-black/50">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-orange-color line-through">
              It’s Time To Think
            </span>
          </h1>
          <h2 className="text-4xl font-bold max-w-3xl">
            It’s Time To Take Action & Build Your Skills For a Better Future
          </h2>
        </div>
      </section>
      {/*components/TrainingProcess.js */}
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

      {/* NextCourse */}
      <section className="bg-light-gray">
        <div className="max-w-6xl mx-auto px-4 py-10">
          {/* Title Section */}
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-green-color text-md tracking-wide font-extrabold flex items-center justify-center before:content-[''] before:h-3px before:w-10 before:bg-green-color before:mr-2 after:content-[''] after:h-3px after:w-10 after:bg-green-color after:ml-2">
              UAE Leading Full Stack Digital Marketing Course
            </h3>
            <DinamicDate />
          </div>
          {/* Countdown Timer */}
          <CountdownTimer />
        </div>
      </section>

      {/* LevelUpSection */}
      <section className="bg-orange-color py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          {/* Left Column */}
          <div className="md:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Level Up Your Game?
            </h2>
            <ul className="space-y-4 text-white text-lg">
              {items.map((item, index) => (
                <li key={index} className="flex items-center">
                  <FaCheckCircle className="text-white mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="mt-8 md:mt-0 md:w-2/5 text-center md:text-right">
            <p className="text-white text-lg font-semibold mb-4">
              Have Any Questions?
            </p>
            <p className="text-white text-lg font-semibold mb-4">
              WhatsApp: +971-222-222-1111
            </p>
            <div className="space-y-6">
              <button className="bg-blue-hover-color text-white font-bold py-2 px-6 rounded-md shadow-lg hover:bg-white hover:text-orange-color transition duration-300">
                🏆 Success Stories
              </button>
              <br />
              <button className="bg-blue-hover-color text-white font-bold py-2 px-6 rounded-md shadow-lg hover:bg-white hover:text-orange-color transition duration-300">
                📚 Register Your Seat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/*Whyewsection*/}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-green-color text-md tracking-wide font-extrabold flex items-center justify-center before:content-[''] before:h-3px before:w-10 before:bg-green-color before:mr-2 after:content-[''] after:h-3px after:w-10 after:bg-green-color after:ml-2">
              Why we
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why we are Dubai’s Best Live Online Full Stack Digital Marketing
              Program Provider
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {contentData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center"
              >
                <div className="md:w-1/2">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="rounded-xl"
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
      {/*certification*/}

      <Certification />
      {/*faq-component*/}

      <FAQ />
    </>
  );
};

export default page;
