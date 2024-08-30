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
    description: "Introduction to Social Media Marketing",
    link: "/",
    details: [
      "Overview of Social Media Platforms: Introduction to major platforms (Facebook, Instagram, LinkedIn, TikTok).",
      "Importance of Social Media: How social media fits into the broader marketing strategy.",
      "Key Concepts: Terminology and basic principles of social media marketing.",
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
      "Content Strategy: Developing a content plan and calendar.",
      "Content Types: Understanding different types of content (posts, stories, videos).",
      "Copywriting: Writing.",
      "Visual Design: Principles of design and tools for creating visuals (e.g., Canva, Adobe Spark).",
    ],
    imageSrc: "/module-2.png",
    borderColor: "border-green-500",
  },
  {
    id: 3,
    title: "Module 3:",
    description: "Content Creation and Management",
    link: "/",
    details: [
      "Content Strategy",
      "Content Types: Understanding different types of content (posts, stories, videos, infographics)",
      "Copywriting",
      "Visual Design: Principles of design and tools for creating visuals (e.g., Canva, Adobe Spark).",
    ],
    imageSrc: "/module-3.png",
    borderColor: "border-purple-500",
  },
  {
    id: 4,
    title: "Module 4:",
    description: "Community Engagement and Managment",
    link: "/",
    details: [
      "Building a Community: Techniques for growing and nurturing a social media community.",
      "Engagement Best Practices: Best practices for interacting with followers.",
      "Handling Negative Feedback: Strategies for managing and responding to negative comments or reviews.",
    ],
    imageSrc: "/module-4.png",
    borderColor: "border-yellow-500",
  },
  {
    id: 5,
    title: "Module 5:",
    description: "Social Media Advertising",
    link: "/",
    details: [
      "Introduction to Paid Social Media",
      "Ad Creation: Designing effective ads and creating compelling calls-to-action.",
      "Targeting and Segmentation",
      "Budgeting and Bidding",
    ],
    imageSrc: "/module-5.png",
    borderColor: "border-blue-500",
  },
  {
    id: 6,
    title: "Module 6:",
    description: "Analytics and Reporting",
    link: "/",
    details: [
      "Key Metrics and KPIs",
      "Tools for Analytics: Overview of tools like Google Analytics, Facebook Insights, Twitter Analytics.",
      "Creating Reports: How to create and interpret social media reports.",
      "Data-Driven Decision Making: Using insights from analytics to adjust strategies.",
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
      "Emerging Trends: Current trends in social media marketing (e.g., short-form video, social commerce).",
      "Platform Updates: Keeping up with changes and new features on social media platforms.",
      "Innovative Techniques: Exploring new technologies and approaches (e.g., AR/VR, AI).",
    ],
    imageSrc: "/module-7.png",
    borderColor: "border-blue-500",
  },
  {
    id: 8,
    title: "Module 8:",
    description: "Compliance and Best Practices",
    link: "/",
    details: [
      "Legal Considerations: Understanding regulations and compliance (e.g., GDPR, advertising standards).",
      "Ethical Marketing: Promoting ethical practices in social media marketing.",
      "Brand Safety: Ensuring your brand maintains a positive reputation.",
    ],
    imageSrc: "/module-13.webp",
    borderColor: "border-orange-500",
  },
  {
    id: 9,
    title: "Module 9:",
    description: "Influencer Marketing",
    link: "/",
    details: [
      "Identifying Influencers: How to find and choose influencers for your brand.",
      "Managing Relationships: Best practices for working with influencers.",
      "Measuring Impact: Evaluating the effectiveness of influencer campaigns.",
    ],
    imageSrc: "/module-9.webp",
    borderColor: "border-green-500",
  },
  {
    id: 10,
    title: "Module 10:",
    description: "Crisis Management and Recovery",
    link: "/",
    details: [
      "Developing a Crisis Plan: Creating a strategy for managing potential crises.",
      "Responding to Crises: Effective communication strategies during a crisis.",
      "Post-Crisis Analysis: Evaluating and learning from the crisis situation.",
    ],
    imageSrc: "/module-2.png",
    borderColor: "border-brown-500",
  },
  {
    id: 11,
    title: "Module 11:",
    description: "Practical Application and Case Studies",
    link: "/",
    details: [
      "Real-World Examples: Analysis of successful and unsuccessful social media campaigns.",
      "Hands-On Exercises: Practical activities to apply learned concepts.",
      "Group Projects: Collaborative projects to create and execute social media strategies.",
    ],
    imageSrc: "/module-3.png",
    borderColor: "border-purple-500",
  },
  {
    id: 12,
    title: "Module 12:",
    description: "Advanced Topics and Future Outlook",
    link: "/",
    details: [
      "Advanced Analytics: Deep dive into advanced data analysis techniques.",
      "Integration with Other Channels: How social media fits into broader marketing and communication strategies.",
      "Future Trends: Preparing for the future of social media marketing.",
    ],
    imageSrc: "/module-4.png",
    borderColor: "border-yellow-500",
  },
];
const mName = "Ouer Modules";
const mDescription =
  "Here’s a comprehensive list of Certification in Social Media Marketing modules.";

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
  "Boost Your Resume: Gain an industry-recognized certification that sets you apart from the competition.",
  "Hands-On Learning: Get practical experience with real-world social media campaigns and analytics.",
  "Master Top Platforms: Learn strategies and tools for Facebook, Instagram, LinkedIn, Twitter, and more.",
  "Stay Ahead with AI: Harness the power of AI to optimize your social media marketing efforts.",
  "Flexible Learning: Access online courses anytime, anywhere, at your own pace.",
  "Expert Instructors: Learn from seasoned digital marketers with years of experience in the field.",
];
{
  /*Weyewsection*/
}
const contentData = [
  {
    title: "Expert-Led Live Sessions Learn from Industry Leaders",
    description:
      "Our Social Media Marketing program is not just another online course. We bring the classroom to you through interactive live sessions led by industry experts. You’ll gain insights from professionals who have successfully navigated the complexities of digital marketing.",
    image: "/media-1.jpg",
  },
  {
    title: "Tailored Curriculum Master the Skills that Matter",
    description:
      "We understand that the digital landscape is ever-changing, which is why our curriculum is meticulously designed to meet the demands of today’s market. Our program covers everything from content creation and analytics to advanced advertising techniques across all major platforms.",
    image: "/media-2.jpg",
  },
  {
    title: "Flexible Learning Certification on Your Terms",
    description:
      "At our academy, flexibility is key. We offer a program that fits around your schedule, allowing you to balance work, life, and learning seamlessly. With live classes available at various times, recorded sessions for later viewing, and a Mobile-Friendly platform.",
    image: "/media-3.jpg",
  },
];

{
  /*faqs*/
}
const faqs = [
  {
    question: "What is the Certification in Social Media Marketing?",
    answer:
      "The Certification in Social Media Marketing is a professional course designed to equip you with the skills and knowledge needed to effectively create, manage, and analyze social media campaigns across various platforms.",
  },
  {
    question: "Who should enroll in this certification program?",
    answer:
      "This program is ideal for digital marketers, social media managers, content creators, entrepreneurs, and anyone interested in mastering social media marketing strategies.",
  },
  {
    question: "Are there any prerequisites for enrolling in this course?",
    answer:
      "There are no specific prerequisites. However, a basic understanding of marketing principles and familiarity with social media platforms will be helpful.",
  },
  {
    question: "Will I receive a certificate upon completion?",
    answer:
      "Yes, upon successful completion of the course, you will receive a certification that can be added to your resume and LinkedIn profile.",
  },
  {
    question: "What kind of support is available during the course?",
    answer:
      "You will have access to instructors, course materials, and a student community for support. Some programs may also offer one-on-one mentoring sessions.",
  },
];

const page = () => {
  return (
    <>
      {/* Course Enroll section*/}
      <CourseEnroll
        title="The Only Training You'll Ever Need"
        heading="Certification in Social Media Marketing in UAE"
        description="The Certification in Social Media Marketing is a specialized sub-module of our comprehensive Digital Marketing Diploma. This certification equips you with essential skills to master social media platforms."
        img="/media-barner.png"
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
        heading="Become Certified in Social Media Marketing (SMM)"
        content1=" Social Media Marketing (SMM) "
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
        heading="Certify your skills, amplify your impact.social media mastery starts here."
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
              UAE Leading Certification in Social Media Marketing
            </h3>
            <DynamicDate heading="Next Certification in Social Media Marketing Batch is Starting From" />
          </div>
          {/* Countdown Timer */}
          <CountdownTimer />
        </div>
      </section>

      {/* LevelUpSection */}
      <LevelUpSection
        levels={levels}
        heading="Elevate Your Career with Certification in Social Media Marketing"
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
