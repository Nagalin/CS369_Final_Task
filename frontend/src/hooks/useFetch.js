import { useEffect, useState } from "react";
import axios from "../lib/axios";

const useFetch = (url) => {
    const [data,setData] = useState([])
    const [error,setError] = useState('')

    useEffect(() => {
        axios.get(url)
        .then(response => setData(response.data))
        .catch(error => {
            setError(error.response.data)
          console.error(error);
        });
    },[url])


    return [
        data,
        error
    ]
};

export default useFetch;
