import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import WantToDonateBlood from './pages/WantToDonateBlood'
import NeedBloodForPatients from './pages/NeedBloodForPatients'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Footer from './components/Footer'
import ShowNearDonerPage from './pages/ShowNearDonerPage'
import { ToastContainer } from 'react-toastify'


function App() {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/donateblood' element={<WantToDonateBlood />}/>
        <Route path='/bloodforpatients' element={<NeedBloodForPatients />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />}/>
        <Route path='/showneardoners' element={<ShowNearDonerPage />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App