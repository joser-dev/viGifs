import React from 'react'
import './gif.css'

const Gif = ({ gif, title }) => {
    return (
        <img
            className="gif"
            src={gif}
            alt={title}
        />
    )
}

export default Gif
