import React, { useEffect, useState } from "react";
import "./ProductsSection.css";
import { Link } from "react-router-dom";
import Star from "../../../public/Assets/star.svg";

const FeaturedProductsSection = (props) => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    fetch(props.api)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="products-inner">
        {Products.map((item) => {
          return (
            <Link
              to={`/product/${item.id}`}
              className="product"
              key={item.id}
              id={item.id}
            >
              <div className="product-img-div">
                <img src={item.image} className="product-img" />
              </div>
              <div className="product-details">
                <div className="product-title">{item.title}</div>
                <div className="product-price">${item.price}</div>
                <div className="product-rating">
                  <img src={Star} alt="rating" />
                  <span className="rating">{item.rating.rate}/5</span>
                  <span className="rating-count">({item.rating.count})</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default FeaturedProductsSection;
