// import React from 'react';
import './TopBar.css';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {

  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/home'); 
};

  return (
    <div className="topBar">
      <img 
        src='src/images/image.png' 
        className="topBarImage" 
        alt="Image"
        onClick={handleGoHome}
      />
      <img 
        src='src/images/hamburger.png' 
        className="topBarHamburger" 
        alt="Hamburger Menu"
      />
    </div>
  );
}
export default TopBar;