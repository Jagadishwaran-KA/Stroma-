import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='flex justify-evenly cursor-pointer  h-20 items-center'>

      <Link to= "/">
        <h1 className='text-2xl font-medium '>Stroma</h1>
      </Link>
      <Link to= "/">
        <p className='text-xl font-mono'>Home</p>
      </Link>
      <Link to= "/donor">
      <p className='text-xl font-mono'>Donate Now</p>
      </Link>
      <Link to= "/receiver">
      <p className='text-xl font-mono'>Receiver</p>
      </Link>
      <p className='text-xl font-mono'>Contact Us</p>
    </div>
  )
}

export default Header