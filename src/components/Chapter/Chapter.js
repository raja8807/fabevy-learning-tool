import React from 'react'
import './Chapter.css'
import { useParams } from 'react-router-dom'

import { useContext, useState, useEffect } from 'react'
import appContext from '../../context/context'

import Attributes from './Attributes'

const Chapter = () => {
    const params = useParams()

    let currentChapter = useContext(appContext).currentChapter
    const [syntax, setSyntax] = useState(currentChapter.syntax)
    const [attributes, setAttributes] = useState([])

    var x;

    useEffect(() => {
        x = ""
        attributes.forEach((attribute) => {
            x = x + ` ${attribute.attribute} = '${typeof attribute.value == 'string' ? attribute.value : attribute.value[0]}'`
        })
        let splitted = currentChapter.syntax.split(">")
        let y = splitted[0] + x + ">" + splitted[1] + ">"
        setSyntax(y)
    }, [attributes])


    function addAttribute(attribute) {
        let a = attributes.findIndex((attr) => {
            return attribute.attribute == attr.attribute
        })
        if (a < 0) {
            setAttributes(prev => [...prev, attribute])
        } else {
            setAttributes((prev) => {
                return prev.filter((attr) => {
                    return attribute.attribute != attr.attribute
                })
            })
        }

    }

    function changeValue(attribute, value) {

        let a = attributes.findIndex((attr) => {
            return attribute.attribute === attr.attribute
        })

        let x = attributes[a]
        x.value = value
        setAttributes((prev) => {
            let y = prev
            y[a] = x
         return [...y]
        })

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
            </div>

            <div className='Current-chapter-container'>
                <h2>
                    Attributes
                </h2>
                <div className='flex attributes-wrapper'>
                    {
                        currentChapter.attributes.map((attribute, i) => {
                            return <Attributes key={i} attribute={attribute} addAttribute={addAttribute} changeValue={changeValue} />
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Chapter