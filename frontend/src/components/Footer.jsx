import React from 'react'

function Footer() {
  return (
    <div className='footer-container'>
        <div className="links flex-col">
            <h1>Useful Links</h1>
            <a href='#home' className='nav-select'>Home</a>
            <a href='#about' className='nav-select'>About</a><br/>
            <p className="end">Made with ♥ by <a href="https://github.com/Ktanningbed" target='_blank' rel="noopener noreferrer">Kevin Tan</a></p>
        </div>
    </div>
  )
}

export default Footer