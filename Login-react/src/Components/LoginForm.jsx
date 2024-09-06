import React from 'react'
import { Link } from 'react-router-dom';
import { FaUser,FaLock } from "react-icons/fa";
import './LoginForm.css'
const LoginForm = () => {
  return (
    <div className='container'>
      <form action="">
        <h1>Login</h1>
        <div className='input-box'>
            <input type="text" placeholder='Username' required />
            <FaUser className='icon'/>
        </div>
        <div className='input-box'>
            <input type="password" placeholder='Password' required />
            <FaLock className='icon'/>
        </div>
        <div className='remember-forget'>
            <label >
                <input type="checkbox" /> Remember Me
              
            </label>
            <Link to="/reset">Forgot Password?</Link>
        </div>
        <div className='submit'>
        <button type='submit'>Login</button>

        </div>
        <div className='register'>
            <p>Don't have an account? <Link to="/createForm">Register Here</Link></p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
