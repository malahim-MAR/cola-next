import React from "react";
import { motion } from "framer-motion";
import "./Slide3.css";
import bottle from "../../assets/RangoBottle.png";
import bottleshadow from "../../assets/bottle-shadows/rango.png";
import ice1 from "../../assets/ice2.png";
import ice2 from "../../assets/ice1.png";
import orange2 from "../../assets/orangeSlice.png";
import leaf1 from "../../assets/orangeleaf.png";
import mouse from "../../assets/mouse.png";

const Slide3 = () => {
    // === TEXT VARIANTS ===
    const fadeUp = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 1.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    const fadeDown = {
        hidden: { y: -50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 1.2, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    const fadeRight = {
        hidden: { x: 200, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
        },
    };

    const fadeBottle = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.2, ease: "easeOut" },
        },
    };

    // === IMAGE VARIANTS ===
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 1.2, delay: 0.4, ease: "easeOut" },
        },
    };

    const fromLeft = {
        hidden: { x: -150, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
        },
    };

    const fromRight = {
        hidden: { x: 150, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
        },
    };

    return (
        <section className="hero-rango">
            <div className="hero-rango-text">
                {/* === TEXT ANIMATIONS === */}
                <motion.h2
                    className="top-rango-text"
                    variants={fadeDown}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.6 }}
                >
                    <span>Zesty Sunshine</span>
                </motion.h2>

                <motion.h2
                    className="left-rango-text"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.6 }}
                >
                    <span>in</span>
                </motion.h2>

                <motion.h2
                    className="bottom-rango-text"
                    variants={fadeRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.6 }}
                >
                    <span>
                        Every <br /> Sip!
                    </span>
                </motion.h2>
            </div>

            {/* === BOTTLE & ELEMENTS === */}
            <motion.div
                className="bottle-rango-wrap"
                variants={fadeBottle}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.6 }}
            >
                <img src={bottle} alt="Rango Bottle" className="bottle-rango" />
                <img src={bottleshadow} alt="Bottle shadow" className="bottle-shadow" />

                {/* 🍊 orange slice */}
                <motion.img
                    src={orange2}
                    alt="Orange Slice"
                    className="orange-2"
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.6 }}
                />

                {/* ❄️ Ice 1 */}
                <motion.img
                    src={ice1}
                    alt="Ice 1"
                    className="ice-1"
                    variants={fromRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.6 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                />

                {/* 🍃 Leaf */}
                <motion.img
                    src={leaf1}
                    alt="Orange Leaf"
                    className="orange-leaf-1"
                    variants={fromLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.6 }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                />

                {/* ❄️ Ice 2 */}
                <motion.img
                    src={ice2}
                    alt="Ice 2"
                    className="ice-2"
                    variants={fromRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.6 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                />
            </motion.div>

            {/* === MOUSE ICON === */}
            <motion.img
                src={mouse}
                alt="Scroll"
                className="mouse-rango"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.6 }}
            />
        </section>
    );
};

export default Slide3;
