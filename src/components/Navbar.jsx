import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Ilford Logo.jpg"; // Make sure your logo is placed in src/assets/

const Navbar = ({ toggleTheme, theme }) => {
    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src={logo} alt="Ilford Logo" className="logo-image" />
                <span className="logo-text">Ilford MSC</span>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/settings">Settings</Link></li>
                <li><Link to="/contact">Map</Link></li>
                <li><Link to="/notifications">Radar</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li>
                    <button onClick={toggleTheme} className="theme-toggle">
                        {theme === "light" ? "🌙 Dark" : "☀️ Light"} Mode
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
