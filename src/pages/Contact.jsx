import React, { useState } from 'react'
import GenderSelect from '../Components/GenderSelect'
function Contact() {
  const formUrl = "http://localhost:3000/addform";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const[gender,setGender]=useState()
  const [mess,setMess]=useState("");
  const [state,setState]=useState("");
    
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };


   const Contact=(e)=>{
    e.preventDefault()
    console.log(name, phoneNumber, email, dob, gender,state);
    const body = {
      name,
      
      email,
      phoneNumber,
      dob,
      gender,
      state,
    };
    fetch(formUrl, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then((response) => response.json())
    .then((json) => {


      setMess(json.message);
      

    })
    .catch((error) => {
      setMess("Internal Error");
    })
    
   
  }
  return (
    <div className=' '>
    <p className='text-center font-bold text-2xl'>PATIENT REGISTRATION</p>
    <p className='text-black text-center mt-10 font-semibold text-xl'>{mess}</p>
  <div className='flex justify-center h-[80vh] pt-10'>
    <form class="w-full max-w-lg ">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700  font-bold mb-2 text-l" for="grid-first-name">
          Name
        </label>
        <input 
          value={name}
          onChange={(e) => setName(e.target.value)}
        class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-black focus:bg-white" id="grid-first-name" type="text" placeholder="your name"/>
      
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-l font-bold mb-2" for="grid-last-name">
          Email
        </label>
        <input
     value={email}
     onChange={(e) => setEmail(e.target.value)}
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-black focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" placeholder="your email"/>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-l font-bold mb-2" for="grid-password">
          Phone Number
        </label>
        <input 
       value={phoneNumber}
       onChange={(e) => setPhone(e.target.value)}
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-black focus:bg-white focus:border-gray-500" id="grid-password" type="number" placeholder="phone number"/>
        <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you' </p>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-2 ">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-l font-bold mb-2" for="grid-city">
          DOB
        </label>
        <input 
   value={dob}
   onChange={(e) => setDob(e.target.value)}
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-black focus:bg-white focus:border-gray-500" id="grid-city" type="date" placeholder="your intrest"/>
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0 ml-20 ">
        <label class="block uppercase tracking-wide text-gray-700 text-l font-bold mb-2" for="grid-city">
          GENDER
          <GenderSelect value={gender} onChange={handleGenderChange} />

        </label>
        {/* <select 
      value={gender} onChange={handleGenderChange}
        class=" block  bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-10 leading-tight focus:outline-black focus:bg-white focus:border-black" id="grid-city"  placeholder="your message">
          
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="others">Others</option>
        </select> */}
      </div></div>
     
       <div class="flex flex-wrap -mx-3 mb-2 mt-5">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-l font-bold mb-2" for="grid-city">
          STATE
        </label>
        <select 
       value={state}
       onChange={(e) => setState(e.target.value)}
        class=" block  bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 leading-tight focus:outline-black focus:bg-white focus:border-black" id="grid-city"  placeholder="your message">
            <option value>State</option>
                <option value="B"> Bihar</option>
                <option value="D">Delhi</option>
                <option value="UP">Uttar Pradesh</option>
                <option value="WB">West Bengal</option>
                <option value="J">Jharkhand</option>
                <option value="R">Rajsthan</option>
                <option value="MP">Madhya Pradesh</option>
        </select>
      </div></div>
     
    <button className="bg-gray-500 font-lemon text-white rounded-xl py-2 mt-10 w-40"  onClick={Contact}>SUBMIT</button>
  
  </form>
  </div>
  </div>
  )
}

export default Contact