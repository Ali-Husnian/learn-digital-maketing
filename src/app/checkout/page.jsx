import React from 'react'
import { RiCalendarView } from "react-icons/ri";
import Image from 'next/image';

function checkout() {
    return (
        <>
            <div className="bg-[url('/checkout1.jpg')] h-65vh bg-cover">
                <div className='w-full max-w-6xl mx-auto'>
                    <div className='flex flex-col items-center justify-center h-80vh'>
                        <div className='text-center text-5xl font-bold text-black'>
                            Checkout
                        </div>
                        {/* <br /> */}
                        <div className='text-center text-[20px] font-bold text-black'>
                            Home - Checkout
                        </div>
                    </div>
                </div >
            </div>
            <div className='max-w-6xl py-12 mx-auto px-4'>
                <div className='flex gap-2 lg:items-center md:items-center sm:items-start   bg-slate-100 border-t-4 border-t-orange-500 p-6'>
                    <RiCalendarView color='orange' size="20px" />
                    <div>
                        Have a coupan?{" "}
                        <span className='text-orange-400'>
                            Click here to enter your code
                        </span>
                    </div>
                </div>
                <br />
                <div>
                    <div className='font-bold text-3xl'>
                        Billing Details
                    </div>

                    <div className='lg:w-[70%]'>
                        <div className="grid grid-cols-1 justify-start md:grid-cols-2 gap-4  md:w-2/3 pt-6 ">
                            <div className="col-span-1">
                                <label className="block text-sm font-medium text-gray-700">First name <span className="text-red-600">*</span></label>
                                <input type="text" className="mt-1 block w-full border border-gray  shadow-sm h-12 p-2" />
                            </div>
                            <div className="col-span-1">
                                <label className="block text-sm font-medium text-gray-700">Last name <span className="text-red-600">*</span></label>
                                <input type="text" className="mt-1 block w-full border border-gray  shadow-sm h-12 p-2" />
                            </div>
                            <div className="col-span-1 md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700">Country <span className="text-red-600">*</span></label>
                                <select className="mt-1 block w-full border border-gray  shadow-sm h-12 p-2">
                                    <option>United Arab Emirates</option>
                                    <option>United Kingdom</option>
                                    <option>United States</option>
                                    <option>Uganda</option>
                                </select>
                            </div>
                            <div className="col-span-1 md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700">House number and street name</label>
                                <input type="text" className="mt-1 block w-full border border-gray  shadow-sm h-12 p-2" />
                            </div>
                            <div className="col-span-1 md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700">Town / City <span className="text-red-600">*</span></label>
                                <input type="text" className="mt-1 block w-full border border-gray  shadow-sm h-12 p-2" />
                            </div>
                            <div className="col-span-1 md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700">Phone <span className="text-red-600">*</span></label>
                                <input type="text" className="mt-1 block w-full border border-gray  shadow-sm h-12 p-2" />
                            </div>
                            <div className="col-span-1 md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700">Email address <span className="text-red-600">*</span></label>
                                <input type="text" className="mt-1 block w-full border border-gray  shadow-sm h-12 p-2" />
                            </div>
                        </div>
                    </div>
                    <br />
                    <h2 className="text-2xl font-bold mb-4">Your Order</h2>
                    <div className="overflow-x-auto">
                        <table className="w-[100%] border border-gray">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="text-left p-4 font-bold border border-gray">Product</th>
                                    <th className="text-left p-4 font-bold border border-gray">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-4 border border-gray">Diploma in Digital Marketing Course <span className="font-bold">× 2</span></td>
                                    <td className="p-4 border border-gray text-orange-600 font-bold">6,000.00 AED</td>
                                </tr>
                                <tr>
                                    <td className="p-4 border border-gray font-bold">Subtotal</td>
                                    <td className="p-4 border border-gray text-orange-600 font-bold">6,000.00 AED</td>
                                </tr>
                                <tr>
                                    <td className="p-4 border border-gray font-bold">Total</td>
                                    <td className="p-4 border border-gray text-orange-600 font-bold">6,000.00 AED</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/*  */}

                <br /><br />
                <div className=' w-full p-5 bg-slate-100'  >
                    <div className='flex gap-2  font-bold'>
                        PayPal
                        <Image src="/paypal_logo.svg" width={100} height={100} />
                    </div>
                    <div className='bg-light-gray p-5 mt-3 flex flex-col text-black items-center justify-center'>
                        <Image src="/popup.svg" width={100} height={100} />
                        Click the PayPal button below to process your order.
                    </div>
                    <br />
                    <div className='border border-gray'>
                    </div>
                    <br />
                    <button className='flex items-center justify-center bg-yellow-500 rounded-lg w-40 h-12' >
                        <Image src="/download.svg" width={70} height={70} />
                    </button>
                </div>
            </div>
        </>
    )
}

export default checkout
