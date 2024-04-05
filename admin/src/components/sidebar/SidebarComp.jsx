import "./sidebar.scss";

import { Icon, Dashboard as DashboardIcon, PersonOutline as PersonOutlineIcon, LocalShipping as LocalShippingIcon, CreditCard as CreditCardIcon, Store as StoreIcon, InsertChart as InsertChartIcon, SettingsApplications as SettingsApplicationsIcon, ExitToApp as ExitToAppIcon, NotificationsNone as NotificationsNoneIcon, SettingsSystemDaydreamOutlined as SettingsSystemDaydreamOutlinedIcon, PsychologyOutlined as PsychologyOutlinedIcon, AccountCircleOutlined as AccountCircleOutlinedIcon } from '@mui/icons-material';

import { Link, useNavigate } from "react-router-dom";
// import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Sidebar = () => {
  // const { dispatch } = useContext(DarkModeContext);
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
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">TripHaven Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/hotels" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Hotels</span>
            </li>
          </Link>
          <Link to="/rooms" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Rooms</span>
            </li>
          </Link>
        
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span onClick={handleLogout}>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;