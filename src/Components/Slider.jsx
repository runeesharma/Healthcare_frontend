import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image1 from "../assets/c1.avif"
import Image2 from "../assets/c2.jpg"
import Image3 from "../assets/c3.jpg"
import Image4 from "../assets/c4.webp"


function Slider() {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} interval={1000} showThumbs={false} showStatus={false} className="">
      <div>
        <img src={Image1} className="max-h-[80vh] rounded-2xl" />
       
      </div>
      <div>
        <img src={Image2}  className="max-h-[80vh] rounded-2xl" />
      
      </div>
      <div>
        <img src={Image3} className="max-h-[80vh] rounded-2xl"/>
        
      </div>
      <div>
        <img src={Image4} className="max-h-[80vh] rounded-2xl"/>
       
      </div>
      {/* <div>
        <img src={Image5} className="max-h-[80vh]"/>
       
      </div> */}
    </Carousel>
  );
}

export default Slider;
