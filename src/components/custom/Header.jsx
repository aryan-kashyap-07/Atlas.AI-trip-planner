import React from 'react'
import { Button } from '../ui/button'

function Header() {
  return (
    <div className=' shadow-sm flex justify-between items-center px-5 bg backdrop-blur-lg'>
      <img src="/logo2.svg" alt="logo" className='m-0 p-0 '/>

      <Button className="bg-[#000000] hover:bg-[#273034] text-white px-6 py-3 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110">Sign in</Button>

    </div>
  )
}

export default Header
