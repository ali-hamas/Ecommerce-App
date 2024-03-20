import React, { useState } from "react";
import "./Header.css";
import logo from "../../../public/Assets/logo.png";
import cart from "../../../public/Assets/cart.svg";
import { Link } from "react-router-dom";

const Header = ({ name }) => {
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
            <Link to="/" className="logo-text">
              {name}
            </Link>
          </div>
          <div className="nav-center">
            <ul className="navbar-ul">
              <Link to={"/"} className="nav-links">
                Home
              </Link>
              <Link to={"/shop"} className="nav-links">
                Shop
              </Link>
              <Link to={"/men"} className="nav-links">
                Men
              </Link>
              <Link to={"/women"} className="nav-links">
                Women
              </Link>
              <Link to={"/jewelery"} className="nav-links">
                Jewelery
              </Link>
            </ul>
          </div>
          <div className="nav-right">
            <Link to={"/login"} className="hollow-btn btn">
              Login
            </Link>
            <Link to={"/signup"} className="fill-btn btn">
              Sign Up
            </Link>
            {/* <Link to={"/signup"} className="fill-btn btn">
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
