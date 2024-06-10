import React from 'react';
import './SignInSignUp.css';
import {useState} from "react";
const SignInSignUp = () => {
    const [action,setAction] = useState('SignUp');
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
                <div className="underline"></div>
           <div className="inputs">
            {action==="SignIn"?<div></div>:<div className="input">
                <input type="text" placeholder='Name' />
            </div>}
            
            <div className="input">
                <input type="email" placeholder='Email' />
            </div>
            <div className="input">
                <input type="password" placeholder='Password' />
            </div>
           </div>
           {action==="SignUp"?<div></div>:<div className="forgot-pwd">Lost Password?
           <span><a href="#">Click Here</a></span>
           </div>}
           
           <div className="submit-container">
            <div className={action==="SignIn"?"submit gray":"submit"} onClick={()=>{setAction('SignUp')}}>SignUp</div>
            <div className={action==="SignUp"?"submit gray":"submit"} onClick={()=>{setAction('SignIn')}}>SignIn</div>
            </div>
        </div>
      
    </div>
  )
}

export default SignInSignUp
