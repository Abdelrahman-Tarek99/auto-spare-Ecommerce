import React, { useState,useEffect } from "react";
import { ReactComponent as HamburgerMenu } from "../../assets/svgs/hamburger-menu.svg";
import { ReactComponent as MenuClose } from "../../assets/svgs/close.svg";
import { NavLink,useLocation } from "react-router-dom";
import CartOffCanvas from "./CartOffCanvas";
import {useSelector} from 'react-redux';
import "./Navbar.css";

export default function Navbar() {
  const location =useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [adShow, setAdShow] = useState(true);
  const [isOffCanvasOpen, setOffCanvasOpen] = useState(false);
  const cartCount = useSelector(state => state.products.cartTotalQuantity);

  // console.log('cartCount:', cartCount);
const ToggleNav = () => {
  setMenuOpen((prev) => !prev)
}

useEffect(() => {
  if (location.pathname === '/home') {
    setAdShow(true);
  } else {
    setAdShow(false);
  }
}, [location]);

const cartClicked = () => {
  setOffCanvasOpen(!isOffCanvasOpen);
}


  return (
    <section className=" nav-section">
      {adShow && (
        <section className="ad-section w-100  ">
          <div className="ad-container">
            <div className="contact-info">
              <div className="px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="phone-area">
                <div>Call us</div>
                <div>
                  <a href="tel:+234 803 123 4567">+234 803 123 4567</a>
                </div>
              </div>
            </div>
            <div className="mail-area">
              <div className="px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-inbox"
                >
                  <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                  <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                </svg>
              </div>
              <div className="mail-area-text">
                <div>Send us mail</div>
                <div>
                  <a href="mailto:autoessentials@gmail.com">
                    autoessentials@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="">
              <button className="btn ">Become a seller</button>
            </div>
          </div>
        </section>
      )}
      <nav className="navbar ">
        <div className="w-100 nav-body-2 position-relative ">
          <div className="nav-head-mobile">
            <button className="logo">
              <img
                src="../../imgs/logoNav.png"
                alt="logo"
                className="img-fluid"
              />
            </button>
            {/* Toggler button */}
            <button
              className="nav-toggler"
              onClick={ToggleNav}
            >
              {menuOpen ? <MenuClose /> : <HamburgerMenu />}
            </button>
          </div>
          {/* Navigation links */}
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li>
              <NavLink to={"/"} onClick={ToggleNav}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/shop"} onClick={ToggleNav}>Shop</NavLink>
            </li>
            <li>
              <NavLink to={"/aboutUs"} onClick={ToggleNav}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"} onClick={ToggleNav}>Contact</NavLink>
            </li>
          </ul>
          <ul
            className={`nav-links ${menuOpen ? "open" : ""} mobile-nav-social`}
          >
            <li>
              <NavLink to={"/home"} onClick={ToggleNav}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-user-round"
                >
                  <path d="M18 20a6 6 0 0 0-12 0" />
                  <circle cx="12" cy="10" r="4" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/home"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-search"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/home"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-heart"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </NavLink>
            </li>
            <li className="cart-icon" onClick={cartClicked}>
              <div>
                <div  >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-shopping-cart"
                  >
                    <circle cx="8" cy="21" r="1" />
                    <circle cx="19" cy="21" r="1" />
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                  </svg>
                </div>
                {cartCount > 0 && <div className="cart-count position-absolute">{cartCount}</div>}
                <CartOffCanvas isOpen={isOffCanvasOpen} onClose={() => setOffCanvasOpen(false)} />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}
