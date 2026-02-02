import React, { useState } from 'react'
import './login.css'
import logo from '/assets_netflix2/logo.png'

const Login = () => {
  const [signState, setSignState] = useState("Sign In");

  return (
    <div className='login'>
        <img src={logo} className="login-logo" alt="Netflix Logo" />
        <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? <input type="text" placeholder='Your Name' /> : null}
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password'/>
          <button type='submit'>{signState}</button>
          <div className="form-help">
            <div className="remember">
              {signState === "Sign In" ? (
                <>
                  <input type="checkbox" id="remember-me" />
                  <label htmlFor="remember-me">Remember Me</label>
                </>
              ) : null}
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>New to Netflix? <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span></p>
          ) : (
            <p>Already have account? <span onClick={() => setSignState("Sign In")}>Sign In Now</span></p>
          )}
        </div>
        </div>
    </div>
  )
}

export default Login