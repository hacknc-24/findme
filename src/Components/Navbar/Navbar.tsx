import './style.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleRedirectProfile = () => {
    navigate('/profile'); 
  };

  return (
    <div className='navbarContainer'>
      <div className='navbarList' style={{ width: "100%" }}>
        <img 
          src='src/images/loglo.png' 
          style={{ height: "100%", marginLeft: "3%", cursor: "pointer" }} 
          onClick={handleRedirectProfile} 
          alt="Logo"
        />
        <img 
          src='src/images/image.png' 
          style={{ height: "100%", marginRight: "2%" }} 
          alt="Image"
        />
        <img 
          src='src/images/hamburger.png' 
          style={{ height: "40%", marginRight: "5%" }} 
          alt="Hamburger Menu"
        />
      </div>
    </div>
  );
}

export default Navbar;