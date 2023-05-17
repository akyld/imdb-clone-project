import React from 'react'
import Image from "../banner.webp";
import "./Banner.css";

function Banner() {
  return (
    <>
      <img className='' src={Image} />
      <div className="parent banner-head">
        <div className='bg-gray-900 text-white font-bold text-2xl py-10 bg-opacity-40 text-center'>Fast X
        </div>
      </div>
    </>
  )
}

export default Banner