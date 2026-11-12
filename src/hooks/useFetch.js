//useFetch is our helper that grabs data from a link and remembers it.
import {useState, useEffect} from 'react'

//
export default function useFetch(url){
    //we need to add our  3 state variables for data, loading, and error states.
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        setLoading(true)
        setError(null)

        async function fetchData() {
            const response = await fetch(url)
                if(!response.ok) {
                    setError(response.status);
                    setLoading(false);
                }

            const json = await response.json()
             console.log(json)
                setData(json)
                setLoading(false)
        }
        fetchData()
    }, [url]);


    return{data, loading, error}


}