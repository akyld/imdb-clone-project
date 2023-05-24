import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';

function Banner() {
  
  const [bannerMovie,setBanner] = useState("");
  const [loading,setLoading] = useState("");

    useEffect(() => {
      setLoading(true)
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/trending/all/day',
        params: {language: 'en-US'},
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2QyNjhjZjI4M2NmMGI4OTZhOWUwNWE4MTI3MmU2YyIsInN1YiI6IjY0NmIyZTdjNTRhMDk4MDE1NWUyYTk2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cJmjT-IgsXbhMwTQRom2C-T--4U0-6mv74wWlEKVYHA'
        }
      };
      
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data.results);
          setBanner(response.data.results[0]);
        })
        .catch(function (error) {
          console.error(error);
        });
        setLoading(false)
    }, [])
    
  return (
    <>
    {
      loading ? <div className='flex justify-center'>
        <Oval className="flex justify-center"
      height="80"
      width="80"
      radius="9"
      color="gray"
      secondaryColor='gray'
      ariaLabel="loading"
    />
      </div>
     : <div className='h-[20rem] md:h-[35rem] lg:h-[45rem] bg-center bg-cover flex items-end' style={{backgroundImage:`url(https://www.themoviedb.org/t/p/original/${bannerMovie.backdrop_path})`}}>
      <div className='text-xl md:text-3xl text-white bg-gray-900 bg-opacity-60 p-4 text-center w-full'>
        {bannerMovie.title}
      </div>
    </div>
    }
      
    </>
  )
}

export default Banner