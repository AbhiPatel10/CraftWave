import React from 'react'
import Link from "next/link"

const stickers = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4 justify-center">
                        <Link href={ '/product/epicwear' }><a>
                            <div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-5">
                                <a className="block relative rounded overflow-hidden">
                                    <img alt="ecommerce" className="   m-auto h-[30vh]  block" src="https://m.media-amazon.com/images/I/71khCdiy87L._SX466_.jpg"></img>
                                </a>
                                <div className="mt-4 text-center md:text-left ">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                                    <p className="mt-1">₹499.00</p>
                                    <p className='mt-1'>S, M, L, XL, XXL</p>
                                </div>
                            </div>
                        </a></Link>
                        <Link href={ '/product/epicwear' }><a>
                            <div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-5">
                                <a className="block relative rounded overflow-hidden">
                                    <img alt="ecommerce" className=" m-auto h-[30vh]  block" src="https://m.media-amazon.com/images/I/71khCdiy87L._SX466_.jpg"></img>
                                </a>
                                <div className="mt-4 text-center md:text-left">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                                    <p className="mt-1">₹499.15</p>
                                    <p className='mt-1'>S, M, L, XL, XXL</p>
                                </div>
                            </div>
                        </a></Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default stickers