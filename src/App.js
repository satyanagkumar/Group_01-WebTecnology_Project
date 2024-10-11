import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Containers/Navbar';
import Home from './Containers/Home';
import Content from './Containers/Content';
import Taxonomy from './Containers/Taxonomy';
import Team from './Containers/Team';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/content" element={<Content />} />
          <Route path="/taxonomy" element={<Taxonomy />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
