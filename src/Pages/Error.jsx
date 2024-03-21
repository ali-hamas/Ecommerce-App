import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="error-screen">
        404 Page not found
        <Link to={"/"}>
          <button className="btn fill-btn">Return to home</button>
        </Link>
      </div>
    </>
  );
};

export default Error;
