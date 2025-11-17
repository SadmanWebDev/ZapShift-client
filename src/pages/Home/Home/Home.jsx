import React from "react";
import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWorks/HowItWorks";
import OurServices from "../OurServices/OurServices";

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
    </div>
  );
};

export default Home;
