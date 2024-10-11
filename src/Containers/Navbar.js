import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <NavLink className="navbar-brand" to="/">Web of Things</NavLink>
                <ul className="navbar-nav">
                    <li>
                        <NavLink className="nav-link" to="/" exact activeClassName="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/Content" activeClassName="active">Content</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/Taxonomy" activeClassName="active">Taxonomy</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/Team" activeClassName="active">Team</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
