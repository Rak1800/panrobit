import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Home() {
  return (
    <div>
            <button className='logbtn' type='button'><Link to="/login">signUp</Link></button>
            <button className='logbtn' type='button'><Link to="/login">login</Link></button>
    </div>
  )
}
