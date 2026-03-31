import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/breadcrum/Breadcrum";
import ProductDisplay from "../components/productDisplay/ProductDisplay";
import DescriptionBox from "../components/description/DescriptionBox";
import ReletedProducts from "../components/reletedProducts/ReletedProducts";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <ReletedProducts />
    </div>
  );
};

export default Product;
