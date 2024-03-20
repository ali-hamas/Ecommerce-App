import React from "react";
import "./Home.css";
import CategoriesSection from "../Components/CategoriesSection/CategoriesSection";
import ProductsSection from "../Components/ProductsSection/ProductsSection";

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
      <section className="section">
        <div className="section-inner">
          <CategoriesSection />
        </div>
      </section>
      <section className="section" id="latest-products">
        <div className="section-heading">
          <a>Latest Collection</a>
        </div>
        <div className="section-inner">
          <ProductsSection api={`https://fakestoreapi.com/products/?limit=8`} />
        </div>
      </section>
    </>
  );
};

export default Home;
