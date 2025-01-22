import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
export default function NavBar() {
  
  const animation_handler = (link)=> () =>{
    const innerSlider = document.querySelector('.inner-slider');
    
    if(link==='Home'){
      innerSlider.classList.remove('right-slider');
      innerSlider.classList.add('left-slider');
    }
    else if(link==='About'){
      innerSlider.classList.remove('left-slider');
      innerSlider.classList.add('right-slider');
    }
  }
  return (
    <nav>
    {/* <div className="darkmode-btn-div">
      <span>Darkmode</span>
      <i className="fa-solid fa-toggle-off"></i>
    </div> */}
    <div className="navigation-btns-div">
          <Link to="/" onClick={animation_handler('Home')}>Home</Link>
          <Link to="/" id="website-name">TEXT UTILS</Link>
          <Link to="/about" onClick={animation_handler('About')}>About</Link>
          <div className="slider">
            <div className="inner-slider"></div>
          </div>
    </div>
</nav>
  )
}
