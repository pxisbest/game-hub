// 将重复的custom hook提取出来
import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";
import { CanceledError } from "axios";



interface FetchResponse<T>{
    count:number;
    results:T[];
}

const useData=<T>(endpoint:string)=>{
    const [data, setData]=useState<T[]>([]);
    const [error, setError]=useState("");
    const [isLoading, setLoading]=useState(false)
    useEffect(()=> {
        const controller = new AbortController();
        // set isLoading to true before calling api
        setLoading(true);
        apiClient.get<FetchResponse<T>>(endpoint,{signal:controller.signal})
        .then(res=>{
            setData(res.data.results);
            setLoading(false);
        })
        .catch(err=>{
            if (err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
        })
            
        return () => {
            controller.abort();
        };
      },[])

  return {data,error,isLoading};
}

export default useData