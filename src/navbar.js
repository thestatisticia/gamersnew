import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/signup" className={location.pathname === '/signup' ? 'active' : ''}>Sign Up</Link>
                </li>
                <li>
                    <Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>Log In</Link>
                </li>
                <li>
                    <Link to="/points" className={location.pathname === '/points' ? 'active' : ''}>View Points</Link>
                </li>
                <li>
                    <Link to="/join-league" className={location.pathname === '/join-league' ? 'active' : ''}>Join League</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
