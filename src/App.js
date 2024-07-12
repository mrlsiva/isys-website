import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './common/header/Header.js';
import Footer from './common/footer/Footer.js';
import HomePage from './component/pages/HomePage.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './component/about/About.js';
import Career from './component/career/Career.js';
import Contact from './component/contact/Contact.js';
import Services from './component/services/Services.js';

function App() {
  return (
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<About />} />
            <Route path="/Career" element={<Career />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Service" element={<Services />} />
          </Routes>
        </main>
        <Footer />
      </div>
  );
}

export default App;
