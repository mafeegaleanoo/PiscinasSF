import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<div className="container" style={{padding: '10rem 2rem'}}><h1 className="section-title">Nuestra Historia</h1></div>} />
      <Route path="/contact" element={<div className="container" style={{padding: '10rem 2rem'}}><h1 className="section-title">Contáctanos</h1></div>} />
      <Route path="/cpo" element={<div className="container" style={{padding: '10rem 2rem'}}><h1 className="section-title">Certificación <span>CPO</span></h1></div>} />
      <Route path="/cpi" element={<div className="container" style={{padding: '10rem 2rem'}}><h1 className="section-title">Certificación <span>CPI</span></h1></div>} />
      <Route path="/academia" element={<div className="container" style={{padding: '10rem 2rem'}}><h1 className="section-title"><span>Academia</span></h1></div>} />
    </Routes>
  );
}

export default App;
