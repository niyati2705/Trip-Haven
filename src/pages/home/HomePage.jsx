import "./home.css";
import Navbar from "../../components/navbar/NavbarComp";
import Header from "../../components/header/HeaderComp";
import Featured from "../../components/featured/FeaturedComp";
import PropertyList from "../../components/propertyList/propertyListComp";
import MailList from "../../components/mailList/mailListComp";
import Footer from "../../components/footer/FooterComp";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle"> Browse by Property Type</h1>
        <PropertyList/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
