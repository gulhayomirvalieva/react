import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import ProductsGrid from "../../components/ProductsGrid/ProductsGrid";
import { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Backend yoki fake API
    axios
      .get("https://fakestoreapi.com/products?limit=8")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Hero />
      <Categories />
      <ProductsGrid products={products} />
    </div>
  );
};

export default HomePage;
