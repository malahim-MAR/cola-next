import React from "react";
import "./Section6.css";
import bottle from "../../assets/cola-bottle.png"; // ✅ anar bottle image
import ice2 from "../../assets/ice1.png";
import ice1 from "../../assets/ice2.png";
import mouse from "../../assets/mouse.png";

const Section6 = () => {
  return (
    <section className="hero-anar">
      {/* Main Text */}
      <div className="hero-anar-text">
        <h2 className="top-anar-text">Kyun ke</h2>
        <h1>
          Anar <span>Next</span>
        </h1>
        <h6 className="mid-anar-text">Hai</h6>
        <h2 className="bottom-anar-text">Pakistani!</h2>
      </div>

      {/* Bottle with ice */}
      <div className="bottle-anar-wrap">
        <img src={bottle} alt="bottle" className="bottle-anar" />
        <img src={ice1} alt="ice1" className="ice-anar ice-anar-top" />
        <img src={ice2} alt="ice2" className="ice-anar ice-anar-bottom" />
      </div>

      {/* Mouse scroll */}
      <img src={mouse} alt="scroll" className="mouse-anar" />
    </section>
  );
};

export default Section6;
