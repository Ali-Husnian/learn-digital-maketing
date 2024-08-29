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
    description: "Youtube Marketing (3 hours)",
    link: "/",
    details: [
      "Video ads creation and strategies.",
      "Video ads vs Image ads.",
      "Video Formats and Size.",
    ],
    imageSrc: "/module-7.png",
    borderColor: "border-blue-500",
  },
  {
    id: 8,
    title: "Module 8:",
    description: "Display Ads Marketing (3 hours)",
    link: "/",
    details: [
      "Identifying and partnering with influencers.",
      "Creating influencer marketing campaigns.",
      "Measuring the success of influencer collaborations.",
    ],
    imageSrc: "/module-13.webp",
    borderColor: "border-orange-500",
  },
  {
    id: 9,
    title: "Module 9:",
    description: "Register your Business on Google (3 hours)",
    link: "/",
    details: [
      "Create a Google Business Profile.",

      "Enter business details accurately.",

      "Verify your business location.",
    ],
    imageSrc: "/module-9.webp",
    borderColor: "border-yellow-500",
  },
  {
    id: 10,
    title: "Module 10:",
    description: "Email Marketing (6 hours)",
    link: "/",
    details: [
      "Introduction to Email Marketing",
      "Building and Managing Email Lists",
      "Crafting Effective Emails",
      "Email Marketing Platforms and Tools",
    ],
    imageSrc: "/module-10.webp",
    borderColor: "border-red-500",
  },
  {
    id: 11,
    title: "Module 11:",
    description: "Content Marketing (3 hours)",
    link: "/",
    details: [
      "Content strategy and planning.",
      "Types of content: blog posts, videos, infographics, eBooks.",
      "Content story.",
      "Content distribution and promotion.",
    ],
    imageSrc: "/module-2.png",
    borderColor: "border-pink-500",
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
    imageSrc: "/module-12.webp",
    borderColor: "border-green-500",
  },
  {
    id: 13,
    title: "Module 13:",
    description: "Dropshipping  Marketing (6 hours)",
    link: "/",
    details: [
      "Understanding Dropshipping marketing and its benefits.",
      "Setting up a Dropshipping Store using Shopify.",
      "Choosing a Niche.",
      "Tracking and optimizing Dropshipping website performance.",
      "Product listings, pricing, and promotions.",
      "Customer journey mapping and personalization.",
    ],
    imageSrc: "/module-13.webp",
    borderColor: "border-orange-500",
  },
  {
    id: 14,
    title: "Module 14:",
    description: "E-commerce Marketing (3 hours)",
    link: "/",
    details: [
      "Strategies for online retail success.",
      "Product listings, pricing, and promotions.",
      "Customer journey mapping and personalization.",
    ],
    imageSrc: "/module-14.webp",
    borderColor: "border-green-500",
  },
  {
    id: 15,
    title: "Module 15:",
    description: "Analytics and Data Interpretation (6 hours)",
    link: "/",
    details: [
      "Importance of data in digital marketing.",
      "Google Analytics: setup, key metrics, reporting.",
      "Data-driven decision making and KPI tracking.",
    ],
    imageSrc: "/module-10.webp",
    borderColor: "border-purple-500",
  },
  {
    id: 16,
    title: "Module 16:",
    description: "Conversion Rate Optimization (CRO) (3 hours)",
    link: "/",
    details: [
      "Techniques for improving website conversions.",
      "A/B testing and multivariate testing.",
      "Analyzing and interpreting test results.",
    ],
    imageSrc: "/module-4.png",
    borderColor: "border-yellow-500",
  },
  {
    id: 17,
    title: "Module 17:",
    description: "Influencer Marketing (3 hours)",
    link: "/",
    details: [
      "Identifying and partnering with influencers.",
      "Creating influencer marketing campaigns.",
      "Measuring the success of influencer collaborations.",
    ],
    imageSrc: "/module-7.png",
    borderColor: "border-blue-500",
  },
  {
    id: 18,
    title: "Module 18:",
    description: "Online Reputation Management (3 hours)",
    link: "/",
    details: [
      "Monitoring and managing online reviews and feedback.",
      "Crisis management and response strategies.",
    ],
    imageSrc: "/module-10.webp",
    borderColor: "border-red-500",
  },
  {
    id: 19,
    title: "Module 19:",
    description: "Legal and Ethical Considerations (3 hours)",
    link: "/",
    details: [
      "Data privacy regulations (GDPR, CCPA).",
      "Ethical marketing practices.",
      "Compliance and best practices.",
    ],
    imageSrc: "/module-2.png",
    borderColor: "border-red-500",
  },
  {
    id: 20,
    title: "Module 20:",
    description: "Emerging Trends and Technologies",
    link: "/",
    details: [
      "AI and machine learning in marketing.",
      "Voice search optimization.",
      "Virtual and augmented reality marketing.",
    ],
    imageSrc: "/module-14.webp",
    borderColor: "border-black-500",
  },
  {
    id: 21,
    title: "Module 21:",
    description: " Mobile app marketing (3 hours)",
    link: "/",
    details: [
      "Mobile app marketing and optimization.",
      "SMS and push notifications.",
      "Mobile ad formats and strategies",
    ],
    imageSrc: "/module-12.webp",
    borderColor: "border-purple-500",
  },
];
const mName = "Ouer new Modules";
const mDescription =
  "Here’s a comprehensive list of Full Stack Digital Marketing modules that form a robust training curriculum";

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

{
  /*faqs*/
}
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
      "Check our detailed Content Outline Here, It will Give you a More Clear Idea about All the Skills we are going to cover",
  },
  {
    question: "Is it Live Training?",
    answer:
      "Yes, Its a Live Training & Classes held on Every Weekend via Zoom.",
  },
  {
    question: "Is There Any Discount Available?",
    answer: "Already Giving 50% off for our new batch in September",
  },
];

const page = () => {
  return (
    <>
      {/* Course Enroll section*/}
      <CourseEnroll
        title="The Only Training You'll Ever Need"
        heading="Affordable Full Stack Digital Marketing Course in UAE"
        description=" Discover top-tier Full Stack Digital Marketing courses in the UAE at
          prices that won’t break the bank. Gain the skills you need to excel in
          the digital world, all while staying within your budget. Unlock your
          potential today!"
        img="/digital-01.png"
        btnAction={true}
      />

      {/*Pricing Schedule section*/}
      <PricingSchedule
        duration="Almost 6 Months"
        price="3000 AED"
        Schedule="Once a Week Every Thursday"
      />

      {/*Modules section*/}
      <Modules
        moduleName={mName}
        moduleDescription={mDescription}
        moduleObj={modules}
      />
      {/* Parallax Background */}
      <ParallaxBackground
        title="It’s Time To Think"
        heading="It’s Time To Take Action & Build Your Skills For a Better Future"
        bgImg="/bgParallax-1.jpg"
      />

      {/*TrainingProcess */}
      <TrainingProcess trainingSteps={trainingSteps} />

      {/* NextCourse */}
      <section className="bg-light-gray">
        <div className="max-w-6xl mx-auto px-4 py-10">
          {/* Title Section */}
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-green-color text-md tracking-wide font-extrabold flex items-center justify-center before:content-[''] before:h-3px before:w-10 before:bg-green-color before:mr-2 after:content-[''] after:h-3px after:w-10 after:bg-green-color after:ml-2">
              UAE Leading Full Stack Digital Marketing Course
            </h3>
            <DynamicDate />
          </div>
          {/* Countdown Timer */}
          <CountdownTimer />
        </div>
      </section>

      {/* LevelUpSection */}
      <LevelUpSection levels={levels} heading="Ready to Level Up Your Game?" />

      {/*Whyewsection*/}
      <Whyewsection
        contentData={contentData}
        heading="Why we are Dubai’s Best Live Online Full Stack Digital Marketing Program Provider?"
      />

      {/*certification*/}
      <Certification />

      {/*faq-component*/}
      <FAQ faqArray={faqs} />
    </>
  );
};

export default page;
