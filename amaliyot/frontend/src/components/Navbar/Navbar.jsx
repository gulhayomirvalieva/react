import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/">MyShop</Link>
      </div>

      <div className="nav-search">
        <input type="text" placeholder="Mahsulot qidirish..." />
        <button>Search</button>
      </div>

      <div className="nav-menu">
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
