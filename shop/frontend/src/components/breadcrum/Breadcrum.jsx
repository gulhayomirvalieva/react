import React from "react";
import "./Breadcrum.css";

const Breadcrum = ({ product }) => {
  if (!product) return <div className="breadcrum"></div>;

  return (
    <div className="breadcrum">
      Home <i className="fa-solid fa-chevron-right"></i>
      Shop <i className="fa-solid fa-chevron-right"></i>
      {product?.category} <i className="fa-solid fa-chevron-right"></i>
      {product?.name}
    </div>
  );
};

export default Breadcrum;
