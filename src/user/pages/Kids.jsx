import React from 'react'
import Carousels3 from '../components/Carousels3'
import kidsbanner1 from './../../assets/images/kids/kidsbanner.gif';
import kidsbanner2 from './../../assets/images/kids/kidbanner2.png';
import kidsbanner3 from './../../assets/images/kids/kidsbanner3.jpeg';
import kidscategory1 from './../../assets/images/kids/kidscategory1.jpeg';
import kidscategory2 from './../../assets/images/kids/kidscategory2.jpeg';
import kidscategory3 from './../../assets/images/kids/kidscategory3.jpeg';
import kidscategory4 from './../../assets/images/kids/kidscategory4.jpeg';
import kidscategory5 from './../../assets/images/kids/kidscategory5.jpeg';
import kidscategory6 from './../../assets/images/kids/kidscategory6.jpeg';
import arrow from './../../assets/images/men/arrow.jpeg';
import flyingmachine from './../../assets/images/men/flying.jpeg';
import tommyhilfiger from './../../assets/images/men/tommy.jpeg';
import uspolo from './../../assets/images/men/uspolo.jpeg';
import arvind from './../../assets/images/men/arvind.jpeg';
import calvin from './../../assets/images/men/calvin.jpeg';




const Kids = () => {
  return (
    <div className='kids'>
      <div className="row">
        <div className="col-lg-12">
            <Carousels3 image1={kidsbanner1} image2={kidsbanner2} image3={kidsbanner3} />
        </div>
      </div>

      <div className="custom-container pt-1">
        <div className="row pt-5">
          <div className="col-lg-4">
            <img src={kidscategory1} alt="" className='w-100 img-fluid' />
          </div>
          <div className="col-lg-4">
          <img src={kidscategory2} alt="" className='w-100 img-fluid' />
          </div>
          <div className="col-lg-4">
          <img src={kidscategory3} alt="" className='w-100 img-fluid' />
          </div>
          <div className="col-lg-4">
          <img src={kidscategory4} alt="" className='w-100 img-fluid pt-4' />
          </div>
          <div className="col-lg-4">
          <img src={kidscategory5} alt="" className='w-100 img-fluid pt-4' />
          </div>
          <div className="col-lg-4">
          <img src={kidscategory6} alt="" className='w-100 img-fluid pt-4' />
          </div>
        </div>
      </div>

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



    </div>
  )
}

export default Kids
