"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const page = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <section>
      <div className="relative h-55vh ">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed bg-[url('/checkout1.jpg')]"></div>

        {/* Overlay */}
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white bg-black/50">
          <h1 className="text-5xl font-bold mb-4">
            <span>My Account</span>
          </h1>
          <h2 className="text-lg tracking-wide flex gap-0">Home - Sign-In</h2>
        </div>
      </div>

      <h2 className="text-2xl text-heading-color font-bold text-center mt-12">
        Login
      </h2>
      <div className="max-w-2xl bg-li-gray border border-light-gray mx-auto mt-6 p-6">
        <form>
          <div className="mb-6">
            <label
              className="block mb-1 font-medium text-gray-700 text-text-color"
              htmlFor="username"
            >
              Username or email address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-13px border border-light-gray focus:outline-none focus:ring-1 focus:ring-orange-color"
              required
            />
          </div>

          <div className="mb-6 relative">
            <label
              className="block mb-1 font-medium text-gray-700 text-text-color"
              htmlFor="password"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              className="w-full px-4 py-13px border border-light-gray focus:outline-none focus:ring-1 focus:ring-orange-color"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute bottom-4 right-0 flex items-center px-3"
            >
              {passwordVisible ? (
                <AiOutlineEyeInvisible className="text-text-color h-5" />
              ) : (
                <AiOutlineEye className="text-text-color w-5 h-5" />
              )}
            </button>
          </div>

          <div className="flex flex-col items-start justify-start space-y-6 mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="px-6 py-11px text-white font-bold bg-orange-500 rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
            >
              Log in
            </button>
          </div>
          <div className="flex items-center justify-between text-sm gap-8">
            <span className="">
              <Link
                href="/forgot-password"
                className="text-orange-500 hover:underline"
              >
                Lost your password?
              </Link>
            </span>

            <span className="">
              Don't have account{" "}
              <Link className="text-orange-500 hover:underline" href="/sign-up">
                Sign-up
              </Link>{" "}
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default page;
