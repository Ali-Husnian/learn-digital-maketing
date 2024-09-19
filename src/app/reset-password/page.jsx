"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import toast from "react-hot-toast";

export default function ResetPassword() {
  const router = useRouter();
  const searchParams = useSearchParams(); // Get the token from the query parameter
  const token = searchParams.get("token");
  const [loading, setLoading] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [passwordVisible, setPasswordVisible] = useState(false);

  // Toggle Password Visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/users/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, newPassword }),
      });

      const data = await res.json();

      if (res.status === 200) {
        setSuccessMessage(data.message);
        toast.success(data.message);
        setLoading(true);
        setError("");
        router.push("/sign-in");
      } else {
        setError(data.error);
        setSuccessMessage("");
      }
    } catch (err) {
      setError("An error occurred while resetting your password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section>
        <div className="relative h-55vh">
          <div className="absolute inset-0 bg-cover bg-center bg-[url('/checkout1.jpg')]"></div>

          {/* Overlay */}
          <div className="relative flex flex-col items-center justify-center h-full text-center text-white bg-black/50">
            <h1 className="text-5xl font-bold mb-4">
              <span>My Account</span>
            </h1>
            <h2 className="text-lg tracking-wide flex gap-0">
              Home - Reset Password
            </h2>
          </div>
        </div>

        <h2 className="text-2xl text-heading-color font-bold text-center mt-12">
          {loading ? "Processing..." : "Reset Password"}
        </h2>

        <div className="max-w-2xl bg-li-gray border border-light-gray mx-auto mt-6 p-6">
          {successMessage && (
            <p className="text-green-500 py-2">{successMessage}</p>
          )}
          {error && <p className="text-red-500 my-2">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-6 relative">
              <label
                className="block mb-1 font-medium text-gray-700 text-text-color"
                htmlFor="newPassword"
              >
                New Password <span className="text-red-500">*</span>
              </label>
              <input
                type={passwordVisible ? "text" : "password"}
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
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
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-13px border border-light-gray focus:outline-none focus:ring-1 focus:ring-orange-color"
              />
            </div>

            <div className="flex flex-col items-start justify-start space-y-6 mb-6">
              <button
                type="submit"
                className="px-6 py-11px text-white font-bold bg-orange-500 rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
              >
                Reset Password
              </button>
            </div>
            <span>
              Do not Reset Password?{" "}
              <Link className="text-orange-500 hover:underline" href="/sign-in">
                Sign-in
              </Link>
            </span>
          </form>
        </div>
      </section>
    </>
  );
}
