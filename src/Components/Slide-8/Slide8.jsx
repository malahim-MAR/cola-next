import React from "react";
import { motion } from "framer-motion";
import "./Slide8.css";
import bottle from "../../assets/lyche-bottle.png";
import lycheefruit from "../../assets/lychee-fruit.png";
import bottleshadow from "../../assets/bottle-shadows/leach.png";
import ice1 from "../../assets/lychee1.png";
import ice2 from "../../assets/lychee2.png";
import mouse from "../../assets/mouse.png";

const Slide8 = () => {
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
    // 👇 Add this variant after slideRight
    const slideTop = {
        hidden: { y: -200, opacity: 0 },
        visible: {
            y: [-200, -50, 0],
            opacity: [0, 0.7, 1],
            transition: {
                duration: 2,
                ease: [0.25, 1, 0.5, 1],
                times: [0, 0.25, 1],
                delay: 0.2,
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
        <section className="hero-lychee">
            {/* Text */}
            <div className="hero-lychee-text">
                <motion.h2
                    className="top-lychee-text"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.6 }}
                >
                    <motion.span
                        variants={slideLeft} // “Exotic” still from left
                    >
                        Exotic
                    </motion.span>

                    <motion.span
                        variants={slideTop} // 👈 this comes from top now
                    >
                        Sweetness,
                    </motion.span>
                </motion.h2>


                <h1 className="hero-lychee-heading">
                    <motion.span
                        className="lychee-left"
                        variants={slideLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.6 }}
                    >
                        to
                    </motion.span>
                </h1>

                <motion.h6
                    className="mid-lychee-text"
                    variants={slideLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.6 }}
                >
                    Chilled
                </motion.h6>
                {/* Right Side */}
                <motion.h2
                    className="right-top-lychee-text"
                    variants={slideRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    Perfection.
                </motion.h2>
                {/* <motion.h2
                    className="right-mid-lychee-text"
                    variants={slideRight}
                    initial="hidden"
                    whileInView="visible"
                     viewport={{ once: false, amount: 0.6 }}
                >
                    Your
                </motion.h2>
                <motion.h2
                    className="right-bottom-lychee-text"
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
                className="bottle-lychee-wrap"
                variants={fadeZoom}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.6 }}
            >
                <img src={bottle} alt="lychee Bottle" className="bottle-lychee" />
                <img src={lycheefruit} alt="lychee Bottle" className="bottle-lychee-piece" />
                <img src={bottleshadow} alt="anaar Bottle shadow" className="bottle-shadow" />

                <motion.img
                    src={ice1}
                    alt=""
                    className="ice-lychee ice-lychee-top"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                />
                <motion.img
                    src={ice2}
                    alt=""
                    className="ice-lychee ice-lychee-bottom"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                />
            </motion.div>

            {/* Mouse Scroll */}
            <motion.img
                src={mouse}
                alt="Scroll Indicator"
                className="mouse-lychee"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
            />
        </section>
    );
};

export default Slide8;
