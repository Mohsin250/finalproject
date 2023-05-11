import React from 'react'
import './Why.css'
import $ from 'jquery'


const Why = () => {
    var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});
  return (
    <div className='whybg'>
        <div className='whytop'>
    <h2>WHY CHOOSE US</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua</p>
        <ul id="counter">
  <li>
    <div><span class="count percent" data-count="11">
      0
    </span></div>
    <div><h3>Traning Program</h3></div>
  </li>
    <li>
    <div>
    <span class="count percent" data-count="146">
      0
    </span>
    </div>
    <div><h3>Happy Clients</h3></div>
  </li>
    <li>
   <div>
   <span class="count percent" data-count="16">
      0
    </span>
    
   </div>
   <div>
    <h3>Years Experience</h3>
   </div>
  </li>
</ul>
    </div>
    <div className='whyimage'>
        <img src="images/man2.jpg" alt="" />
    </div>
    </div>
  )
}

export default Why