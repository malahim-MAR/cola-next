import React from "react";
import { motion } from "framer-motion";
import "./Slide1.css";
import bottle from "../../assets/cola-bottle.png";
import ice1 from "../../assets/ice1.png";
import ice2 from "../../assets/ice2.png";
import mouse from "../../assets/mouse.png";

const Slide1 = () => {
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
        <section className="hero-cola">
            {/* Text */}
            <div className="hero-cola-text">
                <motion.h2
                    className="top-cola-text"
                    variants={fadeZoom}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Kyun ke
                </motion.h2>

                <h1 className="hero-cola-heading">
                    <motion.span
                        className="cola-left"
                        variants={slideLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Cola
                    </motion.span>
                    &nbsp;
                    <motion.span
                        className="next-right"
                        variants={slideRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Next
                    </motion.span>
                </h1>

                <motion.h6
                    className="mid-cola-text"
                    variants={fadeZoom}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Hai
                </motion.h6>

                <motion.h2
                    className="bottom-cola-text"
                    variants={fadeZoom}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Pakistani!
                </motion.h2>
            </div>

            {/* Bottle + Ice */}
            <motion.div
                className="bottle-cola-wrap"
                variants={fadeZoom}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <img src={bottle} alt="Cola Bottle" className="bottle-cola" />
                <motion.img
                    src={ice1}
                    alt=""
                    className="ice-cola ice-cola-top"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                />
                <motion.img
                    src={ice2}
                    alt=""
                    className="ice-cola ice-cola-bottom"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                />
            </motion.div>

            {/* Mouse Scroll */}
            <motion.img
                src={mouse}
                alt="Scroll Indicator"
                className="mouse-cola"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
            />
        </section>
    );
};

export default Slide1;
