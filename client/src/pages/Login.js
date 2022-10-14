import React from 'react';
import '../res/login.css'

function Login (){
  return (
    <div className='page'>
      
    <div className='cover'>
      <h1>Login</h1>
      <input type="text" placeholder='username'/>
      <input type="password" placeholder='password'/>
      <button className='login-btn'>Login</button>
    </div>

    {/* <div className='login-btn'>Login</div> */}

    </div>
  
  )
}

export default Login;