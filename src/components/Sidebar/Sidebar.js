import React from 'react'
import './Sidebar.css'

import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import appContext from '../../context/context'

const Sidebar = () => {

    const navigateTo = useNavigate()
    let currentChapter = useContext(appContext).currentChapter

    const chapters = [
        {
            id: "a-tag",
            name: "<a>",

        },
        {
            id: "p-tag",
            name: "<p>",

        },
        {
            id: "div-tag",
            name: "<div>",

        }
    ]

    const [showSideBar, setShowSideBar] = useState(true)

    return (
        <div className={showSideBar ? 'Sidebar' : 'Sidebar hidden'}>
            {/* <div className='Sidebar hidden'> */}
            <div className='Sidebar-head'>
                <h2 className='Sidebar-heading'>HTML Tags</h2>

                <div className='burger' onClick={() => { setShowSideBar(!showSideBar) }}>
                    <div className='burger-bar'></div>
                    <div className='burger-bar'></div>
                    <div className='burger-bar'></div>
                </div>
            </div>
            <div className='Sidebar-chapters'>
                <ol>
                    {
                        chapters.map((chapter) => {
                            return <li className={currentChapter == chapter.id ? 'Chapter current' : 'Chapter'}
                                key={chapter.id}
                                onClick={() => {
                                    navigateTo('/learn/' + chapter.id)
                                }}
                            >{chapter.name} - Tag</li>
                        })
                    }
                </ol>
            </div>
        </div>
    )
}

export default Sidebar