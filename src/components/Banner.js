import React from 'react'
import './Banner.css'
const Banner = () => {
  return (
    <div>
       <div>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div className='ist-image'>
        <div className='imageInner'>
        <h1><span>KEEP YOUR BODY </span> FIT & STRONG</h1>
        <p>BLACKFIT – fitness health center where your body gets its shape! </p>
        <p>Start training now to stay fit and healthy all year round!</p>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div className='second-image'></div>
    </div>
    <div class="carousel-item">
      <div className='third-image'></div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </div>
    </div>
  )
}

export default Banner