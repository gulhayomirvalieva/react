// import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div id="contact">
      <div className="contact">
        <h2>Hey There</h2>
        <h1
          style={{ fontSize: "50px", letterSpacing: "1px", marginTop: "15px" }}
        >
          Lets Get in touch
        </h1>
        <i className="fa-solid fa-location-dot">
          <p>2972 Westheimer Rd. colombo</p>
        </i>
        <i className="fa-solid fa-envelope">
          <p>just.hiking@gmail.com</p>
        </i>
        <i className="fa-solid fa-phone">
          <p>(308) 555-0121</p>
        </i>
        <div className="icon_div">
        <i
            style={{ color: "blueviolet" }}
            className="fa-brands fa-square-instagram"
          ></i> 
          <i
            style={{ color: "blueviolet" }}
            className="fa-brands fa-square-instagram"
          ></i>
          <i style={{ color: "red" }} className="fa-brands fa-square-youtube"></i>
          <i style={{ color: "aqua" }} className="fa-brands fa-square-twitter"></i>
        </div>
      </div>
      <div className="contact2">
        <h1 className="h1">Contact us</h1>
        <input type="text" placeholder="Full name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Message ......" />
      </div>
    </div>
  );
};

export default Contact;
