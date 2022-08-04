import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Budget from './components/Budget';


function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Login/>}> </Route>
      <Route path="/Budget" element={<Budget/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
