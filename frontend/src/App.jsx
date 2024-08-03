// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Signup/Login';
import Register from './pages/Login/Signup/Register';
import Frontpage from './pages/Frontpage';
import ResultAnalysis from './pages/ResultAnalysis';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Layout from '../Layout'; 

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default */}
        <Route path="/" element={<Frontpage />} />
        {/* Login */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Post login */}
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/result" element={<ResultAnalysis />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
