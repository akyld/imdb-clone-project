import React from 'react'
import Logo from "../play-icon.png"
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='border
    flex items-center space-x-8 pl-12 py-4'>
        <Link to="/"><img className='w-[85px]' src={Logo} /></Link>
        <Link to="/" className='text-blue-400 font-bold text-xl'>Movies</Link>
        <Link to="/fav" className='text-blue-400 font-bold text-xl'>Favourites</Link>
    </div>
  )
}

export default NavBar
