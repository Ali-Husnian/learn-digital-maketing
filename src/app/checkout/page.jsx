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
  { value: "Afghanistan", label: "Afghanistan" },
  { value: "Albania", label: "Albania" },
  { value: "Algeria", label: "Algeria" },
  { value: "Andorra", label: "Andorra" },
  { value: "Angola", label: "Angola" },
  { value: "Antigua and Barbuda", label: "Antigua and Barbuda" },
  { value: "Argentina", label: "Argentina" },
  { value: "Armenia", label: "Armenia" },
  { value: "Australia", label: "Australia" },
  { value: "Austria", label: "Austria" },
  { value: "Azerbaijan", label: "Azerbaijan" },
  { value: "Bahamas", label: "Bahamas" },
  { value: "Bahrain", label: "Bahrain" },
  { value: "Bangladesh", label: "Bangladesh" },
  { value: "Barbados", label: "Barbados" },
  { value: "Belarus", label: "Belarus" },
  { value: "Belgium", label: "Belgium" },
  { value: "Belize", label: "Belize" },
  { value: "Benin", label: "Benin" },
  { value: "Bhutan", label: "Bhutan" },
  { value: "Bolivia", label: "Bolivia" },
  { value: "Bosnia and Herzegovina", label: "Bosnia and Herzegovina" },
  { value: "Botswana", label: "Botswana" },
  { value: "Brazil", label: "Brazil" },
  { value: "Brunei", label: "Brunei" },
  { value: "Bulgaria", label: "Bulgaria" },
  { value: "Burkina Faso", label: "Burkina Faso" },
  { value: "Burundi", label: "Burundi" },
  { value: "Cabo Verde", label: "Cabo Verde" },
  { value: "Cambodia", label: "Cambodia" },
  { value: "Cameroon", label: "Cameroon" },
  { value: "Canada", label: "Canada" },
  { value: "Central African Republic", label: "Central African Republic" },
  { value: "Chad", label: "Chad" },
  { value: "Chile", label: "Chile" },
  { value: "China", label: "China" },
  { value: "Colombia", label: "Colombia" },
  { value: "Comoros", label: "Comoros" },
  { value: "Congo (Congo-Brazzaville)", label: "Congo (Congo-Brazzaville)" },
  {
    value: "Congo (Democratic Republic)",
    label: "Congo (Democratic Republic)",
  },
  { value: "Costa Rica", label: "Costa Rica" },
  { value: "Croatia", label: "Croatia" },
  { value: "Cuba", label: "Cuba" },
  { value: "Cyprus", label: "Cyprus" },
  { value: "Czech Republic", label: "Czech Republic" },
  { value: "Denmark", label: "Denmark" },
  { value: "Djibouti", label: "Djibouti" },
  { value: "Dominica", label: "Dominica" },
  { value: "Dominican Republic", label: "Dominican Republic" },
  { value: "Ecuador", label: "Ecuador" },
  { value: "Egypt", label: "Egypt" },
  { value: "El Salvador", label: "El Salvador" },
  { value: "Equatorial Guinea", label: "Equatorial Guinea" },
  { value: "Eritrea", label: "Eritrea" },
  { value: "Estonia", label: "Estonia" },
  { value: "Eswatini", label: "Eswatini" },
  { value: "Ethiopia", label: "Ethiopia" },
  { value: "Fiji", label: "Fiji" },
  { value: "Finland", label: "Finland" },
  { value: "France", label: "France" },
  { value: "Gabon", label: "Gabon" },
  { value: "Gambia", label: "Gambia" },
  { value: "Georgia", label: "Georgia" },
  { value: "Germany", label: "Germany" },
  { value: "Ghana", label: "Ghana" },
  { value: "Greece", label: "Greece" },
  { value: "Grenada", label: "Grenada" },
  { value: "Guatemala", label: "Guatemala" },
  { value: "Guinea", label: "Guinea" },
  { value: "Guinea-Bissau", label: "Guinea-Bissau" },
  { value: "Guyana", label: "Guyana" },
  { value: "Haiti", label: "Haiti" },
  { value: "Honduras", label: "Honduras" },
  { value: "Hungary", label: "Hungary" },
  { value: "Iceland", label: "Iceland" },
  { value: "India", label: "India" },
  { value: "Indonesia", label: "Indonesia" },
  { value: "Iran", label: "Iran" },
  { value: "Iraq", label: "Iraq" },
  { value: "Ireland", label: "Ireland" },
  { value: "Israel", label: "Israel" },
  { value: "Italy", label: "Italy" },
  { value: "Jamaica", label: "Jamaica" },
  { value: "Japan", label: "Japan" },
  { value: "Jordan", label: "Jordan" },
  { value: "Kazakhstan", label: "Kazakhstan" },
  { value: "Kenya", label: "Kenya" },
  { value: "Kiribati", label: "Kiribati" },
  { value: "Kuwait", label: "Kuwait" },
  { value: "Kyrgyzstan", label: "Kyrgyzstan" },
  { value: "Laos", label: "Laos" },
  { value: "Latvia", label: "Latvia" },
  { value: "Lebanon", label: "Lebanon" },
  { value: "Lesotho", label: "Lesotho" },
  { value: "Liberia", label: "Liberia" },
  { value: "Libya", label: "Libya" },
  { value: "Liechtenstein", label: "Liechtenstein" },
  { value: "Lithuania", label: "Lithuania" },
  { value: "Luxembourg", label: "Luxembourg" },
  { value: "Madagascar", label: "Madagascar" },
  { value: "Malawi", label: "Malawi" },
  { value: "Malaysia", label: "Malaysia" },
  { value: "Maldives", label: "Maldives" },
  { value: "Mali", label: "Mali" },
  { value: "Malta", label: "Malta" },
  { value: "Marshall Islands", label: "Marshall Islands" },
  { value: "Mauritania", label: "Mauritania" },
  { value: "Mauritius", label: "Mauritius" },
  { value: "Mexico", label: "Mexico" },
  { value: "Micronesia", label: "Micronesia" },
  { value: "Moldova", label: "Moldova" },
  { value: "Monaco", label: "Monaco" },
  { value: "Mongolia", label: "Mongolia" },
  { value: "Montenegro", label: "Montenegro" },
  { value: "Morocco", label: "Morocco" },
  { value: "Mozambique", label: "Mozambique" },
  { value: "Myanmar", label: "Myanmar" },
  { value: "Namibia", label: "Namibia" },
  { value: "Nauru", label: "Nauru" },
  { value: "Nepal", label: "Nepal" },
  { value: "Netherlands", label: "Netherlands" },
  { value: "New Zealand", label: "New Zealand" },
  { value: "Nicaragua", label: "Nicaragua" },
  { value: "Niger", label: "Niger" },
  { value: "Nigeria", label: "Nigeria" },
  { value: "North Korea", label: "North Korea" },
  { value: "North Macedonia", label: "North Macedonia" },
  { value: "Norway", label: "Norway" },
  { value: "Oman", label: "Oman" },
  { value: "Pakistan", label: "Pakistan" },
  { value: "Palau", label: "Palau" },
  { value: "Panama", label: "Panama" },
  { value: "Papua New Guinea", label: "Papua New Guinea" },
  { value: "Paraguay", label: "Paraguay" },
  { value: "Peru", label: "Peru" },
  { value: "Philippines", label: "Philippines" },
  { value: "Poland", label: "Poland" },
  { value: "Portugal", label: "Portugal" },
  { value: "Qatar", label: "Qatar" },
  { value: "Romania", label: "Romania" },
  { value: "Russia", label: "Russia" },
  { value: "Rwanda", label: "Rwanda" },
  { value: "Saint Kitts and Nevis", label: "Saint Kitts and Nevis" },
  { value: "Saint Lucia", label: "Saint Lucia" },
  {
    value: "Saint Vincent and the Grenadines",
    label: "Saint Vincent and the Grenadines",
  },
  { value: "Samoa", label: "Samoa" },
  { value: "San Marino", label: "San Marino" },
  { value: "Sao Tome and Principe", label: "Sao Tome and Principe" },
  { value: "Saudi Arabia", label: "Saudi Arabia" },
  { value: "Senegal", label: "Senegal" },
  { value: "Serbia", label: "Serbia" },
  { value: "Seychelles", label: "Seychelles" },
  { value: "Sierra Leone", label: "Sierra Leone" },
  { value: "Singapore", label: "Singapore" },
  { value: "Slovakia", label: "Slovakia" },
  { value: "Slovenia", label: "Slovenia" },
  { value: "Solomon Islands", label: "Solomon Islands" },
  { value: "Somalia", label: "Somalia" },
  { value: "South Africa", label: "South Africa" },
  { value: "South Korea", label: "South Korea" },
  { value: "South Sudan", label: "South Sudan" },
  { value: "Spain", label: "Spain" },
  { value: "Sri Lanka", label: "Sri Lanka" },
  { value: "Sudan", label: "Sudan" },
  { value: "Suriname", label: "Suriname" },
  { value: "Sweden", label: "Sweden" },
  { value: "Switzerland", label: "Switzerland" },
  { value: "Syria", label: "Syria" },
  { value: "Taiwan", label: "Taiwan" },
  { value: "Tajikistan", label: "Tajikistan" },
  { value: "Tanzania", label: "Tanzania" },
  { value: "Thailand", label: "Thailand" },
  { value: "Timor-Leste", label: "Timor-Leste" },
  { value: "Togo", label: "Togo" },
  { value: "Tonga", label: "Tonga" },
  { value: "Trinidad and Tobago", label: "Trinidad and Tobago" },
  { value: "Tunisia", label: "Tunisia" },
  { value: "Turkey", label: "Turkey" },
  { value: "Turkmenistan", label: "Turkmenistan" },
  { value: "Tuvalu", label: "Tuvalu" },
  { value: "Uganda", label: "Uganda" },
  { value: "Ukraine", label: "Ukraine" },
  { value: "United Arab Emirates", label: "United Arab Emirates" },
  { value: "United Kingdom", label: "United Kingdom" },
  { value: "United States of America", label: "United States of America" },
  { value: "Uruguay", label: "Uruguay" },
  { value: "Uzbekistan", label: "Uzbekistan" },
  { value: "Vanuatu", label: "Vanuatu" },
  { value: "Vatican City", label: "Vatican City" },
  { value: "Venezuela", label: "Venezuela" },
  { value: "Vietnam", label: "Vietnam" },
  { value: "Yemen", label: "Yemen" },
  { value: "Zambia", label: "Zambia" },
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
    const access_key = "0a7c955d99387bcb7c0defeeb5797e37"; // Access key

    try {
      // API endpoint for conversion from AED to USD
      const response = await fetch(
        `https://api.exchangerate.host/convert?access_key=${access_key}&from=AED&to=USD&amount=${price}`
      );

      // Parse the response as JSON
      const data = await response.json();

      if (response.ok && data.success) {
        const rate = data.result; // Get conversion result (AED to USD)

        setAedToUsdRate(rate); // Set state with the converted rate
      } else {
        toast.error("Failed to fetch exchange rate.");
      }
    } catch (error) {
      toast.error("Could not fetch exchange rate.");
    }
  };

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
                <td className="p-4 border border-gray text-orange-600 font-extrabold">
                  {productDetails.price}.00 AED = ${aedToUsdRate.toFixed(2)}
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
                  currency: "USD",
                }}
              >
                <PayPalButtons
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: aedToUsdRate.toFixed(2), // Convert AED to USD
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order.capture().then(async (details) => {
                      const userEmail = details.payer.email_address;
                      try {
                        await axios.post("/api/checkout", {
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
