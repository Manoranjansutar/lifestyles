import React from 'react'
import newarrival from './../../assets/images/newarrival/newarrival.gif';
import newarrivalbanner from './../../assets/images/newarrival/newarrival-banner.jpeg';
import arrow from './../../assets/images/newarrival/arrow.jpeg';
import calvin from './../../assets/images/newarrival/calvinklien.jpeg';
import flying from './../../assets/images/newarrival/flyingmachine.jpeg';
import tommy from './../../assets/images/newarrival/tommyhilfiger.jpeg';




const NewArrival = () => {
  return (
    <div className='newarrival'>
      <div className="custom-container">
        <div className="row">
            <div className="col-lg-12">
            <img src={newarrival} alt="" className="w-100 img-fluid" />
            </div>
            <div className="col-lg-12 pt-3">
            <img src={newarrivalbanner} alt="" className="w-100 img-fluid" />
            </div>
        </div>
        <div className="row pt-5">
            <div className="col-lg-12">
                <h3 className='text-black text-center fw-normal letter-spacing'>New Looks, New Wardrobe</h3>
            </div>
        </div>
        <div className="row pt-5">
            <div className="col-lg-3">
            <img src={tommy} alt="" className="w-100 img-fluid" /> 
            </div>
            <div className="col-lg-3">
            <img src={calvin} alt="" className="w-100 img-fluid" />
            </div>
            <div className="col-lg-3">
            <img src={arrow} alt="" className="w-100 img-fluid" />
            </div>
            <div className="col-lg-3">
            <img src={flying} alt="" className="w-100 img-fluid" />
            </div>
        </div>
      </div>


    </div>
  )
}

export default NewArrival
