import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Myaccount = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [pincode, setPincode] = useState('');
    const [address, setAddress] = useState('');
    const [user, setUser] = useState({ value: null })
    const [password, setPassword] = useState('')
    const [npassword, setNpassword] = useState('')
    const [cpassword, setCpassword] = useState('')


    const router = useRouter()
    useEffect(() => {
        const myuser = JSON.parse(localStorage.getItem('myuser'))
        if (!myuser) {
            router.push('/')
        }
        if (myuser && myuser.token) {
            setUser(myuser)
            setEmail(myuser.email)
            fetchData(myuser.token)
        }

    }, [])

    const fetchData = async (token) => {
        const data = { token: token };

        let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getuser`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        let res = await a.json()
        console.log("Fetch data -res ----", res)
        setName(res.name)
        setAddress(res.address)
        setPincode(res.pincode)
        setPhone(res.phone)
    }

    const handleUserSubmit = async () => {
        const data = { token: user.token, address, name, phone, pincode };

        let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateuser`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        let res = await a.json()
        if (res.success) {
            toast.success('Successfully Updated Details', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.error('Error', {
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

    const handlePasswordSubmit = async () => {
        let res;
        if(npassword == cpassword){

            const data = { token: user.token, password, cpassword, npassword };
            
            let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updatepassword`, {
                method: 'POST', // or 'PUT'
                headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        
        res = await a.json()
    }else{
        res = {success : false}
    }
        if (res.success) {
            toast.success('Successfully Updated password', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setCpassword('')
            setNpassword('')
            setPassword('')
        } else {
            toast.error('Error while updating password', {
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
            <div className='container'>
                <div>Update Your Account</div>
            </div>
            <div className='px-16'>
                <h2 className='font-semibold text-xl'>1. Delivery Details</h2>
                <div className='mx-auto flex'>
                    <div className='px-2 w-1/2'>
                        <div className=" mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input onChange={ (e) => { setName(e.target.value) } } value={ name } type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className='px-2 w-1/2'>
                        <div className=" mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            { user && user.token ? <input value={ user.email } readOnly={ true } type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                                : <input onChange={ (e) => { setEmail(e.target.value) } } value={ email } type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" /> }

                        </div>
                    </div>
                </div>

                <div className='px-2 w-full'>
                    <div className=" mb-4">
                        <label htmlFor="adress" className="leading-7 text-sm text-gray-600">Address</label>
                        <input onChange={ (e) => { setAddress(e.target.value) } } value={ address } type="text" id="address" name="address" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className='mx-auto flex'>

                    <div className='px-2 w-1/2'>
                        <div className=" mb-4">
                            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                            <input placeholder='Your 10 digit Phone Number' value={ phone } onChange={ (e) => { setPhone(e.target.value) } } type="phone" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className='px-2 w-1/2'>
                        <div className=" mb-4">
                            <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
                            <input placeholder='Your 6 digit Pincode' value={ pincode } onChange={ (e) => { setPincode(e.target.value) } } type="text" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                </div>
                <button onClick={ handleUserSubmit } className="flex text-white bg-pink-500 border-0 py-2 px-5 focus:outline-none hover:bg-pink-600 rounded text-sm">  Submit </button>
                <h2 className='font-semibold text-xl mt-5'>2. Change Password</h2>
                <div className='mx-auto flex'>
                    <div className='px-2 w-1/2'>
                        <div className=" mb-4">
                            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                            <input onChange={ (e) => { setPassword(e.target.value) } } value={ password } type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className='px-2 w-1/2'>
                        <div className=" mb-4">
                            <label htmlFor="npassword" className="leading-7 text-sm text-gray-600">New Password</label>
                            <input onChange={ (e) => { setNpassword(e.target.value) } } value={ npassword } type="password" id="npassword" name="npassword" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className='px-2 w-1/2'>
                        <div className=" mb-4">
                            <label htmlFor="cpassword" className="leading-7 text-sm text-gray-600">Confirm New Password</label>
                            <input onChange={ (e) => { setCpassword(e.target.value) } } value={ cpassword } type="password" id="cpassword" name="cpassword" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                </div>
                <button onClick={ handlePasswordSubmit } className="flex text-white bg-pink-500 border-0 py-2 px-5 focus:outline-none hover:bg-pink-600 rounded text-sm">  Submit </button>

            </div>

        </>
    )
}

export default Myaccount