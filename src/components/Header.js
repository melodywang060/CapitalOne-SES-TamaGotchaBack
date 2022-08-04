import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div className="links">
            <Link to="/questions">?</Link>
            <Link to="/getPoints">Question of the day - Earn Gotchi Points!</Link>
            <a> Gotchi Points </a>
        </div>
    );
}

export default Header
