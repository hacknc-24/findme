import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleRedirectProfile = () => {
    navigate('/profile'); 
  };

  return (
    <div className='navbarContainer'>
      <div className='navbarList' style={{ width: "100%" }}>
        <img 
          src='assets/loglo.png' 
          style={{ height: "100%", marginLeft: "3%", cursor: "pointer" }} 
          onClick={handleRedirectProfile} 
          alt="Logo"
        />
        <img 
          src='assets/image.png' 
          style={{ height: "100%", marginRight: "2%" }} 
          alt="Image"
        />
        <img 
          src='/assets/hamburger.png' 
          style={{ height: "40%", marginRight: "5%" }} 
          alt="Hamburger Menu"
        />
      </div>
    </div>
  );
}

export default Navbar;