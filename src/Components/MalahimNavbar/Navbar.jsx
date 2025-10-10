import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState("All About Cola Next");

    const menuData = {
        "All About Cola Next": [
            "About Us",
            "Values",
            "Awards",
            "Board of Directors",
            "Management Team",
            "Tapal Holdings",
            "Corporate Social Responsibility",
        ],
        Brands: ["Cola Next Original", "Cola Next Lime", "Cola Next Zero"],
        Careers: ["Join Our Team", "Life at Cola Next", "Internship Program"],
        "Cola Next Talk": ["Press Releases", "Newsroom", "Events"],
        "Contact Us": ["Customer Support", "Corporate Office", "Feedback Form"],
    };

    return (
        <>
            {/* ===== NAVBAR ===== */}
            <section className="navbar-full">
                <nav className="navbar">
                    {/* Logo */}
                    <div className="logo">
                        <img src={logo} alt="Cola Next Logo" />
                    </div>

                    {/* Search Box */}
                    <div className="search-box">
                        {/* <i>
                            <FaSearch />
                        </i> */}
                        <input type="text" placeholder="Search" />
                    </div>

                    {/* Hamburger */}
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

            {/* ===== FULLSCREEN OVERLAY MENU ===== */}
            <div className={`overlay ${open ? "active" : ""}`}>
                <button className="close-btn" onClick={() => setOpen(false)}>
                    ✖
                </button>

                <div className="menu-wrapper">
                    {/* LEFT SIDE MENU */}
                    <div className="menu-left">
                        {Object.keys(menuData).map((menu) => (
                            <div
                                key={menu}
                                className={`menu-item ${activeMenu === menu ? "active" : ""
                                    }`}
                                onClick={() => setActiveMenu(menu)}
                            >
                                {menu}
                            </div>
                        ))}
                    </div>

                    {/* RIGHT SIDE CONTENT */}
                    <div className="menu-right">
                        <ul>
                            {menuData[activeMenu].map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
