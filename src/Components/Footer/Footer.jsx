import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* === Left Section === */}
        <div className="footer-brand">
          <h2 className="logo">Cola <span>Next</span></h2>
          <p className="footer-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div className="social-icons">
            <FaFacebookF />
            <RiTwitterXFill />
            <FaInstagram />
            <FaYoutube />
            <TiShoppingCart />
          </div>
        </div>

        {/* === Quick Links === */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Contact Us</li>
            <li>Health & Safety</li>
            <li>Introduction</li>
            <li>Job Portal</li>
            <li>TV Commercials</li>
          </ul>
        </div>

        {/* === Classic Beverages === */}
        <div className="footer-links">
          <h3>Classic Beverages</h3>
          <ul>
            <li>Cola Next</li>
            <li>Dare Next</li>
            <li>Fizzup Next</li>
            <li>Rango Next</li>
          </ul>
        </div>

        {/* === Flavored Beverages === */}
        <div className="footer-links">
          <h3>Flavored Beverages</h3>
          <ul>
            <li>Anaar Next</li>
            <li>Green Soda Next</li>
            <li>Lychee Next</li>
            <li>Storm</li>
          </ul>
        </div>
      </div>

      <div className="footer-bar"></div>
    </footer>
  );
};

export default Footer;
