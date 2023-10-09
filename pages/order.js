import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Order from '../models/Order';
import mongoose from 'mongoose';
import Error from 'next/error';
import Image from 'next/image';

const MyOrder = ({ order, clearCart, error }) => {
  const products = order.products;
  const router = useRouter();
  const [date, setDate] = useState();
  // const [error, setError] = useState()

  useEffect(() => {
    console.log('dsdsddd order --<<<', order);
    // if (!order) {
    //   // setError(404)
    // } else {

    const d = new Date(order.createdAt);
    setDate(d);
    if (router.query.clearCart == 1) {
      clearCart();
    }
    // }
  }, []);

  if (error != false) {
    return <Error statusCode={404} />;
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              Craft Wave
            </h2>
            <h1 className="text-gray-900 text-xl md:text-3xl title-font font-medium mb-4">
              Order Id:- #{order.orderId}
            </h1>
            <p className="leading-relaxed mb-4">
              Yayy! Your Order has been placed Successfully placed!
            </p>
            <p className="leading-relaxed mb-4">
              Order placed on:{' '}
              {date &&
                date.toLocaleDateString('en-IN', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
            </p>
            <p>
              Your payment status is: <strong>{order.status}</strong>
            </p>
            <div className="flex border-t font-bold border-gray-200 py-2">
              <span className="text-gray-500">Item Description</span>
              <span className="ml-auto text-gray-900">Quantity</span>
              <span className="ml-auto text-gray-900">Item Total</span>
            </div>

            {products &&
              Object.keys(products).map((item) => {
                return (
                  <div
                    key={item}
                    className="flex border-t border-gray-200 py-2"
                  >
                    <span className="text-gray-500">
                      {products[item].name}({products[item].size}/{' '}
                      {products[item].variant})
                    </span>
                    <span className="m-auto text-gray-900">
                      {products[item].qty}
                    </span>
                    <span className="m-auto text-gray-900">
                      ₹{products[item].price} x {products[item].qty} = ₹{' '}
                      {products[item].price * products[item].qty}
                    </span>
                  </div>
                );
              })}

            <div className="flex flex-col my-8">
              <span className="title-font font-medium text-2xl text-gray-900">
                Subtotal:- ₹{order.amount}
              </span>
              <button className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
                Track Order
              </button>
            </div>
          </div>
          <Image
          layout="fill"
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://dummyimage.com/400x400"
          />
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps(context) {
  try {
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect('mongodb://localhost:27017/epicwear');
    }
    let order = await Order.findById(context.query.id);
    return {
      props: {
        order: JSON.parse(JSON.stringify(order)),
        error: JSON.parse(JSON.stringify(false)),
      }, // will be passed to the page component as props
    };
  } catch (error) {
    return {
      props: {
        order: JSON.parse(JSON.stringify({})),
        error: JSON.parse(JSON.stringify(error)),
      }, // will be passed to the page component as props
    };
  }
}

export default MyOrder;
