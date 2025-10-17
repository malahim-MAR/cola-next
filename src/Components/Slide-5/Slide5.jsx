import React from "react";
import { motion } from "framer-motion";
import "./Slide5.css";
import bottle from "../../assets/darebottle.png";
import bottleshadow from "../../assets/bottle-shadows/dare.png";
import ice1 from "../../assets/ice1.png";
import ice2 from "../../assets/ice2.png";
import mouse from "../../assets/mouse.png";

const Slide5 = () => {
    // Variants for smooth animation flow
    const fadeZoom = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1.5, ease: "easeOut" } },
    };


    const slideLeft = {
        hidden: { x: -500, opacity: 0 },
        visible: {
            x: [-500, -480, 0], // slight start movement, pause, then complete
            opacity: [0, 0.8, 1],
            transition: {
                duration: 2,
                ease: [0.25, 1, 0.5, 1],
                times: [0, 0.15, 1], // pause near start
                delay: 0.1,
            },
        },
    };

    const slideRight = {
        hidden: { x: 500, opacity: 0 },
        visible: {
            x: [500, 480, 0], // same for right side
            opacity: [0, 0.8, 1],
            transition: {
                duration: 2,
                ease: [0.25, 1, 0.5, 1],
                times: [0, 0.15, 1],
                delay: 0.1,
            },
        },
    };





    return (
        <section className="hero-dare">
            {/* Text */}
            <div className="hero-dare-text">
                <motion.h2
                    className="top-dare-text"
                    variants={slideLeft}
                    initial="hidden"
                    whileInView="visible"
                     viewport={{ once: false, amount: 0.6 }}
                >
                    Fuel
                    <span>
                        the
                    </span>
                    <span className="top-dare-text-yellow">
                        Push
                    </span>
                </motion.h2>

                {/* <h1 className="hero-dare-heading">
                    <motion.span
                        className="dare-left"
                        variants={slideLeft}
                        initial="hidden"
                        whileInView="visible"
                         viewport={{ once: false, amount: 0.6 }}
                    >
                        the
                    </motion.span>
                </h1>

                <motion.h6
                    className="mid-dare-text"
                    variants={slideLeft}
                    initial="hidden"
                    whileInView="visible"
                     viewport={{ once: false, amount: 0.6 }}
                >
                    fire
                </motion.h6> */}
                {/* Right Side */}
                <motion.h2
                    className="right-top-dare-text"
                    variants={slideRight}
                    initial="hidden"
                    whileInView="visible"
                     viewport={{ once: false, amount: 0.6 }}
                >
                    Taste <span>
                        the
                    </span>  <span className="right-top-dare-text-yellow">Thrill</span>
                </motion.h2>
                {/* <motion.h2
                    className="right-mid-dare-text"
                    variants={slideRight}
                    initial="hidden"
                    whileInView="visible"
                     viewport={{ once: false, amount: 0.6 }}
                >
                    Your
                </motion.h2>
                <motion.h2
                    className="right-bottom-dare-text"
                    variants={slideRight}
                    initial="hidden"
                    whileInView="visible"
                     viewport={{ once: false, amount: 0.6 }}
                >
                    Day!
                </motion.h2> */}
            </div>

            {/* Bottle + Ice */}
            <motion.div
                className="bottle-dare-wrap"
                variants={fadeZoom}
                initial="hidden"
                whileInView="visible"
                 viewport={{ once: false, amount: 0.6 }}
            >
                <img src={bottle} alt="dare Bottle" className="bottle-dare" />
                <img src={bottleshadow} alt="Bottle shadow" className="bottle-shadow" />

                <motion.img
                    src={ice1}
                    alt=""
                    className="ice-dare ice-dare-top"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                />
                <motion.img
                    src={ice2}
                    alt=""
                    className="ice-dare ice-dare-bottom"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                />
            </motion.div>

            {/* Mouse Scroll */}
            <motion.img
                src={mouse}
                alt="Scroll Indicator"
                className="mouse-dare"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
            />
        </section>
    );
};

export default Slide5;
