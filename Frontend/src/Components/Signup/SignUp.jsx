import React, { useState } from "react";
import signInImage from "/Images/signInImage.jpg";
import "./SignUp.css";

const SignUp = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [enteredCaptcha, setEnteredCaptcha] = useState("");

  function generateCaptcha() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (enteredCaptcha !== captcha) {
      alert("Captcha does not match. Please try again.");
      setCaptcha(generateCaptcha());
      setEnteredCaptcha("");
    } else {
      const formData = new FormData(e.target);
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword"),
      };

      try {
        const response = await fetch("http://localhost:3000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          alert("Sign-up successful!");
          window.location.href = "/userdashboard";
        } else {
          alert("Sign-up failed. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="signInContainer">
      <div className="signInImage">
        <img src={signInImage} alt="Sign In" />
      </div>
      <div className="signInForm">
        <h1 className="formHeading">Sign Up to Legends Library</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />

          <label htmlFor="email">Email*</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />

          <label htmlFor="phone">Phone no (WhatsApp only)*</label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone No"
            required
          />

          <label htmlFor="password">Password*</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />

          <label htmlFor="confirmPassword">Confirm Password*</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            required
          />

          <label htmlFor="captcha">Captcha*</label>
          <div className="captchaContainer">
            <span className="captchaText">{captcha}</span>
            <button type="button" onClick={() => setCaptcha(generateCaptcha())}>
              Refresh
            </button>
          </div>
          <input
            type="text"
            name="captcha"
            id="captcha"
            value={enteredCaptcha}
            placeholder="Enter Captcha"
            onChange={(e) => setEnteredCaptcha(e.target.value)}
            required
          />

          <input type="submit" value="Sign Up" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
