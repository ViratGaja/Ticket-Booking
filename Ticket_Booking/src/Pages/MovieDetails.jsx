import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dummyDateTimeData, dummyShowsData } from '../assets/assets'
import BlurCircle from '../Components/BlurCircile'
import { Heart, PlayCircleIcon, StarIcon } from 'lucide-react'
import DataSelect from '../Components/DataSelect'

const MovieDetails = () => {
  const { id } = useParams()
  const [show, setShow] = useState(null)

  useEffect(() => {
    const getShow = async () => {
      const showData = dummyShowsData.find(show => show._id === id)
      if (showData) {
        setShow({
          movie: showData,
          dateTime: dummyDateTimeData
        })
      }
    }
    getShow()
  }, [id]) // Always pass dependencies to avoid infinite loop

  const timeFormat = (min) => {
    const h = Math.floor(min / 60)
    const m = min % 60
    return `${h}h ${m}m`
  }

  return show ? (
    <div className='px-6 md:px-16 lg:px-40 pt-30 md:pt-50'>
      <div className='flex flex-col md:flex-row gap-8 max-w-6xl mx-auto'>

        <img
          src={show.movie.poster_path}
          alt={show.movie.title}
          className='max-md:mx-auto rounded-xl h-[26rem] w-[18rem] object-cover'
        />

        <div className='relative flex flex-col gap-3'>
          <BlurCircle top='-100px' left='-100px' />

          <p className='text-primary'>ENGLISH</p>
          <h1 className='text-3xl font-bold'>{show.movie.title}</h1>

          <div className='flex items-center gap-2 text-gray-300'>
            <StarIcon className='w-5 h-5 text-primary fill-primary' />
            <span>{show.movie.vote_average.toFixed(1)} User Rating</span>
          </div>

          <p className='text-gray-400 mt-2 text-sm leading-tight max-w-xl'>
            {show.movie.overview}
          </p>

          <p className='text-gray-200 mt-2 text-sm'>
            {timeFormat(show.movie.runtime)} ·{' '}
            {show.movie.genres.map(genre => genre.name).join(', ')} ·{' '}
            {show.movie.release_date.split('-')[0]}
          </p>
          <div className='flex items-center flex-wrap gap-4 mt-4'>
            <button className='flex transition bg-gray-800 flex-wrap gap-2 px-7 py-3 text-sm hover:bg-gray-900 items-center rounded-md font-medium cursor-pointer active:scale-95'>
              <PlayCircleIcon className='w-5 h-5' />
              Watch Trailer</button>
            <a href="#dateSelect" className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer'>By Tickets</a>
            <button className='bg-gray-700 p-2.5 rounded-full transition cursor-pointer active:scale-95'>
              <Heart className='`w-5 h-5' />
            </button>
          </div>
        </div>
      </div>

      <p className='text-lg font-medium mt-20'>Your Favorite Cast</p>
      <div className='overflow-x-auto no-scrollbar mt-8 pb-4'>

        <div className='flex items-center gap-4 w-max px-4'>
          {show.movie.casts.slice(0, 12).map((cast, index) => (
            <div key={index} className='flex flex-col items-center text-center' >
              <img src={cast.profile_path} className='rounded-full h-20 md:h-20 aspect-square object-cover' alt="" />
              <p>{cast.name}</p>

            </div>
          ))}

        </div>


      </div>
      <DataSelect  dateTime={show.dateTime} id={id}/>
      
    </div>
  ) : (
    <div className='text-center mt-10 text-lg'>Loading...</div>
  )
}

export default MovieDetails
