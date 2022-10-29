import React from 'react'
import Image from 'next/image'
import Banner1 from '../public/banner-1.jpg'
import Banner2 from '../public/banner-2.jpg'
import Banner3 from '../public/banner-3.jpg'
import Banner4 from '../public/banner-4.jpg'
import Banner5 from '../public/banner-5.jpg'
import Banner6 from '../public/banner-6.jpg'

const Hero = () => {
    // const ikmgae = "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-1.jpg&w=1080&q=100";
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="px-5 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-1 lg:w-3/5 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <Image alt="team" className="flex-shrink-0 rounded-lg w-full h-72 object-cover object-center " src={Banner1} />
                            </div>
                        </div>
                        <div className="p-1 lg:w-1/5 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <Image alt="team" className="flex-shrink-0 rounded-lg w-full h-72 object-cover object-center " src={Banner2} />
                            </div>
                        </div>
                        <div className="p-1 lg:w-1/5 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <Image alt="team" className="flex-shrink-0 rounded-lg w-full h-72 object-cover object-center " src={Banner3} />
                            </div>
                        </div>
                        <div className="p-1 lg:w-1/5 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <Image alt="team" className="flex-shrink-0 rounded-lg w-full h-72 object-cover object-center " src={Banner4} />
                            </div>
                        </div>
                        <div className="p-1 lg:w-1/5 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <Image alt="team" className="flex-shrink-0 rounded-lg w-full h-72 object-cover object-center " src={Banner5} />
                            </div>
                        </div>
                        <div className="p-1 lg:w-3/5 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <Image alt="team" className="flex-shrink-0 rounded-lg w-full h-72 object-cover object-center " src={Banner6} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero