import React from "react";
import "./TopPicks.css";

export default function TopPicks() {
  const topPicksList = [
    {
      id: 1,
      title: "Brake system",
      img: "../../imgs/brakes.webp",
      partNumber: "Part Number: 8-97100-344-2",
      shape: "Al Fareed",
      price: "Rs. 25,000.00",
    },
    {
      id: 2,
      title: "Branded Tires",
      img: "../../imgs/tiers.webp",
      partNumber: "Part Number: 8-97100-344-2",
      shape: "Al Fareed",
      price: "Rs. 25,000.00",
    },
    {
      id: 3,
      title: "Air Filter system",
      img: "../../imgs/airFilter.webp",
      partNumber: "Part Number: 8-97100-344-2",
      shape: "Al Fareed",
      price: "Rs. 25,000.00",
    },
    {
      id: 4,
      title: "Car headlights",
      img: "../../imgs/headlights.webp",
      partNumber: "Part Number: 8-97100-344-2",
      shape: "Al Fareed",
      price: "Rs. 25,000.00",
    },
  ];
  return (
    <section className=" container-fluid py-5 my-3 ">
      <div className="topPicks-heading d-flex justify-content-center  align-items-center  flex-column  ">
        <h1>Top Picks For You</h1>
        <h3>
          Find a bright ideal to suit your taste with our great selection of
          products.
        </h3>
      </div>
      <div className="topPicks-grid-container">
        {topPicksList.map((item) => (
          <div className="topPicks-grid-content" key={item.id}>
            <div className="grid-image">
              <img src={item.img} alt="brakes-img" />
            </div>
            <h1 className="grid-title">{item.title}</h1>
            <p className="grid-part-number">{item.partNumber}</p>
            <div className="grid-shape">
              <p>{item.shape}</p>
            </div>
            <div className="grid-price">
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="topPicks-btn">
        <button className="">View More</button>
      </div>
    </section>
  );
}
