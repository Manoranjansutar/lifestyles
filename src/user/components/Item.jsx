import React from 'react';
import './Item.css';
import { FaStar } from "react-icons/fa";
import offer from './../../assets/images/item/offer.svg';
import wishlist from './../../assets/images/item/wishlist.svg';






const Item = (props) => {
  return (
    <div className='item'>
      <div class="card border-1" >

     <div className='item-image'>
          <img src={props.image} className="card-img-top main-img" alt="..." />
          <img src={props.image1} className="card-img-top hover-img" alt="..."/>
     </div>
       <div className='item-discount'>
         <img src={offer} alt="" className='item-discount-offfer-jpg' />
        <div className='item-discount-off'> {props.discount}% OFF</div>
       </div>
       <img src={wishlist} alt="" className='item-wishlist'/>

       <div className='item-brand-container'> 
          <h3 className='item-brand'>{props.brand}</h3>
          <div className='item-rating'>
          {props.rating}  <FaStar className='rating-icon ' />| {props.reviews}
          </div>
       </div>

       
         <p className='item-name '>{props.title}</p>
         <div className='item-price'>
            <h4> ₹{props.newPrice} </h4>
            <p className='pt-2'>₹{props.oldPrice}</p>
         </div>
       
       <div className='item-cart'>
           <button className='add-btn'>Add To Cart</button>
       </div>

     </div>
   </div>
  )
}

export default Item
