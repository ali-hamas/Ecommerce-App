import React from "react";
import "./CategoriesSection.css";
import MenCategoryImg from "../../../public/Assets/men-category.jpeg";
import WomenCategoryImg from "../../../public/Assets/women-category.jpeg";
import { Link } from "react-router-dom";

const CategoriesSection = () => {
  return (
    <>
      <div className="section-heading">
        <a href="#categories">Categories</a>
      </div>
      <div className="section-inner">
        <div className="category-inner">
          <div className="single-category category-men">
            <div className="single-category-inner">
              <div className="category-name">Men Category</div>
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
              <div className="category-name">Women Category</div>
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
              <div className="category-name">Jewelry Category</div>
              <div className="category-desc">
                Lorem ipsum dolor sit amet lorem ipum dolor sit amet ipsum dolor
              </div>
              <Link to={"/jewelry"} className="btn fill-btn">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesSection;
