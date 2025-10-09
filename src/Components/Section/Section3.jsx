import React from "react";
import "./Section3.css";
import bottle from "../../assets/cola-bottle.png";
import ice2 from "../../assets/ice1.png";
import ice1 from "../../assets/ice2.png";
import mouse from "../../assets/mouse.png";

const Section3 = () => {
  return (
    <section className="orange-hero">

      {/* Main Text */}
      <div className="orange-text">
        <h2 className="orange-top-text">Kyun ke</h2>
        <h1>
          Cola <span>Next</span>
        </h1>
        <h6 className="orange-mid-text">Hai</h6>
        <h2 className="orange-bottom-text">Pakistani!</h2>
      </div>

      {/* Bottle with ice */}
      <div className="orange-bottle-wrap">
        <img src={bottle} alt="bottle" className="orange-bottle" />
        <img src={ice1} alt="ice1" className="orange-ice orange-ice-top" />
        <img src={ice2} alt="ice2" className="orange-ice orange-ice-bottom" />
      </div>

      {/* Mouse scroll */}
      <img src={mouse} alt="scroll" className="orange-mouse" />
    </section>
  );
};

export default Section3;
