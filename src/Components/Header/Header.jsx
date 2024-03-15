import React, { useState } from "react";
import "./Header.css";
import logo from "../Assets/logo.png";
import cart from "../Assets/cart.svg";
import { Link } from "react-router-dom";

const Header = ({ name }) => {
  const [underline, setunderline] = useState("home");
  window.onscroll = () => {
    if (document.documentElement.scrollTop > 20) {
      document.querySelector(".header").classList.add("sticky");
    } else {
      document.querySelector(".header").classList.remove("sticky");
    }
  };
  return (
    <>
      <div className="header">
        <nav>
          <div className="nav-left">
            <div className="logo-img">
              <img src={logo} alt="logo" width={45} />
            </div>
            <Link
              to="/"
              className="logo-text"
              onClick={() => {
                setunderline("home");
              }}
            >
              {name}
            </Link>
          </div>
          <div className="nav-center">
            <ul className="navbar-ul">
              <Link
                to={"/"}
                className="nav-links"
                onClick={() => {
                  setunderline("home");
                }}
              >
                Home
                {underline === "home" ? <hr /> : ""}
              </Link>
              <Link
                to={"/shop"}
                className="nav-links"
                onClick={() => {
                  setunderline("shop");
                }}
              >
                Shop
                {underline === "shop" ? <hr /> : ""}
              </Link>
              <Link
                to={"/men"}
                className="nav-links"
                onClick={() => {
                  setunderline("men");
                }}
              >
                Men
                {underline === "men" ? <hr /> : ""}
              </Link>
              <Link
                to={"/women"}
                className="nav-links"
                onClick={() => {
                  setunderline("women");
                }}
              >
                Women
                {underline === "women" ? <hr /> : ""}
              </Link>
              <Link
                to={"/jewelry"}
                className="nav-links"
                onClick={() => {
                  setunderline("jewelry");
                }}
              >
                Jewelry
                {underline === "jewelry" ? <hr /> : ""}
              </Link>
              <Link
                to={"/electronics"}
                className="nav-links"
                onClick={() => {
                  setunderline("electronics");
                }}
              >
                Electronics
                {underline === "electronics" ? <hr /> : ""}
              </Link>
            </ul>
          </div>
          <div className="nav-right">
            <Link
              to={"/login"}
              className="light-btn btn"
              onClick={() => {
                setunderline("");
              }}
            >
              Login
            </Link>
            <Link
              to={"/signup"}
              className="color-btn btn"
              onClick={() => {
                setunderline("");
              }}
            >
              Sign Up
            </Link>
            {/* <Link to={"/signup"} className="color-btn btn">
              Logout
            </Link>
            <Link to={"/cart"} className="cart-btn">
              <img src={cart} alt="cart" />
              <span className="cart-num">10</span>
            </Link> */}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
