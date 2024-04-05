import "./home.css";
import Sidebar from "../../components/sidebar/SidebarComp";
import Navbar from "../../components/navbar/NavbarComp";
import people from "../../components/assets/people.jpg";
import hotel from "../../components/assets/hotel.jpg";
import room from "../../components/assets/room.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          <h2 className="welcome">Welcome!</h2>
          <div className="elements">
            <div className="elementItem">
              <img src={people} className="image" alt="people" />
              
              <Link to="/users" style={{ textDecoration: "none" }}>
                <button className="button">View/Edit</button>
              </Link>
            </div>
            <div className="elementItem">
              <img src={hotel} className="image" alt="hotel" />
              <Link to="/hotels" style={{ textDecoration: "none" }}>
                <button className="button">View/Edit</button>
              </Link>
            </div>
            <div className="elementItem">
              <img src={room} className="image" alt="room" />
              <Link to="/rooms" style={{ textDecoration: "none" }}>
                <button className="button">View/Edit</button>
              </Link>
            </div>
        </div>
    </div>
    </div>
  )
}
export default Home;
