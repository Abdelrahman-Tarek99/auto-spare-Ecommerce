import React from "react";
import "./Blogs.css";

export default function Blogs() {
    const blogsList = [
        {
            id: 1,
            title: "How to change engine oil at home?",
            img: "../../imgs/blog1.webp",
            time: "5 min",
            date: "12th Oct 2023",
        },
        {
            id: 2,
            title: "How to change engine oil at home?",
            img: "../../imgs/blog2.webp",
            time: "5 min",
            date: "12th Oct 2023",
        },
        {
            id: 3,
            title: "How to change engine oil at home?",
            img: "../../imgs/blog3.webp",
            time: "5 min",
            date: "12th Oct 2023",
        },
    ];
    return (
        <section className="container-fluid my-5  ">
            <div className="row">
                <div className="col-12 blogs-section-tittle">
                    <h1 className="text-center">Our Blogs</h1>
                    <h5 className="text-center">
                        Find a bright ideal to suit your taste with our great selection
                    </h5>
                </div>

                {blogsList.map((item) => {
                    return (
                        <div key={item.id} className="col-md-4 col-12 py-3">
                            <div className="blog-card">
                                <div className="blog-image">
                                    <img
                                        src={item.img}
                                        alt="blogs Post"
                                        className=" img-fluid "
                                    />
                                </div>
                                <div className="blog-content">
                                    <h4>{item.title}</h4>
                                    <button className=" mx-auto ">Read More</button>
                                </div>
                                <div className="blog-footer">
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-clock-hour-4"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="#2c3e50"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                            <path d="M12 12l3 2" />
                                            <path d="M12 7v5" />
                                        </svg>
                                        <span>{item.time} </span>
                                    </div>
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-calendar-event"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="#2c3e50"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                            <path d="M16 3l0 4" />
                                            <path d="M8 3l0 4" />
                                            <path d="M4 11l16 0" />
                                            <path d="M8 15h2v2h-2z" />
                                        </svg>
                                        <span>{item.date}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div className="w-100  text-center mt-4">
                    <button className="blogs-viewAll-btn">View All Post</button>
                </div>
            </div>
        </section>
    );
}
