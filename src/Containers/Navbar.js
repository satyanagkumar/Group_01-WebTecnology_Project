import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css'; // Ensure the path is correct

function Navbar() {
    const [isMobile, setIsMobile] = useState(false);

    const handleToggle = () => {
        setIsMobile(!isMobile);
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <NavLink className="navbar-brand" to="/">Web of Things</NavLink>
                <div className="hamburger-icon" onClick={handleToggle}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className={`navbar-nav ${isMobile ? "nav-active" : ""}`}>
                    <li>
                        <NavLink className="nav-link" to="/" exact activeClassName="active" onClick={handleToggle}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/Content" activeClassName="active" onClick={handleToggle}>Content</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/Taxonomy" activeClassName="active" onClick={handleToggle}>Taxonomy</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/Team" activeClassName="active" onClick={handleToggle}>Team</NavLink>
                    </li>
                </ul>
                {/* Background overlay */}
                {isMobile && <div className="nav-overlay overlay-active" onClick={handleToggle}></div>}
            </div>
        </nav>
    );
}

export default Navbar;
