import "./reserve.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleXmark,} from "@fortawesome/free-solid-svg-icons";
import useFetch  from "../../hooks/useFetch";
import { useState, useContext }from "react";
import { useNavigate } from "react-router-dom";
import {SearchContext} from "../../context/searchContext";
import axios from "axios";

const Reserve = ({setOpen,hotelId}) => {

    const {data, loading, error} = useFetch(`/hotels/room/${hotelId}`);
    // console.log(data); 

    const [selectedRooms, setSelectedRooms]= useState([]);

    const {dates} = useContext(SearchContext);

    const navigate = useNavigate();

    //alll dates of the range
    const getDatesInRange = (startDate,endDate)=>{

        const start = new Date(startDate);
        const end = new Date(endDate);
        //same as starting date, inc date unit <=ending date
        const date = new Date(start.getTime());
        let list = []
        while(date <= end){
            //create a list and push dates
            //easier to compare dates w time stamps bec all dates not same
            list.push(new Date(date).getTime());
            //set incremented date
            date.setDate(date.getDate()+1);
        }
        return list;
    };

    const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate);

    const isAvailable = (roomNumber)=>{
        //check if unavailable dates include any of the allDates; yes-disbale
        //some to check whether it includes some of them or not
        const isFound = roomNumber.unavailableDates.some(date=>
            allDates.includes(new Date(date).getTime())
        )
        return !isFound;
    }

    const handleSelect=(e)=>{
        const checked = e.target.checked;
        //value will be id
        const value= e.target.value;
        //se state
        setSelectedRooms(
            //take prev rooms and add one more id(value)
            checked ? [...selectedRooms, value]
            //filter previous selected and pull room iod from selected rooms, for each item if item doesnt equal to value
            : selectedRooms.filter((item)=>
            item !== value)
        )
    }

    const handleClick = async()=>{
        try {
            await Promise.all(selectedRooms.map(roomId=>{
                const res =axios.put(`/rooms/availability/${roomId}`,
                {dates: allDates}
                 );
                return res.data;
            }))
            setOpen(false);
            navigate("/");
        }catch(err) {
            
        }
    }

    console.log(selectedRooms);

  return (
    <div className="reserve">
    <div className="rContainer">
      <FontAwesomeIcon
        icon={faCircleXmark}
        className="rClose"
        onClick={() => setOpen(false)}
      />
      <span>Select your rooms:</span>
      {data.map((item) => (
        <div className="rItem" key={item._id}>
          <div className="rItemInfo">
            <div className="rTitle">{item.title}</div>
            <div className="rDesc">{item.desc}</div>
            <div className="rMax">
              Max people: <b>{item.maxPeople}</b>
            </div>
            <div className="rPrice">Rs.{item.price}</div>
          </div>
          <div className="rSelectRooms">
            {item.roomNumbers.map((roomNumber) => (
              <div className="room">
                <label>{roomNumber.number}</label>
                <input
                  type="checkbox"
                  value={roomNumber._id}
                  onChange={handleSelect}
                  disabled={!isAvailable(roomNumber)}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
      <button onClick={handleClick} className="rButton">
        Reserve Now!
      </button>
    </div>
</div>
  )
}

export default Reserve;
