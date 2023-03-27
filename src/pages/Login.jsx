import React from "react";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">JBaat!</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button>Sign in</button>
        </form>
        <p>Don't have an account? Sign up</p>
      </div>
    </div>
  );
};

export default Login;
