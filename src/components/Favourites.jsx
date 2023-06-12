import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'

function Favourites() {
  let [genres,setGenres] = useState([]);
  let movies = [{
    "adult": false,
    "backdrop_path": "/2e7fc8eNwLXZ5Uvehvl3xj8wVyv.jpg",
    "id": 385687,
    "title": "Fast X",
    "original_language": "en",
    "original_title": "Fast X",
    "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
    "poster_path": "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
    "media_type": "movie",
    "genre_ids": [
        28,
        80,
        53
    ],
    "popularity": 5973.909,
    "release_date": "2023-05-17",
    "video": false,
    "vote_average": 7.375,
    "vote_count": 1287
},
{
    "adult": false,
    "backdrop_path": "/rH3jY9JN9krUyE0Q3WLNtujMs8.jpg",
    "id": 667538,
    "title": "Transformers: Rise of the Beasts",
    "original_language": "en",
    "original_title": "Transformers: Rise of the Beasts",
    "overview": "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
    "poster_path": "/k5mQ2G1jS47fuxCjmkzFDeaNYvj.jpg",
    "media_type": "movie",
    "genre_ids": [
        28,
        12,
        878
    ],
    "popularity": 3119.896,
    "release_date": "2023-06-06",
    "video": false,
    "vote_average": 7.553,
    "vote_count": 169
},
{
    "adult": false,
    "backdrop_path": "/2I5eBh98Q4aPq8WdQrHdTC8ARhY.jpg",
    "id": 569094,
    "title": "Spider-Man: Across the Spider-Verse",
    "original_language": "en",
    "original_title": "Spider-Man: Across the Spider-Verse",
    "overview": "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
    "poster_path": "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    "media_type": "movie",
    "genre_ids": [
        28,
        12,
        16,
        878
    ],
    "popularity": 3309.344,
    "release_date": "2023-05-31",
    "video": false,
    "vote_average": 8.795,
    "vote_count": 1118
},
{
    "adult": false,
    "backdrop_path": "/lntyt4OVDbcxA1l7LtwITbrD3FI.jpg",
    "id": 1010581,
    "title": "My Fault",
    "original_language": "es",
    "original_title": "Culpa mía",
    "overview": "Noah must leave her city, boyfriend, and friends to move into William Leister's mansion, the flashy and wealthy husband of her mother Rafaela. As a proud and independent 17 year old, Noah resists living in a mansion surrounded by luxury. However, it is there where she meets Nick, her new stepbrother, and the clash of their strong personalities becomes evident from the very beginning.",
    "poster_path": "/w46Vw536HwNnEzOa7J24YH9DPRS.jpg",
    "media_type": "movie",
    "genre_ids": [
        10749,
        18
    ],
    "popularity": 836.193,
    "release_date": "2023-06-08",
    "video": false,
    "vote_average": 8.421,
    "vote_count": 266
},
{
    "adult": false,
    "backdrop_path": "/h8gHn0OzBoaefsYseUByqsmEDMY.jpg",
    "id": 603692,
    "title": "John Wick: Chapter 4",
    "original_language": "en",
    "original_title": "John Wick: Chapter 4",
    "overview": "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
    "poster_path": "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    "media_type": "movie",
    "genre_ids": [
        28,
        53,
        80
    ],
    "popularity": 4935.527,
    "release_date": "2023-03-22",
    "video": false,
    "vote_average": 7.942,
    "vote_count": 2875
},
{
    "adult": false,
    "backdrop_path": "/o2xM9oVNDdm5tukYcGPj3jX3XpE.jpg",
    "id": 626332,
    "title": "Flamin' Hot",
    "original_language": "en",
    "original_title": "Flamin' Hot",
    "overview": "The inspiring true story of Richard Montañez, the Frito Lay janitor who channeled his Mexican American heritage and upbringing to turn the iconic Flamin’ Hot Cheetos into a snack that disrupted the food industry and became a global pop culture phenomenon.",
    "poster_path": "/a7KyFMPXj0iY4EoLq1PIGU1WJPw.jpg",
    "media_type": "movie",
    "genre_ids": [
        35,
        18
    ],
    "popularity": 46.634,
    "release_date": "2023-03-11",
    "video": false,
    "vote_average": 7.133,
    "vote_count": 30
},
{
    "adult": false,
    "backdrop_path": "/eqRvKwTcBvfiA7EojFae8ZUJXdp.jpg",
    "id": 127529,
    "name": "Bloodhounds",
    "original_language": "ko",
    "original_name": "사냥개들",
    "overview": "Two young boxers band together with a benevolent moneylender to take down a ruthless loan shark who preys on the financially desperate.",
    "poster_path": "/kxU1hhebWZGaz8gkMVi8zkZhzVt.jpg",
    "media_type": "tv",
    "genre_ids": [
        10759,
        18,
        80
    ],
    "popularity": 109.69,
    "first_air_date": "2023-06-09",
    "vote_average": 7.913,
    "vote_count": 23,
    "origin_country": [
        "KR"
    ]
},
{
    "adult": false,
    "backdrop_path": "/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
    "id": 502356,
    "title": "The Super Mario Bros. Movie",
    "original_language": "en",
    "original_title": "The Super Mario Bros. Movie",
    "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
    "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    "media_type": "movie",
    "genre_ids": [
        16,
        10751,
        12,
        14,
        35
    ],
    "popularity": 4219.179,
    "release_date": "2023-04-05",
    "video": false,
    "vote_average": 7.818,
    "vote_count": 4604
},
{
    "adult": false,
    "backdrop_path": "/kv9KH67hsVJ8RLplUBoc1kZlAtY.jpg",
    "id": 123192,
    "name": "The Crowded Room",
    "original_language": "en",
    "original_name": "The Crowded Room",
    "overview": "Set in Manhattan during the summer of 1979. When a young man is arrested for a shocking crime—and an unlikely investigator must solve the mystery behind it.",
    "poster_path": "/vRmopCFp0j1eJGbILLsYsYzxmL8.jpg",
    "media_type": "tv",
    "genre_ids": [
        18,
        80,
        9648
    ],
    "popularity": 130.781,
    "first_air_date": "2023-06-08",
    "vote_average": 6.7,
    "vote_count": 12,
    "origin_country": [
        "US"
    ]
},
{
    "adult": false,
    "backdrop_path": "/vLT1Imot1ydxBncHq6V8yJ4emYh.jpg",
    "id": 76600,
    "title": "Avatar: The Way of Water",
    "original_language": "en",
    "original_title": "Avatar: The Way of Water",
    "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    "media_type": "movie",
    "genre_ids": [
        878,
        12,
        28
    ],
    "popularity": 1503.85,
    "release_date": "2022-12-14",
    "video": false,
    "vote_average": 7.701,
    "vote_count": 8473
},
{
    "adult": false,
    "backdrop_path": "/nTvM4mhqNlHIvUkI1gVnW6XP7GG.jpg",
    "id": 85937,
    "name": "Demon Slayer: Kimetsu no Yaiba",
    "original_language": "ja",
    "original_name": "鬼滅の刃",
    "overview": "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.",
    "poster_path": "/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
    "media_type": "tv",
    "genre_ids": [
        16,
        10759,
        10765
    ],
    "popularity": 248.831,
    "first_air_date": "2019-04-06",
    "vote_average": 8.697,
    "vote_count": 5278,
    "origin_country": [
        "JP"
    ]
},
{
    "adult": false,
    "backdrop_path": "/xzWdwRwbTuDFb0R1rWmlK1ICBQt.jpg",
    "id": 940241,
    "title": "97 Minutes",
    "original_language": "en",
    "original_title": "97 Minutes",
    "overview": "A hijacked 767 will crash in just 97 minutes when its fuel runs out. Against the strong will of NSA Deputy Toyin, NSA Director Hawkins prepares to have the plane shot down before it does any catastrophic damage on the ground, leaving the fate of the innocent passengers in the hands of Tyler, one of the alleged hijackers on board who is an undercover Interpol agent - or is he?",
    "poster_path": "/eYGyR8xF8emNs9AJAJSyLXu56kR.jpg",
    "media_type": "movie",
    "genre_ids": [
        53,
        28
    ],
    "popularity": 80.83,
    "release_date": "2023-06-09",
    "video": false,
    "vote_average": 3.111,
    "vote_count": 9
},
{
    "adult": false,
    "backdrop_path": "/6GIpI3X65J6DT2nSTSga9LnanGJ.jpg",
    "id": 298618,
    "title": "The Flash",
    "original_language": "en",
    "original_title": "The Flash",
    "overview": "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
    "poster_path": "/67PmbAViFCW3obXxr5Utm9wArIP.jpg",
    "media_type": "movie",
    "genre_ids": [
        878,
        28,
        12
    ],
    "popularity": 409.626,
    "release_date": "2023-06-05",
    "video": false,
    "vote_average": 6.8,
    "vote_count": 23
},
{
    "adult": false,
    "backdrop_path": "/ribiMu3iINPxDkofErPxe8jQ8L0.jpg",
    "id": 447277,
    "title": "The Little Mermaid",
    "original_language": "en",
    "original_title": "The Little Mermaid",
    "overview": "The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.",
    "poster_path": "/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
    "media_type": "movie",
    "genre_ids": [
        12,
        10751,
        14,
        10749
    ],
    "popularity": 1765.61,
    "release_date": "2023-05-18",
    "video": false,
    "vote_average": 6.149,
    "vote_count": 599
},
{
    "adult": false,
    "backdrop_path": "/po8r3ZRoPXRrZwGiRTtdjJqNylU.jpg",
    "id": 1126844,
    "title": "The Wonder Weeks",
    "original_language": "nl",
    "original_title": "Oei, ik groei!",
    "overview": "Three modern couples juggle relationships and demanding careers while navigating the unpredictable terrain of parenthood.",
    "poster_path": "/blGdfZPiv4CXViqbfXNcWiplABz.jpg",
    "media_type": "movie",
    "genre_ids": [
        35,
        18
    ],
    "popularity": 77.032,
    "release_date": "2023-06-09",
    "video": false,
    "vote_average": 6.4,
    "vote_count": 9
},
{
    "adult": false,
    "backdrop_path": "/bqMWZ5hB7bcI1KK2TH29odwCgWX.jpg",
    "id": 493529,
    "title": "Dungeons & Dragons: Honor Among Thieves",
    "original_language": "en",
    "original_title": "Dungeons & Dragons: Honor Among Thieves",
    "overview": "A charming thief and a band of unlikely adventurers undertake an epic heist to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people.",
    "poster_path": "/A7AoNT06aRAc4SV89Dwxj3EYAgC.jpg",
    "media_type": "movie",
    "genre_ids": [
        12,
        14,
        35
    ],
    "popularity": 446.549,
    "release_date": "2023-03-23",
    "video": false,
    "vote_average": 7.457,
    "vote_count": 1650
},
{
    "adult": false,
    "backdrop_path": "/d6eZyt3bRYldtjEzQe78b8YUikh.jpg",
    "id": 1128568,
    "title": "You Do You",
    "original_language": "tr",
    "original_title": "Merve Kült",
    "overview": "Merve chose the bohemian life, but it didn't choose her back. Faced with eviction, she starts a new job and stumbles into a spicy setup with her boss.",
    "poster_path": "/8fk4l8PvGGjHYCUpA4gGbyIoS3S.jpg",
    "media_type": "movie",
    "genre_ids": [
        35,
        10749
    ],
    "popularity": 69.678,
    "release_date": "2023-06-09",
    "video": false,
    "vote_average": 6.0,
    "vote_count": 22
},
{
    "adult": false,
    "backdrop_path": "/a51slt8xs4smZJNys29AfHDCy2R.jpg",
    "id": 100883,
    "name": "Never Have I Ever",
    "original_language": "en",
    "original_name": "Never Have I Ever",
    "overview": "After a traumatic year, all an Indian-American teen wants is to go from pariah to popular -- but friends, family and feeling won't make it easy on her.",
    "poster_path": "/hd5fnBixab6IzfUwjC5wfdbX3eM.jpg",
    "media_type": "tv",
    "genre_ids": [
        35,
        18
    ],
    "popularity": 473.43,
    "first_air_date": "2020-04-27",
    "vote_average": 8.159,
    "vote_count": 1463,
    "origin_country": [
        "US"
    ]
},
{
    "adult": false,
    "backdrop_path": "/1V4SPkV3bQvl85zK4FqwTzdfBs4.jpg",
    "id": 125988,
    "name": "Silo",
    "original_language": "en",
    "original_name": "Silo",
    "overview": "In a ruined and toxic future, a community exists in a giant underground silo that plunges hundreds of stories deep. There, men and women live in a society full of regulations they believe are meant to protect them.",
    "poster_path": "/zBx1X06G1OlndbXTCZI13FECNz2.jpg",
    "media_type": "tv",
    "genre_ids": [
        10765,
        18
    ],
    "popularity": 825.927,
    "first_air_date": "2023-05-04",
    "vote_average": 8.4,
    "vote_count": 137,
    "origin_country": [
        "US",
        "GB"
    ]
},
{
    "adult": false,
    "backdrop_path": "/boyxwftKk9NvsXBjmzJWrRveeYO.jpg",
    "id": 135251,
    "name": "The Idol",
    "original_language": "en",
    "original_name": "The Idol",
    "overview": "After a nervous breakdown derailed Jocelyn's last tour, she’s determined to claim her rightful status as the greatest and sexiest pop star in America. Her passions are reignited by Tedros, a nightclub impresario with a sordid past. Will her romantic awakening take her to glorious new heights or the deepest and darkest depths of her soul?",
    "poster_path": "/gO9k7t9jSdkkWVG0deMZDpELZGw.jpg",
    "media_type": "tv",
    "genre_ids": [
        18
    ],
    "popularity": 437.714,
    "first_air_date": "2023-06-04",
    "vote_average": 6.074,
    "vote_count": 27,
    "origin_country": [
        "US"
    ]
}]
  let genreids = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation', 35: 'Comedy',
    80: 'Crime', 99: 'Documentary',
    18: 'Drama', 10751: 'Family',
    14: 'Fantasy', 36: 'History',
    27: 'Horror',
    10402: 'Music', 9648: 'Mystery', 
    10749: 'Romance',
    878: 'Sci-Fi',
    10770: 'TV',
    53: 'Thriller',
    10752: 'War',
    37: 'Western'
  }
 useEffect(() => {
  let temp = movies.map((movie) => genreids[movie.genre_ids[0]] || genreids[movie.genre_ids[1]])
  temp = new Set(temp)
  setGenres(["All Genres",...temp]);
 },[])
  
  return (
    <>
      {/* Genres */}
      <div className='mt-4 flex space-x-2 justify-center flex-wrap'> 
        {genres.map((genre) => {
          return(
            <button className='p-1 px-2 bg-gray-300 rounded-lg text-lg font-bold text-white hover:bg-blue-300 my-2'>{genre}</button>
          )
        })}
        
      </div>
      {/* Search Bar */}
      <div className='mt-4 flex justify-center space-x-2'>
        <input type="text" placeholder='Search' className='border-2 py-1 px-2 placeholder:text-center focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent' />
        {/* <input type="number" value={1} className='border-2 py-1 px-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent'/> */}
      </div>
      {/* Data Table */}
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 overflow-x-auto">
  <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
    <thead className="bg-gray-50">
      <tr>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">
          <div className='flex space-x-1'>
            <img className='cursor-pointer' src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png' />
            <div>Rating</div>
            <img className='cursor-pointer' src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png' />
            </div>
        </th>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900"><div className='flex space-x-1'>
            <img className='cursor-pointer' src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png' />
            <div>Popularity</div>
            <img className='cursor-pointer' src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png' />
            </div></th>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900 text-center">Genre</th>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900 text-center">Remove</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
      {movies.map((movie) => {
        console.log(movie);
         return <tr className="hover:bg-gray-50" key={movie.id}>
        <th className="flex items-center px-6 py-4 font-normal text-gray-900 space-x-2">
            <img
              className="h-[7rem] w-[5rem] object-fit"
              src={`https://www.themoviedb.org/t/p/original/t/p/original/${movie.poster_path}`}
              
            />
            <div className="font-medium text-gray-700">{movie.title || movie.name}</div>
        </th>
        <td className="px-6 py-4 pl-12 text-lg font-bold">
         {movie.vote_average.toFixed(1)}
        </td>
        <td className="px-6 py-4 pl-12 text-lg font-bold">{movie.popularity.toFixed(2)}</td>
        <td className="px-6 py-4">
          <div className="flex justify-center">
            <span
              className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
            >
              {genreids[movie.genre_ids[0]] || genreids[movie.genre_ids[1]]}
            </span>
          </div>
        </td>
        <td className="px-6 py-4">
          <div className='flex justify-center'>
            <span className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold text-red-600 cursor-pointer">
              Delete
            </span>
          </div>
        </td>
          </tr>
      })}
    </tbody>
  </table>
      </div> 
      <Pagination />
    </>
  )
}

export default Favourites