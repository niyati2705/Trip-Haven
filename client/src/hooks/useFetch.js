import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url)=>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    //when we make api request, loading will be true and after ending req, if data- then fill inside data array and if not- error;true or pass error

    useEffect(() => {
          //whenerver our url changes we will fire this function, 
        const fetchData = async ()=>{
            setLoading(true)
            try{    
                //and make api reqs using axios.get(url)
                const res= await axios.get(url);
                //no err then set data
                setData(res.data);
            }catch(err){
                setError(err);
            }
            setLoading(false);//set again
        };
        fetchData();
    },[]);

    //to re fetch data agin
    const reFetch = async ()=>{
        setLoading(true)
        try{    
            //and make api reqs
            const res= await axios.get(url);
            //no err then set data
            setData(res.data);
        }catch(err){
            setError(err);
        }
    setLoading(false);//set again
    };

    return{data,loading,error,reFetch};
};

export default useFetch;

// This is a custom React hook called useFetch. It is used to make API requests and handle the response data, loading state, and error state. Here's a breakdown of the code:

// The hook imports axios for making HTTP requests and useState and useEffect from React.
// It defines three state variables using the useState hook:
// data: an array to store the response data
// loading: a boolean to track if the request is still in progress
// error: a boolean to track if an error occurred during the request

// The useEffect hook is used to run the fetchData function whenever the url prop changes.
// The fetchData function makes an API request using axios.get(url), sets the loading state to true before making the request, and sets the data state to the response data if the request is successful. If an error occurs during the request, the error state is set to the error object.

// The reFetch function is used to manually refetch the data by making the same API request again. It sets the loading state to true, and then follows the same logic as the fetchData function to either set the data state or the error state.

// The hook returns an object containing the data, loading, error, and reFetch functions, which can be used in the component that consumes this hook.

// This hook makes it easy to manage API requests and handle the response data, loading state, and error state in a consistent way across different components in a React application.
