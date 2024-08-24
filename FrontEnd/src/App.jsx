import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainContent from './components/MainContent';
import LoginPage from './components/LoginPage';
<<<<<<< HEAD
import HomePage from './components/HomePage'; 
import Music from './components/music';  // Import Music component
import MyEvents from './components/MyEvents';
import './index.css';
=======
import RegisterPage from './components/RegisterPage';
import MyEvents from './components/MyEvents';
>>>>>>> 9de041e1e2b91af6e88ac63848429d520b294ad5

function App() {
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
          <Route path="/myEvent" element={<MyEvents />} />
        </Routes>
      </Router>
    </div>
=======
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/myEvent" element={<MyEvents />} />
      </Routes>
    </Router>
>>>>>>> 9de041e1e2b91af6e88ac63848429d520b294ad5
  );
}

export default App;