import React from 'react'
import './Bannerbtm.css'
const Bannerbtm = () => {
  return (
    <>
        <div className=''>
            <div className='outerBox'>
                <div className='box1'>
                <img src="images/service-1.jpg" alt="" />
                <h2 className='boxInner'>FITNESS</h2>
                <div className='overlay'></div>
                </div>
                
                <div className='box1'>
                <img src="images/service-2.jpg" alt="" />
                <h2 className='boxInner'>BODYBUILDING</h2>
                <div className='overlay'></div>
                </div>
                
                <div className='box1'>
                <img src="images/service-3.jpg" alt="" />
                <h2 className='boxInner'>CROSSFIT</h2>
                <div className='overlay'></div>
                </div>
                <div className='box1'>
                <img src="images/service-4.jpg" alt="" />
                <h2 className='boxInner'>CARDIO</h2>
                <div className='overlay'></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Bannerbtm