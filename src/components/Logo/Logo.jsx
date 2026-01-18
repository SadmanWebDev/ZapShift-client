import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";

const Logo = () => {
  return (
    <div>
      <Link to="/" className="flex items-end">
        <img src={logo} alt="" />
        <h3 className="font-bold text-2xl -ms-2">ZapShift</h3>
      </Link>
    </div>
  );
};

export default Logo;
