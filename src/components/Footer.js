import React from 'react'
import { Link } from 'react-router-dom'
import c1logo from "./c1logo.png";
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footerlinks">
                <Link to="/budget"><div className="font-face-gm">Budget Remaining: <b>$2,500.00</b></div></Link>
                <Link to="/creditscore"><div className="font-face-gm">Credit Score: <r>300</r></div></Link>
            </div>
        </div>
    );
}

export default Footer