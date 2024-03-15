import React, { useState } from "react";
import "./Header.css";
import logo from "../Assets/logo.png";
import cart from "../Assets/cart.svg";

const Header = ({ name }) => {
  const [underline, setunderline] = useState("");
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
              <a
                className="nav-links"
                onClick={() => {
                  setunderline("shop");
                }}
              >
                Shop
                {underline === "shop" ? <hr /> : ""}
              </a>
              <a
                className="nav-links"
                onClick={() => {
                  setunderline("men");
                }}
              >
                Men
                {underline === "men" ? <hr /> : ""}
              </a>
              <a
                className="nav-links"
                onClick={() => {
                  setunderline("women");
                }}
              >
                Women
                {underline === "women" ? <hr /> : ""}
              </a>
              <a
                className="nav-links"
                onClick={() => {
                  setunderline("jewelry");
                }}
              >
                Jewelry
                {underline === "jewelry" ? <hr /> : ""}
              </a>
              <a
                className="nav-links"
                onClick={() => {
                  setunderline("electronics");
                }}
              >
                Electronics
                {underline === "electronics" ? <hr /> : ""}
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
