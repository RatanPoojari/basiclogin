import React from 'react'
import './Register.css'
import '../../App.css'
import { Link, NavLink } from 'react-router-dom' 
import video from '../../LoginAssets/back.mp4'
import logo from '../../LoginAssets/logo.png'

// import { Link } from 'react-router-dom' 
import {FaUserShield} from 'react-icons/fa' 
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'
import {MdMarkEmailRead} from 'react-icons/md'

const Register = () => {
  return (
    <div className='registerPage flex'>
      <div className="container flex">

      <div className="videoDiv">
      <video src={video} autoPlay muted loop></video>

      <div className="textDiv">
        <h2 className='title'>Efficiency Unleashed</h2>
        <p>Smart Solutions by Us</p>
      </div>

      <div className="footerDiv flex">
        <span className="text">Have an Account ?</span>
        <Link to={'./'}>
        <button className='btn'>Login</button>
        </Link>

      </div>

      </div> 

      <div className="formDiv flex">
        <div className="headerDiv">
          <img src={logo} alt="Logo Image" />
          <h3>Please Sign Up!</h3>
        </div>

        <form action="" className='form grid'>
          
          <div className="inputDiv">
            <label htmlFor="email">Email-ID</label>
            <div className="input flex">
              <MdMarkEmailRead className='icon'/>
              <input type="email" id='email' placeholder='Enter your Email-ID'/>
            </div>
          </div>

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
              <BsFillShieldLockFill className='icon'/>
              <input type="password" id='password' placeholder='Enter your Password'/>
            </div>
          </div>

          
          <button type='submit' className='btn flex'>
            <span>Register</span>
            <AiOutlineSwapRight className='icon'/> 
          </button>
          

          <span className='forgotpassword'>
            Forgot your Password ? <a href="">Click Here</a>
          </span>
        </form>
      </div>


      </div>
    </div>
  )
}

export default Register