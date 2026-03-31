import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-6">
      <p>
        &copy; {new Date().getFullYear()} Gulhayo. Barcha huquqlar himoyalangan.
      </p>
    </footer>
  );
};

export default Footer;
