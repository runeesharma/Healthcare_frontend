import React,{useState} from 'react'
import "./Login.jsx"
import {  useNavigate } from 'react-router-dom';
import GenderSelect from '../Components/GenderSelect'

function Register() {

const registerUrl =  'http://localhost:3000/register';
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const[gender,setGender]=useState();
  const [dob, setDob] = useState("");
   const navigate=useNavigate()
   const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const Register=()=>{
    console.log(name, phone, email, password);
    const body = {
      name,
      email,
      phone,
      password
    };
   
   
    fetch(registerUrl, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((json) => {
        setMessage(json.message);
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error during registration:", error);
        setMessage("Internal Error");
        console.log("Full response:", error.response); // Log the full response object
      });


    
   
  }


  return (
  <div>
       <div className="bg-blue-900 h-[40px] flex flex-row text-centre items-center  ">
          <div className=" text-sm flex flex-row text-centre items-center m-[200px]">
            <span className=" text-white">
              <a href="../pages/Home">Home </a>{" "}
            </span>
            <h4 className="text-gray-400">~Services</h4>
          </div>
        </div>
          <div className=" bg-[#000038] flex items-center justify-center h-screen">
      <div className="max-w-[960px] bg-black-dark p-5 rounded-2xl grid grid-cols-2 gap-20">
        <div className="relative ">
          <img src="src/assets/hospital.jpg" className='h-[400px] mt-[100px]' alt=""  />
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
            <div className="relative">
              <div className="absolute top-1 left-1 bg-white-medium rounded-full p-1 flex items-center justify-center bg-blue-300">
                <img
                  src="../src/assets/phone.jpg"
                  alt=""
                  className="w-6 rounded-full"
                ></img>
              </div>

              <input
               value={gender}
               onChange={(e) => setGender(e.target.value)}
                type="phone"
                placeholder="YOUR..GENDER "
                className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-2 focus:ring-neon-blue focus:drop-shadow-lg"
              />
                <GenderSelect value={gender} onChange={handleGenderChange} />
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
               value={dob}
               onChange={(e) => setDob(e.target.value)}
                type="date"
                placeholder="YOUR..DOB"
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
    </div>
  )
}

export default Register