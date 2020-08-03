import { useState, useEffect } from "react";
import { API_URL, API_KEY } from "../config";
import { useParams } from "react-router-dom";

export default function useSearchGifs(limit = 25, rating = 'g') {

    const { q: search } = useParams()

    const [ gifs = [], setGifs ] = useState([])
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        setLoading(true)
        setGifs([])
        const fetchSearchGifs = () => {
            fetch(`${API_URL}search?api_key=${API_KEY}&q=${search}&limit=${limit}&rating=${rating}&lang=es`)
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
        fetchSearchGifs()
        return () => setGifs([])
    }, [search, limit, rating])

    return [ gifs, loading ]
}