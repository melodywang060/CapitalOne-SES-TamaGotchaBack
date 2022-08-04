import React from "react";
import { Link } from "react-router-dom";
import './Help.css'

export const HelpPage = () => {
    return(
    <div>
        <Link to='/Budget'><div className="long-arrow-left left"></div></Link>
       <h1 className="Title">Support Page</h1>
        <div class="row">
        <div class="column">
            <h2>FAQ</h2>
            <ol >
                <li style={{fontSize: '20px'}}>What is Tamagotchi Banking?
                    <ul><li>Tamagotchi Banking is an application</li></ul>
                </li>
                <li style={{fontSize: '20px'}}>What is ..
                    <ul><li>..</li></ul>
                </li>
                <li style={{fontSize: '20px'}}>What ...
                    <ul><li>...</li></ul>
                </li>
                <li style={{fontSize: '20px'}}>What is ..
                    <ul><li>..</li></ul>
                </li>
                <li style={{fontSize: '20px'}}>What is ..
                    <ul><li>..</li></ul>
                </li>
            </ol>
            <p style={{paddingTop: '25px'}}>For more info on capital share, visit this <a href="">page.</a></p>
        </div>
</div>
    </div>
    )
}