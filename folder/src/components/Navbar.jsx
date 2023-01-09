import React from "react";
import logo from "../images/logo.png";
import ReactDOM from "react-dom/client";

function Navbar() {
  return (
    <div className="flex justify-between items-center  h-24 max-w-[1240px] mx-auto p-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#eb5e28]">SIMPfi</h1>

      <ul className="flex font-bold text-sm">
        <li className="p-8 mx-auto">
          <a href="#">HOME</a>
        </li>
        <li className="p-8 mx-auto">
          <a href="#">ABOUT US</a>
        </li>
        <li className="p-8 mx-auto">
          <a href="#">CONTACT US</a>
        </li>
        <li className="p-8 mx-auto">
          <a href="#">SIGNUP</a>
        </li>
        <li className="p-8 mx-auto">
          <a href="#">LOGIN</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
