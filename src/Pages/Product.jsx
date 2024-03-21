import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";
import Star from "../../public/Assets/star.svg";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const handleAdd = () => {
    setQuantity(quantity + 1);
  };
  const handleMinus = () => {
    setQuantity(quantity - 1);
  };
  const [productApi, setProductApi] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProductApi(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <div className="section-outer">
        <div className="section-inner">
          <div className="product-inner">
            <div className="product-left">
              <div className="product-img">
                <img src={productApi.image} />
              </div>
            </div>
            <div className="product-right">
              <div className="product-page-title">{productApi.title}</div>
              <div className="product-page-desc">{productApi.description}</div>
              <div className="product-page-ratings">
                <img src={Star} />
                {productApi.rating && productApi.rating.rate}
                <span className="given-rating-count">
                  ({productApi.rating && productApi.rating.count})
                </span>
              </div>
              <div className="product-page-price">$ {productApi.price}</div>
              <div className="quantity-div">
                Quantity :
                <div className="quantity-group">
                  <button
                    className="minus-quantity"
                    onClick={handleMinus}
                    disabled={quantity === 1}
                  >
                    -
                  </button>
                  <div className="quantity">{quantity}</div>
                  <button onClick={handleAdd}>+</button>
                </div>
              </div>
              <button className="btn fill-btn">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
