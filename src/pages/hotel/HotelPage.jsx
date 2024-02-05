import "./hotel.css"

import Navbar from "../../components/navbar/NavbarComp";
import Header from "../../components/header/HeaderComp";
import MailList from "../../components/mailList/mailListComp";
import Footer from "../../components/footer/FooterComp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const[open, setOpen] = useState(false);
  const photos =[
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/328654475.jpg?k=532aaf4dc8f7405b1fcf6fbb4d31ed876053ad2f05d779b4b38a4d5c80969d31&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/328655787.jpg?k=d3712dcd0900c87d59b4e2ed3421bb525b17d8cc8960bfa46fe9f3df423b11e1&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/328653473.jpg?k=1c55854331f9fd0febb4b11fbfb26f534ec1b4d45f4e1fe629f0aee1c8ad596d&o=&hp=1",
      
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/276786420.jpg?k=a549c03c8e6d9cf6319699ef04632a17e08b81427df256eb3b53d1fd8d318a19&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/328653522.jpg?k=136fda7d70fe335e18b976184f1bf12e5d8c9c175f3bbe1f48cd4f8ae44fc305&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/328654107.jpg?k=c1fb88599764a23cee46a02a39916588179efdef0d61c914bd5a20107f2cb108&o=&hp=1",
    },
  ]

  const handleOpen = (i)=>{
    setSlideNumber(i);
    setOpen(true);
  }

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber)
  };


  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        {open && 
        <div className="slider">
           <FontAwesomeIcon icon={faCircleXmark} className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow"
              onClick={() => handleMove("r")}
            />

          
        </div>}
        <div className="hotelWrapper">
        <button className="bookNow">Reserve</button>
        <h1 className="title">Royal Castle</h1>
        <div className="hotelAddress">
            <FontAwesomeIcon icon = {faLocationDot}/>
            <span>VPO Kasol, Disst.  Kullu, Himachal Pradesh,175105 Kasol, India</span>
        </div>
        {/* <span className="hotelDistance">
            Excellent Location - 500m from center
        </span> */}

        <div className="hotelImages">
            {photos.map((photo,i)=>(
               <div className="hotelImgWrapper">
                <img 
                onClick={()=>handleOpen(i)}
                src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
        </div>

        <div className="hotelDetails">
          <div className="hotelDetailsText">
            <h1 className="hotelTitle">Title</h1>
            <p className="hotelDesc">
            Royal Castle features a fitness centre, garden, a terrace and restaurant in Kasol. With a bar, the 4-star hotel has air-conditioned rooms with free WiFi, each with a private bathroom. There is free private parking and the property provides paid airport shuttle service.
            The Royal Castle is a luxury hotel located in the heart of Kasol town. 
            </p>
          </div>
          <div className="hotelDetailsPrice">
            <h1>Perfect for a 9-night stay!</h1>
            <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
            </span>
            <h2>
            <b>$945</b> (9 nights)
            </h2>
            <button>Reserve or Book Now!</button>
          </div>
        </div>
        </div>
        <MailList/>
    <Footer/>
      </div>
  </div>
  )
}
export default Hotel
