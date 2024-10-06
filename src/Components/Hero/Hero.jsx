import React from 'react';
import './Hero.css';
import  fphoto from '../../assets/photo1.jpg';
import  hand_icon from '../../assets/Assets/hand_icon.png';
import hero_img from '../../assets/Assets/hero_image.png';

function Hero() {
  return (
    <div className='hero'>
        <div className="hero-left">
       <h2>NEW ARRIVALS ONLY</h2>
       <div>
        <div className="hand-hand-icon">
            <p>new</p>
           <img src={hand_icon}></img>
        </div>
        <p>collections</p>
        <p>for everyone</p>
       </div>
        <div className="hero-latest-btn">
            <div>latest collection</div>
            
        </div>
        </div>
        <div className="hero-right">
        <img src={hero_img} alt="fashionphoto" /> 

        </div>
      
    </div>
  )
}

export default Hero
