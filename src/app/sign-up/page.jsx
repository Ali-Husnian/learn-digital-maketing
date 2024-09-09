"use client"; // Ensure the component is marked as a client component
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Correct import for Next.js 13+
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";

const Page = () => {
  const router = useRouter(); // Correct use of the router
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Toggle Password Visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Handle Input Change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Validate Form Data
  const validate = () => {
    const newErrors = {};

    if (!formData.username) {
      newErrors.username = "User name is required.";
    }
    if (!formData.email) {
      newErrors.email = "Email address is required.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    return newErrors;
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        setLoading(true);
        const response = await axios.post(
          "http://localhost:3000/api/users/sign-up",
          formData
        );
        console.log(response.data);
        toast.success("Account created successfully!");
        router.push("/sign-in"); // Correct usage of router
      } catch (error) {
        console.error(error);
        toast.error(error.response?.data?.error || "An error occurred");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <section>
      <div className="relative h-55vh">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed bg-[url('/checkout1.jpg')]"></div>

        {/* Overlay */}
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white bg-black/50">
          <h1 className="text-5xl font-bold mb-4">
            <span>My Account</span>
          </h1>
          <h2 className="text-lg tracking-wide flex gap-0">Home - Sign-Up</h2>
        </div>
      </div>

      <h2 className="text-2xl text-heading-color font-bold text-center mt-12">
        {loading ? "Processing..." : "Sign Up"}
      </h2>

      <div className="max-w-2xl bg-li-gray border border-light-gray mx-auto mt-6 p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              className="block mb-1 font-medium text-gray-700 text-text-color"
              htmlFor="username"
            >
              Full Name: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full px-4 py-13px border border-light-gray focus:outline-none focus:ring-1 focus:ring-orange-color"
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username}</p>
            )}
          </div>

          <div className="mb-6">
            <label
              className="block mb-1 font-medium text-gray-700 text-text-color"
              htmlFor="email"
            >
              Email address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-13px border border-light-gray focus:outline-none focus:ring-1 focus:ring-orange-color"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
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
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-13px border border-light-gray focus:outline-none focus:ring-1 focus:ring-orange-color"
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
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          <div className="mb-6 relative">
            <label
              className="block mb-1 font-medium text-gray-700 text-text-color"
              htmlFor="confirmPassword"
            >
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full px-4 py-13px border border-light-gray focus:outline-none focus:ring-1 focus:ring-orange-color"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>

          <div className="flex flex-col items-start justify-start space-y-6 mb-6">
            <button
              type="submit"
              className="px-6 py-11px text-white font-bold bg-orange-500 rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
            >
              Sign-up
            </button>
          </div>
          <span>
            Do you have an account?{" "}
            <Link className="text-orange-500 hover:underline" href="/sign-in">
              Sign-in
            </Link>
          </span>
        </form>
      </div>
    </section>
  );
};

export default Page;
