import React from "react";
import { Link } from "react-router-dom";

function Cardio() {
  return (
    <>
      <div className="bg-gray-300 m-0 p-0">
     
        <div className="m-0 ">
          <div class="max-w-md  bg-white rounded-xl shadow-md overflow-hidden md:max-w-full m-10 ml-10 flex flex-row ">
            <div class="md:flex flex-row">
              <div class="md:shrink-0 w-[25%]">
                <img
                  class="object-cover w-[450px] h-[280px]"
                  src="../src/assets/dr1.jpg"
                  alt="Modern building architecture"
                />
              </div>
              <div class="p-8 w-[50%]">
                <div class="uppercase tracking-wide text-xl text-indigo-500 font-semibold">
                  <a href=""> Dr. Suresh Joshi</a>
                </div>
                <p> Speciality: Pediatric Cardiac Surgeon</p>
                <p>Experience: 38+ Years</p>
                <p>Location: Mumbai</p>
                <a
                  href="#"
                  class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  Qualification: MBBS, MS, MCh, FACS, FICS, FCCP
                </a>
                <p class="mt-2 text-slate-500">
                  Dr. Suresh Joshi, the recipient of "Medical Excellence of
                  Cardiac Surgery in India" given by the Harvard University
                  International, USA is a renowned pioneer in the field of
                  minimally invasive heart surgery in India.
                </p>
              </div>
              <div className="w-[25%] flex justify-center items-center">
                <img
                  width="80"
                  height="80"
                  src="https://img.icons8.com/dotty/80/phone.png"
                  alt="phone"
                />
              </div>
            </div>
          </div>

          <div class="max-w-md  bg-white rounded-xl shadow-md overflow-hidden md:max-w-full m-10 ml-10 flex flex-row ">
            <div class="md:flex flex-row">
              <div class="md:shrink-0 w-[25%]">
                <img
                  class="object-cover w-[450px] h-[280px]"
                  src="../src/assets/dr1.jpg"
                  alt="Modern building architecture"
                />
              </div>
              <div class="p-8 w-[50%]">
              <div class="uppercase tracking-wide text-xl text-indigo-500 font-semibold">
                  <a href=""> Dr. T S Kler</a>
                </div>
                <p> Speciality: Interventional Cardiologist</p>
                <p>Experience: 30+ Years</p>
                <p>Location: Gurgaon</p>
                <a
                  href="#"
                  class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  {" "}
                  Qualification: MBBS, MD, DM, Fellow of Royal College of
                  Physicians (FRCP), UK and Fellow of American College of
                  Cardiology (FACC)
                </a>
                <p class="mt-2 text-slate-500">
                  Dr. TS Kler is one of the most renowned names in the field of
                  Cardiology in India. He was the first doctor in India to
                  implant an implantable cardioverter defibrillator (ICD) and
                  establish the first electrophysiology department in India. He
                  is also the first doctor in South East Asia, to perform the
                  first heart failure device (Biventricular Pacemaker) and Combo
                  Device (ICD and Biventricular Pacemaker).
                </p>{" "}
              </div>
              <div className="w-[25%] flex justify-center items-center">
                <img
                  width="80"
                  height="80"
                  src="https://img.icons8.com/dotty/80/phone.png"
                  alt="phone"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cardio;