import React from "react";
import ProductsSection from "../Components/ProductsSection/ProductsSection";

const ShopCategory = (props) => {
  return (
    <>
      <section className="section">
        <div className="section-heading">
          <a>{props.category}</a>
        </div>
        <div className="section-outer">
          <div className="section-inner">
            <ProductsSection
              api={`https://fakestoreapi.com/products/category/${props.category}`}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopCategory;
