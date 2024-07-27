import React from "react";
import "./Poster.css";

export default function Poster() {
  return (
    <section className="container-fluid poster-container">
      {/* <img src='../../imgs/poster.webp' className=' img-fluid '/> */}
      <div className="row">
        <div className="col-md-8">
          <img src="../../imgs/poster.webp" className=" img-fluid " alt="poster-img"/>
        </div>
        <div className="col-md-4">
          <div className="w-100 poster-topic">
            <h2>New Arrivals</h2>
            <h1>Shell Engine Oil</h1>
            <div>
              <button className="poster-btn">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
