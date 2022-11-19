import React from 'react'
import Image from 'next/image';
import Tshirts from '../public/Tshirt-category.jpg';
import Hoodies from '../public/Hoodies.jpg';
import Sticker from "../public/Stickers.jpg";
import Mugs from "../public/mugs.jpg";
import Link from "next/link"

const Categorie = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <Link href={ '/tshirts' }>
                                    <a>
                                        <Image alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={ Tshirts } />
                                        <div className="w-full">
                                            <h2 className="title-font font-medium text-lg text-gray-900">T - Shirt</h2>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <Link href={ '/hoodies' }>
                                    <a>
                                        <Image alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={ Hoodies } />
                                        <div className="w-full">
                                            <h2 className="title-font font-medium text-lg text-gray-900">Hoodies</h2>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <Link href={ '/stickers' }>
                                    <a>
                                        <Image alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={ Sticker } />
                                        <div className="w-full">
                                            <h2 className="title-font font-medium text-lg text-gray-900">Stickers</h2>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <Link href={ '/mugs' }>
                                    <a>
                                        <Image alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={ Mugs } />
                                        <div className="w-full">
                                            <h2 className="title-font font-medium text-lg text-gray-900">Mug</h2>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Categorie;