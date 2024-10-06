import React from 'react'
import './CSS/LoginSignup.css'
function LoginSignup() {
  return (
    <div className='loginsignup'>
      <div className='loginsignup__container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type="text" placeholder='YourName' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        {/* <button>Sign Up</button> */}
      </div>
      
    </div>
  )
}

export default LoginSignup
