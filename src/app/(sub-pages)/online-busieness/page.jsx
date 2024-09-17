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
    description: "Introduction to Affiliate Marketing",
    link: "/",
    details: [
      "What is Affiliate Marketing?",
      "Definition and key concepts",
      "How affiliate marketing work",
      "Affiliate Marketing Terminology",
      "Key terms (e.g., CPA, CPL, CPC, EPC)",
      "The Affiliate Marketing Ecosystem",
      "Affiliates, merchants, networks, and consumers",
    ],

    imageSrc: "/module-1.png",
    borderColor: "border-orange-500",
  },
  {
    id: 2,
    title: "Module 2:",
    description: "Finding and Choosing Affiliate Programs",
    link: "/",
    details: [
      "Types of Affiliate Programs",
      "CPA, CPL, and CPC programs",
      "Finding Affiliate Programs",
      "Networks (e.g., ShareASale, CJ Affiliate)",
      "Direct partnerships with companies",
      "Evaluating Affiliate Programs",
      "Commission structures",
      "Product relevance and reputation",
    ],
    imageSrc: "/module-2.png",
    borderColor: "border-green-500",
  },
  {
    id: 3,
    title: "Module 3:",
    description: "Setting Up Your Affiliate Marketing Business",
    link: "/",
    details: [
      "Creating a Niche Website or Blog",
      "Choosing a niche",
      "Building a website or blog",
      "Content Creation and SEO",
      "Writing effective content",
      "SEO best practices for affiliate marketing",
    ],
    imageSrc: "/module-3.png",
    borderColor: "border-purple-500",
  },
  {
    id: 4,
    title: "Module 4:",
    description: "Traffic Generation Strategies",
    link: "/",
    details: [
      "Organic Traffic",
      "SEO techniques for affiliate sites",
      "Paid Traffic",
      "PPC advertising (e.g., Google Ads, Facebook Ads)",
      "Social media advertising",
      "Email Marketing",
      "Building and managing an email list",
      "Crafting effective email campaigns",
    ],
    imageSrc: "/module-4.png",
    borderColor: "border-yellow-500",
  },
  {
    id: 5,
    title: "Module 5:",
    description: "Conversion Optimization",
    link: "/",
    details: [
      "Understanding Conversions",
      "Metrics to track (e.g., conversion rate, ROI)",
      "Improving Conversion Rates",
      "A/B testing and optimization strategies",
      "Landing Pages and Calls to Action",
      "Designing high-converting landing pages",
    ],
    imageSrc: "/module-5.png",
    borderColor: "border-blue-500",
  },
  {
    id: 6,
    title: "Module 6:",
    description: "Compliance and Best Practices",
    link: "/",
    details: [
      "Disclosure and Transparency",
      "FTC guidelines for affiliate marketing",
      "Avoiding Common Pitfalls",
      "Avoiding black-hat tactics",
      "Ethical Marketing Practices",
      "Building trust with your audience",
    ],
    imageSrc: "/module-6.png",
    borderColor: "border-red-500",
  },
  {
    id: 7,
    title: "Module 7:",
    description: "Analytics and Reporting",
    link: "/",
    details: [
      "Tracking Performance",
      "Using affiliate dashboards and tools",
      "Analyzing Data",
      "Interpreting reports and metrics",
      "Making Data-Driven Decisions",
      "Adjusting strategies based on performance",
    ],
    imageSrc: "/module-7.png",
    borderColor: "border-blue-500",
  },
];
const modules2 = [
  {
    id: 1,
    title: "Module 1:",
    description: "Introduction to Dropshipping",
    link: "/",
    details: [
      "What is Dropshipping?",
      "Definition and how it works",
      "Dropshipping vs. Traditional Retail",
      "Pros and cons of Dropshipping",
    ],

    imageSrc: "/module-1.png",
    borderColor: "border-orange-500",
  },
  {
    id: 2,
    title: "Module 2:",
    description: "Finding a Profitable Niche",
    link: "/",
    details: [
      "Market Research",
      "Identifying profitable niches",
      "Evaluating Products",
      "Product research tools and techniques",
      "Competitor Analysis",
      "Analyzing competitors in your niche",
    ],
    imageSrc: "/module-2.png",
    borderColor: "border-green-500",
  },
  {
    id: 3,
    title: "Module 3:",
    description: "Setting Up Your Dropshipping Business",
    link: "/",
    details: [
      "Choosing a Platform",
      "Platforms (e.g., Shopify, WooCommerce)",
      "Setting Up Your Online Store",
      "Store design and user experience",
      "Finding and Partnering with Suppliers",
      "Using directories (e.g., AliExpress, Oberto)",
      "Establishing supplier relationships",
    ],
    imageSrc: "/module-3.png",
    borderColor: "border-purple-500",
  },
  {
    id: 4,
    title: "Module 4:",
    description: "Marketing Your Dropshipping Store",
    link: "/",
    details: [
      "Traffic Generation",
      "SEO for eCommerce",
      "Social media marketing",
      "Influencer partnerships",
      "Paid Advertising",
      "Google Ads, Facebook Ads, Instagram Ads",
      "Content Marketing",
      "Blogging and content strategies",
    ],
    imageSrc: "/module-4.png",
    borderColor: "border-yellow-500",
  },
  {
    id: 5,
    title: "Module 5:",
    description: "Managing Orders and Customer Service",
    link: "/",
    details: [
      "Order Fulfillment",
      "Handling orders and shipping",
      "Customer Service Best Practices",
      "Providing excellent customer support",
      "Managing Returns and Refunds",
      "Policies and procedures",
    ],
    imageSrc: "/module-5.png",
    borderColor: "border-blue-500",
  },
  {
    id: 6,
    title: "Module 6:",
    description: "Analytics and Optimization",
    link: "/",
    details: [
      "Tracking Performance",
      "Using analytics tools (e.g., Google Analytics)",
      "Conversion Rate Optimization",
      "Improving sales and user experience",
      "A/B Testing",
      "Testing and optimizing store elements",
    ],
    imageSrc: "/module-6.png",
    borderColor: "border-red-500",
  },
  {
    id: 7,
    title: "Module 7:",
    description: "Trends and Innovations",
    link: "/",
    details: [
      "Scaling Your Dropshipping Business",

      "Scaling Strategies",
      "Expanding product lines and markets",
      "Automation Tools",
      "Tools for automating tasks and processes",
      "Outsourcing and Delegation",
      "Hiring virtual assistants and other support",
    ],
    imageSrc: "/module-7.png",
    borderColor: "border-blue-500",
  },
];
const modules3 = [
  {
    id: 1,
    title: "Module 1:",
    description: "Introduction to Ecommerce Marketing",
    link: "/",
    details: [
      "What is Ecommerce Marketing?",
      "Definition and importance",
      "Ecommerce Marketing Channels",
      "Overview of various channels (e.g., SEO, PPC, email marketing)",
    ],

    imageSrc: "/module-1.png",
    borderColor: "border-orange-500",
  },
  {
    id: 2,
    title: "Module 2:",
    description: "Social Media Strategy Development",
    link: "/",
    details: [
      "Website Optimization for Ecommerce",

      "User Experience (UX)",
      "Designing an effective ecommerce site",
      "Conversion Rate Optimization (CRO)",
      "Improving checkout process and user flow",
    ],
    imageSrc: "/module-2.png",
    borderColor: "border-green-500",
  },
  {
    id: 3,
    title: "Module 3:",
    description: "SEO for Ecommerce",
    link: "/",
    details: [
      "On-Page SEO",
      "Product page optimization",
      "Technical SEO",
      "Site structure, URL optimization",
      "Content Marketing",
      "Blogging and content strategies for ecommerce",
    ],
    imageSrc: "/module-3.png",
    borderColor: "border-purple-500",
  },
  {
    id: 4,
    title: "Module 4:",
    description: "Paid Advertising Strategies",
    link: "/",
    details: [
      "Google Ads for Ecommerce",
      "Setting up and managing Google Ads campaigns",
      "Social Media Advertising",
      "Facebook Ads, Instagram Ads, Pinterest Ads",
      "Retargeting Campaigns",
      "Techniques for re-engaging visitors",
    ],
    imageSrc: "/module-4.png",
    borderColor: "border-yellow-500",
  },
  {
    id: 5,
    title: "Module 5:",
    description: "Email Marketing for Ecommerce",
    link: "/",
    details: [
      "Building an Email List",
      "Strategies for list growth",
      "Crafting Effective Campaigns",
      "Segmentation and personalization",
      "Automated Email Sequences",
      "Abandoned cart emails, post-purchase follow-ups",
    ],
    imageSrc: "/module-5.png",
    borderColor: "border-blue-500",
  },
  {
    id: 6,
    title: "Module 6:",
    description: "Social Media Marketing",
    link: "/",
    details: [
      "Platforms and Strategies",
      "Best practices for various social platforms",
      "Content Creation",
      "Creating engaging social media content",
      "Community Engagement",
      "Building and managing an online community",
    ],
    imageSrc: "/module-6.png",
    borderColor: "border-red-500",
  },
  {
    id: 7,
    title: "Module 7:",
    description: "Analytics and Reporting",
    link: "/",
    details: [
      "Measuring Performance",
      "Key metrics to track (e.g., sales, traffic sources)",
      "Using Analytics Tools",
      "Google Analytics, ecommerce dashboards",
      "Data-Driven Decision Making",
      "Adjusting strategies based on insights",
    ],
    imageSrc: "/module-7.png",
    borderColor: "border-blue-500",
  },
  {
    id: 8,
    title: "Module 8:",
    description: "Advanced Ecommerce Strategies",
    link: "/",
    details: [
      "Customer Retention Strategies",
      "Loyalty programs and retention tactics",
      "International Ecommerce",
      "Expanding into global markets",
      "Multi-Channel Selling",
      "Selling on multiple platforms (e.g., Amazon, eBay)",
    ],
    imageSrc: "/module-13.webp",
    borderColor: "border-orange-500",
  },
];
const mName = "Ouer Modules";
const mDescription = "Affiliate Marketing Training Modules";
const mDescription2 = "Dropshipping Training Modules";
const mDescription3 = "Ecommerce Marketing Training Modules";

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
  "Build Your Future: Get certified in online business and turn your entrepreneurial dreams into reality.",
  "Comprehensive Training: Master the essentials of dropshipping, affiliate marketing, and eCommerce marketing.",
  "Real-World Insights: Learn practical strategies that you can immediately apply to your online business.",
  "Expand Your Network: Connect with like-minded entrepreneurs and potential partners.",
  "Career-Ready Skills: Develop the skills needed to build, manage, and grow a successful online business.",
];
{
  /*Weyewsection*/
}
const contentData = [
  {
    title: "Master Dropshipping Launch Your Business with Minimal Risk",
    description:
      "Our Dropshipping Training module equips you with the knowledge and tools to start your own online business with little to no upfront investment. Learn how to select profitable products, find reliable suppliers, and manage your online store without the need to hold inventory.",
    image: "/Online-Business-4.jpg",
  },
  {
    title: "Affiliate Marketing Earn Passive Income Like a Pro",
    description:
      "Discover the secrets of successful affiliate marketing with our comprehensive training module. Whether you’re new to affiliate marketing or looking to enhance your existing skills, our course covers everything you need to know.",
    image: "/Online-Business-5.jpg",
  },
  {
    title: "Ecommerce Marketing Drive Traffic, Boost Sales, and Build a Brand",
    description:
      "Our Ecommerce Marketing Training module is designed to turn you into a digital marketing expert. Learn how to attract and retain customers, optimize your online store for search engines, and create powerful marketing campaigns that convert.",
    image: "/Online-Business-6.jpg",
  },
];

{
  /*faqs*/
}
const faqs = [
  {
    question: "What is included in the Dropshipping Training?",
    answer:
      "The Dropshipping Training covers everything from setting up your online store to selecting profitable products, managing suppliers, and optimizing your sales channels. You’ll also learn about customer service, handling returns, and marketing strategies specific to dropshipping.",
  },
  {
    question: "What will I learn in the Affiliate Marketing Training?",
    answer:
      "In the Affiliate Marketing Training, you’ll learn how to choose profitable niches, find and join affiliate programs, create content that converts, and drive traffic to your affiliate offers. The course also covers tracking and optimizing your campaigns for maximum revenue.",
  },
  {
    question: "What topics are covered in the Ecommerce Marketing Training?",
    answer:
      "The Ecommerce Marketing Training includes a comprehensive overview of digital marketing strategies tailored for online stores. Topics include SEO, email marketing, social media marketing, paid advertising, conversion rate optimization, and analytics. You’ll also learn about customer retention techniques and building brand loyalty.",
  },
  {
    question: "Are there any prerequisites for enrolling in these courses?",
    answer:
      "No formal prerequisites are required. However, a basic understanding of online business concepts and familiarity with digital tools will be beneficial. The courses are designed for beginners as well as those looking to enhance their existing knowledge.",
  },
  {
    question: "Will I receive a certificate upon completion?",
    answer:
      "es, upon successfully completing all the modules and passing the final assessment, you will receive a certification that you can showcase to potential employers or use to build your online business credentials.",
  },
  {
    question:
      "What kind of career opportunities can this certification open up for me?",
    answer:
      "This certification can open doors to various online business careers, such as becoming an eCommerce entrepreneur, digital marketer, dropshipping expert, or affiliate marketing specialist. The skills you acquire will be valuable for starting your own online business or enhancing your role in a digital marketing team.",
  },
  {
    question: "How is the Online Business course structured?",
    answer:
      "The course is divided into modules, each focusing on different aspects of online business, with a mix of theory and practical exercises.",
  },
  {
    question:
      "Will I receive hands-on training in building an online business?",
    answer:
      "Yes, the course includes practical assignments and projects to provide hands-on experience in setting up and managing an online business.",
  },
  {
    question: "How is the course assessed?",
    answer:
      "The course is assessed through quizzes, practical tasks, and a final project where you will develop and launch an online business strategy.",
  },
  {
    question: "How do I enroll in the Online Business Certification course?",
    answer:
      "Enrollment can be completed online through our website by selecting your preferred course schedule and filling out the registration form.",
  },
];

const page = () => {
  return (
    <>
      {/* Course Enroll section*/}
      <CourseEnroll
        title="The Only Training You'll Ever Need"
        heading="Mastering in Online Business"
        description="The Certification in Online Business equips you with essential skills to succeed in the digital marketplace, offering comprehensive training in Affiliate Marketing, Dropshipping, and Ecommerce Marketing."
        img="/Online-Business-1.webp"
        btnAction={false}
        btnText="RESERVE YOUR SEAT"
        price={600}
        details="Mastering in Online Business"
      />

      {/*Pricing Schedule section*/}
      <PricingSchedule
        details="Mastering in Online Business"
        duration="3 Weeks"
        realFee={3000}
        descountFee={600}
        Schedule="Every Saturday (09:00 AM GMT+4)"
      />

      {/*View full details*/}
      <CourseDetails
        heading="Become Certified in Online Business"
        content1="Online Business"
        content2="Full Stack Digital Marketing Course"
      />
      {/*Modules section*/}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap  lg:flex-nowrap md:flex-nowrap items-start space-x-4 p-6 mb-4 border-2 border-dashed border-red-500 rounded-lg bg-white shadow hover:shadow-slate-500 hover:shadow-lg transition-all">
          <img
            src="/Online-Business-2.webp"
            alt="Online-Business"
            className="w-32 h-32 object-contain items-center"
          />
          <div>
            <h3 className="text-3xl text-[#1D1B4C] font-bold text-gray-900 mb-2">
              Affiliate Marketing Training
            </h3>
            <p className="text-gray-700 text-sm">
              Unlock the power of affiliate marketing with our expert-led
              training programs. Our courses are designed to equip you with the
              skills and strategies needed to succeed in the dynamic world of
              online marketing.
            </p>
          </div>
        </div>
      </div>

      <Modules
        moduleName={mName}
        moduleDescription={mDescription}
        moduleObj={modules}
        visableButton={false}
      />

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap  lg:flex-nowrap md:flex-nowrap items-start space-x-4 p-6 mb-4 border-2 border-dashed border-red-500 rounded-lg bg-white shadow hover:shadow-slate-500 hover:shadow-lg transition-all">
          <img
            src="/module-3.png"
            alt="Online-Business"
            className="w-32 h-32 object-contain items-center"
          />
          <div>
            <h3 className="text-3xl text-[#1D1B4C] font-bold text-gray-900 mb-2">
              Dropshipping Training
            </h3>
            <p className="text-gray-700 text-sm">
              Master the art of dropshipping with our comprehensive training
              programs. Learn the ins and outs of creating a successful online
              store, from sourcing products to managing logistics.
            </p>
          </div>
        </div>
      </div>

      <Modules
        moduleName={mName}
        moduleDescription={mDescription2}
        moduleObj={modules2}
        visableButton={false}
      />

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap  lg:flex-nowrap md:flex-nowrap items-start space-x-4 p-6 mb-4 border-2 border-dashed border-red-500 rounded-lg bg-white shadow hover:shadow-slate-500 hover:shadow-lg transition-all">
          <img
            src="/module-12.webp"
            alt="Online-Business"
            className="w-32 h-32 object-contain items-center"
          />
          <div>
            <h3 className="text-3xl text-[#1D1B4C] font-bold text-gray-900 mb-2">
              Ecommerce Marketing Training
            </h3>
            <p className="text-gray-700 text-sm">
              Elevate your e-commerce game with our specialized marketing
              training. Our courses cover everything from SEO and social media
              to conversion optimization and paid ads, giving you the tools to
              drive traffic and increase sales.
            </p>
          </div>
        </div>
      </div>

      <Modules
        moduleName={mName}
        moduleDescription={mDescription3}
        moduleObj={modules3}
        visableButton={false}
      />
      {/* Parallax Background */}
      <ParallaxBackground
        title=""
        heading="Master the art of dropshipping, affiliate marketing, and ecommerce, and you'll hold the keys to creating a thriving online empire."
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
              UAE Leading Certification in Online Business
            </h3>
            <DynamicDate heading="Next Certification in Online Business Batch is Starting From" />
          </div>
          {/* Countdown Timer */}
          <CountdownTimer />
        </div>
      </section>

      {/* LevelUpSection */}
      <LevelUpSection
        details="Mastering in Online Business"
        price={600}
        levels={levels}
        heading="Enroll Today and Start Building Your Successful Online Business!"
      />

      {/*Whyewsection*/}
      <Whyewsection
        contentData={contentData}
        heading="Why we are Dubai’s Best Live Online Certification in Social Media Marketing Program Provider."
      />

      {/*certification*/}
      <Certification CertificateImage="/seo-cartificate-1.png" />

      {/*faq-component*/}
      <FAQ faqArray={faqs} />
    </>
  );
};

export default page;
