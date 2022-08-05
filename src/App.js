import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom'
import Login from './components/Login';
import Budget from './components/Budget';
import Home from './components/Home';
import { HelpPage } from './components/Help';
import EarnPoints from './components/EarnPoints';

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Login/>}> </Route>
      <Route path="/budget" element={<Budget/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/earnpoints" element={<EarnPoints/>}></Route>
      <Route path="/help" element={<HelpPage/>}></Route>


      </Routes>
    </Router>
    </>

  );
}

export default App;
