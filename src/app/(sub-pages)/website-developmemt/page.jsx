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
    description: "Introduction to WordPress",
    link: "/",
    details: [
      "History and Evolution of WordPress",
      "Benefits of Using WordPress",
      "Setting Up Your WordPress",
      "Choosing a Domain and Hosting Provider",
      "Installing WordPress",
      "Introduction to the WordPress Dashboard",
      "Understanding the WordPress Interface",
      "Admin Dashboard Overview",
      "Managing User Roles and Permissions",
      "WordPress Settings and Configuration",
    ],

    imageSrc: "/module-1.png",
    borderColor: "border-orange-500",
  },
  {
    id: 2,
    title: "Module 2:",
    description: "WordPress Themes and Customization",
    link: "/",
    details: [
      "Selecting and Installing Themes",
      "Free vs. Premium Themes",
      "Theme Installation and Activation",
      "Customizing Themes ",
      "Theme Frameworks and Builders",
      "Introduction to Theme Frameworks ",
      "Using Page Builders (e.g., Elementor, WPBakery)",
      "Creating Custom Layouts",
      "Responsive Design",
      "Ensuring Mobile Responsiveness",
      "Best Practices for Responsive Web Design",
    ],
    imageSrc: "/module-2.png",
    borderColor: "border-green-500",
  },
  {
    id: 3,
    title: "Module 3:",
    description: "Plugins and Extensions",
    link: "/",
    details: [
      "Finding and Installing Plugins",
      "Essential Plugins for WordPress Websites",
      "Managing and Updating Plugins",
      "SEO Plugins",
      "Introduction to Yoast SEO and Other SEO Plugins",
      "Optimizing Content for Search Engines",
      "Security and Backup Plugins",
      "Importance of Website Security",
      "Installing and Configuring Security Plugins",
      "Backup Solutions and Plugins",
    ],
    imageSrc: "/module-3.png",
    borderColor: "border-purple-500",
  },
  {
    id: 4,
    title: "Module 4:",
    description: "Advanced Customization",
    link: "/",
    details: [
      "Custom Post Types and Taxonomies",
      "Creating Custom Post Types",
      "Understanding and Using Custom Taxonomies",
      "Customizing ",
      "Customizing with Code",
      "Introduction to HTML, CSS, and PHP for WordPress",
      "Using the Theme Editor Safely",
      "Child Themes",
      "Importance of Child Themes",
      "Creating and Activating a Child Theme",
    ],
    imageSrc: "/module-4.png",
    borderColor: "border-yellow-500",
  },
  {
    id: 5,
    title: "Module 5:",
    description: "Building Different Types of Websites",
    link: "/",
    details: [
      "Business Website Development",
      "Key Features of a Business Website",
      "Integrating Contact Forms and Maps",
      "Ecommerce Website Development",
      "Introduction to WooCommerce",
      "Setting Up Products, Categories, and Tags",
      "Configuring Payment Gateways and Shipping Options",
      "Blog and Content Websites",
      "Designing and Organizing a Blog",
      "Widgets and Plugins",
      "Promoting Content",
    ],
    imageSrc: "/module-5.png",
    borderColor: "border-blue-500",
  },
  {
    id: 6,
    title: "Module 6:",
    description: "Performance Optimization",
    link: "/",
    details: [
      "Website Speed Optimization",
      "Analyzing Website Performance",
      "Implementing Caching Solutions",
      "Optimizing Images and Videos for Speed",
      "Database Optimization",
      "Understanding the WordPress Database",
      "Cleaning and Optimizing the Database",
      "Regular Maintenance for Database Performance",
      "Content Delivery Networks (CDNs)",
      "Introduction to CDNs",
      "Setting Up a CDN for WordPress",
      "Benefits and Drawbacks of Using a CDN",
    ],
    imageSrc: "/module-6.png",
    borderColor: "border-red-500",
  },
  {
    id: 7,
    title: "Module 7:",
    description: "Website Security",
    link: "/",
    details: [
      " Understanding WordPress Security",
      "Common Security Threats",
      "Best Practices for Securing a WordPress Site",
      "Configuring HTTPS and SSL Certificates",
      "User Authentication and Management",
      "Implementing Strong Password Policies",
      "Two-Factor Authentication (2FA) for WordPress",
      "Monitoring and Recovering from Attacks",
      "Monitoring for Suspicious Activity",
      "Restoring a Site from Backups",
    ],
    imageSrc: "/module-7.png",
    borderColor: "border-blue-500",
  },
  {
    id: 8,
    title: "Module 8:",
    description: "Website Launch and Maintenance",
    link: "/",
    details: [
      "Pre-Launch Checklist",
      "Final Testing and Quality Assurance",
      "SEO and Social Media Integration",
      "Setting Up Google Analytics and Webmaster Tools",
      "Launching Your Website",
      "Managing DNS and Domain Settings",
      "Announcing Your Launch",
      "Ongoing Maintenance and Updates",
      "Regular Content Updates",
      "WordPress Core, Theme, and Plugin Updates",
    ],
    imageSrc: "/module-13.webp",
    borderColor: "border-orange-500",
  },
  {
    id: 9,
    title: "Module 9:",
    description: "Additional Resources and Next Steps",
    link: "/",
    details: [
      "Further Learning Opportunities",
      "Advanced WordPress Development Courses",
      "Specialized Plugins and Theme Development",
      "Introduction to WordPress Multisite",
      "Career Pathways in WordPress Development",
      "Freelancing and Contract Work",
      "Joining a Development Team or Agency",
      "Building Your Own WordPress-based Business",
    ],
    imageSrc: "/module-9.webp",
    borderColor: "border-green-500",
  },
];
const mName = "Ouer Modules";
const mDescription =
  "Here’s a comprehensive list of Certification in Website Development using WordPress modules.";

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
  "Advance Your Career: Gain a certification that highlights your expertise in WordPress website development.",
  "Hands-On Experience: Build and customize websites with practical, real-world projects.",
  "Learn from the Best: Get insights and guidance from experienced WordPress developers and instructors.",
  "Flexible Learning: Study at your own pace with modules that fit your schedule.",
  "Comprehensive Curriculum: Master everything from creating business websites to developing eCommerce platforms, blogs, and landing pages.",
];
{
  /*Weyewsection*/
}
const contentData = [
  {
    title: "Build Professional Websites with Ease",
    description:
      "Our WordPress Certification program teaches you how to create stunning, fully-functional websites without needing extensive coding knowledge. From simple blogs to complex e-commerce sites, you’ll learn how to leverage WordPress’s powerful features to bring any web project to life.",
    image: "/web-1.jpg",
  },
  {
    title: "Master Customization and Design",
    description:
      "Go beyond basic templates with our in-depth training on WordPress customization and design. Learn how to use themes, plugins, and custom CSS to create unique, visually appealing websites that stand out in today’s competitive digital landscape.",
    image: "/web-2.jpg",
  },
  {
    title: "Launch and Manage Your Website with Confidence",
    description:
      "Our WordPress Certification doesn’t just teach you how to build a website; it prepares you to launch, manage, and maintain it effectively. Learn how to optimize your site for search engines, integrate essential security features, and ensure fast load times.",
    image: "/web-3.jpg",
  },
];

{
  /*faqs*/
}
const faqs = [
  {
    question:
      "What does the Website Development using WordPress Certification cover?",
    answer:
      "The certification covers a wide range of topics including setting up a WordPress site, choosing and customizing themes, installing and configuring plugins, creating and managing content, and optimizing your site for SEO. You’ll also learn about building different types of websites, such as business sites, eCommerce stores, blogs, and landing pages.",
  },
  {
    question: "Who is this certification program designed for?",
    answer:
      "This program is designed for anyone interested in learning how to build and manage websites using WordPress. It’s suitable for beginners with no prior experience in web development, as well as those looking to enhance their skills or transition to a career in web design and development.",
  },
  {
    question: "Are there any prerequisites for this certification?",
    answer:
      "There are no formal prerequisites. However, a basic understanding of the internet and how websites function will be beneficial. The course is designed to take you from beginner to proficient in WordPress website development.",
  },
  {
    question: "Will I receive a certificate after completing the course?",
    answer:
      "Yes, upon successful completion of the course and passing the final assessment, you will receive a certification that is recognized in the UAE. This certificate can be used to enhance your resume or support your career development in web design and development.",
  },
  {
    question: "Is there any support available during the course?",
    answer:
      "Yes, you’ll have access to a support team that can help with any technical or course-related queries. Additionally, you can participate in online forums to connect with instructors and fellow students for advice and support.",
  },
  {
    question: "What career opportunities can this certification lead to?",

    answer:
      "This certification can open doors to careers in web development, web design, digital marketing, and content management. It’s especially valuable for those looking to work as freelance web developers or in-house WordPress experts within a company.",
  },
  {
    question: "Is this certification recognized globally?",
    answer:
      "Yes, the certification is recognized globally, making it valuable for professionals in the UAE and abroad.",
  },
  {
    question: "Will I receive hands-on training during the course?",
    answer: "Will I receive hands-on training during the course?",
  },
  {
    question: " How is the course assessed?",
    answer:
      "The course is assessed through a combination of quizzes, practical assignments, and a final project.",
  },
];

const page = () => {
  return (
    <>
      {/* Course Enroll section*/}
      <CourseEnroll
        title="The Only Training You'll Ever Need"
        heading="Website Development using WordPress Certification in UAE"
        description="The “Website Development using WordPress Certification” in the UAE is a comprehensive course designed to teach you how to create professional, responsive websites using WordPress, the world’s most popular content management system."
        img="/website-01.png"
        btnAction={false}
      />

      {/*Pricing Schedule section*/}
      <PricingSchedule
        duration="30 Weeks"
        price="1000 AED"
        Schedule="Every Saturday ( 09:00 AM GMT+4 )"
      />

      {/*View full details*/}
      <CourseDetails />
      {/*Modules section*/}
      <Modules
        moduleName={mName}
        moduleDescription={mDescription}
        moduleObj={modules}
      />
      {/* Parallax Background */}
      <ParallaxBackground
        title=""
        heading="|’’Master WordPress to turn visions into reality, empowering businesses and making a lasting impact online."
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
              UAE Leading Website Development using WordPress Certification
            </h3>
            <DynamicDate heading="Next Certification in Website Development using WordPress Batch is Starting From" />
          </div>
          {/* Countdown Timer */}
          <CountdownTimer />
        </div>
      </section>

      {/* LevelUpSection */}
      <LevelUpSection
        levels={levels}
        heading="Design, Develop, and Deliver with a WordPress Certification."
      />

      {/*Whyewsection*/}
      <Whyewsection
        contentData={contentData}
        heading="Why we are Dubai’s Best Live Online Certification in Website Development using WordPress Program Provider"
      />

      {/*certification*/}
      <Certification CertificateImage="/diploma-web.png" />

      {/*faq-component*/}
      <FAQ faqArray={faqs} />
    </>
  );
};

export default page;
