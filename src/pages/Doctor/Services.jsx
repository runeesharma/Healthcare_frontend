import React from "react";
import { Link } from "react-router-dom";
import Categories from "./Categories";

const Services = () => { 
  return (
    <>
      <div className="bg-gray-300">
        {/* blue nav */}                                            
        <div>
          <div className="bg-blue-900 h-[40px] flex flex-row text-centre items-center  ">
            <div className=" text-sm flex flex-row text-centre items-center m-[200px]">
              <span className=" text-white">
                <Link to="/home">Home</Link>
              </span>
              <h4 className="text-gray-400">~Services</h4>
            </div>
          </div>
          {/* front layout */}
          <div className="px-10">
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
                {/* ======== hero counter ======= */}
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
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
              <h1 className="text-[50px] flex flex-col justify-center  items-center text-center text-black font-bold mt-10">
                Categories
              </h1>{" "}
              <p className="font-extrabold text-2xl text-center text-gray-500">
              We offer complete healthcare solutions for your health concerns
                  </p>
            </div>
      <Categories/>
    </>
  );
};
export default Services;