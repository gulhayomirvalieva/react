import Home from "./pages/Home/HomePage.jsx";
import Login from "./pages/Login/Login.jsx";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ProductsCategory from "./pages/Products/ProductsCategory";
import About from "./pages/About/About";
import CartPage from "./pages/Cart/CartPage"; // CartPage ni yaratish kerak
import { CartProvider } from "./context/CartContext";

function App() {
  const token = localStorage.getItem("token");

  if (!token) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Login />} />
      </Routes>
    );
  }

  return (
    <CartProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsCategory />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<CartPage />} /> {/* yangi route */}
      </Routes>
    </CartProvider>
  );
}

export default App;
