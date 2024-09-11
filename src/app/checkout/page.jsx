"use client";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { RiCalendarView } from "react-icons/ri";
import Image from "next/image";
import { useSearchParams } from "next/navigation"; // Use useSearchParams instead of useRouter
import { useEffect, useState } from "react";

function Checkout() {
  const searchParams = useSearchParams();
  const price = searchParams.get("price");
  const details = searchParams.get("details");

  const [productDetails, setProductDetails] = useState({
    price: "0.00",
    details: "",
  });

  // Set product details from search params on component mount
  useEffect(() => {
    if (price && details) {
      setProductDetails({
        price,
        details,
      });
    }
  }, [price, details]);

  return (
    <>
      <div className="relative h-55vh ">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed bg-[url('/checkout1.jpg')]"></div>

        {/* Overlay */}
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white bg-black/50">
          <h1 className="text-5xl font-bold mb-4">
            <span>Checkout</span>
          </h1>
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
        <div>
          <div className="font-bold text-3xl">Billing Details</div>

          <div className="lg:w-[70%]">
            <div className="grid grid-cols-1 justify-start md:grid-cols-2 gap-4 md:w-2/3 pt-6 ">
              {/* Form Fields */}
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700">
                  First name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray shadow-sm h-12 p-2"
                />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700">
                  Last name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray shadow-sm h-12 p-2"
                />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Country <span className="text-red-600">*</span>
                </label>
                <select className="mt-1 block w-full border border-gray shadow-sm h-12 p-2">
                  <option>United Arab Emirates</option>
                  <option>United Kingdom</option>
                  <option>United States</option>
                  <option>Uganda</option>
                </select>
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  House number and street name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray shadow-sm h-12 p-2"
                />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Town / City <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray shadow-sm h-12 p-2"
                />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Phone <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray shadow-sm h-12 p-2"
                />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Email address <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray shadow-sm h-12 p-2"
                />
              </div>
            </div>
          </div>
          <br />
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
                    <span className="font-bold"></span>
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
        </div>

        <br />
        <br />
        <div className="w-full p-5 bg-slate-100">
          <div className="flex gap-2 font-bold">
            PayPal
            <Image
              src="/paypal_logo.svg"
              width={100}
              height={100}
              alt="PayPal Logo"
            />
          </div>
          <div className="bg-light-gray p-5 mt-3 flex flex-col text-black items-center justify-center">
            <Image src="/popup.svg" width={100} height={100} alt="Popup" />
            Click the PayPal button below to process your order.
          </div>
          <br />
          <div className="border border-gray"></div>
          <br />
          <div className="w-1/2">
            <PayPalScriptProvider
              options={{
                "client-id":
                  "AWhQsuXmmp4ZqIBy2asnmpX10n03Y1yo22Z_wjZWnPOQ7Gdj_wOYoh1t7HKvKohATBnJyfdwOgMOfhUZ",
              }}
            >
              <PayPalButtons
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: productDetails.price,
                        },
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then((details) => {
                    alert(
                      `Transaction completed by ${details.payer.name.given_name}`
                    );
                  });
                }}
              />
            </PayPalScriptProvider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
