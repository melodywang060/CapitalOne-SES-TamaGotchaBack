import React, { useState } from 'react'
import './CreditScore.css';
import happyCat from './PsychedCat.png';
import normalCat from './HappyCat.PNG';
import sadCat from './AngryCat.PNG';
import { Link } from 'react-router-dom'



const CreditScore = () => {
    var score = 500;
    
    function displayScore(score) {
        return (
            <div>
                {(score < 670) ?
                    <span style={{ color: 'red', fontWeight: 'bold', fontSize: 60 }}>{score}</span> :
                    <span style={{ color: 'green', fontWeight: 'bold', fontSize: 60 }}>{score}</span>}
            </div>
        )   
    }   

    function message(score) {
        return (
            <div>
                {(score < 670) ? 
                    <span style={{color: 'red'}}>
                        Get your score up to feed your Tamagotchi!</span>:
                    <span style={{color: 'navy'}}>
                        Amazing job! Your Tamagotchi is happy!</span>}    
            </div>
        )
    }

    const [img,newImg] = useState(normalCat)   
    function catPic(score) { //hook
        {(score < 670) ?
            newImg(img => sadCat):
            newImg(img => happyCat)
        }
    }

    function linkMe() {
        <Link to ={{pathname: "https://www.capitalone.com/learn-grow/money-management/improve-credit-score/"}} target="_blank" />
    
    }

    return (
        <><><div>
            <label className='score'>Your score is... {displayScore(score)}
                <br />{message(score)}</label>
            <button onClick={linkMe()} className='helpMe'>
                Read about some recommendations here!</button>:
        </div><div>
            {score < 670 && <img src={sadCat} alt="image" className="sad-cat" width="200" height="200" />}
        </div></><div>
            {score >= 670 && <img src={happyCat} alt="image" className="happy-cat" width="200" height="200" />}
        </div></>
    )
}

export default CreditScore