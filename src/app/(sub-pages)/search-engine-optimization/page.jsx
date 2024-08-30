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
    description: "Introduction to SEO",
    link: "/",
    details: [
      "What is SEO",
      "Definition and importance",
      "How search engines work",
      "SEO Terminology",
      "Key terms and concepts (e.g., SERPs, keywords, backlinks)",
      "Understanding Search Engine Google, Bing, and other search engines",
      "Search engine algorithms and ranking factors",
    ],

    imageSrc: "/module-1.png",
    borderColor: "border-orange-500",
  },
  {
    id: 2,
    title: "Module 2:",
    description: "Keyword Research",
    link: "/",
    details: [
      "Keyword Research Basics",
      "Types of keywords (short-tail, long-tail)",
      "Tools for keyword research (e.g., Google Keyword Planner, SEMrush, Ahrefs)",
      "Finding and Analyzing Keywords",
      "Identifying target keywords",
      "Assessing keyword competition and search volume",
      "Keyword Strategy",
      "Incorporating keywords into content",
      "Avoiding keyword stuffing",
    ],
    imageSrc: "/module-2.png",
    borderColor: "border-green-500",
  },
  {
    id: 3,
    title: "Module 3:",
    description: "On-Page SEO",
    link: "/",
    details: [
      "Title Tags and Meta Descriptions",
      "Crafting effective title tags and meta descriptions",
      "Header Tags and Content Structure",
      "Using H1, H2, H3 tags effectively",
      "Content Optimization",
      "Writing SEO-friendly content",
      "Importance of keyword placement",
      "Image Optimization",
      "Alt text and file names",
      "Image size and loading speed",
    ],
    imageSrc: "/module-3.png",
    borderColor: "border-purple-500",
  },
  {
    id: 4,
    title: "Module 4:",
    description: "Technical SEO",
    link: "/",
    details: [
      "Website Structure and Navigation",
      "Importance of a clean URL structure",
      "Creating a sitemap",
      "Site Speed and Performance",
      "Tools for testing speed (e.g., Google PageSpeed Insights)",
      "Mobile-Friendliness",
      "Responsive design vs. mobile version",
      "Indexing and Crawlability",
      "Using robots.txt and meta tags",
      "Managing crawl errors and redirects",
    ],
    imageSrc: "/module-4.png",
    borderColor: "border-yellow-500",
  },
  {
    id: 5,
    title: "Module 5:",
    description: "Off-Page SEO",
    link: "/",
    details: [
      "Backlink Building",
      "Importance of backlinks",
      "Strategies for acquiring quality backlinks",
      "Link Building Techniques",
      "Guest blogging, outreach, and content marketing",
      "Social Signals and Local SEO",
      "Role of social media in SEO",
      "Optimizing for local search (e.g., Google My Business)",
    ],
    imageSrc: "/module-5.png",
    borderColor: "border-blue-500",
  },
  {
    id: 6,
    title: "Module 6:",
    description: "SEO Analytics and Reporting",
    link: "/",
    details: [
      "Understanding SEO Metrics",
      "Key metrics to track (e.g., organic traffic, bounce rate)",
      "Google Analytics and Search Console",
      "Setting up and using Google Analytics",
      "Utilizing Google Search Console for insights",
      "Creating SEO Reports",
      "Analyzing data and performance",
      "Reporting tools and best practices",
    ],
    imageSrc: "/module-6.png",
    borderColor: "border-red-500",
  },
  {
    id: 7,
    title: "Module 7:",
    description: "SEO Best Practices and Future Trends",
    link: "/",
    details: [
      "SEO Best Practices",
      "Ethical SEO practices and avoiding black-hat techniques",
      "Keeping Up with SEO Trends",
      "Algorithm updates and industry changes",
      "Resources for staying informed (e.g., blogs, forums)",
    ],
    imageSrc: "/module-7.png",
    borderColor: "border-blue-500",
  },
  {
    id: 8,
    title: "Module 8:",
    description: "Practical Application and Case Studies",
    link: "/",
    details: [
      "Hands-On Exercises",
      "Real-life SEO projects and tasks",
      "Case Studies",
      "Analyzing successful SEO strategies",
      "Learning from SEO failures",
    ],
    imageSrc: "/module-13.webp",
    borderColor: "border-orange-500",
  },
  {
    id: 9,
    title: "Module 9:",
    description: "SEO Tools and Resources",
    link: "/",
    details: [
      "Essential SEO Tools",
      "Overview of popular tools (e.g., Moz, Yoast SEO)",
      "Resource Recommendations",
      "Books, websites, and forums for continued learning",
    ],
    imageSrc: "/module-9.webp",
    borderColor: "border-green-500",
  },
  {
    id: 10,
    title: "Module 10:",
    description: "Advanced SEO Techniques (Optional)",
    link: "/",
    details: [
      "Technical SEO Deep Dive",
      "Schema markup and structured data",
      "Advanced Link Building",
      "Strategies for high-quality backlinks",
      "Content Strategies",
      "Advanced content creation and marketing strategies",
    ],
    imageSrc: "/module-2.png",
    borderColor: "border-brown-500",
  },
];
const mName = "Ouer Modules";
const mDescription =
  "Here’s a comprehensive list of Certification in Search Engine Optimization modules.";

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
  "Advance Your Career: Stand out with an SEO certification that sets you apart in the digital landscape. ",
  "Practical Skills: Get hands-on experience with cutting-edge SEO tools and techniques.",
  "Expert-Led Training: Learn from seasoned SEO professionals and industry veterans.",
  "Flexible Learning Paths: Study at your own pace with modules designed for busy professionals.",
  "In-Depth Knowledge: Dive deep into keyword research, on-page SEO, link building, and more.",
  "AI-Powered Strategies: Integrate AI to supercharge your SEO efforts and achieve better results.",
  "Globally Recognized Certification: Earn a certification that proves your expertise and opens doors.",
];
{
  /*Weyewsection*/
}
const contentData = [
  {
    title: "Master SEO with Real-Time Expert Guidance",
    description:
      "Our live online SEO certification is led by industry veterans who bring years of expertise to your virtual classroom. Unlike pre-recorded sessions, our live format allows you to engage with experts in real-time, ask questions, and receive personalized feedback.",
    image: "/web-1.jpg",
  },
  {
    title: "Comprehensive, Up-to-Date Curriculum",
    description:
      "Our SEO certification program is meticulously designed to cover every aspect of search engine optimization, from on-page and off-page SEO to the latest in technical SEO. The curriculum is continually updated to align with the latest search engine algorithms.",
    image: "/web-2.jpg",
  },
  {
    title: "Flexible Learning, Real-World Results",
    description:
      "We know your time is valuable, which is why our SEO certification offers flexibility without sacrificing quality. Attend live sessions from anywhere, at times that fit your schedule, and immediately apply what you learn to your work.",
    image: "/web-3.jpg",
  },
];

{
  /*faqs*/
}
const faqs = [
  {
    question: "What is Search Engine Optimization (SEO)?",
    answer:
      "SEO stands for Search Engine Optimization. It involves optimizing websites and content to improve their visibility in search engine results pages (SERPs). The goal is to increase organic (non-paid) traffic to a website.",
  },
  {
    question: "Who should take this SEO Certification course?",
    answer:
      "This course is ideal for digital marketers, content creators, web developers, business owners, and anyone interested in improving a website’s visibility on search engines. No prior SEO experience is required, but basic digital marketing knowledge can be helpful.",
  },

  {
    question: "What will I learn in this SEO Certification course?",
    answer:
      "The course covers fundamental to advanced SEO topics, including keyword research, on-page and off-page optimization, technical SEO, content strategy, link building, and analytics. You’ll also learn how to use SEO tools and stay updated with the latest SEO trends.",
  },
  {
    question: "Is this SEO Certification recognized?",
    answer:
      "Yes, upon successful completion of the course, you will receive a certificate recognized in the digital marketing industry, enhancing your credibility and career prospects.",
  },
  {
    question: "Do I need any technical skills to enroll in this course?",
    answer:
      "Basic computer skills and an understanding of how websites work are beneficial but not mandatory. The course is designed to cater to beginners as well as professionals looking to update their SEO knowledge.",
  },
  {
    question: "Will there be practical assignments or projects?",
    answer:
      "Yes, the course includes practical assignments and real-world projects to help you apply the concepts you learn. This hands-on experience is crucial for mastering SEO skills.",
  },
  {
    question: "Is this certification recognized internationally?",
    answer:
      "Yes, the certification is recognized both in the UAE and internationally, making it valuable for global opportunities.",
  },
  {
    question: "How is the course structured?",
    answer:
      "The course is divided into modules, each focusing on a specific aspect of SEO, with a mix of theory and practical exercises.",
  },
  {
    question: "What kind of SEO projects will I work on during the course?",
    answer:
      "You will work on projects involving website audits, keyword research, content optimization, and link-building strategies.",
  },
  {
    question: "Can I use this certification to advance my career in the UAE?",
    answer:
      "Yes, the certification is recognized by employers in the UAE and can help you advance in digital marketing and related fields.",
  },
];

const page = () => {
  return (
    <>
      {/* Course Enroll section*/}
      <CourseEnroll
        title="The Only Training You'll Ever Need"
        heading="Certification in Search Engine Optimization in UAE"
        description="The “Certification in Search Engine Optimization” in the UAE is a focused program that teaches you how to improve website rankings and increase online visibility through effective SEO strategies."
        img="/seo-barner-2.png"
        btnAction={false}
        btnText="RESERVE YOUR SEAT"
      />

      {/*Pricing Schedule section*/}
      <PricingSchedule
        duration="Almost 6 Months"
        price="1500 AED"
        Schedule="Once a Week Every Thursday"
      />

      {/*View full details*/}
      <CourseDetails
        heading="Become Certified in Search Engine Optimization (SEO)"
        content1="Search Engine Optimization. (SEO)"
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
        heading="With certification in Search Engine Optimization, you're not just navigating the digital landscape you're shaping it"
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
              UAE Leading Search Engine Optimization (SEO) Certification
            </h3>
            <DynamicDate heading="Next Certification in Search Engine Optimization Batch is Starting From" />
          </div>
          {/* Countdown Timer */}
          <CountdownTimer />
        </div>
      </section>

      {/* LevelUpSection */}
      <LevelUpSection
        levels={levels}
        heading="Master the Art of Visibility with a Certification in Search Engine Optimization (SEO)."
      />

      {/*Whyewsection*/}
      <Whyewsection
        contentData={contentData}
        heading="Why we are Dubai’s Best Live Online Certification in Search Engine Optimization Program Provider."
      />

      {/*certification*/}
      <Certification CertificateImage="/seo-cartificate-1.png" />

      {/*faq-component*/}
      <FAQ faqArray={faqs} />
    </>
  );
};

export default page;
