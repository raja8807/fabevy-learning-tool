import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='Home flex'>
      
      <div className='Current-chapter-container'>
      <h1 className='heading'>HTML Tags</h1>
      <p>
        HTML tags are like keywords which defines that how web browser will
        format and display the content. With the help of tags, a web browser
        can distinguish between an HTML content and a simple content.
        HTML tags contain three main parts: opening tag, content and closing tag.
        But some HTML tags are unclosed tags.
      </p>

      <p>
        When a web browser reads an HTML document, browser reads it from top to bottom and left to right. 
        HTML tags are used to create HTML documents and render their properties. 
        Each HTML tags have different properties.
      </p>

      <p>
      An HTML file must have some essential tags so that web browser can differentiate between a 
      simple text and HTML text. You can use as many tags you want as per your code requirement.
      </p>

      <button className='btn try'>Try Code Editor</button>
      </div>

    </div>
  )
}

export default Home;