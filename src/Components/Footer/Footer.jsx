import React, { useContext } from "react";
import "./Footer.css";
import logo from "../../../public/Assets/logo.png";
import PlayStore from "../../../public/Assets/appstore.png";
import AppStore from "../../../public/Assets/playstore.png";
import { Link } from "react-router-dom";
import { productContext } from "../../Context/ProductContext";

const Footer = () => {
  const appName = useContext(productContext);
  return (
    <>
      <section className="footer-outer">
        <div className="footer">
          <div className="footer-left">
            <Link to="/" className="logo">
              <img src={logo} alt="logo" width={45} />
              <span className="logo-text">{appName}</span>
            </Link>
            <div className="footer-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              quidem cumque modi facere impedit adipisci sunt alias
              exercitationem iste voluptatibus eos, vero quis.
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-heading">Download Apps</div>
            <div className="download-images">
              <Link to={"/"}>
                <img src={PlayStore} alt="playstore" width={150} />
              </Link>
              <Link to={"/"}>
                <img src={AppStore} alt="appstore" width={150} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
