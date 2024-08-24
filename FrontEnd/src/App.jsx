import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainContent from './components/MainContent';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import MyEvents from './components/MyEvents';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/myEvent" element={<MyEvents />} />
      </Routes>
    </Router>
  );
}

export default App;