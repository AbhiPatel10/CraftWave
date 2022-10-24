import React from 'react'

const Offers = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-12 py-24 mx-auto flex flex-wrap">
                    <div className="w-full flex flex-wrap mx-auto">
                        <div className="px-2 lg:w-1/2 md:w-full md:my-5">
                            <div className="flex flex-wrap w-full bg-gray-800 sm:py-24 py-16 sm:px-10 px-6 relative">
                                <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://www.crackersshope.com/wp-content/uploads/2022/08/Banner-2.jpeg" />
                                <div className="text-center relative z-10 w-full">
                                    <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Special Offer</h2>
                                    <a className="mt-3 text-indigo-500 inline-flex items-center">
                                        <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Shop Now</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="px-2 lg:w-1/2 md:w-full md:my-5">
                        <div className="flex flex-wrap w-full bg-gray-800 sm:py-24 py-16 sm:px-10 px-6 relative">
                            <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://www.crackersshope.com/wp-content/uploads/2022/10/card-1-1.png" />
                            <div className="text-center relative z-10 w-full">
                                <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Diwali Offer</h2>
                                <a className="mt-3 text-indigo-500 inline-flex items-center">
                                    <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Shop Now</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Offers