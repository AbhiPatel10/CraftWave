import React from 'react'
import Image from 'next/image'
import Banner from "../public/banner-discount.jpg"

const Poster = () => {
    return (
        <>
            <div className="p-1 w-full">
                <div className="h-full flex flex-col items-center text-center">
                    <Image alt="team" className="flex-shrink-0 rounded-lg w-full h-72 object-cover object-center " src={ Banner } />
                </div>
            </div>
        </>
    )
}

export default Poster;