"use client";

import { MdKeyboardArrowRight } from "react-icons/md";
import { useState, useRef, useEffect } from "react";

const faqs = [
  {
    question: "What is the role of a Digital Marketer?",
    answer: (
      <p>
        A Digital Marketer or Digital Marketing Specialist is someone who
        administers the online presence of a business on search engines through
        various digital marketing techniques and strategies. They make sure that
        your business stands out from other competitors by checking the ranking
        of your business website. Through various digital marketing methods,
        they ultimately see that they drive more traffic to your website and
        improve your business sales conversions from it.
      </p>
    ),
  },
  {
    question: "How can you benefit from our Digital Marketing Mastery Course?",
    answer: (
      <ul className="list-disc pl-4">
        <li>
          You will be able to explore its complete areas in detail with
          practical tasks including search engine optimization, web
          optimization, social media management, content writing, content
          management systems, and much more.
        </li>
        <li>
          You will be prepared for taking up 20+ digital marketing
          certifications.
        </li>
        <li>
          Since you will be under the guidance of expert digital marketing
          professionals, you will be equipped with the best skills and practices
          while implementing your digital marketing strategies.
        </li>
        <li>
          You gain an acquired skillset that teams up with your existing
          capabilities that accelerates your career growth.
        </li>
        <li>
          During the course period, you will be working with real-time examples
          practically. Hence, you will be confident enough to take up the job.
        </li>
      </ul>
    ),
  },
  {
    question: "Who should enroll for this course?",
    answer: (
      <ul className="list-disc pl-4">
        <li>
          Higher secondary graduate students looking for entry-level jobs in the
          digital marketing field.
        </li>
        <li>
          Graduates and post-graduates in computer science, computer
          engineering, Business management, and commerce.
        </li>
        <li>
          Any working professional who wants to effectively handle the digital
          marketing and social media activities of their business from scratch.
        </li>
      </ul>
    ),
  },
  {
    question:
      "What qualifications do you need to take up our digital marketing training?",
    answer: (
      <p>
        You should have the normal computer and internet navigation skills to
        build a profession in digital marketing. If you have got skills in
        graphic designing, multimedia, or web designing, then this is an
        additional recommended skill to back up your career.
      </p>
    ),
  },
  {
    question:
      "What is the scope of Digital Marketing in today's business world?",
    answer: (
      <p>
        In today’s job market, digital marketing is one of the most essential
        in-demand skills across the globe. Therefore, recognizing the importance
        of this area, brands and businesses put in extra effort to support their
        digital marketing activities. As a result, the need for digital
        marketing skills is very high, hence creating a wide range of versatile
        career opportunities in the market space. <br />
        <br />
        You get multiple career choices to choose from and also better pay. If
        you have got a business, then you can also take care of the digital
        marketing activities of your company or brand. Therefore, you will be
        able to cut down costs as well.
      </p>
    ),
  },
  {
    question:
      "What skills will you gain after completing our Digital Marketing program?",
    answer: (
      <div>
        <p>
          Since this course is 100% practical based, you will be prepared to
          take up a job in any of the given 10 most important domains of digital
          marketing included in our mastery course.
        </p>
        <br />
        <ol className="list-decimal pl-4">
          <li>
            Firstly, you will be able to generate more traffic to your website.
          </li>
          <li>
            Secondly, you will be able to get your page to rank higher on the
            search results page using various SEO techniques.
          </li>
          <li>
            Thirdly, you will be able to manage your business on the most
            important social media platforms in an organized manner.
          </li>
          <li>
            Fourth, you will be able to generate amazing user-generated content.
          </li>
          <li>
            Ultimately, you will see a steady increase in your sales revenue
            compared to your past years.
          </li>
        </ol>
      </div>
    ),
  },
];

const FAQComponent = ({ faqArray = faqs }) => {
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
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-center space-y-4 mb-12">
        <h3 className="text-green-color text-md tracking-wide font-extrabold flex items-center justify-center before:content-[''] before:h-3px before:w-10 before:bg-green-color before:mr-2 after:content-[''] after:h-3px after:w-10 after:bg-green-color after:ml-2">
          Quick Answers
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
      </div>

      {faqArray.map((faq, index) => (
        <div key={index} className="border border-light-gray mb-2px">
          <button
            className={`w-full text-left p-4 bg-orange-color ${
              openIndex === index ? "bg-orange-600" : "bg-orange-color"
            } hover:bg-orange-600 transition-colors text-white font-semibold`}
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
  );
};

export default FAQComponent;
