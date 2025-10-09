import React from "react";
import "./Home.css";
import Navbar from "../Components/Navbar/Navbar";

import Section1 from "../Components/Section/Section1";
import Section2 from "../Components/Section/Section2";
import Section3 from "../Components/Section/Section3";
import Section4 from "../Components/Section/Section4";
import Section5 from "../Components/Section/Section5";
import Section6 from "../Components/Section/Section6";
import Section7 from "../Components/Section/Section7";
import Section8 from "../Components/Section/Section8";

export default function Home() {
  return (
    <>

      <div className="home">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Snap Scroll Wrapper */}
        <div className="snap-wrapper">
          <section className="snap-section">
            <Section1 />
          </section>
          <section className="snap-section">
            <Section2 />
          </section>
          <section className="snap-section">
            <Section3 />
          </section>
          <section className="snap-section">
            <Section4 />
          </section>
          <section className="snap-section">
            <Section5 />
          </section>
          <section className="snap-section">
            <Section6 />
          </section>
          <section className="snap-section">
            <Section7 />
          </section>
          <section className="snap-section">
            <Section8 />
          </section>
        </div>
      </div>
    </>
  );
}
