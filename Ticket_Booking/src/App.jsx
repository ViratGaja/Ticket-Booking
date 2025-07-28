import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Movies from './Pages/Movies'
import MovieDetails from './Pages/MovieDetails'
import SeatLayout from './Pages/SeatLayout'
import MyBooking from './Pages/MyBooking'
import Favorite from './Pages/Favorite'
import { Toaster } from 'react-hot-toast';
const App = () => {

  const isAdminRoute=useLocation().pathname.startsWith('/admin')
  return (
    <>
    <Toaster/>
      {!isAdminRoute &&<Navbar />}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movies/:id' element={<MovieDetails/>}/>
        
        <Route path='/movies/:id/:date' element={<SeatLayout/>}/>
        <Route path='/my-booking' element={<MyBooking/>}/>
        <Route path='/Favorite' element={<Favorite/>}/>
      </Routes>
      {!isAdminRoute &&<Footer />}
    </>
  )
}

export default App