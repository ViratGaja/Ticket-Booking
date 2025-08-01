import React, { useState } from 'react'
import BlurCircle from '../Components/BlurCircile'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const DataSelect = ({ dateTime, id }) => {
       const [selected,setSelected]=useState(null)
       const navigate=useNavigate();
       const onBooking=()=>{
        if(!selected){
          return toast('please select a date')
        }
        navigate(`/movies/${id}${selected}}`)
        scrollTo(0,0)
       }

  return (
    <div id='dateSelect' className='pt-30'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-10 relative p-8 bg-primary/10 border border-primary/20 rounded-lg'>
        
        {/* Background blur circles */}
        <BlurCircle top="-100px" left="-100px" />
        <BlurCircle top="100px" right="0px" />

        {/* Date Picker Section */}
        <div>
          <p className='text-lg font-semibold'>Choose Date</p>
          <div className='flex items-center gap-6 text-sm mt-5'>

            {/* Left Arrow */}
            <ChevronLeftIcon width={28} />

            {/* Date Buttons */}
            <span className='grid grid-cols-3 md:flex flex-wrap md:max-w-lg gap-4'>
              {
                Object.keys(dateTime).map((date) => (
                  <button onClick={()=>setSelected(date)}
                    className={`flex flex-col items-center justify-center h-14 w-14 aspect-square rounded cursor-pointer hover:bg-primary/20 transition ${selected===date?"bg-primary text-white":"border border-primary/70"}`}
                    key={date}
                  >
                    <span>{new Date(date).getDate()}</span>
                    <span>
                      {new Date(date).toLocaleDateString("en-US", {
                        month: "short"
                      })}
                    </span>
                  </button>
                ))
              }
            </span>

            {/* Right Arrow */}
            <ChevronRightIcon width={28} />
          </div>
        </div>

        {/* Book Now Button */}
        <button onClick={onBooking}  className='bg-primary text-white px-8 py-2 mt-6 rounded hover:bg-primary/90 transition-all cursor-pointer'>
          Book Now
        </button>
      </div>
    </div>
  )
}

export default DataSelect
