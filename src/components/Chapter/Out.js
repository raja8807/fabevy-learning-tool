import React from 'react'
import './Out.css'

function Out({syntax}) {
    
    return (
        <>
            <h2>Out</h2>
            <div dangerouslySetInnerHTML={{__html:syntax}} className="out-box">
                
            </div>
        </>
    )
}

export default Out