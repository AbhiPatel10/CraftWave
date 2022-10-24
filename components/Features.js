import React from 'react';
import { BsTruck } from 'react-icons/bs';
import { TbArrowsRightLeft } from 'react-icons/tb';
import { BiPhoneCall } from 'react-icons/bi';

const Features = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-1 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg flex justify-center items-center">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <h2 className="ml-5 text-lg text-gray-900 font-medium title-font">
                                        Quality Product</h2>
                                </div>

                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg flex justify-center items-center">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
                                    <BsTruck className='text-2xl' />
                                </div>
                                <div className='flex justify-center items-center'>
                                    <h2 className="ml-5 text-lg text-gray-900 font-medium title-font">

                                        Free Shipping</h2>
                                </div>

                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg flex justify-center items-center">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
                                    <TbArrowsRightLeft className='text-2xl' />
                                </div>
                                <div className='flex justify-center items-center'>
                                    <h2 className="ml-5 text-lg text-gray-900 font-medium title-font">
                                        14-Day Return</h2>
                                </div>

                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg flex justify-center items-center">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
                                    <BiPhoneCall />
                                </div>
                                <div className='flex justify-center items-center'>
                                    <h2 className="ml-5 text-lg text-gray-900 font-medium title-font">

                                        24/7 Support</h2>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
           

        </>
    )
}

export default Features;