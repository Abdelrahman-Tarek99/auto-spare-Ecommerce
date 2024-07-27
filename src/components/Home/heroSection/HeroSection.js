import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-section-text">
        <h1>
          <span>Auto</span> Spare Parts
        </h1>
        <p>All Major Brands Available</p>
        <div className="w-100 shop-now-btn">
          <button>Shop Now</button>
        </div>
      </div>
      <div>
        <img src="../../imgs/heroSectionImage.webp" alt="heroSectionImage" className="img-fluid"/>
      </div>
    </section>
  );
}
