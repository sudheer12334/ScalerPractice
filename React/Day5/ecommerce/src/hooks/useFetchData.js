import Axios from 'axios';
import {useState,useEffect} from 'react';

const useFetchData=(url,initialData)=>{
    const [data,setData]=useState(initialData);
    const [error,setError]=useState(null);
    const [isLoading,setIsLoading]=useState(false);
    const fetchData = async(url) =>{
        setIsLoading(true);

        try{
            const res = await Axios.get(url);
            console.log(res);
            setData(res.data.data);
            setError(null);
        }
        catch(error){
            setError(error);
            setData(null);
        }
        finally{
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        fetchData(url);
    },[url]);

    return{
        data,
        error,
        isLoading
    }
}
export default useFetchData;