import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">${product.price}</p>
      <div className="rating">{Array(product.rating).fill("⭐").join("")}</div>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
