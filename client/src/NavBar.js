import React from 'react';
import './App.css';

import { Link } from 'react-router-dom';

function NavBar() {

    const navStyle = {
        color: 'blue'
    }

    return (
        <nav>
            <h3>Logo</h3>
            <ul>
                <Link style={navStyle} to="/about">
                <li>About</li>
                </Link>
               
                <Link to="/shop" style={navStyle}>
                    <li >Shop</li>
                </Link>
            </ul>
        </nav>
    )
}

export default NavBar;
