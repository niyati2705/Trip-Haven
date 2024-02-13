import "./home.css";
import Sidebar from "../../components/sidebar/SidebarComp";
import Navbar from "../../components/navbar/NavbarComp";
import { Dashboard } from "@mui/icons-material";
// import Widget from "../../components/widget/Widget";
// import Featured from "../../components/featured/Featured";
// import Chart from "../../components/chart/Chart";
// import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
        <Sidebar/>
        <div className="homeContainer"></div>
        <Navbar/>
        <Dashboard/>
    </div>
  )
}

export default Home;
