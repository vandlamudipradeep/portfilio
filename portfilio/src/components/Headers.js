// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Vadlamudi Pradeep</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/education">Education</Link> {/* Add link to Education */}
                <Link to="/projects">Projects</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
};

export default Header;



