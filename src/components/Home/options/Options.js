import React from "react";
import { Link } from "react-router-dom";
import "./Options.css";
import Home from "../../pages/Home";

export default function Options() {
  const optionsList = [
    {
      id: 1,
      title: "Lubricants",
      img: "../../imgs/lubricants.webp",
    },
    {
      id: 2,
      title: "Spare Parts",
      img: "../../imgs/spareParts.webp",
    },
  ];
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className=" container-fluid  options-container">
      <div className="row">
        {optionsList.map((item) => {
          return (
            <div key={item.id} className="col-md-6 col-12 py-3">
              <div className="card card-content-alignment p-2 mx-auto ">
                <div className="card-body">
                  <div className=" card-img ">
                    <img
                      src={item.img}
                      alt="Spare Parts "
                      className="img-top"
                    />
                  </div>
                  <h1 className=" card-title fw-bold ">{item.title}</h1>
                  <Link
                    to={Home}
                    on
                    onClick={scrollToTop}
                    className="view-more-link"
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
