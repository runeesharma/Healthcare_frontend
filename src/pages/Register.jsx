import React,{useState} from 'react'
import "./Login.jsx"
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
function Register() {
  // const registerUrl = "http://localhost:6000/register";
  axios.post("/register")
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
   const navigate=useNavigate()
  const Register=()=>{
    console.log(name, phone, email, password);
    const body = {
      name: name,
      password: password,
      email,
      phone,
    };
    fetch(registerUrl, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then((response) => response.json())
    .then((json) => {
      setMessage(json.message);
      navigate("/login")

    })
    .catch((error) => {
      setMessage("Internal Error");
    })
    
   
  }




  return (
    <div className=" bg-[#000038] flex items-center justify-center h-screen">
      <div className="max-w-[960px] bg-black-dark p-5 rounded-2xl grid grid-cols-2 gap-20">
        <div className="relative ">
          <img src="src/assets/hospital.jpg" alt=""  />
        </div>
        <div className="max-w-80">
          <h1 className="text-5xl  font-bold text-white">REGISTER</h1>
          <div className="space-y-6 mt-5 text-white">
          <p className='text-white text-xl'>{message}</p>
          <div className="relative">
              <div className="absolute top-1 left-1 bg-white-medium rounded-full p-1 flex items-center justify-center bg-blue-300">
                <img
                  src="../src/assets/person.png"
                  alt=""
                  className="w-6 rounded-full "
                ></img>
              </div>
              <input
               value={name}
               onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="YOUR..NAME"
                className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-2 focus:ring-neon-blue focus:drop-shadow-lg"
              />
            </div>
            <div className="relative">
              <div className="absolute top-1 left-1 bg-white-medium rounded-full p-1 flex items-center justify-center bg-blue-300">
                <img
                  src="../src/assets/email.png"
                  alt=""
                  className="w-6 rounded-full "
                ></img>
              </div>
              <input
               value={email}
               onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="YOUR..EMAIL"
                className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-2 focus:ring-neon-blue focus:drop-shadow-lg"
              />
            </div>
            <div className="relative">
              <div className="absolute top-1 left-1 bg-white-medium rounded-full p-1 flex items-center justify-center bg-blue-300">
                <img
                  src="../src/assets/password.png"
                  alt=""
                  className="w-6 rounded-full"
                ></img>
              </div>

              <input
               value={password}
               onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="YOUR..PASSWORD "
                className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-2 focus:ring-neon-blue focus:drop-shadow-lg"
              />
            </div>
            <div className="relative">
              <div className="absolute top-1 left-1 bg-white-medium rounded-full p-1 flex items-center justify-center bg-blue-300">
                <img
                  src="../src/assets/phone.jpg"
                  alt=""
                  className="w-6 rounded-full"
                ></img>
              </div>

              <input
               value={phone}
               onChange={(e) => setPhone(e.target.value)}
                type="phone"
                placeholder="YOUR..PHONE "
                className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-2 focus:ring-neon-blue focus:drop-shadow-lg"
              />
            </div>
            <button className="bg-neon-blue font-semibold rounded-full py-2 w-40" onClick={Register}>REGISTER</button>
          </div>
          <div className="text-medium-white pt-2 space-y-4 text-s">
            <p className="text-white">
             <a className="text-neon-blue font-semibold cursor-pointer">Sign_in</a> your account
            </p>
            <p className="text-white">If you have registered then 
             <a className="text-neon-blue font-semibold cursor-pointer" href="/Login"> Login</a> 
            </p>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register