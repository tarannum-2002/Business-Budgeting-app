import React from "react";
import * as Components from "./Components";
import { useState } from "react";

function Home() {
  return (
    <Components.DivBox>
      <Components.Div>
        <Components.Heading>
          Business <br /> Budgeting <br /> App <br />
        </Components.Heading>
        <Components.Click>GET STARTED</Components.Click>
      </Components.Div>

      <Components.ImageDiv>
        <img src="{stock}" alt="stock market" />
      </Components.ImageDiv>
    </Components.DivBox>
  );
}

export default Home;
