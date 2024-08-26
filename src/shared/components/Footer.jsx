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
    <footer className="bg-white text-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 py-12">
        {/* Logo and Description */}
        <div className="col-span-1 space-y-2 md:lg:space-y-6">
          <div className="flex items-center mb-4">
            <Image src="/logo.png" alt="Logo" width={150} height={150} />
          </div>
          <p className="text-sm">
            We work with a passion of taking challenges and creating new ones in
            the advertising sector.
          </p>
        </div>

        {/* Newsletter */}
        <div className="col-span-1 space-y-2 md:lg:space-y-6">
          <h4 className="text-xl font-bold mb-4">Newsletter</h4>
          <p className="text-sm mb-4">
            Subscribe to our newsletter to get our latest updates & news.
          </p>
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

        {/* Official Info */}
        <div className="col-span-1 space-y-2 md:lg:space-y-6">
          <h4 className="text-xl font-bold mb-4">Official info:</h4>
          <p className="text-sm">
            <span className="flex items-center mb-2">
              <FaMapMarkerAlt className="text-orange-600 mr-2" /> Dubai UAE
            </span>
            <span className="flex items-center mb-2">
              <FaPhoneAlt className="text-orange-600 mr-2" /> 1-888-452-1505
            </span>
          </p>
          <p className="text-sm font-bold">Open Hours:</p>
          <span>
            Mon - Sat: 8 am - 5 pm,
            <br />
            Sunday: CLOSED
          </span>
        </div>

        {/* Gallery */}
        <div className="col-span-1">
          <h4 className="text-xl font-bold mb-4">Gallery</h4>
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
          2024 © All rights reserved by Learn Digital Marketing. Powered by{" "}
          <span className="text-orange-color ">Bab el Najah</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
