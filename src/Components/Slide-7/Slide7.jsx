import React from "react";
import { motion } from "framer-motion";
import "./Slide7.css";
import bottle from "../../assets/GreenSoda-bottle.png";
import bottleshadow from "../../assets/bottle-shadows/greensoda.png";
import ice1 from "../../assets/ice1.png";
import ice2 from "../../assets/ice2.png";
import mouse from "../../assets/mouse.png";

const Slide7 = () => {
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
        <section className="hero-soda">
            {/* Text */}
            <div className="hero-soda-text">
                <motion.h2
                    className="top-soda-text"
                    variants={slideLeft}
                    initial="hidden"
                    whileInView="visible"
                     viewport={{ once: false, amount: 0.6 }}
                >
                    Green
                </motion.h2>

                <motion.span
                    className="soda-left"
                    variants={slideLeft}
                    initial="hidden"
                    whileInView="visible"
                     viewport={{ once: false, amount: 0.6 }}
                >
                    Wild
                </motion.span>

                <motion.h6
                    className="mid-soda-text"
                    variants={slideLeft}
                    initial="hidden"
                    whileInView="visible"
                     viewport={{ once: false, amount: 0.6 }}
                >
                    Zero
                </motion.h6>
                {/* Right Side */}
                <motion.h2
                    className="right-top-soda-text"
                    variants={slideRight}
                    initial="hidden"
                    whileInView="visible"
                     viewport={{ once: false, amount: 0.6 }}
                >
                    Fizz.
                </motion.h2>
                <motion.h2
                    className="right-mid-soda-text"
                    variants={slideRight}
                    initial="hidden"
                    whileInView="visible"
                     viewport={{ once: false, amount: 0.6 }}
                >
                    Taste.
                </motion.h2>
                <motion.h2
                    className="right-bottom-soda-text"
                    variants={slideRight}
                    initial="hidden"
                    whileInView="visible"
                     viewport={{ once: false, amount: 0.6 }}
                >
                    Rules
                </motion.h2>
            </div>

            {/* Bottle + Ice */}
            <motion.div
                className="bottle-soda-wrap"
                variants={fadeZoom}
                initial="hidden"
                whileInView="visible"
                 viewport={{ once: false, amount: 0.6 }}
            >
                <img src={bottle} alt="soda Bottle" className="bottle-soda" />
                <img src={bottleshadow} alt="Bottle shadow" className="bottle-shadow" />

                <motion.img
                    src={ice1}
                    alt=""
                    className="ice-soda ice-soda-top"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                />
                <motion.img
                    src={ice2}
                    alt=""
                    className="ice-soda ice-soda-bottom"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                />
            </motion.div>

            {/* Mouse Scroll */}
            <motion.img
                src={mouse}
                alt="Scroll Indicator"
                className="mouse-soda"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
            />
        </section>
    );
};

export default Slide7;
