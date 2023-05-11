import React from 'react'
import './Gallary.css'
import $ from 'jquery'

const Gallery = () => {
    $(document).ready(function() {
        $('.galleryBox').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                }
            }
        });
    });
  return (
    <>
        <div className='galleryBox'>
            <div className='gaboxInner'><a href= "images/gallery1.jpg" title="The Cleaner1"><img src="images/gallery1.jpg" alt="" /></a>
            <div className='gaOverlay'></div></div>
            <div className='gaboxInner'><a href= "images/gallery1.jpg" title="The Cleaner2"><img src="images/gallery2.jpg" alt="" /></a>
            <div className='gaOverlay'></div></div>
            <div className='gaboxInner'><a href= "images/gallery1.jpg" title="The Cleaner3"><img src="images/gallery3.jpg" alt="" /></a>
            <div className='gaOverlay'></div></div>
            <div className='gaboxInner'><a href= "images/gallery1.jpg" title="The Cleaner4"><img src="images/gallery4.jpg" alt="" /></a>
            <div className='gaOverlay'></div></div>
            <div className='gaboxInner'><a href= "images/gallery1.jpg" title="The Cleaner5"><img src="images/gallery5.jpg" alt="" /></a>
            <div className='gaOverlay'></div></div>
            <div className='gaboxInner'><a href= "images/gallery1.jpg" title="The Cleaner6"><img src="images/gallery6.jpg" alt="" /></a>
            <div className='gaOverlay'></div></div>
            <div className='gaboxInner'><a href= "images/gallery1.jpg" title="The Cleaner7"><img src="images/gallery7.jpg" alt="" /></a>
            <div className='gaOverlay'></div></div>
            <div className='gaboxInner'><a href= "images/gallery1.jpg" title="The Cleaner8"><img src="images/gallery8.jpg" alt="" /></a>
            <div className='gaOverlay'></div></div>
            <div className='gaboxInner'><a href= "images/gallery1.jpg" title="The Cleaner9"><img src="images/gallery9.jpg" alt="" /></a>
            <div className='gaOverlay'></div></div>
            <div className='gaboxInner'><a href= "images/gallery1.jpg" title="The Cleaner10"><img src="images/gallery10.jpg" alt="" /></a>
            <div className='gaOverlay'></div></div>
            <div className='gaboxInner'><a href= "images/gallery1.jpg" title="The Cleaner11"><img src="images/gallery11.jpg" alt="" /></a>
            <div className='gaOverlay'></div></div>
            <div className='gaboxInner'><a href= "images/gallery1.jpg" title="The Cleaner12"><img src="images/gallery12.jpg" alt="" /></a>
            <div className='gaOverlay'></div></div>
            
        </div>
    </>
  )
}

export default Gallery