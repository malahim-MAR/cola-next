import React from "react";
import { motion } from "framer-motion";
import "./Slide2.css";
import bottle from "../../assets/LemonBottle.png";
import ice1 from "../../assets/ice1.png";
import ice2 from "../../assets/ice2.png";
import mouse from "../../assets/mouse.png";

const Slide2 = () => {
    return (
        <section className="hero-lemon">
            <div className="hero-lemon-text">
                <motion.h2
                    className="top-lemon-text"
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}

                >
                    <span>

                        Lemon Lime
                    </span>
                </motion.h2>
                <motion.h2
                    className="left-lemon-text"
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}

                >
                    <span>

                        Lift
                    </span>
                </motion.h2>
                {/* <motion.div
                    className="right-text-group"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="bottom-lemon-text">
                        Lift <span>Every<br />Chill</span>
                    </h2>
                </motion.div> */}
            </div>


            <motion.div
                className="bottle-lemon-wrap"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <img src={bottle} alt="Lemon Bottle" className="bottle-lemon" />
                {/* <img src={ice1} alt="Ice 1" className="ice-lemon ice-lemon-top" /> */}
                {/* <img src={ice2} alt="Ice 2" className="ice-lemon ice-lemon-bottom" /> */}
            </motion.div>

            <motion.img
                src={mouse}
                alt="Scroll"
                className="mouse-lemon"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            />
        </section>
    );
};

export default Slide2;
