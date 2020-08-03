import React from 'react'
import { Helmet } from 'react-helmet'
import { APP_NAME } from '../helpers'
import SearchGifs from '../components/Gifs/SearchGifs'

const SearchPage = ({ match }) => {

    const query = match.params.q

    return (
        <>
            <Helmet>
                <title>{query} {APP_NAME}</title>
            </Helmet>

            <SearchGifs />
        </>
    )
}

export default SearchPage
