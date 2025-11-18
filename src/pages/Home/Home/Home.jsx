import React from "react";
import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWorks/HowItWorks";
import OurServices from "../OurServices/OurServices";
import Brands from "../Brands/Brands";
import Reviews from "../Reviews/Reviews";

const reviewsPromise = fetch('/reviews.json').then(res => res.json());

const Home = () => {
  return (
    <div>
      <div className="">
        <Banner></Banner>
      </div>
      <div className="">
        <HowItWorks></HowItWorks>
      </div>
      <div className="">
        <OurServices></OurServices>
      </div>
      <div className="">
        <Brands></Brands>
      </div>
      <div className="">
        <Reviews reviewsPromise={reviewsPromise}></Reviews>
      </div>
    </div>
  );
};

export default Home;
