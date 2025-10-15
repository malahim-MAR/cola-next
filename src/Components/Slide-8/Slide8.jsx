import React from "react";
import { motion } from "framer-motion";
import "./Slide8.css";
import bottle from "../../assets/annar-bottle.png";
import ice1 from "../../assets/ice1.png";
import ice2 from "../../assets/ice2.png";
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
                    variants={slideLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Ignite
                </motion.h2>

                <h1 className="hero-lychee-heading">
                    <motion.span
                        className="lychee-left"
                        variants={slideLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        the
                    </motion.span>
                </h1>

                <motion.h6
                    className="mid-lychee-text"
                    variants={slideLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    fire
                </motion.h6>
                {/* Right Side */}
                <motion.h2
                    className="right-top-lychee-text"
                    variants={slideRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Rule
                </motion.h2>
                <motion.h2
                    className="right-mid-lychee-text"
                    variants={slideRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Your
                </motion.h2>
                <motion.h2
                    className="right-bottom-lychee-text"
                    variants={slideRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Day!
                </motion.h2>
            </div>

            {/* Bottle + Ice */}
            <motion.div
                className="bottle-lychee-wrap"
                variants={fadeZoom}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <img src={bottle} alt="lychee Bottle" className="bottle-lychee" />
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
