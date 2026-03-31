import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductsCategory.css";

const ProductsCategory = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/products/getproducts",
        );
        setProducts(response.data.items);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Yuklanmoqda...</div>;

  return (
    <div className="products-category">
      <h1>Mahsulotlar</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.imgUrl} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description1}</p>
            <div className="price">
              <span className="current-price">${product.price}</span>
              {product.oldprice && (
                <span className="old-price">${product.oldprice}</span>
              )}
            </div>
            <button>Savatga qo'sh</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCategory;
