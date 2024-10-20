import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Containers/Navbar';
import Home from './Containers/Home';
import Content from './Containers/Content';
import Taxonomy from './Containers/Taxonomy';
import Team from './Containers/Team';
import Footer from './Containers/Footer';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div style={{ flex: 1 }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/content" element={<Content />} />
            <Route path="/taxonomy" element={<Taxonomy />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
