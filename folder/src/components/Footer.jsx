import React from "react";
import logo from "../images/logo.png";
import ReactDOM from "react-dom/client";

function Footer() {
  return (
    <div className="bg-orange-600 text-white flex justify-between">
      <div className="bg-orange-600">
        <h1 className="bg-orange-600 text-5xl px-12 mx-auto py-10">
          Let's <br />
          promote <br /> good <br /> business.
          <br />
        </h1>
      </div>
      <div className="bg-orange-600">
        <h1 className="bg-orange-600 font-bold px-12 mx-auto py-10">
          KNOW MORE ABOUT US
        </h1>
        <p className="icon flex bg-orange-600">
          <div className="bg-orange-600 mx-5">icon 1</div>
          <div className="bg-orange-600 mx-5">icon 2</div>
          <div className="bg-orange-600 mx-5">icon 3</div>
          <div className="bg-orange-600 mx-5">icon 4</div>
        </p>

        <br />

        <p className="bg-orange-600 py-5">
          <b className="bg-orange-600">WRITE TO US</b>
          <br />
          123 Anywhere street, any city, state, country
        </p>

        <p className="bg-orange-600 py-5">
          <b className="bg-orange-600">EMAIL US</b>
          <br />
          hello@reallygreatsite.com
        </p>

        <p className="bg-orange-600 py-5">
          <b className="bg-orange-600">GIVE US A CALL</b>
          <br />
          123 456 7890
        </p>
      </div>
    </div>
  );
}

export default Footer;
