import next from 'next';
import React, { useState } from 'react'
import { useEffect } from 'react';
import Link from 'next/link'
// import Image from 'next/image';

const Featuresproduct = () => {
    const [products, setProducts] = useState()

    useEffect(() => {
        const fetchOrder = async () => {
            let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getproducts`, {
                method: 'GET', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            let res = await a.json()
            setProducts(res)
        }
        fetchOrder()
    }, [])
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        { products && Object.keys(products).map((keyName, i) => {
                            return (
                                <Link key={ products[keyName]._id } passHref={ true } href={ `/product/${products[keyName].slug}` }>
                                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                        <a className="block relative h-96 rounded overflow-hidden">
                                            <img layout='fill' alt="ecommerce" className="object-cover object-center w-full h-full block" src={ products[keyName].img } />
                                        </a>
                                        <div className="mt-4">
                                            <h3 className="text-gray-900 text-xs tracking-widest title-font mb-1">{ products[keyName].title }</h3>
                                            <p className="mt-1">₹{ products[keyName].price }</p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }) }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Featuresproduct;