import React from 'react'
import Carousels3 from '../components/Carousels3'
import menbanner1 from './../../assets/images/men/menbanner1.gif';
import menbanner2 from './../../assets/images/men/menbanner2.webp';
import menbanner3 from './../../assets/images/men/menbanner3.jpg';
import menjeans from './../../assets/images/men/men-jeans.jpg';
import menshirt from './../../assets/images/men/men-shirt.jpg';
import mentshirt from './../../assets/images/men/men-tshirt.jpg';
import dontmiss from './../../assets/images/men/miss-out.gif';
import brands from './../../assets/images/men/global-brands.gif';
import arrow from './../../assets/images/men/arrow.jpeg';
import flyingmachine from './../../assets/images/men/flying.jpeg';
import tommyhilfiger from './../../assets/images/men/tommy.jpeg';
import uspolo from './../../assets/images/men/uspolo.jpeg';
import arvind from './../../assets/images/men/arvind.jpeg';
import calvin from './../../assets/images/men/calvin.jpeg';
import SlickCarousel6 from '../components/SlickCarousel6';
import img1 from './../../assets/images/men/shirts.jpeg';
import img4 from './../../assets/images/men/TROUSERS.jpeg';
import img5 from './../../assets/images/men/tshirt.jpeg';
import img2 from './../../assets/images/men/jeans.jpeg';
import img3 from './../../assets/images/men/jackets.jpeg';






const Men = () => {
  return (
    <div className='men'>
         <div className="row">
          <div className="col-lg-12">
            <Carousels3
            image1={menbanner1}
            image2={menbanner2}
            image3={menbanner3}/>
        </div>
      </div>

      <div className="custom-container pt-5">
        <div className="row">
          <div className="col-lg-4">
             <img src={mentshirt} alt="" className='w-100 img-fluid'/>
          </div>
          <div className="col-lg-4">
            <img src={menshirt} alt="" className='w-100 img-fluid'/>
          </div>
          <div className="col-lg-4">
            <img src={menjeans} alt="" className='w-100 img-fluid'/>
          </div>
        </div>
      </div>

      <div className="customer-container pt-4">
        <div className="row">
          <div className="col-lg-12">
          <h1 className="custom-title py-4">TRENDING</h1>
          </div>
        </div>
      </div>

      <div className="customer-container pt-4">
        <div className="row">
          <div className="col-lg-12">
            <h1>product slider</h1>
          </div>
        </div>
      </div>

       {/* <div className="custom-container">
        <div className="row">
          <div className="col-lg-12">
         
          </div>
        </div>
       </div> */}

       <div className="customer-container pt-4">
        <div className="row">
          <div className="col-lg-12">
          <h1 className="custom-title py-4">BRANDS TO DISCOVER</h1>
          </div>
        </div>
      </div>

       
      <div className="custom-container pt-4">
        <div className="row">
        <div className="col-lg-4">
          <img src={arrow} alt="" className='w-100 img-fluid'/>
          </div>
          <div className="col-lg-4">
          <img src={flyingmachine} alt="" className='w-100 img-fluid'/>
          </div>
          <div className="col-lg-4">
          <img src={tommyhilfiger} alt="" className='w-100 img-fluid'/>
          </div>
          <div className="col-lg-4">
          <img src={uspolo} alt="" className='w-100 pt-4 img-fluid'/>
          </div>
          <div className="col-lg-4">
          <img src={calvin} alt="" className='w-100 pt-4 img-fluid'/>
          </div>
          <div className="col-lg-4">
          <img src={arvind} alt="" className='w-100 pt-4 img-fluid'/>
          </div>
        </div>
      </div>

       <div className="custom-container">
        <div className="row">
          <div className="col-lg-12">
          <h1 className="custom-title py-4">Coming in hot</h1> 
          <SlickCarousel6 image1={img1} image2 = {img2} image3 = {img3} image4 = {img4} image5= {img5} />
          </div>
        </div>
       </div> 


    </div>
  )
}

export default Men 
