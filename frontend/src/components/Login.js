import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
 
  const [phone, setPhone] = useState("");

  const navigate = useNavigate()

 

  const signUpData = async (e) => {
   

    // ====================use fetch method===========
    let objectData = { phone: phone }

    let result = await fetch('/send', {
      method: 'POST',
      body: JSON.stringify(objectData),
      headers: {
        "content-type": "application/json"
      }
    })
    result = await result.json()
    console.log(result)
    if (result) {
      alert(`${result.message}`)
      navigate('/enterotp')
    } else {

    }
  }
  return (
    <>
      <form className='register'>
        <h1>Login</h1>
        <input className='inputbox' type='number' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Enter Your phone  number' />
      
        <button className='btn' type='button' onClick={signUpData} >Send_OTP</button>
        <button className='logbtn' type='button'><Link to="/signup">Create_Account</Link></button>
      </form>
    </>
  )
}