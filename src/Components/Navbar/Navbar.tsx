import './style.css'
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();
  const handleRedirectProfile = () => {
    navigate('/profile'); // Replace '/new-page' with your target path
  };
  return (
    <>
    <div className='navbarContainer'>
     <div className='navbarList' style={{width:"45%"}}>
      <ul style={{width:"35%"}}>
        <li>Home</li>
        <li>lol</li>
        <li onClick={handleRedirectProfile}>Profile</li>
      </ul>
     </div>
     <div className='Logo' style={{width:"55%"}}>
         <h1>FindMe</h1>
     </div>
    </div>
    </>
  )
}

export default Navbar