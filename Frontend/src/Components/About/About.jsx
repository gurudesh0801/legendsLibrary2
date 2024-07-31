import React from "react";
import Slider from "react-slick";
import "./About.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };
  return (
    <>
      <div className="aboutContainer">
        <h1>About Us</h1>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          reiciendis?
        </h5>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          reiciendis?
        </h5>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          reiciendis?
        </h5>

        <h2>Get Involved</h2>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos, dolore!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, sit.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
            necessitatibus?
          </li>
        </ul>

        <div className="carousel-container">
          <Slider {...settings}>
            <div>
              <h1>What We Offer1</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolore, nostrum mollitia delectus reiciendis recusandae ex nam
                hic eveniet dolorum, temporibus excepturi ipsam amet!
                Voluptatibus aliquid officia consequuntur quae pariatur
                voluptates?
              </p>
            </div>
            <div>
              <h1>What We Offer2</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolore, nostrum mollitia delectus reiciendis recusandae ex nam
                hic eveniet dolorum, temporibus excepturi ipsam amet!
                Voluptatibus aliquid officia consequuntur quae pariatur
                voluptates?
              </p>
            </div>
            <div>
              <h1>What We Offer3</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolore, nostrum mollitia delectus reiciendis recusandae ex nam
                hic eveniet dolorum, temporibus excepturi ipsam amet!
                Voluptatibus aliquid officia consequuntur quae pariatur
                voluptates?
              </p>
            </div>
            <div>
              <h1>What We Offer4</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolore, nostrum mollitia delectus reiciendis recusandae ex nam
                hic eveniet dolorum, temporibus excepturi ipsam amet!
                Voluptatibus aliquid officia consequuntur quae pariatur
                voluptates?
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default About;
