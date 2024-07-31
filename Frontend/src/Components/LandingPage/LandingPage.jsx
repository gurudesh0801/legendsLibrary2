import React from "react";
import "./LandingPage.css";
import design from "/Images/design.png";
import Libstude from "/Images/Libstude.png";
import Login from "../Login/Login";

const LandingPage = () => {
  return (
    <>
      <div className="mainDiv">
        <div className="textContent">
          <h1 className="heading">
            Legends <br />
            <span className="span">library</span>
          </h1>
          <p className="tagline">
            Discover the world of knowledge, adventure, and <br />community at legends
            library.
          </p>
          <p className="tagline">
            We are more than just a collection of books; we are a <br />hub for
            learning, creativity and connection.
          </p>
         <a href="/signup"><input type="button" className="btn1" value="Book your seat now"/></a>
        </div>
        <div className="imgContents">
          <img src={design} alt="image" />
        </div>
      </div>
        <div className="img">
            <img src={Libstude} alt="" />
        </div>
    </>
  );
};

export default LandingPage;
