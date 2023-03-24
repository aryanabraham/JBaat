import React from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">JBaat!</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={AddPhotoAlternateIcon} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>Have an account? Log in</p>
      </div>
    </div>
  );
};

export default Register;
