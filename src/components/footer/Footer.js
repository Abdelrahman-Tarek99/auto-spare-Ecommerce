import React from "react";
import "./Footer.css";


export default function Footer() {
    return (
        <div className="container-fluid footer-padding">
            <div className="footer-grid-container">
                <div className="footer-grid-item">
                    <img src="../../imgs/logoNav.png" alt="logo-footer" className=" img-fluid " />
                </div>
                <div className="footer-grid-item-container ">
                    <div className="footer-grid-links">
                        <div className="footer-links-header">
                            <h2>Links</h2>
                            <ul>
                                <li>Home</li>
                                <li>Services</li>
                                <li>Products</li>
                                <li>Blog</li>
                                <li>Contacts</li>
                            </ul>
                        </div>
                        <div className="footer-links-header">
                            <h2>Help</h2>
                            <ul>
                                <li>Payment Options</li>
                                <li>Shipping</li>
                                <li>Return Policy</li>
                            </ul>
                        </div>
                        <div className="footer-links-header">
                            <h2>Newsletter</h2>
                            <div className="d-flex justify-content-center  align-items-center ">
                                <input type="text" placeholder="Enter your email" />
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-rights-reserved">
                    <p>
                    2023-24 autoessentials. All rights reverved
                    </p>
                </div>
            </div>
        </div>
    );
}
