import React from 'react'
import useGifs from '../../hooks/useGifs'
import Gif from '../Gif/Gif';
import './gifs.css'
import Spinner from '../Spinner'

const Gifs = () => {

    const [ gifs, loading ] = useGifs()

    return (
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
    )
}

export default Gifs
