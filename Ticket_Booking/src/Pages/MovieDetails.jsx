import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dummyDateTimeData, dummyShowsData } from '../assets/assets'
import BlurCircle from '../Components/BlurCircile'
import { StarIcon } from 'lucide-react'

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
        </div>
      </div>
    </div>
  ) : (
    <div className='text-center mt-10 text-lg'>Loading...</div>
  )
}

export default MovieDetails
