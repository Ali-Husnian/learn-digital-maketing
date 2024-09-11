"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { MdDone } from "react-icons/md";
import Link from "next/link";
import CheckoutButton from "@/app/goToCheckout/page";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

function BusinessSetup() {
  const cardData = [
    {
      icon: "/1.png",
      title: "Tailored Learning Experience",
      description:
        "Our “On Demand Module” training is crafted specifically for entrepreneurs like you, offering a personalized, 1-on-1 learning experience.",
    },
    {
      icon: "/2.png",
      title: "Customized Skill Development",
      description:
        "Whether you aim to enhance an existing skill or explore new areas of expertise, our sessions are fully customized to help you grow.",
    },
    {
      icon: "/3.png",
      title: "Flexible and Interactive Sessions",
      description:
        "Delivered live via Zoom, our training offers the flexibility to learn at your own pace. These interactive sessions allow you to engage directly with expert trainers.",
    },
  ];
  const steps = [
    {
      id: 1,
      icon: "/1.png",
      title: "Identify Your Needs",
      description:
        "We understand your challenges and goals to help elevate your  business through learning.",
    },
    {
      id: 2,
      icon: "/2.png",
      title: "Book Your Session",
      description:
        "Book a 1-on-1 session at your  convenience with flexible scheduling for busy lives.",
    },
    {
      id: 3,
      icon: "/3.png",
      title: "Customized Learning Experience",
      description:
        "Receive personalized guidance on topics that matter in a fully tailored session.",
    },
    {
      id: 4,
      icon: "/1.png",
      title: "Apply Your New Skills",
      description:
        "Apply your learning to enhance marketing strategies and launch successful campaigns.",
    },
  ];
  const faqs = [
    {
      question:
        "What is personalized digital marketing training for entrepreneurs?",
      answer: (
        <p>
          Personalized digital marketing training for entrepreneurs is a
          customized educational program designed to equip business owners with
          tailored strategies and tools specific to their industry, goals, and
          target audience.
        </p>
      ),
    },
    {
      question: "Who can benefit from this training?",
      answer: (
        <p>
          This training is ideal for entrepreneurs at any stage of their
          business, whether they are just starting out or looking to scale their
          existing operations. It is especially beneficial for those who want to
          understand digital marketing’s role in growing their brand.
        </p>
      ),
    },
    {
      question: "How is the training personalized?",
      answer: (
        <p>
          The training is customized based on the entrepreneur’s business model,
          target market, current digital presence, and specific goals. It may
          include one-on-one sessions, tailored learning materials, and action
          plans.
        </p>
      ),
    },
    {
      question: "What is the duration of the training program?",
      answer: (
        <p>
          The duration of the training program varies based on your needs and
          goals. It typically ranges from a few weeks to several months, with
          flexible scheduling options available.
        </p>
      ),
    },
    {
      question: "What is the format of the training?",
      answer: (
        <p>
          The training can be delivered in various formats including one-on-one
          sessions, group workshops, online webinars, and self-paced courses,
          depending on your preferences and availability.
        </p>
      ),
    },
    {
      question: "Will I receive ongoing support after the training?",
      answer: (
        <p>
          Yes, ongoing support is available to help you implement the strategies
          and techniques learned during the training. This may include follow-up
          consultations, additional resources, and access to a support
          community.
        </p>
      ),
    },
    {
      question: "How do I measure the success of the training?",
      answer: (
        <p>
          Success can be measured through various metrics such as increased
          website traffic, higher conversion rates, improved engagement on
          social media, and better overall digital marketing performance.
          Regular assessments and feedback sessions will help track progress.
        </p>
      ),
    },
    {
      question: "How can I enroll in the training program?",
      answer: (
        <p>
          You can enroll by contacting us directly through our website or by
          phone. We will provide you with more details about the program,
          schedule a consultation, and guide you through the enrollment process.
        </p>
      ),
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref && openIndex === index) {
        ref.style.maxHeight = `${ref.scrollHeight}px`;
      } else if (ref) {
        ref.style.maxHeight = "0";
      }
    });
  }, [openIndex]);

  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-100px px-4 bg-white">
        <div className="max-w-lg">
          <p className="text-black mb-6 text-1xl tracking-wide font-bold flex items-center justify-start before:content-[''] before:h-3px before:w-10 before:bg-orange-color before:mr-2">
            We Provide Business Setup + (1 to 1 Session)
          </p>
          <h2 className="text-4xl font-bold text-heading-color mb-6">
            Personalized Digital Marketing Training for Entrepreneurs.
          </h2>
          <p className="text-text-color mb-6">
            Get exactly what you need with tailored, live 1-on-1 sessions via
            Zoom. Learn at your pace, on your terms.Bye. Bye.{" "}
          </p>
          <div className="flex justify-between">
            <CheckoutButton
              icon={<MdDone className="hover:bg-[#1D1B4C]" />}
              price="1000"
              details="Business-setup-1-to-1-session"
              className="border border-orange-color bg-orange-color text-white font-medium text-17px flex items-center gap-2 justify-center px-4 py-2  hover:bg-white hover:text-orange-color transition-all cursor-pointer"
              btnText="Book Your Personalized Session"
            />

            {/*
                            <Link href={"/checkout"}>
                            <button className="border border-orange-color bg-orange-color text-white font-medium text-17px flex items-center gap-2 justify-center px-4 py-2  hover:bg-white hover:text-orange-color transition-all cursor-pointer">
                                <MdDone className="hover:bg-[#1D1B4C]" />
                                Book Your Personalized Session
                            </button>
                        </Link>
                            
                            */}
          </div>
        </div>
        <div className="relative mt-6 md:mt-0 md:w-1/2 flex justify-center">
          <div className="relative">
            <Image src="/setup.jpg" width={450} height={450} />
            <div className="absolute top-14 right-0 bg-white  rounded-3xl p-3 shadow-lg">
              <div className="flex justify-between items-center gap-2">
                <div className="bg-orange-color text-white text-2xl font-bold rounded-full p-6"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <div className="bg-orange-color">
        <div className="max-w-6xl mx-auto px-5 py-10">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-white text-md tracking-wide font-extrabold flex items-center justify-center before:content-[''] before:h-3px before:w-10 before:bg-white before:mr-2 after:content-[''] after:h-3px after:w-10 after:bg-white after:ml-2">
              Personalized Learning
            </h3>
            <h2 className="text-3xl md:text-4xl text-wrap font-bold pb-5 text-gray-900 text-white">
              Tailored Digital Marketing Training <br />
              for Your Unique Needs
            </h2>
            <p className="text-lg  text-white">
              As an entrepreneur, you face unique challenges that require
              specific skills. Our “On Demand Module” training offers <br />{" "}
              personalized, 1-on-1 sessions designed to meet your exact needs.
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
        <h3 className="text-green-color text-md tracking-wide font-extrabold flex items-center justify-center before:content-[''] before:h-3px before:w-10 before:bg-green-color before:mr-2 after:content-[''] after:h-3px after:w-10 after:bg-green-color after:ml-2">
          How It Works
        </h3>
        <h2 className="text-3xl md:text-4xl text-wrap font-extrabold pb-5 text-gray-900 text-blue-950">
          How Our Tailored 1-on-1 Training Works
        </h2>
      </div>
      {/*  */}

      <div className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {steps.map((step) => (
              <div
                key={step.id}
                className="relative flex flex-col items-center text-center mb-8 md:mb-0 md:w-1/4 group"
              >
                <div className="relative w-36 h-36  transition-colors bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-color">
                  <div className="absolute -top-2 -left-2 w-6 h-6 bg-black/70 group-hover:bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.id}
                  </div>
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="w-20 h-20 "
                  />
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
            <p className="text-orange-color  mb-6 text-1xl tracking-wide font-bold flex items-center justify-start before:content-[''] before:h-3px before:w-10 before:bg-orange-color before:mr-2">
              Why Choose This Training?
            </p>
            <h1 className="text-4xl font-bold text-blue-950">
              The Power of Personalized Learning
            </h1>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">✔️</span>
                <div>
                  <h3 className="font-semibold">Tailored Just for You</h3>
                  <p>
                    We create a learning plan based on your unique needs and
                    goals.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">✔️</span>
                <div>
                  <h3 className="font-semibold">Expert Guidance</h3>
                  <p>
                    Learn directly from a seasoned digital marketing
                    professional with experience in your field.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">✔️</span>
                <div>
                  <h3 className="font-semibold">Flexible and Convenient</h3>
                  <p>
                    Book sessions that fit your schedule and focus on what’s
                    most important to you.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">✔️</span>
                <div>
                  <h3 className="font-semibold">Immediate Impact</h3>
                  <p>
                    Gain practical, actionable insights that you can use right
                    away to grow your business.
                  </p>
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
              Let’s create a digital marketing course that fits your institute
              perfectly. Contact us today to start building your custom course.
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
          <div className="flex-1">
            <h2 className="text-5xl font-bold mb-4">Contact us now!</h2>
            <form className="space-y-4">
              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                  <input
                    type="text"
                    placeholder="First name *"
                    className="w-full p-3 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300"
                  />
                </div>
                <div className="w-full md:w-1/2 px-2">
                  <input
                    type="text"
                    placeholder="Last name *"
                    className="w-full p-3 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                  <input
                    type="email"
                    placeholder="Your mail *"
                    className="w-full p-3 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300"
                  />
                </div>
                <div className="w-full md:w-1/2 px-2">
                  <input
                    type="tel"
                    placeholder="Phone number *"
                    className="w-full p-3 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300"
                  />
                </div>
              </div>
              <textarea
                placeholder="Message..."
                className="w-full p-3 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300 h-32"
              />
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded w-full"
              >
                Send now
              </button>
            </form>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="text-center space-y-4 mb-12">
          <h3 className="text-green-color text-md tracking-wide font-extrabold flex items-center justify-center before:content-[''] before:h-3px before:w-10 before:bg-green-color before:mr-2 after:content-[''] after:h-3px after:w-10 after:bg-green-color after:ml-2">
            Answered all your Quires
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950">
            Frequently Asked Questions
          </h2>
        </div>

        {faqs.map((faq, index) => (
          <div key={index} className="border border-light-gray mb-2px">
            <button
              className="w-full text-left p-4 bg-orange-color text-white font-semibold"
              onClick={() => toggleFAQ(index)}
            >
              <span className="flex items-center">
                <MdKeyboardArrowRight
                  size={25}
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-90" : ""
                  }`}
                />
                {faq.question}
              </span>
            </button>
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className="overflow-hidden transition-max-height duration-500 ease-in-out"
            >
              <div className="p-4 text-gray-800 bg-white">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default BusinessSetup;
