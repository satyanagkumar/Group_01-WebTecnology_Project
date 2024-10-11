import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink className="navbar-brand" to="/Group_01-WebTecnology_Project/">Web of Things</NavLink>
            <ul className="navbar-nav">
                <li>
                    <NavLink className="nav-link" to="/Group_01-WebTecnology_Project/" exact activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/Group_01-WebTecnology_Project/Content" activeClassName="active">Content</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/Group_01-WebTecnology_Project/Taxonomy" activeClassName="active">Taxonomy</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/Group_01-WebTecnology_Project/Team" activeClassName="active">Team</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
