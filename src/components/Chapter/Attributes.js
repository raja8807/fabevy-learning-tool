import React, { useEffect } from 'react'
import './Attributes.css'

import { useState } from 'react'

const Attributes = ({ attribute, addAttribute, changeValue,removeAttribute }) => {
    
    const [expanded, setExpanded] = useState(false)
    const [value, setValue] = useState(attribute.value)
    const [currentAttribute, setCurrentAttribute] = useState({...attribute})


    const toogleExpand = () => {
        setExpanded(!expanded)
        if(!expanded){
            addAttribute(currentAttribute)
        }else{
            removeAttribute(currentAttribute)
        }
    }

    function handleValue(e){
        setValue(e.target.value)
        changeValue(attribute, e.target.value)
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
                        <input type="text" value={value} onChange={handleValue}/>

                            :
                            <select onChange={(e)=>{
                                changeValue(attribute, e.target.value)
                            }}>
                                {
                                    attribute.value.map((val) => {
                                        return <option key={Math.random()} className='attribute-value'>{val}</option>
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