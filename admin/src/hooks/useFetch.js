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