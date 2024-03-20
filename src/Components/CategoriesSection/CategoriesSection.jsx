import React from "react";
import "./CategoriesSection.css";
import { Link } from "react-router-dom";

const CategoriesSection = () => {
  return (
    <>
      <div className="category-inner">
        <div className="single-category category-men">
          <div className="single-category-inner">
            <div className="category-name">Men's Collection</div>
            <div className="category-desc">
              Lorem ipsum dolor sit amet lorem ipum dolor sit amet ipsum dolor
            </div>
            <Link to={"/men"} className="btn fill-btn">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="single-category category-women">
          <div className="single-category-inner">
            <div className="category-name">Women's Collection</div>
            <div className="category-desc">
              Lorem ipsum dolor sit amet lorem ipum dolor sit amet ipsum dolor
            </div>
            <Link to={"/women"} className="btn fill-btn">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="single-category category-jewelry">
          <div className="single-category-inner">
            <div className="category-name">Jewelery Collection</div>
            <div className="category-desc">
              Lorem ipsum dolor sit amet lorem ipum dolor sit amet ipsum dolor
            </div>
            <Link to={"/jewelery"} className="btn fill-btn">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesSection;
