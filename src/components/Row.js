import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import Movie from './Movie'
const Row = ({ title, url, rowId }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(url).then(res => setMovies(res.data.results))
  }, [url])
  const slideLeft = () => {
    let slider = document.getElementById('slider' + rowId)
    slider.scrollLeft = slider.scrollLeft - 500
  }
  const slideRight = () => {
    let slider = document.getElementById('slider' + rowId)
    slider.scrollLeft = slider.scrollLeft + 500
  }
  return (
    <>
      <p className='text-white py-3 font-semibold text-lg p-4'>{title}</p>
      <div className='flex relative items-center group'>
        <MdChevronLeft
          onClick={slideLeft}
          className='bg-white left-0 rounded-full absolute 
          opacity-50 hover:opacity-100 cursor-pointer z-10  group-hover:block'
          size={40}
        />
        <div
          id={'slider' + rowId}
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {movies.map(movie => (
            <Movie key={movie?.id} movie={movie} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10  group-hover:block'
          size={40}
        />
      </div>
    </>
  )
}

export default Row
