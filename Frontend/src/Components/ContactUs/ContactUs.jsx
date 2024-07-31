import React, { useState } from "react";
import "./ContactUs.css";
import contactboy1 from "/Images/contactboy1.png";
import contactboy2 from "/Images/contactboy2.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <>
      <div className="contactContainer">
        <div className="leftContaint">
          <div className="textDetails1">
            <h1>
              Contact <span>Us</span>
            </h1>
            <p>Main Library</p>
            <p>Address: 123 Library Avenue</p>
            <p>Suite 456</p>
            <p>Booktown, Li 78098</p>
          </div>
          <div className="textDetails2">
            <p>Phone: 1234567890</p>
            <p>Email: info@legendslibrary.in</p>
          </div>
          <div className="textDetails2">
            <p>Monday to Friday : 9:00 AM - 7:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        <div className="imageContaint">
          <img src={contactboy1} alt="" />
        </div>
        {/* Decorative balls */}
        <div className="ball ball1"></div>
        <div className="ball ball2"></div>
        <div className="ball ball3"></div>
      </div>
      <div className="contactFormDetails">
        <div className="textcontent2">
          <h1>Get in Touch</h1>
        </div>
        <div className="formContainer">
          <form className="contactForm">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="message">Message</label>
            <input type="text" name="message" id="massage" />
            <input type="submit" name="submit" id="submit" />
          </form>
          <div className="imageContainer">
            <img src={contactboy2} alt="img1" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
