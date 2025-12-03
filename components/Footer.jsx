import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h4 className="footer-title">Your Company</h4>

        <ul className="footer-links">
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/careers">Careers</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        <p className="footer-copy">
          © {new Date().getFullYear()} Our Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
