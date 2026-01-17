import React from "react";
import { Outlet } from "react-router";
import Logo from "../components/Logo/Logo";
import authImg from "../assets/authImage.png";

const AuthLayout = () => {
  return (
    <div className="">
      <Logo></Logo>
      <div className="flex items-center min-h-screen">
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
        <div className="flex-1 bg-[#FAFDF0] ">
          <img src={authImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
