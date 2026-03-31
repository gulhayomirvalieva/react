import React, { useContext, useState } from "react";
import "./css/ShopCatagory.css";
import { ShopContext } from "../context/ShopContext";
import Item from "../components/item/Item";

const ShopCatagory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <div className="shopcategory-banner">
        <div className="info">
          <h1>FLAT 50% OFF</h1>
          <h2> <span>12</span> Hours <span>20</span> Mins</h2>
          <button>Explore now</button>
        </div>
        <div className="shopcategory-banner-img">
          <img src={props.banner} alt="" />
        </div>
      </div>

      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCatagory;
