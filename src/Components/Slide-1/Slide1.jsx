import React from "react";
import { motion } from "framer-motion";
import "./Slide1.css";
import bottle from "../../assets/cola-bottle.png";
import ice1 from "../../assets/ice1.png";
import ice2 from "../../assets/ice2.png";
import mouse from "../../assets/mouse.png";

const Slide1 = () => {
    return (
        <section className="hero-cola">
            {/* Text */}
            <div className="hero-cola-text">
                <motion.h2
                    className="top-cola-text"
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    Kyun ke
                </motion.h2>

                <motion.h1
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    Cola <span>Next</span>
                </motion.h1>

                <motion.h6
                    className="mid-cola-text"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    Hai
                </motion.h6>

                <motion.h2
                    className="bottom-cola-text"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    Pakistani!
                </motion.h2>
            </div>

            {/* Bottle + Ice */}
            <motion.div
                className="bottle-cola-wrap"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <img src={bottle} alt="Cola Bottle" className="bottle-cola" />
                <img src={ice1} alt="Ice 1" className="ice-cola ice-cola-top" />
                <img src={ice2} alt="Ice 2" className="ice-cola ice-cola-bottom" />
            </motion.div>

            {/* Mouse Scroll */}
            <motion.img
                src={mouse}
                alt="Scroll"
                className="mouse-cola"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            />
        </section>
    );
};

export default Slide1;
