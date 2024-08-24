import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import MainContent from './components/MainContent';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage'; 
import Music from './components/music';
import Sport from './components/sport';
import MyEvents from './components/MyEvents';
import Football from './components/Football';
import Basketball from './components/Basketball';
import Swimming from './components/Swimming';
import Tennis from './components/Tennis';
import CookingPage from './components/CookingPage';
import GardenPage from './components/GardenPage';
import NavBarJ from './components/NavBarJ'; // Import NavBarJ component

const App = () => {
  const location = useLocation();

  return (
    <div className="app-background">
      {/* Conditionally render NavBarJ based on the current location */}
      {location.pathname !== '/login' && <NavBarJ />} 
      <Routes>
      <Route path="/" element={<MainContent />} />
        <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect root to login page */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/music" element={<Music />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/myEvent" element={<MyEvents />} />
        <Route path="/football" element={<Football />} />
        <Route path="/basketball" element={<Basketball />} />
        <Route path="/swimming" element={<Swimming />} />
        <Route path="/tennis" element={<Tennis />} />
        <Route path="/cooking" element={<CookingPage />} />
        <Route path="/gardening" element={<GardenPage />} />
      </Routes>
    </div>
  );
};

// Wrapping App with Router to access useLocation
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
