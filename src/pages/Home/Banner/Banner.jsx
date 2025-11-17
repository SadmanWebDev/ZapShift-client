import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";

const Banner = () => (
  <Carousel
   autoPlay={true} infiniteLoop={true}
   >
    <div className=" relative">
      <img src={bannerImg1} />
      <div className="absolute bottom-30 left-20 space-x-5">
        <button className="btn btn-primary rounded-full text-black">
          Track Your Parcel
        </button>
        <button className="btn btn-outline rounded-full border-primary hover:bg-primary">
          Be A Rider
        </button>
      </div>
    </div>
    <div>
      <img src={bannerImg2} />
      <div className="absolute bottom-30 left-20 space-x-5">
        <button className="btn btn-primary rounded-full text-black">
          Track Your Parcel
        </button>
        <button className="btn btn-outline rounded-full border-primary hover:bg-primary">
          Be A Rider
        </button>
      </div>
    </div>
    <div>
      <img src={bannerImg3} />
      <div className="absolute bottom-30 left-20 space-x-5">
        <button className="btn btn-primary rounded-full text-black">
          Track Your Parcel
        </button>
        <button className="btn btn-outline rounded-full border-primary hover:bg-primary">
          Be A Rider
        </button>
      </div>
    </div>
  </Carousel>
);

export default Banner;
