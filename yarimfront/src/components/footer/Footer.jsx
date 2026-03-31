// import React from 'react'
import "./Footer.css";



const Footer = () => {
  return (
    <div className="footer">


      <div className="iccon">
        <h1>justHIKING</h1>
      </div>

      <hr />

      <p>Subscribe To Our Newsletter</p>
      <div className="inp">
        <input type="text" placeholder="Email Adress" />
        <button className="send">→</button>
      </div>

      <div className="info">
        <nav>
          <ul>
            <li>
              <a href="#">About US</a>
            </li>
            <li>
              <a href="#">Benefits</a>
            </li>
            <li>
              <a href="#">Hikes</a>
            </li>
            <li>
              <a href="#">Stories</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">privacy policy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
