import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>GameLibrary</h3>
                    <p>© 2025 GameLibrary. All rights reserved.</p>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/games">Games</a></li>
                        <li><a href="/MyProfile">My Profile</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer">FB</a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">TW</a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">IG</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
