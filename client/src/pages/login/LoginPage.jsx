import "./login.css";
import {useContext, useState} from 'react';
import { AuthContext } from "../../context/authContext";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = ({role})=> {
    //create credentials
    const[credentials, setCredentials]=useState({
        username: undefined,
        password: undefined,
    });
    
    const{loading, error, dispatch} = useContext(AuthContext);

    const navigate = useNavigate()

    const handleChange=(e)=>{
    //set state, return previous value and credential name
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
    

    //async; bec making api req
    const handleLogin= async (e)=>{
    //prevent refreshing page
    e.preventDefault();
    //not passing payload; it onlu updates loading state
    dispatch({type:"LOGIN_START"})
    try{ //?
        const res = await axios.post("/auth/login", credentials, role);
        dispatch({type:"LOGIN_SUCCESS", payload: res.data.details});
        navigate("/")
    }catch(err){
        dispatch({type:"LOGIN_FAILURE", payload:err.response.data})
    }
    }

    // console.log(user);


  return (
    <div className="login">
        <div className="lContainer">

            <h1> TripHaven</h1>

            <input type="text" placeholder="username" onChange={handleChange}
            id="username" className="LInput" />

            <input type="password" placeholder="password" onChange={handleChange}
            id="password" className="LInput" />

            <button disabled={loading} onClick={handleLogin}className="lButton">Login</button>
            {error &&
                <span>
                    {error.message}
                </span>
            }
        </div>
    </div>
   )
 };
export default Login;
