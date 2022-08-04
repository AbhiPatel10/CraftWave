import React, { useRef } from 'react'
import Image from "next/image"
import Link from "next/link"
import { AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { FaCartArrowDown } from 'react-icons/fa';
import { MdAccountCircle } from 'react-icons/md';


const Navbar = ({cart, addToCart, removeFromCart, clearCart, subTotal}) => {
    const ref = useRef()
    const toggleCart =()=>{
        if(ref.current.classList.contains('translate-x-full')){
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        }else if(!ref.current.classList.contains('translate-x-full')){
            ref.current.classList.remove('translate-x-0')    
            ref.current.classList.add('translate-x-full')
        }
    }
  return (
    <div className='flex flex-col justify-center items-center md:flex-row md:justify-start py-1 shadow-md sticky top-0 z-10 bg-white'>
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
        <div className='cart absolute right-0 top-5 mx-5 cursor-pointer flex'>
            <Link href={'/login'}><a><MdAccountCircle className='text-2xl md:text-3xl mx-2'/></a></Link>
            <FaCartArrowDown onClick={toggleCart} className='text-2xl md:text-3xl'/>
        </div>
        <div ref={ref} className={`z-50 w-72 h-[100vh] sideCart absolute top-0 right-0 bg-pink-100 py-10 px-7 transform transition-transform ${Object.keys(cart).length !== 0 ? 'translate-x-0' : 'translate-x-full' }`}>
            <h2 className='font-bold text-xl text-center mb-5'>Shopping Cart</h2>
            <span onClick={toggleCart} className='absolute top-6 right-4 cursor-pointer text-2xl text-pink-500'><AiFillCloseCircle /></span>
        <ol className='list-decimal font-semibold'>
        {Object.keys(cart).length == 0 && <div className='my-3 font-semibold'> Your Cart is Empty! </div>}
           {Object.keys(cart).map((k)=>{
            return (<li key={k}>
            <div className='item flex my-5'>
                <div className='w-2/3 font-semibold'>{cart[k].name}</div>
                <div className='w-1/3 flex items-center justify-center text-lg'><AiFillMinusCircle onClick={()=>{removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} className='cursor-pointer text-pink-500'/> <span className='mx-2 text-sm'>{cart[k].qty}</span> <AiFillPlusCircle  onClick={()=>{addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} className='cursor-pointer text-pink-500'/></div>
            </div>
        </li>)
        })} 
        
        </ol>
        <div className='font-bold mt-10'>SubTotal: ₹{subTotal}</div>
        <div className='flex justify-between mt-5'>
            <Link href={'/checkout'}><a><button className="flex text-white bg-pink-500 border-0 py-2 px-5 focus:outline-none hover:bg-pink-600 rounded text-sm">  Checkout </button></a></Link>
            <button onClick={clearCart} className="flex text-white bg-pink-500 border-0 py-2 px-5 focus:outline-none hover:bg-pink-600 rounded text-sm">Clear Cart</button>
        
        </div>
        </div>
    </div>
  )
}

export default Navbar