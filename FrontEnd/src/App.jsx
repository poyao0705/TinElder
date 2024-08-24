import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainContent from './components/MainContent';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
<<<<<<< HEAD
import HomePage from './components/HomePage'; 
import Music from './components/music';  // Import Music component
import Sport from './components/sport';
import MyEvents from './components/MyEvents';
import './index.css';

function App() {
const App = () => {
  return (
<<<<<<< HEAD
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
        </Routes>
      </Router>
    </div>
  );
};

export default App;