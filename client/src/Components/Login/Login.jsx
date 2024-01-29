import React from 'react'
import './Login.css'
import '../../App.css'

import video from '../../LoginAssets/back.mp4'
import logo from '../../LoginAssets/logo.png'

import { Link } from 'react-router-dom'
import {FaUserShield} from 'react-icons/fa' 
//import {bsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'

const Login = () => {
  return (
    <div className='loginPage flex'>
      <div className="container flex">

      <div className="videoDiv">
      <video src={video} autoPlay muted loop></video>

      <div className="textDiv">
        <h2 className='title'>Efficiency Unleashed</h2>
        <p>Smart Solutions by Us</p>
      </div>

      <div className="footerDiv flex">
        <span className="text">Don't have an Account ?</span>
        <Link to={'./register'}>
        <button className='btn'>Sign Up</button>
        </Link>

      </div>

      </div>

      <div className="formDiv flex">
        <div className="headerDiv">
          <img src={logo} alt="Logo Image" />
          <h3>Welcome Back!</h3>
        </div>

        <form action="" className='form grid'>
          <span>Login status will go here</span>
          <div className="inputDiv">
            <label htmlFor="username">Username</label>
            <div className="input flex">
              <FaUserShield className='icon'/>
              <input type="text" id='username' placeholder='Enter your Username'/>
            </div>
          </div>

          <div className="inputDiv">
            <label htmlFor="password">Password</label>
            <div className="input flex">
              <bsFillShieldLockFill className='icon'/>
              <input type="password" id='password' placeholder='Enter your Password'/>
            </div>
          </div>

          <button type='submit' className='btn flex'>
            <span>Login</span>
            <AiOutlineSwapRight className='icon' /> 
          </button>

          <span className='Forgot Password'>
            Forgot your Password ? <a href="">Click Here</a>
          </span>
        </form>
      </div>


      </div>
    </div>
  )
}

export default Login