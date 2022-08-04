import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom'
import Login from './components/Login';
import Budget from './components/Budget';
import Home from './components/Home';

import { HelpPage } from './components/Help';

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route exact path="/" element={<Login/>}> </Route>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/Budget" element={<Budget/>}></Route>
      <Route path="/Help" element={<HelpPage/>}></Route>
      </Routes>
    </Router>
    </>

  );
}

export default App;
