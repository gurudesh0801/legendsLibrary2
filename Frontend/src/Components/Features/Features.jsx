import React from "react";
import libraryPhoto from "/Images/libraryPhoto.jpg";
import "./Features.css";

const Features = () => {
  return (
    <>
      <div className="featuresContainer">
        <h1 className="heading">Features</h1>
        <div className="feature1">
          <img src={libraryPhoto} alt="" />
          <div className="feature1text">
            <h1>Heading</h1>
            <p className="para1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              incidunt sint magni, rem quasi quibusdam nemo nesciunt
              exercitationem eaque laborum?
            </p>
            <li>Sub feature 1</li>
            <li>Sub feature 2</li>
            <li>Sub feature 3</li>
          </div>
        </div>
        <div className="feature2">
          <div className="feature2text">
            <h1>Heading</h1>
            <p className="para2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              incidunt sint magni, rem quasi quibusdam nemo nesciunt
              exercitationem eaque laborum?
            </p>
            <li>Sub feature 1</li>
            <li>Sub feature 2</li>
            <li>Sub feature 3</li>
          </div>
          <img src={libraryPhoto} alt="" />
        </div>
        <div className="feature3">
          <img src={libraryPhoto} alt="" />
          <div className="feature3text">
            <h1>Heading</h1>
            <p className="para1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              incidunt sint magni, rem quasi quibusdam nemo nesciunt
              exercitationem eaque laborum?
            </p>
            <li>Sub feature 1</li>
            <li>Sub feature 2</li>
            <li>Sub feature 3</li>
          </div>
        </div>
        <div className="feature4">
          <div className="feature4text">
            <h1>Heading</h1>
            <p className="para2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              incidunt sint magni, rem quasi quibusdam nemo nesciunt
              exercitationem eaque laborum?
            </p>
            <li>Sub feature 1</li>
            <li>Sub feature 2</li>
            <li>Sub feature 3</li>
          </div>
          <img src={libraryPhoto} alt="" />
        </div>
      </div>
    </>
  );
};

export default Features;
