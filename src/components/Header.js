import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <div className="headerlinks">
                <Link to="/questions">?</Link>
                <Link to="/earnPoints">Question of the day - Earn Gotchi Points!</Link>
                <a> Gotchi Points </a>
            </div>
        </div>
    );
}

export default Header
