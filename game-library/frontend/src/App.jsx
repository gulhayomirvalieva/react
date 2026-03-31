import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Favorites from "./pages/Favorites";
import MyLibrary from "./pages/MyLibrary";
import MyProfile from "./pages/MyProfile";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";

const RequireAdmin = ({ children }) => {
  const token = localStorage.getItem("token");
  const adminCodeEntered = localStorage.getItem("adminCodeEntered") === "true";
  if (!token || !adminCodeEntered) return <Navigate to="/login" />;
  return children;
};

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/favorites" element={<Favorites searchQuery={searchQuery} />} />
        <Route path="/my-library" element={<MyLibrary searchQuery={searchQuery} />} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<RequireAdmin><AdminPanel /></RequireAdmin>} />
      </Routes>
    </div>
  );
}

export default App;
