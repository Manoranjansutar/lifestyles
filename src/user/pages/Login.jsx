import React from 'react'
import { FaLock , FaUserAlt , FaEnvelope } from "react-icons/fa";
// import login from './../../assets/images/login/Sign in.gif';
// import login from './../../assets/images/login/Mobile login.gif';
import login from './../../assets/images/login/Mobile login(1).gif';

const Login = () => {
  return (
    <div className='login'>
    
    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-6">
              <img src={login} alt="" />
            </div>
            <div class="col-lg-4 pt-4 mt-5 h-100">
                <div class="p-5 rounded shadow" style={{border:'2px solid black'}}>
                    <h3 class="text-center text-black">Login</h3>
                    <div class="input-group mb-4 mt-4"  style={{border:'1px solid black'}}>
                        <span class="input-group-text">
                            <FaEnvelope/>
                          
                        </span>
                        <input type="text" class="form-control" placeholder='Enter your Email' style={{border:'none', outline:'none'}}/>
                    </div>
                    <div class="input-group mb-4 mt-4"  style={{border:'1px solid black'}}>
                         <span class="input-group-text">
                            <FaLock/>
                         </span>
                         <input type="password" name="" id="" class="form-control" placeholder='Enter your Password' style={{border:'none', outline:'none'}}  />
                    </div>
                    <div class="text-center">
                         <button class="btn btn-dark bg-black">Login</button>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
  
    </div>
  )
}

export default Login

