import React from 'react'
import useSearchGifs from '../../hooks/useSearchGifs'
import Gif from '../Gif/Gif'
import './gifs.css'
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner'

const SearchGifs = () => {

    const [ gifs, loading] = useSearchGifs()

    const { q: query } = useParams()

    return (
        <>
            <div className="results">
                <h2 className="buscado">{query}</h2>
                <p className="resultado">{!loading && gifs.length} results</p>
            </div>

            <section className="container-gifs">
                { loading
                    ? <Spinner />
                    : 
                    gifs.map( gif =>
                        <Gif
                            key={gif.id}
                            gif={gif.images.original.url}
                            title={gif.title}
                        />
                    )
                }
            </section>
        </>
    )
}

export default SearchGifs
