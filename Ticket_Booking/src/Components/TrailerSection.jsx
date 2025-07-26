import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import BlurCircle from './BlurCircile'; // ✅ fixed spelling
import { PlayCircleIcon } from 'lucide-react'; // ✅ Make sure lucide-react is installed

const dummyTrailers = [
  {
    image: "https://img.youtube.com/vi/WpW36ldAqnM/maxresdefault.jpg",
    videoUrl: 'https://www.youtube.com/watch?v=ubtteedOsQY'
  },
  {
    image: "https://img.youtube.com/vi/-sAOWhvheK8/maxresdefault.jpg",
    videoUrl: 'https://www.youtube.com/watch?v=-sAOWhvheK8'
  },
  {
    image: "https://img.youtube.com/vi/1pHDWnXmK7Y/maxresdefault.jpg",
    videoUrl: 'https://www.youtube.com/watch?v=1pHDWnXmK7Y'
  },
  {
    image: "https://img.youtube.com/vi/umiKiW4En9g/maxresdefault.jpg",
    videoUrl: 'https://www.youtube.com/watch?v=umiKiW4En9g'
  }
];

const TrailersSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden'>
      <p className='text-gray-300 font-medium text-lg max-w-[960px] mx-auto'>
        Trailers
      </p>

      <div className='relative mt-6'>
        <BlurCircle top='-100px' right='-100px' />
        <ReactPlayer
          url={currentTrailer.videoUrl}
          controls={true}
          className='mx-auto max-w-full'
          width='960px'
          height='540px'
        />
      </div>

    
      <div className='group grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto'>
        {dummyTrailers.map((trailer) => (
          <div
            key={trailer.image}
            className='relative hover:-translate-y-1 duration-300 transition max-md:h-60 md:max-h-60 cursor-pointer'
            onClick={() => setCurrentTrailer(trailer)}
          >
            <img
              src={trailer.image}
              alt="trailer"
              className='rounded-lg w-full h-full object-cover brightness-75'
            />
            <PlayCircleIcon
              strokeWidth={1.6}
              className="absolute top-1/2 left-1/2 w-5 md:w-8 h-5 md:h-12 transform -translate-x-1/2 -translate-y-1/2 text-white"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrailersSection;
