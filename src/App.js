import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import FeaturesPage from './pages/FeaturesPage/FeaturesPage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import WhatsAppIcon from './components/WhatsAppIcon/WhatsAppIcon'; // Import the component
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
      <WhatsAppIcon /> {/* Render the component */}
    </Router>
  );
}

export default App;