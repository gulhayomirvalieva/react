import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { IoGameController } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { useState, useEffect } from "react";

function Navbar({ onSearch }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleSearch = (e) => {
    if (onSearch) onSearch(e.target.value);
  };

  const handleAdminClick = () => {
    const adminCodeEntered = localStorage.getItem("adminCodeEntered") === "true";
    if (!adminCodeEntered) {
      const code = prompt("🔑 Admin kodini kiriting:");
      if (code === "0100") {
        localStorage.setItem("adminCodeEntered", "true");
        navigate("/admin");
      } else {
        alert("Kod noto‘g‘ri ❌");
      }
    } else {
      navigate("/admin");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("adminCodeEntered");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header>
      <div className="bar">
        <IoGameController color="#00FFFF" size={28} />
        <h1>GameLibrary</h1>
      </div>

      <div className="nav">
        <Link to="/"><p>Home</p></Link>
        <Link to="/favorites"><p>Favorites</p></Link>
        <Link to="/my-library"><p>My Library</p></Link>
        <p onClick={handleAdminClick} style={{ cursor: "pointer" }}>AdminPanel</p>
      </div>

      <div className="search">
        <input
          type="text"
          placeholder="Search for games..."
          onChange={handleSearch}
        />
      </div>

      <div className="nav">
        {!isLoggedIn ? (
          <>
            <Link to="/login"><p>Login</p></Link>
            <Link to="/register"><p>Register</p></Link>
          </>
        ) : (
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        )}
      </div>

      <div className="profile">
        <Link to="/MyProfile">
          <p>My Profile</p>
          <MdAccountCircle size={24} />
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
