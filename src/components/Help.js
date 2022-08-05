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
                <li style={{fontSize: '20px'}}>What is TamaGotchaBack?
                    <ul><li>TamaGotchaBack is an application that allows users to manage thie funds</li></ul>
                </li>
                <li style={{fontSize: '20px'}}>Why did we create TamaGotchaBack?
                    <ul><li>Majority of adults in the U.S. are not knowledgeable about financial literacy</li></ul>
                </li>
                <li style={{fontSize: '20px'}}>What features does this application include?
                    <ul><li>Once you log in you can view your bank details and spend money from it, view your credit score, and take part in a Challenge of the day to earn some points</li></ul>
                </li>
                <li style={{fontSize: '20px'}}>What is a Tamagatchi?
                    <ul><li>The Tamagotchi was orginally is a handheld digital pet that was created in Japan. For more information, visit this <a href="https://en.wikipedia.org/wiki/Tamagotchi">website</a></li></ul>
                </li>
            </ol>
            <p style={{paddingLeft: '25px', paddingBottom: '25px'}}>For more info on capital share, visit this <a href="">page.</a></p>
        </div>
</div>
    </div>
    )
}