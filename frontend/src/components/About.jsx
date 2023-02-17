import React from 'react'
import tvcartoon from '../assets/tvcartoon.png'

function About() {
  return (
    <div id="about" className='about-container flex-row'>
        <div>
            <img className='tvcartoon' src={tvcartoon} alt='cartoon'/>
        </div>
        <div>
            <h1 className='about-title'>Ensuring the success of all students</h1>
            <p>Due to COVID-19, many first year students face a lack of knowledge. Lectune hopes to 
                fix that by acting as a place where students can watch lectures at the comfort of their
                own homes. 
            </p>
        </div>
    </div>
  )
}

export default About