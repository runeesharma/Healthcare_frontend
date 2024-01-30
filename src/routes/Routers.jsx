import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Hospital from '../pages/Hospital/Hospital'
import Header from '../Components/Header/Header'
import Login from '../pages/Login'


import Doctor from '../pages/Doctor/Doctor'

import Register from '../pages/Register'
import About from '../Components/About/About'


import Dietcian from '../pages/Doctor/Dietcian'
import Physician from '../pages/Doctor/Physician'
import Surgeon from '../pages/Doctor/Surgeon'
import Cardio from '../pages/Doctor/Cardio'
import Services from '../pages/Doctor/Services'

function Routers() {
  return (
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/home" element={<Home/>} />
   
    <Route path="/header" element={<Header/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/about" element={<About/>} />
   <Route path="/register" element={<Register/>}/>
    <Route path="/doctor" element={<Doctor/>} />
   
    <Route path="/services" element={<Services/>} />
    <Route path="/cardio" element={<Cardio/>} />
    <Route path="/physician" element={<Physician/>}/>
    <Route path="/dietcian" element={<Dietcian/>}/>
    <Route path="/surgeon" element={<Surgeon/>}/>
    <Route path="/hospital" element={<Hospital/>}/>
   </Routes>
  )
}

export default Routers