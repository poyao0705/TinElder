import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainContent from './components/MainContent';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage'; 
import Music from './components/music';  // Import Music component
import Sport from './components/sport';
import MyEvents from './components/MyEvents';
import Football from './components/Football';
import Basketball from './components/Basketball';
import Swimming from './components/Swimming';
import Tennis from './components/Tennis';
import CookingPage from './components/CookingPage';
import GardenPage from './components/GardenPage';

const App = () => {
  return (
    <div className="app-background">
      <Router>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />  {/* Add the home route */}
          <Route path="/music" element={<Music />} />  {/* Add Music route */}
          <Route path="/sport" element={<Sport />} />
          <Route path="/myEvent" element={<MyEvents />} />
          <Route path="/football" element={<Football />} />
          <Route path="/basketball" element={<Basketball />} />
          <Route path="/swimming" element={<Swimming />} />
          <Route path="/tennis" element={<Tennis />} />
          <Route path="/cooking" element={<CookingPage />} />
          <Route path="/gardening" element={<GardenPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;