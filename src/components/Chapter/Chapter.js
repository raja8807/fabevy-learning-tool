import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

import { useContext } from 'react'
import appContext from '../../context/context'


const Chapter = () => {
    const params = useParams()
    

    return (
        <div>
            <h1 className='heading'>
                HTML - {params.chapter}
            </h1>
            <button className='btn try'>Try Code Editor</button>
        </div>
    )
}

export default Chapter