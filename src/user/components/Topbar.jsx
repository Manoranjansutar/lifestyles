import React from 'react'
import { Link } from 'react-router-dom'
import offers from './../../assets/images/topbar/offers-icon.svg';
import phone from './../../assets/images/topbar/mobile-screen.svg';
import help from './../../assets/images/topbar/headset.svg';
import { ImMobile } from "react-icons/im";
import { FaHeadset } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";


const Topbar = () => {
    return (
      <div className='d-flex bg-black ps-3'> 
      <div className=' d-flex w-50 gap-2'>
           <p className='d-flex align-items-center my-1'>
               <Link to='/offers'  style={{textDecoration:'none',color:'white',display: 'flex',  gap: '5px', alignItems: 'center',textAlign: 'center'}} >
                   <BiSolidOffer style={{fontSize:'20px'}} />
                   Offers
               </Link>
           </p>
           <p className='d-flex align-items-center my-1'>
               <Link to='/downloadApp' style={{textDecoration:'none',color:'white',display: 'flex',  gap: '5px', alignItems: 'center',textAlign: 'center'}}>
                  <ImMobile style={{fontSize:'18px'}}/>
                   Download Our App
               </Link>
           </p>
           <p className='d-flex align-items-center my-1'>
                <Link to='/downloadApp' style={{textDecoration:'none',    color:'white',display:'flex',  gap: '5px', alignItems: 'center',textAlign: 'center'}}>
                  <FaHeadset style={{fontSize:'18px'}}/>
                   Help
               </Link>
           </p>
      </div>
      <div className='w-50'>
           <marquee behavior="loop" direction="left">
               <p className='my-2 text-white'>Free Shipping above order Rs799/-</p>
           </marquee>
      </div>
   </div>
    )
  }
  
  export default Topbar
  
