import Navbar from "../../Components/Navbar/Navbar";
import "./dashboardStyle.css";
import Swal from "sweetalert2";

const Dashboard = () => {
  //   const mockUsers = [
  //     { id: 1, name: 'User 1', description: 'Description for User 1' },
  //     { id: 2, name: 'User 2', description: 'Description for User 2' },
  //     { id: 3, name: 'User 3', description: 'Description for User 3' },
  //     { id: 4, name: 'User 4', description: 'Description for User 4' },
  //     { id: 5, name: 'User 5', description: 'Description for User 5' },
  //     { id: 6, name: 'User 6', description: 'Description for User 6' },
  //     { id: 7, name: 'User 7', description: 'Description for User 7' },
  //     { id: 8, name: 'User 8', description: 'Description for User 8' },
  //     { id: 9, name: 'User 9', description: 'Description for User 9' },
  //     { id: 10, name: 'User 10', description: 'Description for User 10' },
  //   ];

  // const sendLocation = (data: Object) => {
  //   fetch("", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type"  : "application/json"},
  //     body: JSON.stringify({
  //       "data": data
  //     })
  //   })
  // }
  // const getLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         console.log("Latitude:", position.coords.latitude);
  //         console.log("Longitude:", position.coords.longitude);
  //         const return_data = {
  //           "latitude": position.coords.latitude,
  //           "longitude": position.coords.longitude
  //         }
  //         return return_data
  //       }
  //     )
  //   }
  // }


  const showUsersAlert = (users: { id: number; name: string; description: string; image: string }[]) => {
    // Format the users data as HTML content with images
    const userContent = users.map((user: any) => `
      <div style="margin-bottom: 15px;">
        <img src="${user.image}" alt="${user.name}" style="width: 100px; height: auto; border-radius: 5px; margin-bottom: 5px;"><br>
        <strong>ID:</strong> ${user.id}<br>
        <strong>Name:</strong> ${user.name}<br>
        <strong>Interest:</strong> ${user.description}
      </div>
      <hr>
    `).join('');
  
    Swal.fire({
      title: 'Friends List',
      html: userContent,
      icon: 'info',
      width: '500px',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText: 'Close'
    });
  };
  
  const mockUsers = [
    { id: 1, name: 'Andy Nguyen', description: 'Likes Coding like you!', image: 'assets/pexels-anna-nekrashevich-7552313.jpg' },
    { id: 2, name: 'Leonardo Kippy', description: 'Likes Volleyball like you!', image: 'assets/pexels-luizclas-170497-1848565.jpg' },
    { id: 3, name: 'Sarah Devino', description: 'Likes Coding like you!', image: 'assets/pexels-hasibullah-zhowandai-248954-819530.jpg' },
    { id: 4, name: 'Alex Cutliff', description: 'Likes Chess like you!', image: 'assets/pexels-reead-886285.jpg' },
    { id: 5, name: 'Sarah Acapa', description: 'Likes Volleyball', image: 'assets/pexels-olly-837358.jpg' },
    { id: 6, name: 'Son Tsu', description: 'Likes Cars like you!', image: 'assets/pexels-pixabay-39866.jpg' },
  ];
    

  return (
    <>
      <Navbar />
      <div className="dashboardContainer">
        <img
          src='assets/boardIdle.png' 
          alt="Idle"
          className="boardIdle"
        />
        <p style={{ color: "white" }}>
          See who is in the befriending distance!👀
        </p>
        <button className="searchingButton" onClick={() => showUsersAlert(mockUsers)}>Start Connecting!</button>
      </div>
    </>
  );
};

export default Dashboard;
