"use client"
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { MdDone } from "react-icons/md";
import Link from "next/link";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

function OtherInstitute() {
    const cardData = [
        {
            icon: "/1.png",
            title: "Tailored Course Content",
            description: "We build the course around what your students need to learn. Whether it’s basic or advanced, we customize every part to match your goals."
        },
        {
            icon: "/2.png",
            title: "Expert Instructors",
            description: "Our team of digital marketing professionals will teach your students. They bring real-world experience and practical knowledge."
        },
        {
            icon: "/3.png",
            title: "Complete Materials",
            description: "We provide everything needed for the course, including presentations, assignments, and case studies, all customized to fit your course content."
        }
    ];
    const steps = [
        {
            id: 1,
            icon: "/1.png",
            title: "Identify Your Needs",
            description: "We understand your challenges and goals to help elevate your  business through learning."
        },
        {
            id: 2,
            icon: "/2.png",
            title: "Book Your Session",
            description: "Book a 1-on-1 session at your  convenience with flexible scheduling for busy lives."
        },
        {
            id: 3,
            icon: "/3.png",
            title: "Customized Learning Experience",
            description: "Receive personalized guidance on topics that matter in a fully tailored session."
        },
        {
            id: 4,
            icon: "/1.png",
            title: "Apply Your New Skills",
            description: "Apply your learning to enhance marketing strategies and launch successful campaigns."
        }
    ];
    const faqs = [
        {
            question: "What types of marketing courses do you offer?",
            answer: (
                <p>
                    We offer a variety of marketing courses including digital marketing, social media marketing, content marketing, and more.  </p>
            ),
        },
        {
            question: "Are the courses suitable for beginners?",
            answer: (

                <p>
                    Yes, our courses are designed for all skill levels, from beginners to advanced professionals.  </p>
            ),
        },
        {
            question: "Can the courses be customized for my team?",
            answer: (
                <p>
                    Absolutely! We can tailor our courses to meet the specific needs of your team and business objectives.   </p>
            ),
        },
        {
            question:
                "What is the duration of the courses?",
            answer: (
                <p>
                    Course durations vary depending on the content and learning mode, ranging from a few hours to several weeks.  </p>
            ),
        },
        {
            question:
                "Do you offer certifications?",
            answer: (
                <p>
                    Yes, we offer industry-recognized certifications upon successful completion of our courses.  </p>
            ),
        },
        {
            question:
                "Are there any prerequisites?",
            answer: (

                <p>
                    No, our courses are designed to be accessible to all, with no prior knowledge required.  </p>

            ),
        },
        {
            question:
                "How can I enroll in a course?",
            answer: (

                <p>

                    You can enroll directly through our website or contact our support team for assistance.   </p>

            ),
        },
        {
            question:
                "What support is available during the course?",
            answer: (

                <p>
                    We offer full support including access to instructors, course materials, and a dedicated student forum. </p>

            ),
        },
        {
            question:
                "Can I access the course material after completion?",
            answer: (

                <p>
                    Yes, you’ll have lifetime access to the course material after completing the course.</p>

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
                <div className="max-w-lg mb-20 ">
                    <p className="text-black mb-6 text-1xl tracking-wide font-bold flex items-center justify-start before:content-[''] before:h-3px before:w-10 before:bg-orange-color before:mr-2">
                        We Provide Trainers & Team
                    </p>
                    <h2 className="text-4xl font-bold text-heading-color mb-6">
                        Customized Digital  <br />Marketing Training for  <br /> Your Institute.
                    </h2>
                    <p className="text-text-color mb-6 ">In today’s digital world, equipping your students with digital marketing expertise is essential. We offer comprehensive digital marketing training solutions tailored for institutes like yours. By partnering with us, you can offer a complete digital marketing course, backed by our team of experts and high-quality training materials. This is your chance to enhance your curriculum without the hassle of developing new content from scratch.</p>
                    <div className="flex justify-between">
                        <Link href={"/checkout"}>
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
                    <div className="relative z-10">
                        <Image
                            src="/new.jpg"
                            width={450}
                            height={450}
                            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                        />
                        <div className="absolute bottom-0 left-0 right-0 ml-4 mr-4 sm:ml-7 sm:mr-7 rounded-t-3xl bg-white bg-opacity-90 p-2 sm:p-4">
                            <p className="text-center text-lg sm:text-xl md:text-2xl font-bold text-black">
                                We Help you to build a team <br /> of Digital Marketing Experts
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
                            Our curriculum is customizable to meet the specific needs of your institute. Whether you’re looking for a beginner’s course or  <br /> advanced training, we’ve got you covered.
                        </p>
                    </div>
                    <div className="bg-gray-100 ">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {cardData.map((card, index) => (
                                <div key={index} className="border-2 border-orange-color bg-white border-dashed rounded-lg shadow-lg p-6 text-center">
                                    <div className="flex justify-center mb-4">
                                        <div className="bg-orange-color p-4 rounded-full">
                                            <img src={card.icon} alt={card.title} className="w-12 h-12 text-white" />
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

            <div className="min-h-screen bg-gray-100 py-12">
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
                                    <img src={step.icon} alt={step.title} className="w-20 h-20 " />
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
                                    <h3 className="font-semibold">
                                        Custom Fit</h3>
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
                                    <p>You get a high-quality course without the work of creating it yourself.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-500 mr-2">✔️</span>
                                <div>
                                    <h3 className="font-semibold">
                                        All Materials Provided</h3>
                                    <p>We supply everything needed for the course.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="relative">
                            <Image src="/aa.png" width={550} height={550} className="rounded-md" />
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
                            Join our tailored marketing courses and take the next step in your professional journey. Whether you’re looking to improve your team’s capabilities or build a strong foundation for your own business, our courses are designed to meet your needs.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                                <IoArrowForwardCircleOutline size={25} />
                                <div>
                                    <strong>Expert-Led Training:</strong> Learn from industry professionals with hands-on experience.
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <IoArrowForwardCircleOutline size={30} />
                                <div>
                                    <strong>Practical Applications:</strong> Apply your knowledge through real-world projects and case studies.
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <IoArrowForwardCircleOutline size={25} />
                                <div>
                                    <strong>Up-to-Date Content:</strong> Stay current with the latest marketing trends and tools.
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
                                    className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-90" : ""
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
};

export default OtherInstitute;
