import React from "react";
import pp from "../img/pp.jpg";
const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">JBaat!</span>
      <div className="user">
        <img src={pp} alt="profilepicture" />
        <span>Aryan</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
