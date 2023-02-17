import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp() {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState("");
  
 
  const navigate = useNavigate()

  
  const signUpData = async (e) => {
 
    //   // ============use aqxios library======
      e.preventDefault() 
     axios.post('http://localhost:5000/register',{
        fName: fName,lName:lName, phone: phone, email: email, gender: gender
      }).then(()=>navigate('/'))
      .catch(err=>console.log(err))    

    // ====================use fetch method===========
    // let objectData = { fName: fName,lName:lName, phone: phone, email: email, gender: gender }

    // let result = await fetch('/register', {
    //   method: 'POST',
    //   body: JSON.stringify(objectData),
    //   headers: {
    //     "content-type": "application/json"
    //   }
    // })
    // result = await result.json()
    // console.log(result)
    // if (result) {
    //   alert(`${result.message}`)
    //   navigate('/login')
    // } else {

    // }
  }
  return (
    <>
      <form className='register'>
        <h1>Register</h1>
        <input className='inputbox' type='text' value={fName} 
        onChange={(e) => setFName(e.target.value)} placeholder='Enter Your first Name' />
        <input className='inputbox' type='text' value={lName} 
        onChange={(e) => setLName(e.target.value)} placeholder='Enter Your last Name' />
        <input className='inputbox' type='text' value={gender} 
        onChange={(e) => setGender(e.target.value)} placeholder='Enter Your gender' />
        <input className='inputbox' type='email' value={email} 
        onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email' />
        <input className='inputbox' type='text' value={phone} 
        onChange={(e) => setPhone(e.target.value)} placeholder='Enter Your phone no.' />
        <button className='btn' type='button' onClick={signUpData} >SignUp</button>
        <button className='logbtn' type='button'><Link to="/login">login</Link></button>
      </form>
    </>
  )
}