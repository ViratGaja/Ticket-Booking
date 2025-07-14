import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Movies from './Pages/Movies'
import MovieDetails from './Pages/MovieDetails'
import SeatLayout from './Pages/SeatLayout'
import MyBooking from './Pages/MyBooking'
import Favorite from './Pages/Favorite'

const App = () => {

  const isAdminRoute=useLocation().pathname.startsWith('/admin')
  return (
    <>
      {!isAdminRoute &&<Navbar />}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/mmovies/:id' element={<MovieDetails/>}/>
        <Route path='/movies/:id/:date' element={<SeatLayout/>}/>
        <Route path='/my-booking' element={<MyBooking/>}/>
        <Route path='/Favorite' element={<Favorite/>}/>
      </Routes>
    </>
  )
}

export default App