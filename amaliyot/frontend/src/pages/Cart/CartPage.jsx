import { useCart } from "../../context/CartContext";
import "./CartPage.css";

const CartPage = () => {
  const { cart, addToCart, decreaseQuantity, removeFromCart, totalPrice } =
    useCart();

  return (
    <div className="cart-page">
      <h2>My Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.title} />
              <div className="details">
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                <p>Quantity: {product.quantity}</p>
                <div className="buttons">
                  <button onClick={() => addToCart(product)}>+</button>
                  <button onClick={() => decreaseQuantity(product.id)}>
                    -
                  </button>
                  <button onClick={() => removeFromCart(product.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default CartPage;
