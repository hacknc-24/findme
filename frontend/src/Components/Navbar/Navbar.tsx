import './style.css'

const Navbar = () => {
  return (
    <>
    <div className='navbarContainer'>
     <div className='navbarList' style={{width:"45%"}}>
      <ul style={{width:"35%"}}>
        <li>Home</li>
        <li>Chats</li>
        <li>Profile</li>
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