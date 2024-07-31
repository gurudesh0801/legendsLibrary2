import React from "react";
import loginImage from "/Images/loginimage.png";
import "./Login.css";
const Login = () => {
  return (
    <>
      <div className="loginContainer">
        <div className="loginImage">
          <img src={loginImage} alt="img1" />
        </div>
        <div className="loginForm">
          <p className="letterHeading">Start Your Journey</p>
          <h1 className="formHeading">Log in to Legends Library</h1>
          <form id="loginFormDetails">
            <label htmlFor="memberid">Member ID</label>
            <input type="text" name="memberid" placeholder="Member ID"/>
            <label htmlFor="email" >Email</label>
            <input type="email" name="email" placeholder="Email"/>
            <label htmlFor="password" name="password">
              Password
            </label>
            <input type="password" name="password" placeholder="Password"/>
            <p>Forgot password?</p>
            <input type="submit" name="loginSubmit" id="loginSubmit" value="Login" />
          </form>
          <p className="or">----------- OR ------------</p>
          <div className="social-icons">
            <i className="fab fa-google"></i>
            <i className="fab fa-facebook"></i>
          </div>

          <p className="dontAcccount">
            Don't Have Account? <a href="#">Create Account</a>
          </p>
          <p className="adminLogin">
            You Are Admin? <a href="#">Login</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
