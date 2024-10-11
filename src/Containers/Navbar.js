import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink className="navbar-brand" to="/">Web of Things</NavLink>
            <ul className="navbar-nav">
                <li>
                    <NavLink className="nav-link" to="/Home" exact activeClassName="active">Home</NavLink>
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
        </nav>
    );
}

export default Navbar;
