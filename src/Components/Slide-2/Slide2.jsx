import React, { useEffect } from "react";
import "./Slide2.css";
import bottle from "../../assets/LemonBottle.png";
import ice2 from "../../assets/ice1.png";
import ice1 from "../../assets/ice2.png";
import mouse from "../../assets/mouse.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Slide2 = () => {
    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);

    return (
        <>
            <section className="hero-lemon">
                {/* Text */}
                <div className="hero-lemon-text">
                    <h2 className="top-lemon-text" data-aos="fade-down">
                        Kyun ke
                    </h2>
                    <h1 data-aos="zoom-in">
                        lemon <span>Next</span>
                    </h1>
                    <h6 className="mid-lemon-text" data-aos="fade-up">
                        Hai
                    </h6>
                    <h2 className="bottom-lemon-text" data-aos="fade-up" data-aos-delay="200">
                        Pakistani!
                    </h2>
                </div>

                {/* Bottle + Ice */}
                <div className="bottle-lemon-wrap" data-aos="zoom-in-up">
                    <img src={bottle} alt="lemon Bottle" className="bottle-lemon" />
                    <img src={ice1} alt="Ice 1" className="ice-lemon ice-lemon-top" data-aos="fade-left" />
                    <img src={ice2} alt="Ice 2" className="ice-lemon ice-lemon-bottom" data-aos="fade-left" />
                </div>

                {/* Mouse Scroll */}
                <img src={mouse} alt="Scroll" className="mouse-lemon" data-aos="fade-up" data-aos-delay="600" />
            </section>
        </>
    );
};

export default Slide2;
