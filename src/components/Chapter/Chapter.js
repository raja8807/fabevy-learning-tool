import React from 'react'
import './Chapter.css'
import { useParams } from 'react-router-dom'

import { useContext, useState, useEffect } from 'react'
import appContext from '../../context/context'


const Chapter = () => {
    const params = useParams()

    let currentChapter = useContext(appContext).currentChapter

    const [syntax, setSyntax] = useState(currentChapter.syntax)
    const [appliedAttributes, setAppliedAttributes] = useState([])

    // let appliedAttributes = []


    function showAttr(attr) {
        // let x =""
        if (!appliedAttributes.includes(attr)) {
            setAppliedAttributes((prev)=>{
                return [...prev,attr]
            })

            // appliedAttributes.forEach((attribute)=>{
            //     let y = currentChapter.attributes.find(a=> a.attribute == attribute)
            //     x = x + `${attribute}='${y.value}' `
            // })
            let splitted = syntax.split(">")
            let appliedAttribute = currentChapter.attributes.find((attribute) => {
                return attribute.attribute == attr
            })

            let openingTag = `${splitted[0]} ${appliedAttribute.attribute} = '${appliedAttribute.value}>`
            setSyntax(openingTag + splitted[1])
            
            // console.log(x);
        }else{
            setAppliedAttributes((prev)=>{
                return prev.filter((attrb)=>{
                    return attrb != attr
                })
            })
            let splitted = syntax.split(">")
            setSyntax(splitted[0].split(attr)[0]+">" + splitted[1]);
            

        }
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

                <h2>Attributes</h2>

                <div className='attributes-wrapper'>
                    {
                        currentChapter.attributes.map((attr, i) => {
                            return <p key={i} className={appliedAttributes.includes(attr.attribute) ? "attributes applied" : "attributes"} onClick={() => {
                                showAttr(attr.attribute)
                            }}>{attr.attribute}</p>
                        })
                    }
                </div>



            </div>
        </div>
    )
}

export default Chapter