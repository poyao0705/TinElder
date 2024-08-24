import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCalendar } from 'react-icons/fa'; // Import icons from react-icons
import './NavBar.css'; // Ensure this is the correct CSS file name

const NavBarJ = () => {
  return (
    <nav className="navbar">
      <Link to="/home" className="nav-link">
        <div className="nav-item">
          <FaHome size={24} />
          <span className="nav-text">Home</span>
        </div>
      </Link>
      <Link to="/myEvent" className="nav-link">
        <div className="nav-item">
          <FaCalendar size={24} />
          <span className="nav-text">My Events</span>
        </div>
      </Link>
    </nav>
  );
};

export default NavBarJ;
