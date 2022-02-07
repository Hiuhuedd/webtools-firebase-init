import {useState, useEffect, useRef} from 'react'
function carousel() {
    useEffect(() => {
        if(typeof window!=='undefined'){
            const M =require('materialize-css')
        }
        let tabs = document.querySelectorAll(".carousel");
        M.Carousel.init(tabs);
     
    }, []);
    
 
  return (
  <div>
      <div  class="carousel black" style={{display:'flex', justifyContent:'center'}}>
              <a style={{ display: 'flex', justifyContent: 'center', width: '30rem', height: '25rem' }} class="carousel-item" href="#one!"><img src="/webtools1.png"/></a>
              <a style={{ display: 'flex', justifyContent: 'center', width: '30rem', height: '25rem' }}class="carousel-item" href="#two!"><img src="/webtools1.png"/></a>
              <a style={{ display: 'flex', justifyContent: 'center', width: '30rem', height: '25rem' }}class="carousel-item" href="#three!"><img src="/webtools1.png"/></a>
              <a style={{ display: 'flex', justifyContent: 'center', width: '30rem', height: '25rem' }}class="carousel-item" href="#four!"><img src="/webtools1.png"/></a>
              <a style={{ display: 'flex', justifyContent: 'center', width: '30rem', height: '25rem' }}class="carousel-item" href="#five!"><img src="/webtools1.png"/></a>
      </div>
    </div>);
}

export default carousel;
