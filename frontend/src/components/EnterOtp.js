import React, { useState } from 'react'
// import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export default function EnterOtp() {
  const [code, setCode] = useState('');

  const navigate = useNavigate()

 

  const signUpData = async (e) => {

    //   // ============use aqxios library======
    //   e.preventDefault() 
    //  axios.post('http://localhost:5000/register',{
    //     name:name,
    //     phone:phone,
    //     email:email,   
    //     password:pass
    //   }).then(()=>navigate('/'))
    //   .catch(err=>console.log(err))    

    // ====================use fetch method===========
    let objectData = { code:code }

    let result = await fetch('/enterotp', {
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
      navigate('/login')
    } else {

    }
  }
  return (
    <>
      <form className='register'>
        <h1>Enter code</h1>
        <input className='inputbox' type='text' value={code} 
        onChange={(e) => setCode(e.target.value)} placeholder='Enter code' />
      
        <button className='btn' type='button' onClick={signUpData} >Submit</button>
        <button className='logbtn' type='button'><Link to="/login">Back</Link></button>
      </form>
    </>
  )
}