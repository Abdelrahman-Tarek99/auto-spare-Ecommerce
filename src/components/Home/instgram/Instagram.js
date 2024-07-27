import React from "react";
import "./Instagram.css";

export default function Instagram() {
  return (
    <section className=" container-fluid background-backdrop">
      <div className="w-100 h-100  background-image-overlay"></div>
      <div className="row insta-row">
        <div className="col-12 insta-section-tittle">
          <h1 className="text-center">Our Instagram</h1>
        </div>
        <div className="col-12 insta-section-subTittle">
          <h5 className="text-center">Follow Our Store On Instagram</h5>
        </div>
        <div className="col-12 insta-section-btn text-center ">
          <button className="mx-auto">Follow Us</button>
        </div>
      </div>
    </section>
  );
}
