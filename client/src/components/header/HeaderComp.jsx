// import "./header.css"
// import { DateRange } from 'react-date-range';
// import React,{useContext, useState} from 'react';
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import { faBed,  
//   faCalendarDays,
//   faCar,
//   faPerson,
//   faPlane,
//   faTaxi,} from '@fortawesome/free-solid-svg-icons'

// import 'react-date-range/dist/styles.css'; // main css file
// import 'react-date-range/dist/theme/default.css'; // theme css file
// import {format} from "date-fns";
// import { useNavigate } from "react-router-dom";
// import {SearchContext} from "../../context/searchContext.js";
// import { AuthContext } from "../../context/authContext";
// import { searchHotels } from "../../../../server/api.js";

// const Header = ({type}) => {
//   const [destination, setDestination] = useState("");
//   const[openDate, setOpenDate]= useState(false);
//   const [dates, setDates] = useState([
//     {
//       startDate: new Date(),
//       endDate: new Date(),
//       key: 'selection'
//     },
//   ]);
//   // const [dates, setDates] = useState([]);

//   const[openOptions, setOpenOptions]= useState(false);
//   const[options, setOptions] = useState({
//     adult:1,
//     children:0,
//     room:1,
//   });

//   const navigate = useNavigate();

//   const handleOption=(name, operation)=>{
//     setOptions(prev=>{return{
//       ...prev,[name]:operation === "inc" ? options[name] + 1 : options[name]-1,
//     };
//   });
//   };

//   const {dispatch} = useContext(SearchContext);
//   const{user} = useContext(AuthContext);

//   const handleSearch=()=>{
//     const queryDates = { ...dates };
//     const query = {
//       destination,
//       checkin_date: format(queryDates[0].startDate, 'yyyy-MM-dd'),
//       checkout_date: format(queryDates[0].endDate, 'yyyy-MM-dd'),
//       adults: options.adult,
//       children: options.children,
//       rooms: options.room,
//     };
//     searchHotels(query).then((data) => {
//       dispatch({ type: "NEW_SEARCH", payload: data})
//       navigate('/hotels', { state: query},);
//     });
//   }

//     // dispatch({ type: "NEW_SEARCH", payload: query });
//     // navigate('/hotels', { state: query });
  
//     // dispatch({type:"NEW_SEARCH",payload:{destination,dates,options}})
//     // navigate("./hotels", {state:{destination,dates,options }})
//   };

//   return (
//     <div className="header">
//       <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
//       <div className="headerList">
//         <div className="headerListItem active">
//         <FontAwesomeIcon icon={faBed} />
//         <span>Stays</span>
//         </div>
//       <div className="headerListItem">
//             <FontAwesomeIcon icon={faPlane} />
//             <span>Flights</span>
//         </div>
//       <div className="headerListItem">
//             <FontAwesomeIcon icon={faCar} />
//             <span>Car rentals</span>
//         </div>
//       <div className="headerListItem">
//             <FontAwesomeIcon icon={faBed} />
//             <span>Attractions</span>
//         </div>
//       <div className="headerListItem">
//             <FontAwesomeIcon icon={faTaxi} />
//             <span>Airport taxis</span>
//         </div>
//      </div>
//    { type!=="list" && // true for homepage, not otherwise
//     <>
//     <h1 className="headerTitle">Your Sanctuary Awaits: Book Your Perfect Escape with Trip Haven!</h1>
//      <p className="headerDesc">
//      Embark on a journey to your personal sanctuary with Trip Haven, where every stay is a perfect escape. Discover tranquility, adventure, and unparalleled comfort in the destination of your dreams
//     </p>
//     { !user && <button className="headerBtn">Sign in / Register</button>}
//     <div className="headerSearch">

//       < div className="headerSearchItem">
//       <FontAwesomeIcon icon={faBed} className="headerIcon"/>
//         <input type="text" placeholder="Where are you going?" className="headerSearchInput"
//         onChange ={e => setDestination(e.target.value)}/>
//       </div>
//       <div className="headerSearchItem">
//       <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
      
//       <span onClick={()=>setOpenDate(!openDate)}className="headerSearchText">
//       {`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(dates[0].endDate, "dd/MM/yyyy")} `}
//       </span>
//       {openDate && <DateRange
//         editableDateInputs={true}
//         onChange={item => setDates([item.selection])}
//         moveRangeOnFirstSelection={false}
//         ranges={dates}
//         className="date"
//         minDate={new Date()}
//       />}

//       </div>
    
//       <div className="headerSearchItem">
//       <FontAwesomeIcon icon={faPerson} className="headerIcon" />
//       <span 
//       onClick={()=>setOpenOptions(!openOptions)}
//       className="headerSearchText">
//             {`${options.adult} Adult ~ ${options.children} Children ~ ${options.room} Room`}
//       </span>
//       { openOptions && <div className="options">
//         <div className="optionItem">
//           <span className="optionText">Adult</span>
//           <div className="optionCounter">
//             <button 
//             disabled={options.adult <= 1}
//             className="optionCounterButton"
//             onClick={()=>handleOption("adult","dec")}>
//               -</button>
//             <span className="optionCounterNumber">{options.adult}</span>

//             <button className="optionCounterButton"
//             onClick={()=>handleOption("adult","inc")}>
//               +</button>
//           </div>
//         </div>

//         <div className="optionItem">
//           <span className="optionText">Children</span>
//           <div className="optionCounter">
//             <button 
//             disabled={options.children <= 0}
//             className="optionCounterButton"
//             onClick={()=>handleOption("children","dec")}>-</button>
//             <span className="optionCounterNumber">{options.children}</span>
//             <button className="optionCounterButton"
//             onClick={()=>handleOption("children","inc")}>+</button>
//           </div>
//         </div>

//         <div className="optionItem">
//           <span className="optionText">Room</span>
//           <div className="optionCounter">
//             <button 
//             disabled={options.room <= 1}
//             className="optionCounterButton"
//             onClick={()=>handleOption("room","dec")}>-</button>
//             <span className="optionCounterNumber">{options.room}</span>
//             <button className="optionCounterButton"
//             onClick={()=>handleOption("room","inc")}>+</button>
//           </div>
//        </div>
//       </div>}
//       </div>

//       <div className="headerSearchItem">
//         <button className="headerBtn" onClick={handleSearch}>
//           Search
//         </button>
//         </div>
//       </div> </> }
//     </div>
//   </div>
//   )
// }

import "./header.css"
import { DateRange } from 'react-date-range';
import React,{useContext, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBed,  
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,} from '@fortawesome/free-solid-svg-icons'

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns";
import { useNavigate } from "react-router-dom";

import {SearchContext} from "../../context/searchContext.js";
import { AuthContext } from "../../context/authContext";

import axios from "axios";

const Header = ({type}) => {
  const [destination, setDestination] = useState("");
  const[openDate, setOpenDate]= useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const[openOptions, setOpenOptions]= useState(false);
  const[options, setOptions] = useState({
    adult:1,
    children:0,
    room:1,
  });

  const navigate = useNavigate();

  const handleOption=(name, operation)=>{
    setOptions(prev=>{return{
      ...prev,[name]:operation === "inc" ? options[name] + 1 : options[name]-1,
    };
  });
  };

  const {dispatch} = useContext(SearchContext);
  const{user} = useContext(AuthContext);

  // const handleSearch=()=>{
  //   dispatch({type:"NEW_SEARCH",payload:{destination,dates,options}})
  //   navigate("./hotels", {state:{destination,dates,options }})
  // };
  // const handleSearch = async () => {
  //   dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
  
  //   try {
  //     const response = await fetch("YOUR_RAPIDAPI_ENDPOINT", {
  //       method: "GET",
  //       headers: {
  //         "x-rapidapi-key": "YOUR_RAPIDAPI_KEY",
  //         "x-rapidapi-host": "YOUR_RAPIDAPI_HOST",
  //       },
  //     });
  const handleSearch = async () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
  
    const requestOptions = {
      method: 'GET',
      url: 'https://booking-com13.p.rapidapi.com/stays/properties/list-v2',
      params: {
        location: destination,
        checkin_date: dates[0], // Assuming the first date in the dates array is the check-in date
        checkout_date: dates[1], // Assuming the second date in the dates array is the check-out date
        language_code: 'en-us',
        currency_code: 'USD',
        adults: options.adult,
        children: options.children,
        rooms: options.room,
      },
      headers: {
        'X-RapidAPI-Key': 'fd980ec2ecmsh4a8d24bfd06ef86p1def4cjsn82c6ae483be0',
        'X-RapidAPI-Host': 'booking-com13.p.rapidapi.com'
      }
    };
  
    try {
      const response = await axios.request(requestOptions);
      dispatch({ type: "SET_SEARCH_RESULTS", payload: response.data });
      navigate("./hotels", { state: { destination, dates, options } });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
    

  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
      <div className="headerList">
        <div className="headerListItem active">
        <FontAwesomeIcon icon={faBed} />
        <span>Stays</span>
        </div>
      <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
        </div>
      <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
        </div>
      <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
        </div>
      <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
        </div>
     </div>
   { type!=="list" && // true for homepage, not otherwise
    <>
    <h1 className="headerTitle">Your Sanctuary Awaits: Book Your Perfect Escape with Trip Haven!</h1>
     <p className="headerDesc">
     Embark on a journey to your personal sanctuary with Trip Haven, where every stay is a perfect escape. Discover tranquility, adventure, and unparalleled comfort in the destination of your dreams
    </p>
    { !user && <button className="headerBtn">Sign in / Register</button>}
    <div className="headerSearch">

      <div className="headerSearchItem">
      <FontAwesomeIcon icon={faBed} className="headerIcon"/>
        <input type="text" placeholder="Where are you going?" className="headerSearchInput"
        onChange ={e => setDestination(e.target.value)}/>
      </div>

      <div className="headerSearchItem">
      <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
      
      <span onClick={()=>setOpenDate(!openDate)}className="headerSearchText">
      {`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(dates[0].endDate, "dd/MM/yyyy")} `}
      </span>
      {openDate && <DateRange
        editableDateInputs={true}
        onChange={item => setDates([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={dates}
        className="date"
        minDate={new Date()}
      />}

      </div>
    
      <div className="headerSearchItem">
      <FontAwesomeIcon icon={faPerson} className="headerIcon" />
      <span 
      onClick={()=>setOpenOptions(!openOptions)}
      className="headerSearchText">
            {`${options.adult} Adult ~ ${options.children} Children ~ ${options.room} Room`}
      </span>
      { openOptions && <div className="options">
        <div className="optionItem">
          <span className="optionText">Adult</span>
          <div className="optionCounter">
            <button 
            disabled={options.adult <= 1}
            className="optionCounterButton"
            onClick={()=>handleOption("adult","dec")}>
              -</button>
            <span className="optionCounterNumber">{options.adult}</span>

            <button className="optionCounterButton"
            onClick={()=>handleOption("adult","inc")}>
              +</button>
          </div>
        </div>

        <div className="optionItem">
          <span className="optionText">Children</span>
          <div className="optionCounter">
            <button 
            disabled={options.children <= 0}
            className="optionCounterButton"
            onClick={()=>handleOption("children","dec")}>-</button>
            <span className="optionCounterNumber">{options.children}</span>
            <button className="optionCounterButton"
            onClick={()=>handleOption("children","inc")}>+</button>
          </div>
        </div>

        <div className="optionItem">
          <span className="optionText">Room</span>
          <div className="optionCounter">
            <button 
            disabled={options.room <= 1}
            className="optionCounterButton"
            onClick={()=>handleOption("room","dec")}>-</button>
            <span className="optionCounterNumber">{options.room}</span>
            <button className="optionCounterButton"
            onClick={()=>handleOption("room","inc")}>+</button>
          </div>
       </div>
      </div>}
      </div>

      <div className="headerSearchItem">
        <button className="headerBtn" onClick={handleSearch}>
          Search
        </button>
      </div>

      </div> </> }
    </div>
  </div>
  )
}

export default Header



// export default Header


// explain this code thoroughly


// This is a React component that serves as the header for a travel booking website. It has a responsive design, with different layouts for the homepage and other pages. The component uses various libraries and technologies including FontAwesome for icons, react-date-range for date range selection, and react-router-dom for navigation. It also uses custom context providers (SearchContext and AuthContext) for managing application state.

// The Header component receives a prop "type" that determines the layout of the header. If type is "list", the header displays a list of travel services (stays, flights, car rentals, etc.) in a horizontal layout. If type is not "list", the header displays a search form for booking stays, with input fields for destination, date range, and guest options (adults, children, and rooms).

// The component uses local state to manage the values of the input fields and the visibility of optional inputs (date range picker and guest options). The state is initialized with default values, and the user can interact with the input fields to update the state.

// The component also uses context to access the application state and dispatch actions to update it. The SearchContext provides a dispatch method that the component uses to trigger a search with the current input values. The AuthContext provides the user object, which the component uses to conditionally render a sign-in/register button.

// When the user submits the search form, the component dispatches a NEW_SEARCH action with the current input values and navigates to the hotels page with the input values as state.

// The component uses CSS modules for styling and follows best practices for component composition and state management.
