import React from 'react'
import About from '../About'
import Navbar from '../Navbar'
import Showcase from '../Showcase'
import {useState} from 'react'
import Footer from '../Footer'
function Home() {
  return (
    <div id="home">
      <Navbar/>
      <Showcase/>
      <About/>
      <Footer/>
    </div>
  )
}

export default Home