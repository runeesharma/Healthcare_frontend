import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Hospital from '../pages/Hospital/Hospital'
import Header from '../Components/Header/Header'
import Login from '../pages/Login'




import Register from '../pages/Register'
import About from '../Components/About/About'
import Contact from '../pages/Contact'
import Findandbook from '../Components/Book/Findandbook'

import Doctor from '../pages/Doctor/Doctor'
import Dietcian from '../pages/Doctor/Dietcian'
import Physician from '../pages/Doctor/Physician'
import Surgeon from '../pages/Doctor/Surgeon'
import Cardio from '../pages/Doctor/Cardio'
import Services from '../pages/Doctor/Services'
import Sections from '../pages/Doctor/Sections'
import Dentist from '../pages/Doctor/Dentist'
import Categories from '../pages/Doctor/Categories'
import Dermatologist from '../pages/Doctor/Dermatologist'
import Gynecologist from '../pages/Doctor/Gynecologist'
import Neurologist from '../pages/Doctor/Neurologist'
import Ophthalmologist from '../pages/Doctor/Ophthalmologist'
import Pediatrician from '../pages/Doctor/Pediatrician'
import Psychiatrist from '../pages/Doctor/Psychiatrist'
import Otolaryngologist from '../pages/Doctor/Otolaryngologist'

function Routers() {
  return (
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/header" element={<Header/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/register" element={<Register/>}/>
    <Route path="/hospital" element={<Hospital/>}/>
    <Route path="/book" element={<Findandbook/>}/>

    <Route path="/doctor" element={<Doctor/>} />
    <Route path="/sections" element={<Sections/>} />
    <Route path="/services" element={<Services/>} />
    <Route path="/cardio" element={<Cardio show={true}/>} />
    <Route path="/physician" element={<Physician/>}/>
    <Route path="/dietcian" element={<Dietcian/>}/>
    <Route path="/surgeon" element={<Surgeon/>}/>
    <Route path="/dentist" element={<Dentist/>}/>
    <Route path="/psychiatrist" element={<Psychiatrist/>}/>
    <Route path="/pediatrician" element={<Pediatrician/>}/>
    <Route path="/ophthalmologist" element={<Ophthalmologist/>}/>
    <Route path="/neurologist" element={<Neurologist/>}/>
    <Route path="/gynecologist" element={<Gynecologist/>}/>
    <Route path="/dermatologist" element={<Dermatologist />}/>
    <Route path="/categories" element={<Categories/>}/>
    <Route path="/otolaryngologist" element={<Otolaryngologist/>}/>
   </Routes>
  )
}

export default Routers