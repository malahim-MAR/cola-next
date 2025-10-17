import React from "react";
import { motion } from "framer-motion";
import "./Slide2.css";
import bottle from "../../assets/LemonBottle.png";
import bottleshadow from "../../assets/bottle-shadows/fizup.png";
import lemon2 from "../../assets/lemon2.png";
import lemon1 from "../../assets/lemon1.png";
import leaf1 from "../../assets/leaf1.png";
import leaf2 from "../../assets/leaf2.png";
import mouse from "../../assets/mouse.png";

const Slide2 = () => {
    // === TEXT VARIANTS ===
    const fadeUp = {
        hidden: { y: -200, opacity: 0 },
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
        <section className="hero-lemon">
            <div className="hero-lemon-text">
                {/* === TEXT ANIMATIONS === */}
                <motion.h2
                    className="top-lemon-text"
                    variants={fadeDown}
                    initial="hidden"
                    whileInView="visible"
                     viewport={{ once: false, amount: 0.6 }}
                >
                    <span>Lemon Lime</span>
                </motion.h2>

                <motion.h2
                    className="left-lemon-text"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                     viewport={{ once: false, amount: 0.6 }}
                >
                    <span>Lift</span>
                </motion.h2>

                <motion.h2
                    className="right-lemon-text"
                    variants={fadeDown}
                    initial="hidden"
                    whileInView="visible"
                     viewport={{ once: false, amount: 0.6 }}
                >
                    <span>With</span>
                </motion.h2>

                <motion.h2
                    className="bottom-lemon-text"
                    variants={fadeRight}
                    initial="hidden"
                    whileInView="visible"
                     viewport={{ once: false, amount: 0.6 }}
                >
                    <span>
                        Every <br /> &nbsp;&nbsp; Chill!
                    </span>
                </motion.h2>
            </div>

            {/* === BOTTLE & ELEMENTS === */}
            <motion.div
                className="bottle-lemon-wrap"
                variants={fadeBottle}
                initial="hidden"
                whileInView="visible"
                 viewport={{ once: false, amount: 0.6 }}
            >
                <img src={bottle} alt="Lemon Bottle" className="bottle-lemon" />
                <img src={bottleshadow} alt="Bottle shadow" className="bottle-shadow" />

                {/* 🍋 lemon2 → fade in */}
                <motion.img
                    src={lemon2}
                    alt="Lemon-2"
                    className="lemon-2"
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                     viewport={{ once: false, amount: 0.6 }}
                />

                {/* 🍋 lemon1 → from right */}
                <motion.img
                    src={lemon1}
                    alt="Lemon-1"
                    className="lemon-1"
                    variants={fromRight}
                    initial="hidden"
                    whileInView="visible"
                     viewport={{ once: false, amount: 0.6 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                />

                {/* 🍃 leaf1 → from left */}
                <motion.img
                    src={leaf1}
                    alt="Leaf-1"
                    className="leaf-1"
                    variants={fromLeft}
                    initial="hidden"
                    whileInView="visible"
                     viewport={{ once: false, amount: 0.6 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                />

                {/* 🍃 leaf2 → from right */}
                <motion.img
                    src={leaf2}
                    alt="Leaf-2"
                    className="leaf-2"
                    variants={fromRight}
                    initial="hidden"
                    whileInView="visible"
                     viewport={{ once: false, amount: 0.6 }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                />
            </motion.div>

            {/* === MOUSE ICON === */}
            <motion.img
                src={mouse}
                alt="Scroll"
                className="mouse-lemon"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                 viewport={{ once: false, amount: 0.6 }}
            />
        </section>
    );
};

export default Slide2;
