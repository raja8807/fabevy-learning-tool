import React from 'react'
import './Chapter.css'
import { useParams } from 'react-router-dom'

import { useContext } from 'react'
import appContext from '../../context/context'


const Chapter = () => {
    const params = useParams()

    let currentChapter = useContext(appContext).currentChapter

    return (
        <div className='Current-chapter'>
            <div className='Current-chapter-container'>
                <h1 className='heading'>
                    HTML {currentChapter.tag} Tag
                </h1>
            </div>

            <div className='Current-chapter-container'>
                <h2>
                    Definition
                </h2>
                <p className='Current-chapter-definition'>
                    {currentChapter.definition}
                </p>
            </div>

            <div className='syntax-box'>
                <div className='Current-chapter-container'>
                    <h2>
                        Syntax
                    </h2>

                    <code className='syntax'>
                        {currentChapter.syntax}
                    </code>
                    
                    <button className='btn try'>Try Code Editor</button>
                </div>
            </div>
        </div>
    )
}

export default Chapter