"use client";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FAQComponent from "../faq-component/page";
import { MdDone } from "react-icons/md";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaEdit, FaHeadset, FaTools } from "react-icons/fa";
import { FaChalkboardUser } from "react-icons/fa6";
import toast from "react-hot-toast";

function forCompanies() {
  const cardData = [
    {
      icon: "/1.png",
      title: "Tailored Course Content",
      description:
        "We design the course around what your team needs to learn. Whether it’s basic or advanced, we customize everything to fit your company’s goals.",
    },
    {
      icon: "/2.png",
      title: "Expert Instructors",
      description:
        "Our team of digital marketing experts will train your employees, bringing real-world experience and practical knowledge to help them succeed.",
    },
    {
      icon: "/3.png",
      title: "Complete Materials",
      description:
        "We provide everything your team needs for the training, including presentations, assignments, and case studies, all customized to fit your company’s goals.",
    },
  ];
  const steps = [
    {
      id: 1,
      icon: <FaChalkboardUser size={50} className="group-hover:text-white" />,
      title: "Identify Your Needs",
      description:
        "We consult to understand your goals and needs, tailoring the course content.",
    },
    {
      id: 2,
      icon: <FaEdit size={50} className="group-hover:text-white" />,
      title: "Book Your Session",
      description:
        "Based on your input, we create a customized program with the best-fitting modules.",
    },
    {
      id: 3,
      icon: <FaTools size={50} className="group-hover:text-white" />,
      title: "Customized Learning Experience",
      description:
        "Our experts deliver training with customized materials directly to your Team.",
    },
    {
      id: 4,
      icon: <FaHeadset size={50} className="group-hover:text-white" />,
      title: "Apply Your New Skills",
      description:
        "We provide ongoing support to ensure the course meets your needs.",
    },
  ];
  const faqs = [
    {
      question: "What is customized digital marketing training?",
      answer:
        "Our customized digital marketing training is tailored specifically to your company’s needs. We create a training program that focuses on the areas your team needs to improve, whether it’s SEO, social media, email marketing, or any other aspect of digital marketing.",
    },
    {
      question: "How is the training customized for my team?",
      answer:
        "We work closely with your company to understand your goals and challenges. Based on this, we design a training program that addresses your team’s specific needs, skill levels, and industry requirements.",
    },
    {
      question: "Who conducts the training?",
      answer:
        "Our training is led by experienced digital marketing professionals who have real-world expertise in the industry. They will guide your team through practical, hands-on sessions that offer valuable insights.",
    },
    {
      question: "Is the training suitable for beginners or advanced teams?",
      answer:
        "Yes, we customize the training for all levels, whether your team is new to digital marketing or looking for advanced strategies. We ensure the content is relevant to your team’s experience and needs.",
    },
    {
      question: "What does the training include?",
      answer:
        "The training includes everything your team needs—presentations, assignments, case studies, and interactive sessions. All content is customized to fit your company’s goals and challenges.",
    },
    {
      question: "How are the sessions delivered?",
      answer:
        "Our training sessions are delivered live, either online through platforms like Zoom or onsite at your location, depending on your preference. We can also adjust the schedule to fit your team’s availability.",
    },
    {
      question:
        "What are the benefits of customized digital marketing training for my team?",
      answer:
        "Customized training ensures your team learns practical skills tailored to your company’s industry, helping them implement strategies immediately. It boosts their confidence and effectiveness in achieving your business goals.",
    },
    {
      question: "Can we request training in specific digital marketing areas?",
      answer:
        "Absolutely! Whether you need focused training on specific areas like SEO, content marketing, PPC, or social media strategies, we can customize the content to meet those specific needs.",
    },
    {
      question:
        "How do we get started with customized training for our company?",
      answer:
        "To get started, simply contact us to discuss your needs. We’ll work with you to develop a customized digital marketing training program that’s perfect for your team.",
    },
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    OptionSubject: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required.";
    if (!formData.email) formErrors.email = "Email is required.";
    if (!formData.phone) formErrors.phone = "Phone number is required.";
    if (!formData.OptionSubject)
      formErrors.OptionSubject = "Subject is required.";
    return formErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      {
        /*
         */
        try {
          // Sending email using EmailJS
          const response = await fetch("/api/email/consult", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });

          if (response.status === 200) {
            toast.success("Message sent successfully!");
            setFormData({ name: "", email: "", phone: "", subject: "" }); // Reset form
          } else {
            toast.error("Failed to send message.");
          }
        } catch (error) {
          console.error("Error sending form data:", error);
          toast.error("An error occurred. Please try again.");
        }
      }
    }
  };

  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-100px px-4 bg-white">
        <div className="max-w-lg mb-20 ">
          <p className="text-black mb-6 text-1xl tracking-wide font-bold flex items-center justify-start before:content-[''] before:h-3px before:w-10 before:bg-orange-color before:mr-2">
            We Provide Trainers & Team
          </p>
          <h2 className="text-4xl font-bold text-heading-color mb-6">
            Customized Digital <br />
            Marketing Training for <br /> Companies
          </h2>
          <p className="text-text-color mb-6 ">
            We provide easy-to-understand digital marketing training for your
            company’s team. Our sessions are live and hands-on, teaching
            practical skills like SEO and social media marketing. We work with
            you to create a training plan that fits your business needs, helping
            your team learn new strategies they can use right away to grow your
            business.
          </p>
          <div className="flex justify-between">
            <Link href="#contact">
              <button className="border border-orange-color bg-orange-color text-white font-medium text-17px flex items-center gap-2 justify-center px-4 py-2  hover:bg-white hover:text-orange-color transition-all cursor-pointer">
                <MdDone className="hover:bg-[#1D1B4C]" />
                Request a Free Consultation
              </button>
            </Link>
          </div>
        </div>
        {/*  */}
        <div className="relative flex justify-center items-center">
          <div className="absolute inset-0 bg-orange-600 w-full h-full transform -translate-x-14 -translate-y-14 z-0"></div>
          <div className="relative">
            <Image
              src="/ForCompanies1.webp"
              width={450}
              height={450}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 ml-4 mr-4 sm:ml-7 sm:mr-7 rounded-t-3xl bg-white bg-opacity-90 p-2 sm:p-4">
              <p className="text-center text-lg sm:text-xl md:text-2xl font-bold text-black">
                Training for Your Company's <br /> Team
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <div className="bg-orange-color">
        <div className="max-w-6xl mx-auto px-5 py-10">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-white text-3xl tracking-wide font-extrabold flex items-center justify-center before:content-[''] before:h-3px before:w-10 before:bg-white before:mr-2 after:content-[''] after:h-3px after:w-10 after:bg-white after:ml-2">
              What We Provide
            </h3>
            <p className="text-md  text-white">
              Our curriculum is customizable to meet the specific needs of your
              institute. Whether you’re looking for a beginner’s course or{" "}
              <br /> advanced training, we’ve got you covered.
            </p>
          </div>
          <div className="bg-gray-100 ">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="border-2 border-orange-color bg-white border-dashed rounded-lg shadow-lg p-6 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-orange-color p-4 rounded-full">
                      <img
                        src={card.icon}
                        alt={card.title}
                        className="w-12 h-12 text-white"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-600">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center space-y-4 mb-12 mt-20">
        <h3 className="text-green-500 text-md tracking-wide font-extrabold flex items-center justify-center before:content-[''] before:h-3px before:w-10 before:bg-green-500 before:mr-2 after:content-[''] after:h-3px after:w-10 after:bg-green-500 after:ml-2">
          How It Works
        </h3>
        <h2 className="text-3xl md:text-4xl text-wrap font-extrabold pb-5 text-gray-900 text-blue-950">
          Seamlessly Integrated, Fully Customized
        </h2>
      </div>
      {/*  */}

      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {steps.map((step) => (
              <div
                key={step.id}
                className="relative flex flex-col items-center text-center mb-8 md:mb-0 md:w-1/4 group"
              >
                <div className="relative w-36 h-36 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-color">
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-black/60 group-hover:bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.id}
                  </div>
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-lg w-60 text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*  */}
      <div className="max-w-6xl mx-auto px-5 py-10">
        <div className="bg-white p-12 rounded-lg border-2 border-dashed shadow-lg flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6  mx-auto">
          <div className="flex-1 space-y-4">
            <p className="text-black  mb-6 text-3xl tracking-wide font-extrabold flex items-center justify-start before:content-[''] before:h-3px before:w-10 before:bg-orange-color before:mr-2">
              Why Choose This Training?
            </p>
            {/* <h1 className="text-4xl font-bold text-blue-950">The Power of Personalized  Learning</h1> */}
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">✔️</span>
                <div>
                  <h3 className="font-semibold">Custom Fit</h3>
                  <p>The course is designed just for your students.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">✔️</span>
                <div>
                  <h3 className="font-semibold">Expert Teaching</h3>
                  <p>Our team of professionals leads the training.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">✔️</span>
                <div>
                  <h3 className="font-semibold">Efficient and Easy</h3>
                  <p>
                    You get a high-quality course without the work of creating
                    it yourself.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">✔️</span>
                <div>
                  <h3 className="font-semibold">All Materials Provided</h3>
                  <p>We supply everything needed for the course.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <Image
                src="/aa.png"
                width={550}
                height={550}
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="bg-orange-500 text-white ">
        <div className="max-w-6xl mx-auto px-10 py-10   flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
          <div className="flex-1 pt-10">
            <h2 className="text-5xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-4">
              Join our tailored marketing courses and take the next step in your
              professional journey. Whether you’re looking to improve your
              team’s capabilities or build a strong foundation for your own
              business, our courses are designed to meet your needs.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <IoArrowForwardCircleOutline size={25} />
                <div>
                  <strong>Expert-Led Training:</strong> Learn from industry
                  professionals with hands-on experience.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <IoArrowForwardCircleOutline size={30} />
                <div>
                  <strong>Practical Applications:</strong> Apply your knowledge
                  through real-world projects and case studies.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <IoArrowForwardCircleOutline size={25} />
                <div>
                  <strong>Up-to-Date Content:</strong> Stay current with the
                  latest marketing trends and tools.
                </div>
              </li>
            </ul>
          </div>
          <div className="flex-1" id="contact">
            <h2 className="text-5xl font-bold mb-4">Contact us now!</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="w-full px-2 mb-4">
                <input
                  onChange={handleChange}
                  value={formData.name}
                  type="text"
                  placeholder="Your name*"
                  name="name"
                  className="w-full p-3 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
                {errors.name && <p className="text-white">{errors.name}</p>}
              </div>
              <div className="w-full px-2 mb-4">
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Your email*"
                  className="w-full p-3 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
                {errors.email && <p className="text-white">{errors.email}</p>}
              </div>
              <div className="w-full px-2 mb-4">
                <input
                  onChange={handleChange}
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  placeholder="Phone*"
                  className="w-full p-3 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
                {errors.phone && <p className="text-white">{errors.phone}</p>}
              </div>
              <div className="w-full px-2 mb-4">
                <select
                  onChange={handleChange}
                  value={formData.OptionSubject}
                  name="OptionSubject"
                  id="subject"
                  className="w-full p-3 rounded bg-white text-slate-500 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300"
                >
                  <option value="Subject">Subject</option>
                  <option value="Success fullfil">Success fullfil</option>
                  <option value="StartUp Business">StartUp Business</option>
                  <option value="Leadership work">Leadership work</option>
                  <option value="Business Growth">Business Growth</option>
                </select>
                {errors.OptionSubject && (
                  <p className="text-white">{errors.OptionSubject}</p>
                )}
              </div>
              <div className="full px-2">
                <input
                  type="submit"
                  value="✔️ Consult Today"
                  className="bg-blue-hover-color text-white font-bold w-full py-2 px-6 rounded-md shadow-lg hover:bg-white hover:text-orange-color transition duration-300"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <FAQComponent faqArray={faqs} />
    </>
  );
}

export default forCompanies;
