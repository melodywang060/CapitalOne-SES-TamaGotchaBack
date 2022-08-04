import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react'
import myGif from './pinkgotchi.webp';
import Header from './Header';
import Footer from './Footer';
import './Home.css';

function Home() {
  return (
    <div className='Home'> 
        <div className='headerlinks'>
            <Header/>
        </div>
        <div className = 'img'>
            <img class="myGif" src={myGif} />
        </div>
        <div className="footerlinks">
        <Footer/> 
        </div>
    </div>
  );
}

export default Home;
