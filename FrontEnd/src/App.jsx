import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainContent from './components/MainContent';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage'; // Import the HomePage component
import './index.css';

const App = () => {
  return (
    <div className="app-background">
      <Router>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />  {/* Add the home route */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;