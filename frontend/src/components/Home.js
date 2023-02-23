import React from 'react'
import { Link} from 'react-router-dom'

export default function Home() {
  return (
    <div>
       <button className='logbtn' type='button'><Link to="/signup">signUp</Link></button>
        <button className='logbtn' type='button'><Link to="/login">login</Link></button>
    </div>
  )
}
