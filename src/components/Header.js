import React from 'react'
import './Header.css'
// import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='container-fluid'>
      <div className="myNav"> 
    <nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="/"><img src="images/logo-light-lg.png" alt="Logo" /></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
    <li class="nav-item active">
        <a class="nav-link" href="/">HOME <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/yourexcer">ADD EXCERCISE</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/excer">YOUR EXCERCISE</a>
      </li>
      {/* <li class="nav-item">
        <a class="nav-link" href="/price">PRICING</a>
      </li> */}
      
    </ul>
  </div>
</nav>
    </div>
    </div>
  )
}

export default Header