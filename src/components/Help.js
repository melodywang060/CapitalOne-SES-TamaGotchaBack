import React from "react";
import { Link } from "react-router-dom";
import './Help.css'

export const HelpPage = () => {
    return(
    <div>

       <h1 className="Title">        <Link to='/Home'><div className="long-arrow-left left"></div></Link>Frequently Asked Qestions</h1>
        <div class="row">
        <div class="column">
            <ol >
                <li style={{fontSize: '20px'}}>What is TamaGotchaBack?
                    <ul><li>TamaGotchaBack is a financial application that allows users to manage their funds in a fun and interactive way.</li></ul>
                </li>
                <li style={{fontSize: '20px'}}>Why did we create TamaGotchaBack?
                    <ul><li>We created TamaGotchaBack because data shows that majority of adults in the U.S. are not knowledgeable about financial literacy.</li></ul>
                </li>
                <li style={{fontSize: '20px'}}>What features does this application include?
                    <ul><li>Once you log in you can view your current budget and spend money from it, as well and deposit to it. You can also view your credit score, as well as your current gotchi points, which can be gained throught taking part in our Challenge of the Day feature.</li></ul>
                </li>
                <li style={{fontSize: '20px'}}>What is a Tamagatchi?
                    <ul><li>The Tamagotchi was orginally is a handheld digital pet that was created in Japan. For more information, visit this <a href="https://en.wikipedia.org/wiki/Tamagotchi" target="_blank">website.</a></li></ul>
                </li>
            </ol>
            <p style={{paddingLeft: '25px', paddingBottom: '25px'}}>For more information on capital share, visit this <a href="" className="bigLink" target="_blank">page</a></p>
        </div>
</div>
    </div>
    )
}