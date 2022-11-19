import React from 'react'
import './Chapter.css'
import { useParams } from 'react-router-dom'

import { useContext, useState, useEffect } from 'react'
import appContext from '../../context/context'

import Attributes from './Attributes'
import Out from './Out'

const Chapter = () => {
    const params = useParams()

    let currentChapter = useContext(appContext).currentChapter
    const [syntax, setSyntax] = useState(currentChapter.syntax)
    const [attributes, setAttributes] = useState([])

    useEffect(()=>{
        setSyntax(currentChapter.syntax)
        setAttributes([])
    },[params])


    function updateSyntax(newAttributes) {
        setSyntax((prev) => {
            let addedAttributes = " "
            let current = currentChapter.syntax
            let openingTag = current.slice(0, current.indexOf(">"))
            let closingTag = current.slice(current.indexOf(">"), -1)

            newAttributes.forEach((att) => {
                if (typeof att.value == "string") {
                    addedAttributes = addedAttributes + att.attribute + " = " + "'" + att.value + "' "
                } else {
                    addedAttributes = addedAttributes + att.attribute + " = " + "'" + att.value[0] + "' "
                }
            })
            if(closingTag){
                return openingTag + addedAttributes + closingTag
            }else{
                return openingTag + addedAttributes + ">"
            }
        })
    }

    function addAttribute(attribute) {
        let newAttributes = [...attributes, attribute];
        setAttributes(newAttributes)
        updateSyntax(newAttributes)
    }

    function removeAttribute(attribute) {
        let x = attributes.find((a) => {
            return a.attribute == attribute.attribute
        })

        let newAttributes = attributes.filter((a) => {
            return a.attribute != attribute.attribute
        })

        setAttributes(newAttributes)
        updateSyntax(newAttributes)

    }

    function changeValue(attribute, value) {

        let currentAttributeIndex = attributes.findIndex((a, i) => {
            return a.attribute == attribute.attribute
        })
        let newAttributes = [...attributes]
        newAttributes[currentAttributeIndex].value = value
        updateSyntax(newAttributes)
    }

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
                        {syntax}
                    </code>

                    <button className='btn try'>Try Code Editor</button>
                </div>

                <div className='Current-chapter-container'>
                    <Out syntax={syntax}/>
                </div>
            </div>

            <div className='Current-chapter-container'>
                <h2>
                    Attributes
                </h2>
                <a href="https://www.google.co.in/">ajbskaj</a>
                {/* <p>All the universal attributes</p> */}
                {
                    currentChapter.attributes ?
                    <div className='flex attributes-wrapper'>
                        {
                            currentChapter.attributes.map((attribute) => {
                                return <Attributes key={attribute.attribute} attribute={attribute} addAttribute={addAttribute} changeValue={changeValue} removeAttribute={removeAttribute} />
                            })
                        }
                    </div> :
                    <p>This tag does not have any unique attributes</p>
                }
            </div>

        </div>
    )
}

export default Chapter