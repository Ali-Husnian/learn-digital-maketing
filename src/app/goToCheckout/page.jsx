"use client";

import { useRouter } from "next/navigation"; // Import useRouter from next/navigation

const Page = ({ price, details, btnText, className, icon }) => {
  const router = useRouter();

  const handleCheckout = () => {
    // Redirecting to checkout page with query parameters
    router.push(
      `/checkout?price=${price}&details=${encodeURIComponent(details)}`
    );
  };

  return (
    <button onClick={handleCheckout} className={`${className}`}>
      {icon}
      {btnText}
    </button>
  );
};

export default Page;

// +971509139489
