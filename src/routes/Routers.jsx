import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Service from '../pages/Service'
import Header from '../Components/Header/Header'
import Login from '../pages/Login'


import Doctor from '../pages/Doctor/Doctor'
import DoctorDetail from '../pages/Doctor/DoctorDetail'
import Register from '../pages/Register'
import About from '../Components/About/About'
function Routers() {
  return (
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/service" element={<Service/>} />
    <Route path="/header" element={<Header/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/about" element={<About/>} />
   <Route path="/register" element={<Register/>}/>
    <Route path="/doctor" element={<Doctor/>} />
    <Route path="/doctordetails" element={<DoctorDetail/>} />
   </Routes>
  )
}

export default Routers