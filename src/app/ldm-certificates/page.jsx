import React from "react";

export default function LDMCertifications() {
    const certifications = [
        {
            title: "Ecommerce Website Development",
            description:
                "This course is designed to help you develop skills in ecommerce web design, covering key areas such as platform selection, website security, and payment gateway integration. By the end of this course, you'll be able to build a fully functional ecommerce website from scratch.",
            fee: "AED 1500",
            icon: "🌐", // Icon representing website or globe
        },
        {
            title: "Mastering in Search Engine Optimization (SEO)",
            description:
                "Gain in-depth knowledge of SEO techniques that will help your website rank higher in search engine results. This course covers everything from keyword research to on-page optimization, link building, and analytics.",
            fee: "AED 1500",
            icon: "🔍", // Icon representing search or magnifying glass
        },
        {
            title: "Mastering in Social Media Marketing",
            description:
                "Learn to optimize social media campaigns to drive traffic, engagement, and sales. This course includes strategies for content creation, advertising, and analyzing performance across various social media platforms.",
            fee: "AED 1500",
            icon: "📱", // Icon representing social media or mobile device
        },
        {
            title: "Mastering in Google Marketing",
            description:
                "Master the tools and strategies for effective Google marketing. This course covers Google Ads, Google Analytics, and other Google tools that help you reach your target audience and measure your success.",
            fee: "AED 2000",
            icon: "📈", // Icon representing growth or analytics
        },
        {
            title: "Mastering in Email Marketing",
            description:
                "Learn advanced email marketing strategies to engage your audience and drive conversions. This course covers list building, automation, campaign design, and performance tracking.",
            fee: "AED 2000",
            icon: "📧", // Icon representing email
        },
        {
            title: "Mastering in Online Business",
            description:
                "Build and grow your online business with this comprehensive course. Topics include business planning, digital marketing, customer acquisition, and scaling your business to new heights.",
            fee: "AED 2500",
            icon: "💼", // Icon representing business or briefcase
        },
        {
            title: "Mastering in Google Analytics",
            description:
                "Understand Google Analytics to make data-driven decisions. This course covers setting up tracking, interpreting data, and optimizing your website based on user behavior.",
            fee: "AED 2000",
            icon: "📊", // Icon representing analytics or data
        },
    ];


    return (
        <div className="bg-orange-400">
            <div className="max-w-6xl py-12 mx-auto px-4">
                <h2 className="text-white text-3xl font-bold text-center mb-4">
                    — LDM Certifications
                </h2>
                <p className="text-white text-center mb-12">
                    Our certifications are perfect for Digital Marketing Courses with focused scope and high impact strategy.
                </p>

                <div className="grid grid-cols-1  gap-6">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="border-dashed border-2 border-white p-6 rounded-lg bg-orange-500 text-white"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-start items-center space-x-4">
                                <div className="flex flex-col sm:flex-row gap-2 justify-center sm:justify-start items-center">
                                    <div className="text-4xl">{cert.icon}</div>
                                    <div className="text-center sm:text-left">
                                        <h3 className="text-xl font-bold">{cert.title}</h3>
                                        <p className="text-sm mt-2">{cert.description}</p>
                                        <p className="mt-4 font-bold">Certification Fee: {cert.fee}</p>
                                        <button className="mt-4 bg-white text-orange-600 px-4 py-2 rounded-lg hover:bg-orange-600 hover:text-white border-2 border-orange-600 transition-all">
                                            RESERVE YOUR SEAT
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
