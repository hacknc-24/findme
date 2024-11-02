// import React from 'react';
import './TopBar.css';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {

  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/home'); // Navigate to the home page
};

  return (
    <div className="top-bar">
      <button className="menu-button" onClick={handleGoHome}>Menu</button>
      <div className="logo">Logo</div>
    </div>
  );
};

export default TopBar;