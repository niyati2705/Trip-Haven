import Sidebar from "../../components/sidebar/SidebarComp"
import Navbar from "../../components/navbar/NavbarComp"
import "./newRoom.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { roomInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const NewRoom = () => {
  const {data,loading,error} = useFetch("/hotels"); //server-rooms- hotelid to create room
  const[info,setInfo] = useState({});
  const[hotelId, setHotelId] = useState(undefined);
  const[rooms,setRooms] = useState([]);

  const handleChange=(e)=>{
    setInfo((prev)=>({...prev,[e.target.id]:e.target.value}))
  }; 

  const handleClick = async (e)=>{
    e.preventDefault();
    //string to array (string to obj since roomInputs; numbers-obj)
    const roomNumbers = rooms.split(",").map((room) => ({ number: room }));
    console.log(roomNumbers);//obj
    try {
      await axios.post(`/rooms/${hotelId}`, { ...info, roomNumbers });
    } catch (err) {
      console.log(err);
    }
  };

  console.log(info)

 
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Room</h1>
        </div>
        <div className="bottom">
          {/* <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="img"
            />
          </div> */}
          <div className="right">
            <form>
              {roomInputs && roomInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input 
                  id={input.id} 
                  type={input.type} 
                  placeholder={input.placeholder}
                  onChange={handleChange} />
                </div>
              ))}

              {/* room numbers,unavailable dates */}
              <div className="formInput">
                  <label>Rooms</label>
                  <textarea 
                  onChange={(e)=>setRooms(e.target.value)}
                  placeholder="give comma between room numbers"/>
                </div>

                {/* hotel options */}
                <div className="formInput">
                  <label>Choose a hotel</label>
                  <select id="hotelId" onChange={(e)=>setHotelId(e.target.value)} >
                    {/* for each hotel; create option */}
                    {loading? "loading":data && data.map(hotel=>(
                      <option key={hotel._id}value={hotel._id}>{hotel.name} </option>
                    ))
                    }
                  </select>
                 </div>
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRoom;