import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "purple"
    }
    return (
        <nav>
            <NavLink to="/home"
                activeStyle={activeStyle}
            >Home</NavLink>
            <NavLink to="/about"
                activeStyle={activeStyle}
            >About</NavLink>
            <NavLink to="/about/culture"
                activeStyle={activeStyle}
            >Culture</NavLink>
            <NavLink to="/friends"
                activeStyle={activeStyle}
            >Friends</NavLink>
        </nav>
    );
};

export default Header;