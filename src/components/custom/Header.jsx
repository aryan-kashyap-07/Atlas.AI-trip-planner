import React from 'react'
import { Button } from '../ui/button'

function Header() {
  return (
    <div className=' shadow-sm flex justify-between items-center px-5'>
      <img src="/logo2.svg" alt="logo" className='m-0 p-0'/>

      <Button>Sign in</Button>

    </div>
  )
}

export default Header
