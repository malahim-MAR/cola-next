import React, { useEffect } from "react";
import "./Slide1.css";
import bottle from "../../assets/cola-bottle.png";
import ice2 from "../../assets/ice1.png";
import ice1 from "../../assets/ice2.png";
import mouse from "../../assets/mouse.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Slide1 = () => {
    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);

    return (
        <>
            <section className="hero-cola">
                {/* Text */}
                <div className="hero-cola-text">
                    <h2 className="top-cola-text" data-aos="fade-down">
                        Kyun ke
                    </h2>
                    <h1 data-aos="zoom-in">
                        Cola <span>Next</span>
                    </h1>
                    <h6 className="mid-cola-text" data-aos="fade-up">
                        Hai
                    </h6>
                    <h2 className="bottom-cola-text" data-aos="fade-up" data-aos-delay="200">
                        Pakistani!
                    </h2>
                </div>

                {/* Bottle + Ice */}
                <div className="bottle-cola-wrap" data-aos="zoom-in-up">
                    <img src={bottle} alt="Cola Bottle" className="bottle-cola" />
                    <img src={ice1} alt="Ice 1" className="ice-cola ice-cola-top" data-aos="fade-left" />
                    <img src={ice2} alt="Ice 2" className="ice-cola ice-cola-bottom" data-aos="fade-left" />
                </div>

                {/* Mouse Scroll */}
                <img src={mouse} alt="Scroll" className="mouse-cola" data-aos="fade-up" data-aos-delay="600" />
            </section>
        </>
    );
};

export default Slide1;
