import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <div className="headerlinks">
                <Link to="/questions"><div className="font-face-gm">?</div></Link>
                <Link to="/earnPoints"><div className="font-face-gm">Challenge of the Day - Earn Gotchi Points!</div></Link>
                <a><div className="font-face-gm">Gotchi Points:</div></a>
            </div>
        </div>
    );
}

export default Header
