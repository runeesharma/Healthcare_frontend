import Logo from "../../assets/Logo.png";
import User from "../../assets/user.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <header className="bg-white  w-full ">
        <div className="max-w-[1240px] items-center  py-[12px] flex justify-between mx-auto font-bold">
          <div className="gap-2 flex">
            {" "}
            <img src={Logo}></img>
            <div className="text-3xl font-bold">Healthcare</div>
          </div>
          {toggle ? (
            <AiOutlineMenu
              onClick={() => setToggle(!toggle)}
              className="text-black text-2xl  md:hidden block"
            />
          ) : (
            <AiOutlineClose
              onClick={() => setToggle(!toggle)}
              className="text-black text-2xl  md:hidden block"
            />
          )}
          <div className="gap-10 flex">
            <ul className="hidden md:flex  text-black gap-5">
              <Link to={"/home"}>
                <li>Home</li>
              </Link>

              <Link to={"/services"}>
                {" "}
                <li>Services</li>
              </Link>
              <Link to={"/doctor"}>
                {" "}
                <li>Doctor</li>
              </Link>

              <Link to={"/hospital"}>
                <li>Hospital</li>
              </Link>
              <Link to={"/login"}>
                <li> Login</li>
              </Link>
            </ul>
            {/*Responsive*/}
            <ul
              className={` duration-300 md:hidden w-[40%] mt-[-4px]  h-screen text-black fixed bg-white top-[92px] ${
                toggle ? "left-[0]" : "left-[-100%]"
              } 
        `}
            >
              <Link to={"/home"}>
                <li className="p-5">Home</li>
              </Link>

              <Link to={"/service"}>
                {" "}
                <li className="p-5">Services</li>
              </Link>
              <Link to={"/doctor"}>
                {" "}
                <li className="p-5">Doctor</li>
              </Link>
              <Link to={"/hospital"}>
                {" "}
                <li className="p-5">Hospital</li>
              </Link>
              <Link to={"/login"}>
                {" "}
                <li className="p-5">Login</li>
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
              <div className=""></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
