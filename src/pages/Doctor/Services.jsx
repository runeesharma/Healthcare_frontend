import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div className="">
        {/* temp nav */}
        <div className="bg-blue-900 h-[40px] flex flex-row text-centre items-center  ">
          <div className=" text-sm flex flex-row text-centre items-center m-[200px]">
            <span className=" text-white">
             <Link to="/home">
              Home
             </Link>
            </span>
            <h4 className="text-gray-400">~Services</h4>
          </div>
        </div>
        <div>
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between bg-[url('../src/assets/background.png')]">
              <div>
                <div className="lg:w-[570px] ">
                  <div>
                    <h1 className="text-[20px] leading-[46px] text-headingColor font-[800] md:text-[50px] md:leading-[40px] mt-10 font-serif">
                      Making Health{" "}
                    </h1>
                    <h1 className="text-[20px] leading-[46px] text-headingColor font-[800] md:text-[50px] md:leading-[40px] mt-2 font-serif">
                      Care Better Together
                    </h1>
                  </div>
                  <p className="mt-5">
                    Our hospital management system simplifies administrative
                    tasks, improves patient care, and optimizes resource
                    allocation. It offers intuitive interfaces and robust
                    features for efficient appointment scheduling,
                    record-keeping, and billing
                  </p>
                  <div className="flex flex-row mt-10">
                    {" "}
                    <Link to="/hospital">
                    <button className="bg-blue-600 p-10 py-3  text-white font-serif">
                      View Hospital
                    </button>
                    </Link>
                    <Link to="/doctor">
                    <button className="border-solid border-2 border-blue-900 ml-3 p-10 py-3 text-black font-serif">
                      View Department
                    </button>
                    </Link>
                  </div>
                </div>
                {/* ======== hero counter =======*/}
                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                  <div>
                    <h2 className="text-[36px] leadidng-[56px] lg:text-[44px] lg:leading-[54px] font=[700] text-headingColor">
                      30+
                    </h2>
                    <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]">
                      {" "}
                    </span>
                    <p className="">Years of Experience</p>
                  </div>
                  <div>
                    <h2 className="text-[36px] leadidng-[56px] lg:text-[44px] lg:leading-[54px] font=[700] text-headingColor">
                      15+
                    </h2>
                    <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]">
                      {" "}
                    </span>
                    <p className="">Clinic Location</p>
                  </div>
                  <div>
                    <h2 className="text-[36px] leadidng-[56px] lg:text-[44px] lg:leading-[54px] font=[700] text-headingColor">
                      100%
                    </h2>
                    <span className="w-[100px] h-2 bg-[#42e2b5] rounded-full block mt-[-14px]">
                      {" "}
                    </span>
                    <p className="">Patient Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* cardsssss */}
        <div className=" bg-gray-300">
          <div>
            <h1 className="text-[50px] flex flex-col justify-center  items-center text-center text-black font-bold mt-10">
              Categories
            </h1>
            <div className="flex flex-row justify-center items-center ">
              <div className="bg-white p-5 rounded-lg m-10 border-white   border-4  hover:border-solid hover:border-4 hover:border-indigo-600 hover:shadow-black flex flex-col align-middle">
                <p className="font-extrabold text-2xl text-center ">
                  Cardiologist
                </p>
                <img className="w-[450px] h-[250px]" src=" ../src/assets/cardio.jpg"></img>
                <Link to="/cardio">
                <button className="bg-[#4cd1db] font-semibold text-xl mx-10 py-3 rounded-sm mt-5">
               See More
                </button>
                </Link>
              </div>
              <div className="bg-white p-5 rounded-lg m-10 border-white   border-4  hover:border-solid hover:border-4 hover:border-indigo-600 hover:shadow-black flex flex-col align-middle">
                <p className="font-extrabold text-2xl text-center ">
                Dietician
                </p>
                <img className="w-[450px] h-[250px]" src=" ../src/assets/dietician.jpg"></img>
                <Link to="/dietcian">
                <button className="bg-[#4cd1db] font-semibold text-xl mx-10 py-3 rounded-sm mt-5">
                See More
                </button>
                </Link>
              </div>
              <div className="bg-white p-5 rounded-lg m-10 border-white   border-4  hover:border-solid hover:border-4 hover:border-indigo-600 hover:shadow-black flex flex-col align-middle">
                <p className="font-extrabold text-2xl text-center ">
                Physician
                </p>
                <img className="w-[450px] h-[250px]" src=" ../src/assets/physician.jpg"></img>
                <Link to="/physician">
                <button className="bg-[#4cd1db] font-semibold text-xl mx-10 py-3 rounded-sm mt-5">
                 See More
                </button>
                </Link>
              </div>
              <div className="bg-white p-5 rounded-lg m-10 border-white   border-4  hover:border-solid hover:border-4 hover:border-indigo-600 hover:shadow-black flex flex-col align-middle">
                <p className="font-extrabold text-2xl text-center ">
                Surgeon
                </p>
                <img className="w-[450px] h-[250px]" src=" ../src/assets/surgeon.jpg"></img>
                <Link to="/surgeon">
                <button className="bg-[#4cd1db] font-semibold text-xl mx-10 py-3 rounded-sm mt-5">
                 See More
                </button></Link>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-[50px] flex flex-col justify-center  items-center text-center text-black font-bold mt-10">
              Hospitals
            </h1>
            <div className="flex flex-row justify-center items-center">
            <div className="bg-white p-5 rounded-lg m-10 border-white   border-4  hover:border-solid hover:border-4 hover:border-indigo-600 hover:shadow-black flex flex-col align-middle">
                <p className="font-extrabold text-2xl text-center ">
                Paras Hospital
                </p>
                <img className="w-[450px] h-[250px]" src=" ../src/assets/paras.jpg"></img>
                <button className="bg-[#4cd1db] font-semibold text-xl mx-10 py-3 rounded-sm mt-5">
              See More
                </button>
              </div>
              <div className="bg-white p-5 rounded-lg m-10 border-white   border-4  hover:border-solid hover:border-4 hover:border-indigo-600 hover:shadow-black flex flex-col align-middle">
                <p className="font-extrabold text-2xl text-center ">
                  Igims
                </p>
                <img className="w-[450px] h-[250px]" src=" ../src/assets/igims.jpg"></img>
                <button className="bg-[#4cd1db] font-semibold text-xl mx-10 py-3 rounded-sm mt-5">
               See More
                </button>
              </div>
              <div className="bg-white p-5 rounded-lg m-10 border-white   border-4  hover:border-solid hover:border-4 hover:border-indigo-600 hover:shadow-black flex flex-col align-middle">
                <p className="font-extrabold text-2xl text-center ">
                 Aiims
                </p>
                <img className="w-[450px] h-[250px]" src=" ../src/assets/Aiims.jpg"></img>
                <button className="bg-[#4cd1db] font-semibold text-xl mx-10 py-3 rounded-sm mt-5">
           See More
                </button>
              </div>
              <div className="bg-white p-5 rounded-lg m-10 border-white   border-4  hover:border-solid hover:border-4 hover:border-indigo-600 hover:shadow-black flex flex-col align-middle">
                <p className="font-extrabold text-2xl text-center ">
                 Medanta
                </p>
                <img className="w-[450px] h-[250px]" src=" ../src/assets/medanta.jpg"></img>
                <button className="bg-[#4cd1db] font-semibold text-xl mx-10 py-3 rounded-sm mt-5">
               See More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;