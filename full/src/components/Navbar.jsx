import React from "react";
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 bg-white shadow-md">
      <div className="text-xl font-bold">Logo</div>
      <ul className="flex gap-6">
        <li>
          <a href="#about">Xizmatlar</a>
        </li>
        <li>
          <a href="#contact">Aloqa</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
