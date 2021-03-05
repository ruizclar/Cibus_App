import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>

            <li>
                <Link to="/register">Register</Link>
            </li>

            <li>
                <Link to="/account">Account</Link>
            </li>

            <li>
                <Link to="/recipe">Recipes</Link>
            </li>

            <li>
                <Link to="/menu-plan">Menu Planner</Link>
            </li>

            <li>
                <Link to="/market-ingredient"> Market Ingredient</Link>
            </li>

        </ul>
    </nav>
);

export default NavBar;