import React from "react";
import "./Section8.css";
import bottle from "../../assets/lyche-bottle.png";
import fruit from "../../assets/lychee-fruit.png";
import lychee1 from "../../assets/lychee1.png";
import lychee2 from "../../assets/lychee2.png";
import mouse from "../../assets/mouse.png";

const Section8 = () => {
  return (
    <section className="hero-lychee">
      {/* Main Text */}
      <div className="lychee-text">
        <h1>
          Exotic <span>Sweetness,</span>
        </h1>
        <h6 className="mid-lychee-text">Chilled</h6>
        <h2 className="bottom-lychee-text">
          
          <span>to</span>
          <br /> Perfection.
        </h2>
      </div>

      {/* Bottle with ice */}
      <div className="bottle-lychee-wrap">
        <img src={bottle} alt="bottle" className="bottle-lychee" />
        <img src={lychee1} alt="ice1" className="lychee lychee-top" />
        <img src={lychee2} alt="ice2" className="lychee lychee-bottom" />
      </div>
        <img src={fruit} alt="fruit" className="lychee-fruit" />

      {/* Mouse scroll */}
      <img src={mouse} alt="scroll" className="mouse-lychee" />
    </section>
  );
};

export default Section8;
