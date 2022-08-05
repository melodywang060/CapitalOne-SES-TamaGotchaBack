import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react'
import myGif from './pinkgotchi.webp';
import c1logo from './c1logo.png';
import Header from './Header';
import Footer from './Footer';
import './Home.css';

function Home() {
  return (
    <div className='Home'> 
        <div className='headerlinks'>
            <Header/>
        </div>

        <div className='space'> </div>
        <div className = 'img'>
            <img class="myGif" src={myGif} />
        </div>

        <div className='space'> </div>

        <div className="footerlinks">
        <Footer/> 
        </div>
        <img class="c1logo" src={c1logo} />
    </div>

  );
}

export default Home;
