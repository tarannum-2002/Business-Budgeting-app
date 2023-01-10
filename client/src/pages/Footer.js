import React from "react";
import * as Components from "./Components";
import { useState } from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <h1>
          Let's <br />
          promote <br /> good <br /> business.
        </h1>
      </div>
      <div className="footer-right">
        <h1>KNOW MORE ABOUT US</h1>
        <p className="icon">
          <div>icon 1</div>
          <div>icon 2</div>
          <div>icon 3</div>
          <div>icon 4</div>
        </p>
        <p className="address">
          <b>WRITE TO US</b>
          <br />
          123 Anywhere street, any city, state, country
        </p>

        <p className="email">
          <b>EMAIL US</b>
          <br />
          hello@reallygreatsite.com
        </p>
      </div>
    </footer>
  );
}

export default Footer;
