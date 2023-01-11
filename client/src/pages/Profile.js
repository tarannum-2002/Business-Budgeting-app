import React from "react";
import * as Components from "./Components";
import { useState } from "react";

function Profile() {
  return (
    <div className="profile-container">
      <h1 className="profile-title">User Profile</h1>
      <div className="user-details">
        <div className="business-name">Business Name :</div>
        <div className="username">User Name :</div>
        <div className="emailaddr">Email :</div>
      </div>
    </div>
  );
}

export default Profile;
