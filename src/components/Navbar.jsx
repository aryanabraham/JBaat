import React from "react";
import pp from "../img/pp.jpg";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">JBaat!</span>
      <div className="user">
        <img src={pp} alt="profilepicture" />
        <span>Aryan</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
