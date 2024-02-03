import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import About from "../Components/About/About";
import Findandbook from "../Components/Book/Findandbook";

function Home() {
  const [searchInput, setIn] = useState();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/${searchInput}`);
  };
  return (
    <div className="">
      {/* first */}
      <div className=" bg-[#000038]  py-[100px] mx-auto">
        <div className="text-center">
          <h3 className="text-white font-bold text-5xl py-[20px]">
            BOOK N MEET A DOCTOR !
          </h3>
          <ReactTyped
            className="bg-white text-2xl font-bold"
            strings={[
              "Prevention of yesterday",
              "Awareness today",
              "healthier tomorrow",
            ]}
            typespeed={100}
            loop={true}
            backSpeed={100}
          />
          <p className="text-white py-[10px] font-semibold">
            India's best online appointement scheduling platform
          </p>
          <div className="flex gap-5 justify-center py-[30px]">
            <div className="rounded-xl border-solid border-4 border-[#f3f3f7]">
              <select name="State" className="h-10 ">
                <option value>State</option>
                <option value="B"> Bihar</option>
                <option value="D">Delhi</option>
                <option value="UP">Uttar Pradesh</option>
                <option value="WB">West Bengal</option>
                <option value="J">Jharkhand</option>
                <option value="R">Rajsthan</option>
                <option value="MP">Madhya Pradesh</option>
                <option value="AP"></option>
                <option value="AP"></option>
                <option value="AP"></option>
                <option value="AP"></option>
              </select>
            </div>
            <div className="rounded-xl border-solid border-4 border-[#f3f3f7]">
              <input
                placeholder="Doctor/specialization"
                type="text"
                className="h-10 "
                onChange={(e) => setIn(e.target.value)}
              ></input>
              <button onClick={handleNavigate} className="bg-[#59faf5] h-10 rounded-l ">Search</button>
            </div>
          </div>
        </div>
        <div className="flex mx-auto ">
          <div className=" w-[200px] h-[200px] p-5 gap-10 flex ">
            <img
              src="../src/assets/c2.jpg"
              alt=""
              className="rounded-xl border-solid border-4 border-[#f3f3f7]"
            />
            <img
              src="../src/assets/c3.jpg"
              alt=""
              className="rounded-xl border-solid border-4 border-[#f3f3f7]"
            />
            <img
              src="../src/assets/c4.webp"
              alt=""
              className="rounded-xl border-solid border-4 border-[#f3f3f7]"
            />
            <img
              src="../src/assets/c1.avif"
              alt=""
              className="rounded-xl border-solid border-4 border-[#f3f3f7]"
            />
            <img
              src="../src/assets/c5.jpg"
              alt=""
              className="rounded-xl border-solid border-4 border-[#f3f3f7]"
            />
            <img
              src="../src/assets/c6.avif"
              alt=""
              className="rounded-xl border-solid border-4 border-[#f3f3f7]"
            />
            <img
              src="../src/assets/c7.avif"
              alt=""
              className="rounded-xl border-solid border-4 border-[#f3f3f7]"
            />
                
          </div>
        </div>
        {/* second */}
      </div>
      <div className="text-center py-[50px] bg-gray-200 mx-auto">
        <h2 className="font-extrabold text-2xl">
          PROVIDING THE BEST MEDICAL SERVICES
        </h2>
        <p className="text-l font-semibold">
          world-class care for everyone.Our health System offers
          unmatched,expert health care
        </p>
        <div className="flex py-[50px] gap-[100px] ">
          <div className="bg-white ml-20  rounded-lg m-3 h-[350px] w-[300px]">
            <div>
              <img src="../src/assets/location.png"></img>
            </div>
            <h3 className="font-semibold text-xl text-[#3f89f7]">
              Find a Doctor
            </h3>
            <div>
              {" "}
              First class care for everyone. Our health System offers
              unmatched,expert health care . From the lab to clinic{" "}
            </div>
            <Link
              to="/doctor"
              className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
            >
              <FaCircleArrowRight className=" group-hover:text-white w-6 h-5 " />
            </Link>
          </div>

          <div className="bg-white ml-20  rounded-lg m-3 h-[350px] w-[300px] ">
            <div>
              <img src="../src/assets/know.png "></img>
            </div>
            <h3 className="font-semibold text-xl text-[#3f89f7]">
              Know Your Doctors
            </h3>
            <div>
              {" "}
              Know your Doctor to book confirmed <br />
              doctor Appointment effortlessly
              <br /> with clinic details{" "}
            </div>
            <Link
              to="/doctordetails"
              className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
            >
              <FaCircleArrowRight className=" group-hover:text-white w-6 h-5 " />
            </Link>
          </div>
          <div className="bg-white ml-20  rounded-lg m-3  h-[350px] w-[300px] ">
            <div>
              <img src="../src/assets/appoint.png"></img>
            </div>
            <h3 className="font-semibold text-xl text-[#3f89f7]">
              Book Appointment
            </h3>
            <div>
              {" "}
              Empowering with Google verified <br /> SMS & dynamic Email
              notifications
              <br />. Confirmed Doctor Appointment.
            </div>
            <Link
              to="/doctor"
              className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
            >
              <FaCircleArrowRight className=" group-hover:text-white w-6 h-5 " />
            </Link>
          </div>
        </div>
      </div>
      {/* third */}
      <div className="mx-auto">
        <About />
      </div>
      <div>
        <Findandbook />
      </div>
    </div>
  );
}

export default Home;
