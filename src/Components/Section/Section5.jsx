import React from "react";
import "./Section5.css";
import bottle from "../../assets/darebottle.png";
import ice2 from "../../assets/ice1.png";
import ice1 from "../../assets/ice2.png";
import mouse from "../../assets/mouse.png";

const Section5 = () => {
  return (
    <section className="dare-hero">
      

      {/* Main Text */}
      <div className="dare-text">
        <h1 className="top-dare-text">Fuel the <span>Rush</span>.</h1>
        <h1 className="bottom-dare-text">Taste the <span>Thrill!</span></h1>
      </div>

      {/* Bottle with ice */}
      <div className="dare-bottle-wrap">
        <img src={bottle} alt="bottle" className="dare-bottle" />
        <img src={ice1} alt="ice1" className="dare-ice dare-ice-top" />
        <img src={ice2} alt="ice2" className="dare-ice dare-ice-bottom" />
      </div>

      {/* Mouse scroll */}
      <img src={mouse} alt="scroll" className="dare-mouse" />
    </section>
  );
};

export default Section5;
