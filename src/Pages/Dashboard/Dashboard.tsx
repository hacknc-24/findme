import Navbar from "../../Components/Navbar/Navbar"
import './dashboardStyle.css'


const Dashboard = () => {
  const mockUsers = [
    { id: 1, name: 'User 1', description: 'Description for User 1' },
    { id: 2, name: 'User 2', description: 'Description for User 2' },
    { id: 3, name: 'User 3', description: 'Description for User 3' },
    { id: 4, name: 'User 4', description: 'Description for User 4' },
    { id: 5, name: 'User 5', description: 'Description for User 5' },
    { id: 6, name: 'User 6', description: 'Description for User 6' },
    { id: 7, name: 'User 7', description: 'Description for User 7' },
    { id: 8, name: 'User 8', description: 'Description for User 8' },
    { id: 9, name: 'User 9', description: 'Description for User 9' },
    { id: 10, name: 'User 10', description: 'Description for User 10' },
  ];

  const sendLocation = (data: Object) => {
    fetch("", {
      method: "POST",
      headers: {
        "Content-Type"  : "application/json"},
      body: JSON.stringify({
        "data": data
      })
    })
  }
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Latitude:", position.coords.latitude);
          console.log("Longitude:", position.coords.longitude);
          const return_data = {
            "latitude": position.coords.latitude,
            "longitude": position.coords.longitude
          }
          return return_data
        }
      )
    }
  }
  return (
    <>
      <Navbar />
      <div className="dashboardContainer">
        <img src="src\images\boardIdle.png" alt="Idle" className="boardIdle" />
        <p style={{color:"white"}}>See who is in the befriending distance!👀</p>
        <button className="searchingButton">Start Connecting!</button>
      </div>
    </>
  );
};

export default Dashboard;