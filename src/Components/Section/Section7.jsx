import React from "react";
import "./Section7.css";

import bottle from "../../assets/GreenSoda-bottle.png";
import ice1 from "../../assets/ice2.png";
import ice2 from "../../assets/ice1.png";
import mouse from "../../assets/mouse.png";
// import Navbar from "../Navbar/Navbar";

const Section7 = () => {
  return (
    <>
      {/* <Navbar /> */}
      <section className="hero-fizzup">
       

        <div className="hero-fizzup-content">
          <div className="hero-fizzup-left">
            <h1>
              Green <br />
              Wild <br />
              Zero
            </h1>
          </div>

          <div className="hero-fizzup-center">
            <img src={bottle} alt="fizzup bottle" className="bottle-fizzup" />
            <img src={ice1} alt="ice1" className="ice-fizzup ice-fizzup-top" />
            <img src={ice2} alt="ice2" className="ice-fizzup ice-fizzup-bottom" />
          </div>

          <div className="hero-fizzup-right">
            <h1>
              Fizz. <br />
              Taste. <br />
              Rule
            </h1>
          </div>
        </div>

        <img src={mouse} alt="scroll" className="mouse-fizzup" />
      </section>
    </>
  );
};

export default Section7;
