import React from 'react'
import tv from '../assets/tv.png'
import {Link, useNavigate} from 'react-router-dom'

function Navbar({cn}) {
  
  return (
    <div className="nav-container flex-row">
        <span className='logo'>
            <img src={tv} alt="tv"/> Lectune
        </span>
        <div className="nav-items">
            <a href='#home' className='nav-select'>Home</a>
            <a href='#about' className='nav-select'>About</a>
            {/* <a href='#' className='nav-select'>How it Works</a> */}
            {/* <a>Demo</a> */}
            <Link to="/library"><a href='#start' className='start'>Get Started</a></Link>
        </div>
    </div>
  )
}

export default Navbar