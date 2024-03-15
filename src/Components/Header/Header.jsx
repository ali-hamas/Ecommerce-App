import React from "react";
import "./Header.css";
import logo from "../Assets/logo.png";
import cart from "../Assets/cart.svg";

const Header = ({ name }) => {
  return (
    <>
      <div className="header">
        <nav>
          <div className="nav-left">
            <div className="logo-img">
              <img src={logo} alt="logo" width={45} />
            </div>
            <a href="/" className="logo-text">
              {name}
            </a>
          </div>
          <div className="nav-center">
            <ul className="navbar-ul">
              <a href="/" className="nav-links">
                Shop
              </a>
              <a href="/" className="nav-links">
                Men
              </a>
              <a href="/" className="nav-links">
                Women
              </a>
              <a href="/" className="nav-links">
                Jewelry
              </a>
              <a href="/" className="nav-links">
                Electronics
              </a>
            </ul>
          </div>
          <div className="nav-right">
            <a href="/" className="fill-btn">
              Login
            </a>
            <a href="/" className="cart-btn">
              <img src={cart} alt="cart" />
              <span className="cart-num">10</span>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
