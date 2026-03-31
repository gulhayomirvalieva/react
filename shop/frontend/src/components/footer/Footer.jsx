import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          {/* <img src={instagram_icon} alt="" /> */}
          <i className="fa-brands fa-instagram"></i>
        </div>
        <div className="footer-icons-container">
          {/* <img src={pintester_icon} alt="" /> */}
          <i className="fa-brands fa-pinterest"></i>
        </div>
        <div className="footer-icons-container">
          {/* <img src={whatsapp_icon} alt="" /> */}
          <i className="fa-brands fa-whatsapp"></i>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2025 All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
