import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Slide4.css";
import bottle from "../../assets/Storm-bottle.png";
import bottleshadow from "../../assets/bottle-shadows/storm.png";
import ice1 from "../../assets/ice1.png";
import ice2 from "../../assets/ice2.png";
import mouse from "../../assets/mouse.png";

const Slide4 = () => {
    // === RESPONSIVE HANDLER ===
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // === VARIANTS ===
    const fadeZoom = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1.5, ease: "easeOut" },
        },
    };
    const slideRight = {
        hidden: { x: window.innerWidth < 1024 ? 100 : 300, opacity: 0 },
        visible: {
            x: [window.innerWidth < 1024 ? 100 : 300, window.innerWidth < 1024 ? 30 : 60, 0],
            opacity: [0, 0.6, 1],
            transition: {
                duration: window.innerWidth < 1024 ? 1.6 : 2.4, // faster on smaller screens
                ease: [0.33, 1, 0.68, 1], // smoother, cinematic ease-out
                times: [0, 0.25, 1], // longer soft middle for fluidity
                delay: 0.1,
            },
        },
    };

    // Desktop Animations
    const slideLeftDesktop = {
        hidden: { x: -500, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 1.6, ease: [0.25, 1, 0.5, 1], delay: 0.1 },
        },
    };

    const slideRightDesktop = {
        hidden: { x: 500, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 1.6, ease: [0.25, 1, 0.5, 1], delay: 0.1 },
        },
    };

    // Mobile Animations (shorter and faster)
    const slideLeftMobile = {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 1, ease: "easeOut", delay: 0.05 },
        },
    };

    const slideRightMobile = {
        hidden: { x: 100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 1, ease: "easeOut", delay: 0.05 },
        },
    };

    // Choose based on screen size
    const slideLeft = isMobile ? slideLeftMobile : slideLeftDesktop;
    // const slideRight = isMobile ? slideRightMobile : slideRightDesktop;

    return (
        <section className="hero-storm">
            {/* === TEXT === */}
            <div className="hero-storm-text">
                {/* LEFT SIDE TEXT */}
                <motion.h2
                    className="top-storm-text"
                    variants={slideLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.6 }}
                >
                    Ignite
                </motion.h2>

                <h1 className="hero-storm-heading">
                    <motion.span
                        className="storm-left"
                        variants={slideLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.6 }}
                    >
                        the
                    </motion.span>
                </h1>

                <motion.h6
                    className="mid-storm-text"
                    variants={slideLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.6 }}
                >
                    fire
                </motion.h6>

                {/* RIGHT SIDE TEXT */}
                <motion.h2
                    className="right-top-storm-text"
                    variants={slideRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.6 }}
                >
                    Rule
                </motion.h2>

                <motion.h2
                    className="right-mid-storm-text"
                    variants={slideRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.6 }}
                >
                    Your
                </motion.h2>

                <motion.h2
                    className="right-bottom-storm-text"
                    variants={slideRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.6 }}
                >
                    Day!
                </motion.h2>
            </div>

            {/* === BOTTLE & ICE === */}
            <motion.div
                className="bottle-storm-wrap"
                variants={fadeZoom}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.6 }}
            >
                <img src={bottle} alt="Storm Bottle" className="bottle-storm" />
                <img src={bottleshadow} alt="Bottle Shadow" className="bottle-shadow" />

                {/* Floating ice top */}
                <motion.img
                    src={ice1}
                    alt="Ice Top"
                    className="ice-storm ice-storm-top"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                />

                {/* Floating ice bottom */}
                <motion.img
                    src={ice2}
                    alt="Ice Bottom"
                    className="ice-storm ice-storm-bottom"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                />
            </motion.div>

            {/* === SCROLL INDICATOR === */}
            <motion.img
                src={mouse}
                alt="Scroll"
                className="mouse-storm"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
            />
        </section>
    );
};

export default Slide4;
