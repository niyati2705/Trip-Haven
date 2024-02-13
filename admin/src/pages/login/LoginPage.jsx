import "./login.css";
import {useContext, useState} from 'react';
import { AuthContext } from "../../context/authContext";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = ()=> {
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
    try{ //blackb
        // const headers = {
        //     "Content-Type": "application/json",
        //     Authorization: `Basic ${btoa(`${credentials.username}:${credentials.password}`)}`,
        //   };
        //?
        // const res = await axios.post("/auth/login", {}, {headers})
        //admin condition success
        const res = await axios.post("/auth/login", credentials);
        if(res.data.isAdmin){
            dispatch({type:"LOGIN_SUCCESS", payload: res.data.details}); 
            navigate("/")
            }
        else{ //admin condition fails
                dispatch({type:"LOGIN_FAILURE", payload:{message: "You are not allowed"}})
            }

        }catch(err){
        dispatch({type:"LOGIN_FAILURE", payload:err.response.data})
    }
    }

    // console.log(user);


  return (
    <div className="login">
        <div className="lContainer">

            <input type="text" placeholder="username" onChange={handleChange}
            id="username" className="LInput" maxLength={20} />

            <input type="password" placeholder="password" onChange={handleChange}
            id="password" className="LInput" maxLength={20} />

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

// In this example, the fetch API is being used to send the credentials in the body of the request as a URL-encoded string. This can help reduce the size of the request body and prevent the "Request Header Fields Too Large" error.Note that this method requires the credentials to be base64-encoded, which is why the btoa function is used to encode the username and password.



