"use client";
import { RiCalendarView } from "react-icons/ri";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Select from "react-select";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const countryOptions = [
  { value: "United Kingdom", label: "United Kingdom" },
  { value: "United States of America", label: "United States of America" },
  { value: "Zimbabwe", label: "Zimbabwe" },
];

const Checkout = () => {
  const searchParams = useSearchParams();
  const price = searchParams.get("price");
  const details = searchParams.get("details");
  const [userId, setUserId] = useState(null);

  const [productDetails, setProductDetails] = useState({
    price: 0.0,
    details: "",
  });
  const [selectedCountry, setSelectedCountry] = useState({
    value: "United Arab Emirates",
    label: "United Arab Emirates",
  });

  // State to manage form values and validation
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: selectedCountry,
    address: "",
    city: "",
    phone: "",
    email: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [formError, setFormError] = useState(""); // For custom error message

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCountryChange = (selectedOption) => {
    setFormData({ ...formData, country: selectedOption });
  };

  // Validate the form whenever the formData changes
  useEffect(() => {
    const isValid =
      formData.firstName &&
      formData.lastName &&
      formData.country &&
      formData.city &&
      formData.phone &&
      formData.email;
    setIsFormValid(isValid);

    if (!isValid) {
      setFormError("Please fill in all required fields.");
    } else {
      setFormError(""); // Clear error message if the form is valid
    }
  }, [formData]);

  const handleFormSubmit = () => {
    console.log("Form Data:", formData);
  };

  const [aedToUsdRate, setAedToUsdRate] = useState(0.27); // Default value

  // Fetch AED to USD exchange rate from Exchangerate.host API
  const fetchExchangeRate = async () => {
    try {
      const response = await axios.get(
        "https://api.exchangerate.host/convert?from=AED&to=USD"
      );
      const rate = response.data.result;
      console.log("Rate", rate);
      setAedToUsdRate(rate);
    } catch (error) {
      console.error("Failed to fetch exchange rate:", error);
      toast.error("Could not fetch exchange rate.");
    }
  };

  const convertAEDtoUSD = (aedPrice) => {
    if (!aedToUsdRate) {
      return "N/A"; // Handle the case when conversion is unavailable
    }
    return (aedPrice * aedToUsdRate).toFixed(2);
  };
  console.log(
    "Converted Price:",
    convertAEDtoUSD(parseInt(productDetails.price))
  );

  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
    fetchExchangeRate();
  }, []);

  useEffect(() => {
    if (price && details) {
      setProductDetails({ price, details });
    }
  }, [price, details]);

  return (
    <>
      <div className="relative h-55vh">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed bg-[url('/checkout1.jpg')]"></div>

        {/* Overlay */}
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white bg-black/50">
          <h1 className="text-5xl font-bold mb-4">Checkout</h1>
          <h2 className="text-lg tracking-wide flex gap-0">Home - checkout</h2>
        </div>
      </div>

      <div className="max-w-6xl py-12 mx-auto px-4">
        <div className="flex gap-2 lg:items-center md:items-center sm:items-start bg-slate-100 border-t-4 border-t-orange-500 p-6">
          <RiCalendarView color="orange" size="20px" />
          <div>
            Have a coupon?{" "}
            <span className="text-orange-400">
              Click here to enter your code
            </span>
          </div>
        </div>
        <br />
        <div className="font-bold text-3xl">Billing Details</div>
        {/* Custom form validation error */}
        {!isFormValid && (
          <div className="bg-slate-100 text-red-500 p-4 border-t-4 border-orange-color text-md font-medium mt-2">
            {formError}
          </div>
        )}
        <div className="lg:w-[70%]">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray shadow-sm h-12 p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray shadow-sm h-12 p-2"
                />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Country <span className="text-red-600">*</span>
                </label>
                <Select
                  value={formData.country}
                  onChange={handleCountryChange}
                  options={countryOptions}
                  isSearchable={true}
                  placeholder="Select a country..."
                  className="mt-1"
                />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray shadow-sm h-12 p-2"
                />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  City <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray shadow-sm h-12 p-2"
                />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Phone <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray shadow-sm h-12 p-2"
                />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray shadow-sm h-12 p-2"
                />
              </div>
            </div>
          </form>
        </div>

        <h2 className="text-2xl font-bold mb-4">Your Order</h2>
        <div className="overflow-x-auto">
          <table className="w-[100%] border border-gray">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-4 font-bold border border-gray">
                  Product
                </th>
                <th className="text-left p-4 font-bold border border-gray">
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border border-gray">
                  {productDetails.details}
                </td>
                <td className="p-4 border border-gray text-orange-600 font-bold">
                  {productDetails.price}.00 AED
                </td>
              </tr>
              <tr>
                <td className="p-4 border border-gray font-bold">Subtotal</td>
                <td className="p-4 border border-gray text-orange-600 font-bold">
                  {productDetails.price}.00 AED
                </td>
              </tr>
              <tr>
                <td className="p-4 border border-gray font-bold">Total</td>
                <td className="p-4 border border-gray text-orange-600 font-bold">
                  {productDetails.price}.00 AED
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="w-full p-5 bg-slate-100 space-y-5">
          <div className="flex gap-2 font-bold ">
            PayPal
            <Image
              src="/paypal_logo.svg"
              width={100}
              height={100}
              alt="PayPal Logo"
            />
          </div>
          <div className="bg-light-gray p-5 mt-3 flex flex-col text-black items-center justify-center">
            <Image src="/popup.svg" width={100} height={100} />
            {isFormValid
              ? "Click the PayPal button below to process your order."
              : "Fill Out the Billing Address below to process your order."}
          </div>

          <div className="w-1/2">
            {isFormValid ? (
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "AWhQsuXmmp4ZqIBy2asnmpX10n03Y1yo22Z_wjZWnPOQ7Gdj_wOYoh1t7HKvKohATBnJyfdwOgMOfhUZ",
                  currency: "USD", // Using USD as PayPal doesn't support AED
                }}
              >
                <PayPalButtons
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: convertAEDtoUSD(
                              parseInt(productDetails.price)
                            ), // Convert AED to USD
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order.capture().then(async (details) => {
                      const userEmail = details.payer.email_address;
                      try {
                        const response = await axios.post("/api/checkout", {
                          userEmail,
                          itemDetails: productDetails.details,
                          price: productDetails.price,
                          userId,
                        });
                        toast.success("Transaction completed successfully.");
                      } catch (error) {
                        toast.error(
                          error.response?.data?.error || "An error occurred."
                        );
                      }
                    });
                  }}
                />
              </PayPalScriptProvider>
            ) : (
              <button
                className={`flex items-center justify-center bg-yellow-500 rounded-lg w-40 h-12 ${
                  !isFormValid ? "hover:cursor-not-allowed disabled" : ""
                } `}
              >
                <Image src="/paypal_logo.svg" width={70} height={70} />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
