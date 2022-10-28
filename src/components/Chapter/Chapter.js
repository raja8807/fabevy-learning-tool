import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

import { useContext } from 'react'
import appContext from '../../context/context'


const Chapter = () => {
    const params = useParams()
    const setCurrentChapter = useContext(appContext).setCurrentChapter

    useEffect(() => {
        setCurrentChapter(params.chapter)
    }, [params])

    return (
        <div>
            <h1>
                HTML - {params.chapter}
            </h1>
        </div>
    )
}

export default Chapter