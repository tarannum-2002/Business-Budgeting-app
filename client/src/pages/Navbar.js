import React from "react";
import * as Components from "./Components";
import { useState } from "react";

function App() {
  return (
    <Components.Nav>
      <Components.Title className="icon">SIMPfi</Components.Title>
      <Components.NavMenu>
        <div style={{ margin: "10px" }}>
          <Components.NavLink to="/Signup">Signup</Components.NavLink>
        </div>
        <div style={{ margin: "10px" }}>
          <Components.NavLink to="/Login">Login</Components.NavLink>
        </div>
        <div style={{ margin: "10px" }}>
          <Components.NavLink to="/EnterDetails">
            Enter Details
          </Components.NavLink>
        </div>
        <div style={{ margin: "10px" }}>
          <Components.NavLink to="/RegisterBusiness">
            Register Business
          </Components.NavLink>
        </div>
      </Components.NavMenu>
    </Components.Nav>
  );
}

export default App;
