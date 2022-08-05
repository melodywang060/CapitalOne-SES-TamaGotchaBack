import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footerlinks">
                <Link to="/budget"><div className="font-face-gm">Budget Remaining: <b>$2,500.00</b></div></Link>
                <Link to="/creditscore"><div className="font-face-gm">Credit Score: <b>300</b></div></Link>
            </div>
        </div>
    );
}

export default Footer