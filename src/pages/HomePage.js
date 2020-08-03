import React from 'react'
import { Helmet } from 'react-helmet'
import { APP_NAME } from '../helpers'
import Gifs from '../components/Gifs/Gifs'

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Inicio {APP_NAME}</title>
            </Helmet>

            <Gifs />
        </>
    )
}

export default HomePage
