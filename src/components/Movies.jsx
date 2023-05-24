import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import {Oval} from "react-loader-spinner";
import Pagination from './Pagination';

function Movies() {

  let [movies,setMovies] = useState([]);
  let [pageNum,setPage] = useState(1);
  let [hovered,setHovered] = useState("");
  let [favourites,setFavourites] = useState([]);

  useEffect(() => {
    console.log("useEffect worked");
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/trending/all/day?api_key=63d268cf283cf0b896a9e05a81272e6c&page='+pageNum,
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
        setMovies(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [pageNum])


  const onPrev = () => {
    if (pageNum > 1) {
      setPage(pageNum - 1);
    }
  }

  const onNext = () => {
      setPage(pageNum + 1);
  }

  const showEmoji = (id) => {
    setHovered(id);
  }

  const hideEmoji = () => {
    setHovered(" ");
  }

  const addEmoji = (id) => {
    const newFav = [...favourites,id];
    setFavourites(newFav);
  }

  const removeEmoji = (id) => {
    const filteredFav = favourites.filter(element => {
      return element != id  
    })
    setFavourites(filteredFav);
  }

  return (
    <div className='mt-10'>
        <div className='mb-8 font-bold text-2xl text-center'>Trending Movies</div>
          <div className="flex justify-center flex-wrap ">
            
            {
              movies.length == 0 ? <Oval className="flex justify-center"
              height="80"
              width="80"
              radius="9"
              color="gray"
              secondaryColor='gray'
              ariaLabel="loading"
            /> : 
                movies.map((movie) => {
                  return <div key={movie.id} className='bg-center bg-cover w-[160px] md:w-[180px] h-[30vh] md:h-[35vh] m-4 rounded-xl hover:scale-110 duration-300 flex items-end relative' style={{backgroundImage:`url(https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path})`}} 
                  onMouseOver={() => {showEmoji(movie.id)}}
                  onMouseLeave={() => {hideEmoji(movie.id)}}>
                    
                    <div className='p-4 bg-gray-900 absolute top-2 right-2 rounded-xl cursor-pointer' style={{display:hovered == movie.id ? "block":"none"}}>
                      {
                        favourites.includes(movie.id) == false ? 
                        <div className='text-lg' onClick={() => {addEmoji(movie.id)}}>
                          &#x1F60D;
                        </div>
                        :
                        <div className='text-lg' onClick={() => {removeEmoji(movie.id)}}>
                          &#x274C;
                        </div>
                        
                      }
                    </div>


                    <div className=' font-bold text-white bg-gray-900 bg-opacity-60 p-2 text-center w-full rounded-b-xl'>
                      {movie.title || movie.name}
                    </div>
                </div>  
                })
              
              
            }
        </div>

        <Pagination pageNum={pageNum} onPrev={onPrev} onNext={onNext} />    
    </div>
  )
}

export default Movies