import React from 'react'
import Image from "../banner.webp";

function Movies() {
  return (
    <div className='-mt-14'>
        <div className='mb-8 font-bold text-2xl text-center'>Trending Movies</div>
        <div className="flex justify-center flex-wrap ">
            <img className='w-[185px] h-[30vh] m-4 rounded-xl hover:scale-110 duration-300' src={Image}  />
            <img className='w-[185px] h-[30vh] m-4 rounded-xl hover:scale-110 duration-300' src={Image}  />
            <img className='w-[185px] h-[30vh] m-4 rounded-xl hover:scale-110 duration-300' src={Image}  />
            <img className='w-[185px] h-[30vh] m-4 rounded-xl hover:scale-110  duration-300' src={Image}  />
            <img className='w-[185px] h-[30vh] m-4 rounded-xl hover:scale-110  duration-300' src={Image}  />
            <img className='w-[185px] h-[30vh] m-4 rounded-xl hover:scale-110  duration-300' src={Image}  />
        </div>
    </div>
  )
}

export default Movies