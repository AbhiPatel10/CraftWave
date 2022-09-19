import React, { useState, useEffect } from 'react'
import Link from "next/link"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';


const Login = () => {

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const router = useRouter()
  
  useEffect(()=>{
    if(localStorage.getItem("Token")){
      router.push('/')
    }
  }, [])
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { email, password }

    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })

    let Response = await res.json()
    console.log("Response from Login", Response)
    if (Response.success === true) {
      localStorage.setItem('Token', Response.token)
      setEmail('')
      setPassword('')
      toast.success("You'r Successfully Logged In!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        router.push('/')
      }, 1000)
    } else {
      toast.error(Response.error, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <ToastContainer
          position="top-left"
          autoClose={ 5000 }
          hideProgressBar={ false }
          newestOnTop={ false }
          closeOnClick
          rtl={ false }
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or
              <Link href={ '/signup' }><a href="#" className="font-medium text-pink-600 hover:text-pink-500"> Sign Up </a></Link>
            </p>
          </div>
          <form onSubmit={ handleSubmit } className="mt-8 space-y-6" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input onChange={ (e) => { setEmail(e.target.value) } } value={ email } id="email" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm" placeholder="Email address" />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input onChange={ (e) => { setPassword(e.target.value) } } value={ password } id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm" placeholder="Password" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link href={ '/forgot' }><a href="#" className="font-medium text-pink-600 hover:text-pink-500"> Forgot your password? </a></Link>
              </div>
            </div>

            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg className="h-5 w-5 text-pink-500 group-hover:text-pink-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login