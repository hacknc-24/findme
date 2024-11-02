import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./Pages/Auth/Auth";
import Profile from "./Pages/Profile/Profile.tsx";
import Dashboard from "./Pages/Dashboard/Dashboard.tsx";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
