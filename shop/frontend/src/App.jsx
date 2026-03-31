import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCatagory from "./pages/ShopCatagory";
import Product from "./pages/Product";
import LoginSignup from "./pages/LoginSignup";
import Cart from "./pages/Cart";
import Footer from "./components/footer/Footer";
import men_banner from "./components/assets/men_banner.png";
import women_banner from "./components/assets/women_banner.png";
import kids_banner from "./components/assets/kids_banner.png";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />

          <Route
            path="/mens"
            element={<ShopCatagory banner={men_banner} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCatagory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCatagory banner={kids_banner} category="kids" />}
          />

          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
