"use client";
import axios from "axios";
import { useState } from "react";
import toast, { ToastBar } from "react-hot-toast";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(`/api/users/forgot-password`, formData);
      console.log(response.data.message);
      toast.success(response.data.message);
      // router.push("/");
      setFormData({ email: "" });
    } catch (error) {
      toast.error(error.response?.data?.error || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="relative h-55vh">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed bg-[url('/checkout1.jpg')]"></div>

        <div className="relative flex flex-col items-center justify-center h-full text-center text-white bg-black/50">
          <h1 className="text-5xl font-bold mb-4">
            <span>My Account</span>
          </h1>
          <h2 className="text-lg tracking-wide flex gap-0">
            Home - Forgot Password
          </h2>
        </div>
      </div>

      <h2 className="text-2xl text-heading-color font-bold text-center mt-12">
        {loading ? "Processing..." : "Forgot Password"}
      </h2>

      <div className="max-w-2xl bg-li-gray border border-light-gray mx-auto mt-6 p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              className="block mb-1 font-medium text-gray-700 text-text-color"
              htmlFor="email"
            >
              Enter your email address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              className="w-full px-4 py-13px border border-light-gray focus:outline-none focus:ring-1 focus:ring-orange-color"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex flex-col items-start justify-start space-y-6 mb-6">
            <button
              type="submit"
              className="px-6 py-11px text-white font-bold bg-orange-500 rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
            >
              Submit
            </button>
            <p className="text-green-color">
              Don't need to reset your password? Skip this step.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Page;
