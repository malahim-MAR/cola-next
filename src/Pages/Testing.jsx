import React, { useState } from "react";
import logo from "../assets/logo.png";
import "./Testing.css";
import { FaSearch } from "react-icons/fa";

const Testing = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <section className="navbar-full">
                <nav className="navbar">
                    {/* Left Logo */}
                    <div className="logo">
                        <img src={logo} alt="Cola Next Logo" />
                    </div>

                    {/* Search Bar */}
                    <div className="search-box">
                        <i><FaSearch/></i>
                        <input type="text" placeholder="Search" />
                    </div>

                    {/* Hamburger Icon */}
                    <div
                        className={`hamburger ${open ? "open" : ""}`}
                        onClick={() => setOpen(!open)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>

            </section>


            {/* Fullscreen Overlay Menu */}
            <div className={`overlay ${open ? "active" : ""}`}>
                <button className="close-btn" onClick={() => setOpen(false)}>
                    ✖
                </button>
                <ul>
                    <li>All About Cola Next</li>
                    <li>Brands</li>
                    <li>Cola Next Talk</li>
                    <li>Careers</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </>
    );
};

export default Testing;
