import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'

const Orders = () => {
    const router = useRouter()
    const [orders, setOrders] = useState([])

    useEffect(() => {

        const fetchOrder = async () => {
            let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/myorders`, {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: localStorage.getItem('Token') }),
            })
            let res = await a.json()
            setOrders(res.orders)
        }

        if (!localStorage.getItem("Token")) {
            router.push('/')
        } else {
            fetchOrder()
        }



    }, [])
    return (
        <>
            <div className='min-h-screen'>
                <h1 className='font-semibold text-center text-2xl p-8'>My Orders</h1>
                <div className='container mx-auto md:px-9' >
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full">
                                        <thead className="bg-white border-b">
                                            <tr>
                                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                    Order Id
                                                </th>
                                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                    First
                                                </th>
                                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                    Last
                                                </th>
                                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                    Handle
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            { orders && orders.map((data) => {
                                                return (

                                                    <tr key={ data._id } className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            { data.email }
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            { data.amount }
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            <Link href={ '/order?id=' + item._id }><a>Details</a></Link>
                                                        </td>
                                                    </tr>
                                                )
                                            }) }

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Orders