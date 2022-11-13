import React, { useEffect } from 'react'
import './Attributes.css'

import { useState } from 'react'

const Attributes = ({ attribute, addAttribute, changeValue }) => {
    
    const [expanded, setExpanded] = useState(false)
    const [value, setValue] = useState(attribute.value)
    const [currentAttribute, setCurrentAttribute] = useState({...attribute})

    const toogleExpand = () => {
        setExpanded(!expanded)
        addAttribute(currentAttribute)
    }

    return (
        <div className={expanded ? 'attributes-box expanded' : 'attributes-box'}>
            <div className='expand-btn' onClick={toogleExpand}>{expanded ? "-" : "+"}</div>
            <h3>{attribute.attribute}</h3>
            {
                expanded &&
                <>
                    <label>Value : </label> {
                        typeof attribute.value == "string" ?
                        <form onSubmit={(e)=>{
                            e.preventDefault()
                            changeValue(currentAttribute, e.target[0].value)
                        }}>
                            <input key={Math.random()} type='text' className='attribute-value'/>
                            <input type='submit'/>
                        </form>

                            :
                            <select onChange={(e)=>{
                                changeValue(attribute, e.target.value)
                            }}>
                                {
                                    attribute.value.map((val, i) => {
                                        return <option key={i} className='attribute-value'>{val}</option>
                                    })
                                }
                            </select>
                    }
                    
                    <p>{attribute.usage}</p>
                </>
            }
        </div>
    )
}

export default Attributes