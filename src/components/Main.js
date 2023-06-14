import { React, useState, useEffect } from 'react'
import axios from 'axios'
import requests from '../Requests'
const Main = () => {
  const [movies, setMovies] = useState([])
  const movie = movies[Math.floor(Math.random() * movies.length)]
  useEffect(() => {
    axios
      .get(requests.requestPopular)
      .then(response => setMovies(response.data.results))
  }, [])

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...'
    } else return str
  }
  return (
    <div className='w-full h-[550px] text-white'>
      <div className='w-full h-[550px] absolute bg-gradient-to-r from-black  '></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt={movie?.title}
        className='w-full h-full '
      />
      <div className='absolute top-[30%] p-4  '>
        <h2 className='text-3xl font-bold mb-5'>{movie?.title}</h2>
        <div className='flex gap-5 mb-5'>
          <button className='border py-2 px-3 text-black bg-white'>Play</button>
          <button className='border text-gray-300 px-7 py-2'>
            Watch Later
          </button>
        </div>
        <p className='text-gray-400 text-sm'>Released {movie?.release_date}</p>
        <p className='w-full md:max-w[70%] lg:max-w-[50%] xl:max-w-[40%] text-gray-200'>
          {truncateString(movie?.overview, 150)}
        </p>
      </div>
    </div>
  )
}

export default Main
