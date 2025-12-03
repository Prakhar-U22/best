import { useState } from "react";
import "./NavBar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="nav-container">
        <h1 className="logo">MyWebsite</h1>

        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
          {open ? "✖" : "☰"}
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
      )}
    </nav>
  );
}
