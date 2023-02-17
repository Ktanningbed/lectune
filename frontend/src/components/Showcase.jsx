import React from 'react'
import { Link } from 'react-router-dom'
import TV from '../assets/tv.png'

function Showcase() {
  return (
    <div className='showcase-container flex-row'>
        <div>
            <h1>Missed a lecture or want to review <br/>for an upcoming assessment?</h1>
            <h2>Watch lectures here or upload them for others to see</h2>
            <br></br>
            <Link to="/library"><a href='#start' className='start'>Get Started</a></Link>
        </div>
        <div>
            <img className='showcase-logo' src={TV} alt='tv'/>
        </div>
    </div>
  )
}

export default Showcase