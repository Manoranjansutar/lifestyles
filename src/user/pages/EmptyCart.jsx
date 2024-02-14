import React from 'react'
import addtocart from './../../assets/images/cart/Add to Cart.gif';
import { Link } from 'react-router-dom';
const EmptyCart = () => {
  return (
    <div className='emptycart mb-5 mt-4'>
       <div className="custom-container mb-5">
        <div className="row">
            <div className="col-lg-12">
            <center>
                <img src={addtocart} alt="" className='w-25 img-fluid'/>
                <h3 className='text-black'>Your Cart needs some love</h3>
                <p>Fill your cart with the best of LifeStyle</p>
               <Link to='/'> <button className='btn btn-dark bg-black'>Start Shopping</button></Link>
            </center>
            </div>
        </div>
       </div>
    </div>
  )
}

export default EmptyCart



