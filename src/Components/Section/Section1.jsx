import React from "react";
import "./Section1.css";
import bottle from "../../assets/cola-bottle.png";
import ice2 from "../../assets/ice1.png";
import ice1 from "../../assets/ice2.png";
import mouse from "../../assets/mouse.png";
 
const Section1 = () => {
  return (
    <section className="hero-cola">
      {/* Main Text */}
      <div className="hero-cola-text">
        <h2 className="top-cola-text">Kyun ke</h2>
        <h1>
          Cola  <span> Next</span>
        </h1>
        <h6 className="mid-cola-text">Hai</h6>
        <h2 className="bottom-cola-text">Pakistani!</h2>
      </div>

      {/* Bottle with ice */}
      <div className="bottle-cola-wrap">
        <img src={bottle} alt="bottle" className="bottle-cola" />
        <img src={ice1} alt="ice1" className="ice-cola ice-cola-top" />
        <img src={ice2} alt="ice2" className="ice-cola ice-cola-bottom" />
      </div>

      {/* Mouse scroll */}
      <img src={mouse} alt="scroll" className="mouse-cola" />
    </section>
  );
};

export default Section1;
