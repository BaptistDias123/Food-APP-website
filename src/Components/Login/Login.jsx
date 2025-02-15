import React, { useState } from 'react'
import "./Login.css"
import { assets } from '../../assets/assets'

const Login = ({setShowLogin}) => {
  const[currState, setCurrState] = useState("Login")
    
  return (
    <div className="login-popup">
     <form  className="login-popup-container">
      <div className="login-popup-title">
        
        <h2>{currState}</h2>
       
        <img onClick={()=> setShowLogin(false)} src={assets.cross_icon} alt="" />
        
      </div>
      <div className="login-popup-inputs">

        {currState=== "Login"? <></> :  <input type="text" placeholder='Your name' required /> }
       
        <input type="email" placeholder='Your Email' required />
        <input type="password" placeholder='Your Password' required />

      </div>
      <button>{currState==="Sign Up"? "create account" : "login"}</button>

      <div className="login-popup-condition">
        <input type='checkbox' required />
        <p> By Continueing , i agree to the terms and condition</p>
      </div>
      {currState === "Login"
      ?  <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")} >click here</span> </p>
      : <p>Allready have an account? <span onClick={()=>setCurrState("Login")} >click here</span> </p> 
      }
     
     </form>
    </div>
  )
}

export default Login