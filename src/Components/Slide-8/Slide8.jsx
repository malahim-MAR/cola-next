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
        hidden: { x: window.innerWidth < 1024 ? -100 : -300, opacity: 0 },
        visible: {
            x: [window.innerWidth < 1024 ? -100 : -300, window.innerWidth < 1024 ? -30 : -60, 0],
            opacity: [0, 0.6, 1],
            transition: {
                duration: window.innerWidth < 1024 ? 1.6 : 2.4, // faster on smaller screens
                ease: [0.33, 1, 0.68, 1], // same cinematic smoothness
                times: [0, 0.25, 1],
                delay: 0.1,
            },
        },
    };


    const slideRight = {
        hidden: { x: window.innerWidth < 1024 ? 100 : 300, opacity: 0 },
        visible: {
            x: [window.innerWidth < 1024 ? 100 : 300, window.innerWidth < 1024 ? 30 : 60, 0],
            opacity: [0, 0.6, 1],
            transition: {
                duration: window.innerWidth < 1024 ? 1.6 : 2.4, // faster on smaller screens
                ease: [0.33, 1, 0.68, 1], // same cinematic smoothness
                times: [0, 0.25, 1],
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
