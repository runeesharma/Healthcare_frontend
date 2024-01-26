// import React from 'react'
// import Logo from '../../assets/Logo.png'
// import User from '../../assets/user.png'
// import { NavLink,Link } from 'react-router-dom'
// import {BiMenu} from 'react-router-dom'
// const navLinks =[
//   {
//     path:'/home',
//     display: 'Home'
//   },
//   {
//     path:'/doctor',
//     display: 'Find a Doctor'
//   },
//   {
//     path:'/service',
//     display: 'Services'
//   },
//   {
//     path:'/contact',
//     display: 'Contact'
//   }
// ]
// function Header() {
//   return (
//     <header className='header flex items-center'>
//       <div className='container' >
//         <div className='flex items-center justify-between' >
//           {/*=========== logo ============*/}
// <div>
//  <img src={Logo}></img>

// </div> Healthcare
//  {/*=========== menu ============*/}
// <div className='navigation  '>
//   <ul className='menu flex gap-[2.7rem] '>
//     {navLinks.map((link,index)=>(
// <li key={index}>
//   <NavLink to={link.path}
//   className={navClass=>navClass.isActive ? " text-primaryColor text-[16px] leading-7 font-[600]": "text-textColor text-[16px] leading-7 font-[500]hover:text-primaryColor"}>

// {link.display}
//   </NavLink>

// </li>
//     ))}

//   </ul>
// </div>

// {/*==========navright =========*/}
// <div className='flex items-center gap-4'>
//   <div className=''>
// <Link to="/">
//   <figure className='w-[35px] h-[35px] rounded-full  '>
//     <img src={User} alt="" className='rounded-full cursor-pointer w-full'>
//     </img>
//   </figure>
// </Link>
//   </div>
//   <Link to="/login">
//     <button className='bg-primaryColor py-2 px-6 text-white font-[600]  h-[45px] flex items-center justify-center rounded-[30px]'>Login</button>
//   </Link>
//   <span className='md:hidden'>
// {/* <BiMenu className='w-6 h-6 cursor-pointer'></BiMenu> */}
//   </span>
// </div>
//         </div>
//       </div>
//     </header>
//   )
// }

// export default Header


import Logo from '../../assets/Logo.png'
import User from "../../assets/user.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <header className="bg-gradient-to-r from-[#fefefe] from-10% via-[#d2c56c] via-30% to-[#f9eee2] to-90%  fixed  w-full ">
        <div className="max-w-[1240px] items-center  py-[12px] flex justify-between mx-auto font-bold">
        <div className='gap-2 flex'> <img src={Logo}></img>
          <div className="text-3xl font-bold">Healthcare</div>
          </div>
          {toggle ? (
            <AiOutlineMenu
              onClick={() => setToggle(!toggle)}
              className="text-white text-2xl  md:hidden block"
            />
          ) : (
            <AiOutlineClose
              onClick={() => setToggle(!toggle)}
              className="text-white text-2xl  md:hidden block"
            />
          )}
          <div className="gap-10 flex">
            <ul className="hidden md:flex  text-white gap-5">
              <Link to={"/home"}>
                <li>Home</li>
              </Link>
              <Link to={"/contact"}>
                {" "}
                <li>Contact</li>
              </Link>
              <Link to={"/service"}>
                {" "}
                <li>Services</li>
              </Link>
              <Link to={"/doctor"}>
                {" "}
                <li>Doctor</li>
              </Link>
              <Link to={"/login"}>
              <li> Login</li> 
                </Link>
              
            </ul>
            {/*Responsive*/}
            <ul
              className={` duration-300 md:hidden w-[40%] mt-[-4px]  h-screen text-white fixed bg-gradient-to-r from-[#e3f281] from-10% via-[#d2c56c] via-30% to-[#fba748] to-90% top-[92px] ${
                toggle ? "left-[0]" : "left-[-100%]"
              } 
        `}
            >
              <Link to={"/home"}>
                <li className="p-5">Home</li>
              </Link>
              <Link to={"/contact"}>
                {" "}
                <li className="p-5">Contact</li>
              </Link>
              <Link to={"/service"}>
                {" "}
                <li className="p-5">Services</li>
              </Link>
              <Link to={"/doctor"}>
                {" "}
                <li className="p-5">Doctor</li>
              </Link>
            </ul>
            <div className=" flex gap-1">
              <div>
                <Link to="/">
                  <figure className="w-[45px] h-[50px] rounded-full ">
                    <img
                      src={User}
                      alt=""
                      className="rounded-full cursor-pointer w-full"
                    ></img>
                  </figure>
                </Link>
              </div>
              <div className="">
              
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
