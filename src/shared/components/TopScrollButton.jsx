"use client";
import { FaArrowUpLong } from "react-icons/fa6";
import ScrollToTop from "react-scroll-up";

const TopScrollButton = () => {
  return (
    <div className="relative z-[300]">
      <ScrollToTop showUnder={160}>
        <p className="text-white bg-orange-color p-14px rounded-full text-lg font-semibold group">
          <FaArrowUpLong className="transition-all group-hover:-translate-y-1" />
        </p>
      </ScrollToTop>
    </div>
  );
};

export default TopScrollButton;
