import React from 'react'
import Logo from "../play-icon.svg"

function NavBar() {
  return (
    <div className='border
    flex items-center space-x-8 pl-12 py-4
    '>
        <img className='w-[75px]' src={Logo} />
        <h2 className='text-red-500 font-bold text-xl'>Movies</h2>
        <h2 className='text-red-500 font-bold text-xl'>Favourites</h2>
    </div>
  )
}

export default NavBar
