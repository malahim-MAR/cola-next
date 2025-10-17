import React from "react";
import "./Home.css";
import Navbar from "../Components/MalahimNavbar/Navbar";
import Slide1 from "../Components/Slide-1/Slide1";
import Slide2 from "../Components/Slide-2/Slide2";
import Slide3 from "../Components/Slide-3/Slide3";
import Slide4 from "../Components/Slide-4/Slide4";
import Slide5 from "../Components/Slide-5/Slide5";
import Slide6 from "../Components/Slide-6/Slide6";
import Slide7 from "../Components/Slide-7/Slide7";
import Slide8 from "../Components/Slide-8/Slide8";
import Footer from "../Components/Footer/Footer";

export default function Home() {
  return (
    <>

      <div className="home">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Snap Scroll Wrapper */}
        <div className="snap-wrapper">
          <section className="snap-section">
            <Slide1 />
          </section>
          <section className="snap-section">
            <Slide2 />
          </section>
          <section className="snap-section">
            <Slide3 />
          </section>
          <section className="snap-section">
            <Slide4 />
          </section>
          <section className="snap-section">
            <Slide5 />
          </section>
          <section className="snap-section">
            <Slide6 />
          </section>
          <section className="snap-section">
            <Slide7 />
          </section>
          <section className="snap-section">
            <Slide8 />
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}
