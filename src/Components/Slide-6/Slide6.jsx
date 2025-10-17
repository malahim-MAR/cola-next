import React from "react";
import { motion } from "framer-motion";
import "./Slide6.css";
import bottle from "../../assets/annar-bottle.png";
import anaarpiece from "../../assets/anaarpiece.png";
import bottleshadow from "../../assets/bottle-shadows/anaar.png";
import AnnarPiece1 from "../../assets/AnnarPiece1.png";
import AnnarPiece2 from "../../assets/AnnarPiece2.png";
import AnnarPiece3 from "../../assets/AnnarPiece3.png";
import mouse from "../../assets/mouse.png";

const Slide6 = () => {
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
        <section className="hero-anaar">
            {/* Text */}
            <div className="hero-anaar-text">
                <motion.h2
                    className="top-anaar-text"
                    variants={fadeZoom}
                    initial="hidden"
                    whileInView="visible"
                     viewport={{ once: false, amount: 0.6 }}
                >
                    <span>
                        Bold,
                    </span>
                    <span>
                        Sweet,
                    </span>
                </motion.h2>

                <h1 className="hero-anaar-heading">
                    <motion.span
                        className="anaar-left"
                        variants={slideLeft}
                        initial="hidden"
                        whileInView="visible"
                         viewport={{ once: false, amount: 0.6 }}
                    >
                        and
                    </motion.span>
                </h1>

                {/* <motion.h6
                    className="mid-anaar-text"
                    variants={slideLeft}
                    initial="hidden"
                    whileInView="visible"
                     viewport={{ once: false, amount: 0.6 }}
                >
                    fire
                </motion.h6> */}
                {/* Right Side */}
                <motion.h2
                    className="right-top-anaar-text"
                    variants={slideRight}
                    initial="hidden"
                    whileInView="visible"
                     viewport={{ once: false, amount: 0.6 }}
                >
                    Bursting
                </motion.h2>
                <motion.h2
                    className="right-mid-anaar-text"
                    variants={slideRight}
                    initial="hidden"
                    whileInView="visible"
                     viewport={{ once: false, amount: 0.6 }}
                >
                    With
                </motion.h2>
                <motion.h2
                    className="right-bottom-anaar-text"
                    variants={slideRight}
                    initial="hidden"
                    whileInView="visible"
                     viewport={{ once: false, amount: 0.6 }}
                >
                    Power
                </motion.h2>
            </div>

            {/* Bottle + Ice */}
            <motion.div
                className="bottle-anaar-wrap"
                variants={fadeZoom}
                initial="hidden"
                whileInView="visible"
                 viewport={{ once: false, amount: 0.6 }}
            >
                <img src={bottle} alt="anaar Bottle" className="bottle-anaar" />
                <img src={anaarpiece} alt="anaarpiece" className="bottle-anaar-piece" />
                <img src={bottleshadow} alt="anaar Bottle shadow" className="bottle-anaar-shadow" />
                <motion.img
                    src={AnnarPiece2}
                    alt=""
                    className="ice-anaar ice-anaar-top"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                />
                <motion.img
                    src={AnnarPiece1}
                    alt=""
                    className="ice-anaar ice-anaar-bottom"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                />
                <motion.img
                    src={AnnarPiece3}
                    alt=""
                    className="ice-anaar ice-anaar-mid"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                />
            </motion.div>


            {/* Mouse Scroll */}
            <motion.img
                src={mouse}
                alt="Scroll Indicator"
                className="mouse-anaar"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
            />
        </section>
    );
};

export default Slide6;
