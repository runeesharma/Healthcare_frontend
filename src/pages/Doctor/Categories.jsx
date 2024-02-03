import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";

function Categories() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
  };
  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20 rounded-xl rounded-top ">
        <Slider {...settings}>
          {data.map((d) => (
            <div
              key={d.name}
              className="bg-white h-[450px] text-black rounded-xl rounded-top"
            >
              <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-top  w-full md:h-[50%]">
                <img src={d.img} alt="" className="rounded-top" />
              </div>

              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-3xl  font-extrabold text-gray-500">
                  {d.name}
                </p>
                <button className="bg-indigo-500 text-white text-lg px-6 py-4 rounded-xl">
                  {d.but}
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    name: ` Cardiologist`,
    img: ` ../src/assets/cardiologist.avif`,
    but: (
      <Link to="/cardio">
        <button>Book Appointment</button>
      </Link>
    )
  },
  {
    name: `Gynecologist`,
    img: `../src/assets/gynecologist.avif`,
    but: (
      <Link to="/gynecologist">
        <button>Book Appointment</button>
      </Link>
    )
  },
  {
    name: `Psychiatrist`,
    img: `../src/assets/psychiatrist.avif`,
    but: (
      <Link to="/psychiatrist">
        <button>Book Appointment</button>
      </Link>
    )
  },
  {
    name: `Dietitian`,
    img: `../src/assets/dietitian.jpg`,
    but: (
      <Link to="/dietitian">
        <button>Book Appointment</button>
      </Link>
    )
  },
  {
    name: `Physician`,
    img: ` ../src/assets/physician.avif`,
    but: (
      <Link to="/physician">
        <button>Book Appointment</button>
      </Link>
    )
  },
  {
    name: `Ophthalmologist`,
    img: `../src/assets/ophthalmologist.avif `,
    but: (
      <Link to="/ophthalmologist">
        <button>Book Appointment</button>
      </Link>
    )
  },
  {
    name: `Surgeon`,
    img: ` ../src/assets/surgeon.avif`,
    but: (
      <Link to="/surgeon">
        <button>Book Appointment</button>
      </Link>
    )
  },
  {
    name: `Otolaryngologist`,
    img: ` ../src/assets/otolaryngologist.avif`,
    but: (
      <Link to="/otolaryngologist">
        <button>Book Appointment</button>
      </Link>
    )
  },
  {
    name: `dermatologist`,
    img: ` ../src/assets/dermatologist.avif`,
    but: (
      <Link to="/dermatologist">
        <button>Book Appointment</button>
      </Link>
    )
  },
  {
    name: `Pediatrician`,
    img: ` ../src/assets/pediatrician.jpg`,
    but: (
      <Link to="/pediatrician">
        <button>Book Appointment</button>
      </Link>
    )
  },
  {
    name: `Dentist`,
    img: ` ../src/assets/dentist.avif`,
    but: (
      <Link to="/dentist">
        <button>Book Appointment</button>
      </Link>
    )
  },
  {
    name: `Neurologist`,
    img: ` ../src/assets/neurologist.avif`,
    but: (
      <Link to="/neurologist">
        <button>Book Appointment</button>
      </Link>
    )
  },
];

export default Categories;