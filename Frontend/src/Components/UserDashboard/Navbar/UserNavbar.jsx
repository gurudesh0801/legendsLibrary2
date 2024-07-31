import React, { useEffect } from "react";
import "./UserNavbar.css";

const UserNavbar = () => {
  useEffect(() => {
    const list = document.querySelectorAll(".navigation li");

    function activeLink() {
      list.forEach((item) => {
        item.classList.remove("hovered");
      });
      this.classList.add("hovered");
    }

    list.forEach((item) => item.addEventListener("mouseover", activeLink));

    const toggle = document.querySelector(".toggle");
    const navigation = document.querySelector(".navigation");
    const main = document.querySelector(".main");

    function handleToggleClick() {
      navigation.classList.toggle("active");
      main.classList.toggle("active");
    }

    if (toggle) {
      toggle.addEventListener("click", handleToggleClick);
    }

    // Cleanup event listeners on component unmount
    return () => {
      list.forEach((item) => item.removeEventListener("mouseover", activeLink));
      if (toggle) toggle.removeEventListener("click", handleToggleClick);
    };
  }, []);

  return (
    <div className="container">
      <div className="navigation">
        <ul>
          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="logo-apple"></ion-icon>
              </span>
              <span className="title">Brand Name</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="home-outline"></ion-icon>
              </span>
              <span className="title">Dashboard</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="people-outline"></ion-icon>
              </span>
              <span className="title">Customers</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="chatbubble-outline"></ion-icon>
              </span>
              <span className="title">Messages</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="help-outline"></ion-icon>
              </span>
              <span className="title">Help</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="settings-outline"></ion-icon>
              </span>
              <span className="title">Settings</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="lock-closed-outline"></ion-icon>
              </span>
              <span className="title">Password</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="log-out-outline"></ion-icon>
              </span>
              <span className="title">Sign Out</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="main">
        <div className="topbar">
          <div className="toggle">
            <ion-icon name="menu-outline"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
