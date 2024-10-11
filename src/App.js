import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
          <Route path="/Group_01-WebTecnology_Project/" element={<Home />} />
          <Route path="/Group_01-WebTecnology_Project/content" element={<Content />} />
          <Route path="/Group_01-WebTecnology_Project/taxonomy" element={<Taxonomy />} />
          <Route path="/Group_01-WebTecnology_Project/team" element={<Team />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
