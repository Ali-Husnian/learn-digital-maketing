"use client";
import { useState } from "react";
import {
  FaSearch,
  FaFacebookF,
  FaTwitter,
  FaDribbble,
  FaBehance,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [
    { src: "/gallery-1.jpg" },
    { src: "/gallery-2.jpg" },
    { src: "/gallery-3.jpg" },
    { src: "/gallery-4.jpg" },
    { src: "/gallery-5.jpg" },
    { src: "/gallery-6.jpg" },
  ];

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <footer className="bg-white text-text-color">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 py-12">
        {/* Logo and Description */}
        <div className="col-span-1 space-y-2 md:lg:space-y-6">
          <div className="flex items-center mb-4">
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={150} height={150} />
            </Link>
          </div>
          <p className="text-md">
            We work with a passion of taking challenges and creating new ones in
            the advertising sector.
          </p>
        </div>

        {/* Our Cources */}
        <div className="col-span-1 space-y-2 md:lg:space-y-6">
          <h4 className="text-xl text-heading-color font-bold mb-4">
            Our Cources
          </h4>
          <ul className="text-sm text-text-color mb-4 space-y-2">
            <li className="hover:text-green-color transition-colors">
              <Link href="/digital-marketing">Diploma Digital Marketing</Link>
            </li>
            <li className="hover:text-green-color transition-colors">
              <Link href="/website-developmemt">
                Ecommerce Website Development
              </Link>
            </li>
            <li className="hover:text-green-color transition-colors">
              <Link href="/search-engine-optimization">
                Mastering in Search Engine Optimization
              </Link>
            </li>
            <li className="hover:text-green-color transition-colors">
              <Link href="/social-media-marketing">
                Mastering in Social Media Marketing
              </Link>
            </li>
            <li className="hover:text-green-color transition-colors">
              <Link href="/google-marketing">
                Mastering in Google Marketing
              </Link>
            </li>
            <li className="hover:text-green-color transition-colors">
              <Link href="/email-marketing">Mastering in Email Marketing</Link>
            </li>
            <li className="hover:text-green-color transition-colors">
              <Link href="/google-analytics">
                Mastering in Google Analytics
              </Link>
            </li>
            <li className="hover:text-green-color transition-colors">
              <Link href="/online-busieness">Online Busieness in 30 Days</Link>
            </li>
          </ul>
          {/*Links*/}
        </div>

        {/* Official Info */}
        <div className="col-span-1 space-y-2 md:lg:space-y-4">
          <h4 className="text-xl text-heading-color font-bold mb-4">
            Official info:
          </h4>
          <p className="text-sm text-text-color">
            <Link
              href="https://maps.app.goo.gl/rKQU2nfkKxoG4DUN9"
              target="_blank"
            >
              <span className="flex items-center mb-2">
                <FaMapMarkerAlt className="text-orange-600 mr-2" /> Dubai UAE
              </span>
            </Link>
            <Link href="https://wa.me/+971501384504">
              <span className="flex items-center mb-2">
                <FaPhoneAlt className="text-orange-600 mr-2" /> ++971501384504
              </span>
            </Link>
          </p>
          <p className="text-sm text-text-color">
            <Link
              href="https://maps.app.goo.gl/rKQU2nfkKxoG4DUN9"
              target="_blank"
            >
              <span className="flex items-center mb-2">
                <FaMapMarkerAlt className="text-orange-600 mr-2" />
                Sultanate of Oman
              </span>
            </Link>
            <Link href="https://wa.me/+96871197788">
              <span className="flex items-center mb-2">
                <FaPhoneAlt className="text-orange-600 mr-2" /> +96871197788
              </span>
            </Link>
          </p>
          <p className="text-sm text-heading-color font-bold">Open Hours:</p>
          <span className="text-text-color">
            Mon - Sat: 8 am - 5 pm,
            <br />
            Sunday: CLOSED
          </span>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600">
              <FaFacebookF />
            </a>
            <a href="#" className="text-blue-400">
              <FaTwitter />
            </a>
            <a href="#" className="text-pink-600">
              <FaDribbble />
            </a>
            <a href="#" className="text-blue-500">
              <FaBehance />
            </a>
          </div>
        </div>

        {/* Gallery */}
        <div className="col-span-1">
          <h4 className="text-xl text-heading-color font-bold mb-4">Gallery</h4>
          <div className="grid grid-cols-3 gap-2">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden text-center"
              >
                <div>
                  <Image
                    src={image.src}
                    alt={`Gallery ${index + 1}`}
                    width={300}
                    height={300}
                    className="rounded-lg cursor-pointer"
                  />
                </div>
                <div
                  onClick={() => openLightbox(index)}
                  className=" cursor-pointer absolute h-full w-full bg-black/60 rounded-md flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <div className="px-10 text-start">
                    <span className="text-white text-mg">
                      <FaSearch />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isOpen && (
        <Lightbox
          slides={images}
          open={isOpen}
          index={photoIndex}
          close={() => setIsOpen(false)}
          plugins={[Thumbnails]}
          thumbnails={{ width: 100, height: 100 }}
        />
      )}

      <div className="w-full py-6 px-4 bg-black text-center text-white text-sm text-gray-500">
        <p className="font-semibold text-md tracking-wide">
          {new Date().getFullYear()} © All rights reserved by Learn Digital
          Marketing. Powered by{" "}
          <a
            href="https://babelnajah.ae/"
            className="text-orange-color "
            target="_blank"
          >
            Bab el Najah
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
