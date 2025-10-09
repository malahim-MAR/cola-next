import React from "react";
import "./Section2.css";

// Images
import bg from "../../assets/LemonBg.png";
import bottleFruits from "../../assets/LemonBottle.png"; // ✅ single img (bottle+fruits)
import leafLeft from "../../assets/leave1.png";
import leafRight from "../../assets/leave2.png";
import fruit from "../../assets/fizup-fru.png";
import lemonHeading from "../../assets/lemon.png";
import mouse from "../../assets/mouse.png";

const Section2 = () => {
  return (
    <section className="lemon-section">
      {/* Background */}
      <img src={bg} alt="background" className="lemon-bg" />

      {/* Bottle + Fruits (center) */}
      <div className="lemon-bottle-wrap">
        <img
          src={bottleFruits}
          alt="bottle with fruits"
          className="lemon-bottle-fruits"
        />
      </div>

      {/* Leaves */}
      <img
        src={leafLeft}
        alt="leaf left"
        className="lemon-leaf lemon-left-leaf"
      />
      <img
        src={leafRight}
        alt="leaf right"
        className="lemon-leaf lemon-right-leaf"
      />
      <img src={fruit} alt="fruit" className="lemon-fruit" />

      {/* Heading */}
      <div className="lemon-text">
        <h1>
          Lemon <span>-Lime&nbsp; &nbsp;</span>
        </h1>
        <h6 className="mid-lemon-text">Lift</h6>
        <h2 className="bottom-lemon-text">
          {" "}
          <span>
            with{" "}
            <img
              src={lemonHeading}
              alt="lemon text"
              className="lemon-heading-img"
            />{" "}
          </span>
          <br /> Every <br /> Chill!
        </h2>
      </div>

      {/* Scroll Mouse */}
      <img src={mouse} alt="scroll" className="lemon-mouse" />
    </section>
  );
};

export default Section2;
