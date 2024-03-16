import React from "react";
import "./Home.css";
import CategoriesSection from "../Components/CategoriesSection/CategoriesSection";
import FeaturedProductsSection from "../Components/FeaturedProductsSection/FeaturedProductsSection";

const Home = () => {
  return (
    <>
      <section className="hero-sec">
        <div className="hero-inner">
          <div className="hero-heading">Raining Offers For Hot Summer!</div>
          <div className="hero-text">25% Off On All Products</div>
          <a href="#latest-products" className="btn fill-btn">
            Latest Collections
          </a>
        </div>
      </section>
      <section className="section" id="categories">
        <CategoriesSection />
      </section>
      <section className="section" id="latest-products">
        <FeaturedProductsSection />
      </section>
    </>
  );
};

export default Home;
