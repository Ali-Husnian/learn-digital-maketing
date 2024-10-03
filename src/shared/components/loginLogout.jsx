"use client";
import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { HiOutlineLogin, HiOutlineLogout } from "react-icons/hi";

const loginLogout = ({ closeSideMenu }) => {
  const router = useRouter();
  const [token, setToken] = useState(null);
  useEffect(() => {
    // Fetch the token on the client side
    const storedToken = Cookies.get("token");
    setToken(storedToken);
  }, []);

  useEffect(() => {
    router.refresh();
    const storedToken = Cookies.get("token");
    setToken(storedToken);
  }, [token]);

  const handleLogout = async () => {
    try {
      await axios.get(`/api/users/logout`);
      toast.success("Logout Successfully!");
      closeSideMenu();
      Cookies.remove("token");
      setToken(null); // Update token state to trigger re-render
      router.push("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <div className="hidden lg:flex items-center gap-2">
        <>
          {token ? (
            <button
              onClick={handleLogout}
              className="bg-orange-color text-white font-medium text-17px p-2 flex items-center gap-2 justify-center rounded-md hover:bg-blue-hover-color hover:text-white transition-all cursor-pointer"
            >
              Logout
              <HiOutlineLogout />
            </button>
          ) : (
            <Link
              href="/sign-in"
              className="bg-orange-color text-white font-medium text-17px p-2 flex items-center gap-2 justify-center rounded-md hover:bg-blue-hover-color hover:text-white transition-all cursor-pointer"
            >
              Login
              <HiOutlineLogin />
            </Link>
          )}
        </>
      </div>
    </div>
  );
};

export default loginLogout;
