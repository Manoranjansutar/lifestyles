import React from 'react';
import emptywishlist from './../../assets/images/wishlist/Shopping bag.gif';
import { Link } from 'react-router-dom';

const EmptyWishlist = () => {
  return (
    <div className='emptywishlist  mb-5 mt-4'>
       <div className="custom-container">
        <div className="row">
            <div className="col-lg-12">
            <center>
                <img src={emptywishlist} alt="" className='w-25 img-fluid'/>
                <h3 className='text-black'>Your Wishlist is Empty</h3>
                <p>Browse and tap on the heart icon.</p>
                <Link to='/'><button className='btn btn-dark bg-black'>Start Shopping</button></Link>
            </center>
            </div>
        </div>
       </div>
    </div>
  )
}

export default EmptyWishlist
