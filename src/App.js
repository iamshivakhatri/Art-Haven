import './App.css';
import logo from './logo.png';
import Paintings from './Components/Paintings';
import DetailPainting from './Components/DetailPainting';
import Contact from './Components/Contact';
import About from './Components/About';
import HomePage from './Components/HomePage';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/painting/:id" element={<DetailPainting />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </Router>
  );
}

export default App;
