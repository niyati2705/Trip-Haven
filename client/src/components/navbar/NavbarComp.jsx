import "./navbar.css"
import {Link} from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import {useContext} from 'react';
import { useNavigate } from "react-router-dom";


const Navbar = () => {

  const{user,dispatch} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    //remove user(id) from localstorage
    localStorage.removeItem("user");
  
    // Dispatch the LOGOUT action type
    dispatch({ type: "LOGOUT" });
  
    // Navigate to the login page
    navigate("/login");
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
        <span className="logo">TripHaven</span>
        </Link>
        {user 
        ?  ( <div>
              <span className="welcomeMessage">Welcome, </span>
              <span className="username">{user.username}</span>
              <button className="navButton" onClick={handleLogout}>Logout</button>
              </div>)
        : (<div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div> )}
      </div>
    </div>
  )
}

export default Navbar