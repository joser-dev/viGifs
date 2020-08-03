import React from 'react'
import useGifs from '../../hooks/useGifs'
import Gif from '../Gif/Gif';
import './gifs.css'

const Gifs = () => {

    const [ gifs, loading ] = useGifs()

    return (
        <section className="container-gifs">
            { loading
                ? <p>Loading gifs...</p>
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
    )
}

export default Gifs
