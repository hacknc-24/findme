import Navbar from "../../Components/Navbar/Navbar"
import './dashboardStyle.css'


const Dashboard = () => {
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
        <div className="block">
            <h1>Who's nearby?</h1>
            <button className="connectionButton" onClick={getLocation}>Start connecting...</button>
            <div className="usersLayout">
                <div className="firstRow">
                <ul className="usersList">
                    <li>User 1</li>
                    <li>User 2</li>
                    <li>User 3</li>
                    <li>User 4</li>
                    <li>User 5</li>
                </ul>
                <button className="loadingButton">Load more...</button>
                </div>
                <div className="SecondRow">
                     <button className="refreshButton">Refresh</button>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard