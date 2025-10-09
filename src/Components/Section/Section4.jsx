import React from "react";
import "./Section4.css";
import bottle from "../../assets/Storm-bottle.png";
import ice2 from "../../assets/ice1.png";
import ice1 from "../../assets/ice2.png";
import mouse from "../../assets/mouse.png";
// import Navbar from "../Navbar/Navbar";

const Section4 = () => {
  return (
    <>
      {/* <Navbar /> */}
      <section className="hero4">
        <div className="hero-content">
          <div data-aos="fade-right" className="hero-left">
            <h1>Ignite </h1>
            <span>the</span>
            <h1> fire</h1>
          </div>

          <div className="hero-center">
            <img src={bottle} alt="bottle" className="bottle" />
            <img src={ice1} alt="ice1" className="ice ice-top" />
            <img src={ice2} alt="ice2" className="ice ice-bottom" />
          </div>

          <div className="hero-right">
            <h1>Rule</h1>
            <span>Your</span>
            <h1>Day!</h1>
          </div>
        </div>

        <img src={mouse} alt="scroll" className="mouse" />
      </section>
    </>
  );
};

export default Section4;
