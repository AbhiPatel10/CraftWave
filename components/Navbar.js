import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { FaCartArrowDown } from 'react-icons/fa';


const Navbar = () => {
  return (
    <div className='flex flex-col justify-center items-center md:flex-row md:justify-start py-1 shadow-md'>
        <div className='logo mx-5'>
            <Link href={'/'}><a><Image src="/logo.jpg" width={180} height={70} alt="epic wear logo"/></a></Link>
        </div>
        <div className='nav'>
            <ul className='flex items-center space-x-2 font-bold'>
                <Link href={'/tshirts'}><a><li>Tshirts</li></a></Link>
                <Link href={'/hoodies'}><a><li>Hoodies</li></a></Link>
                <Link href={'/stickers'}><a><li>Stickers</li></a></Link>
                <Link href={'/mugs'}><a><li>Mugs</li></a></Link>
            </ul>
        </div>
        <div className='cart absolute right-0 top-3 mx-5'>
            <FaCartArrowDown className='text-3xl'/>
        </div>
    </div>
  )
}

export default Navbar