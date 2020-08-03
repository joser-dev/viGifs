import React from 'react'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import './search-form.css'

const SearchForm = () => {
    
    const history = useHistory()

    const [search, setSearch] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        history.push(`/search/${search}`)
    }
    
    return (
        <form 
            onSubmit={handleSubmit} 
            className="buscador"
        >
            <input
                type="text"
                placeholder="Search gifs..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="buscar-intro"
            />
            <button type="submit" className="boton-buscar">
                <i className="fas fa-search search-icon"></i>
            </button>
        </form>
    )
}

export default SearchForm
