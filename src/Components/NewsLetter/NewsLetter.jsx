import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive offers On Your Email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div className='newsletter-input'>
        <input type="email" placeholder="Enter your email"/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
