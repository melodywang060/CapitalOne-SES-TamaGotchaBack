import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footerlinks">
                <Link to="/budget">Budget Remaining</Link>
                <Link to="/credit">Credit Score</Link>
            </div>
        </div>
    );
}

export default Footer
