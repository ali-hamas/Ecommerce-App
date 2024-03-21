import React from "react";
import "./Shop.css";
import ProductsSection from "../Components/ProductsSection/ProductsSection";

const Shop = () => {
  return (
    <>
      <section className="section-padding">
        <div className="section-heading">
          <a>Shop</a>
        </div>
        <div className="section-outer">
          <div className="section-inner">
            <ProductsSection api={`https://fakestoreapi.com/products/`} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
