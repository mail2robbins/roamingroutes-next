"use client";
import React from "react";
//import logo from "../images/logo.png";
const Logo = () => {
  return (
    <div className="nav-header">
      <img
        src="../images/logo.png"
        className="nav-logo"
        alt="roamingroutes-tours"
      />
      <button type="button" className="nav-toggle" id="nav-toggle">
        <i className="fas fa-bars"></i>
      </button>
    </div>
  );
};

export default Logo;
