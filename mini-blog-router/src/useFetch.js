import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
   
    useEffect(()=>{
        const abortCont = new AbortController();
        setTimeout(() => { fetch(url, {signal: abortCont.signal})
        .then(res => {
         // console.log(res);
         if(!res.ok){
             throw Error('Couldnt fetch Data!!!');
         }
            return res.json();
        })
        .then((data) => {
            setData(data);
            setIsLoading(false);
            setError(null)
        })
     .catch((e) => {
        if(e.name === 'AbortError'){
            console.log('fetch aborted');
        }
        else{
        setError(e.message);
        setIsLoading(false);}
     })
 
 }, 1000);

//  useEffect cleanup
    return () => abortCont.abort();
         
     },[url]);

     return {data, isLoading, error};
   
}
 
export default useFetch;