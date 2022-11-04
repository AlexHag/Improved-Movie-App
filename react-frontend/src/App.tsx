import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Movies from './components/Movies';
import Login from './components/Login';

import './App.css';
import './css/navigation.css'

function App() {
  return (
    <div className="App">

      <BrowserRouter> 
        <div className="top-header">
            <h1><Link to="/">SRC</Link></h1>
            <h1><Link to="/movies">MOVIES</Link></h1>
            <h1><Link to="/about">ABOUT</Link></h1>
            <h1><Link to="/login">LOGIN</Link></h1>
        </div>
        <Routes> 
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/about" element={<About />}></Route> 
          <Route path="/login" element={<Login />}></Route>
        </Routes>  
      </BrowserRouter> 
    </div>
  );
}

export default App;
