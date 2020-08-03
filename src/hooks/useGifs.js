import { useState, useEffect } from "react";
import { API_URL, API_KEY } from "../config";

export default function useGifs(limit = 25, rating = 'g') {

    const [ gifs = [], setGifs ] = useState([])
    const [ loading, setLoading ] = useState(true)


    useEffect(() => {
        setLoading(true)
        setGifs([])
        const fetchGifs = () => {
            fetch(`${API_URL}trending?api_key=${API_KEY}&limit=${limit}&rating=${rating}`)
            .then( response => response.json() )
            .then( response => {
                setGifs(response.data)
                setLoading(false)
            })
            .catch( err => {
                console.log(err)
                setLoading(false)
            })
        }
        fetchGifs()

        return () => setGifs([])
    }, [])

    return [ gifs, loading ]
}