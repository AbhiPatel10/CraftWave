import React, { useEffect } from 'react'
import { useRouter } from 'next/router';


const Myaccount = () => {
    const router = useRouter()
    useEffect(() => {
        if (!localStorage.getItem("myuser")) {
            router.push('/')
        }
    }, [])
    return (
        <div>Myaccount</div>
    )
}

export default Myaccount