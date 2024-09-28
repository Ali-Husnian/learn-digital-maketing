import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  {
    /*
    import { useEffect } from "react"; 
    "use client";
import Image from "next/image";
  useEffect(() => {
    const handleScroll = () => {
      const whatsappLinkElement = document.querySelector(".whatsapp-link");
      if (window.scrollY > 100) {
        whatsappLinkElement?.classList.add("visable");
      } else {
        whatsappLinkElement?.classList.remove("visable");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    
    */
  }
  return (
    <div>
      <Link
        href="https://wa.me/+96871197788"
        target="_blank"
        className="whatsapp-link visable relative"
      >
        <span className="absolute left-0 right-0 top-0 bottom-0 m-auto -z-50 size-14">
          <span className="flex size-full items-center justify-center animate-ping rounded-full bg-green-400 opacity-75"></span>
        </span>

        <p className="whatsapp-icon z-50 text-white bg-green-500 flex items-center justify-center p-2">
          <FaWhatsapp size={40} />
        </p>
        {/*
         <Image
          src="/whatsapp-icon.webp"
          alt="whatsapp-icons"
          width={40}
          height={40}
          className="whatsapp-icon z-50"
        />
        
        */}
      </Link>
    </div>
  );
};

export default WhatsappButton;
