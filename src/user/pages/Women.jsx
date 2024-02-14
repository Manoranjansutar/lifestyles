import React from "react";
import womenbanner1 from "./../../assets/images/women/women-store-banner1.gif";
import womenbanner2 from "./../../assets/images/women/women-banner-store2.jpeg";
import womenbanner3 from "./../../assets/images/women/women-banner-store3.jpeg";
import Carousels3 from "../components/Carousels3";
import fusion from "./../../assets/images/women/fusion.jpeg";
import kurta from "./../../assets/images/women/kurta.jpeg";
import suit from "./../../assets/images/women/suit.jpeg";
import presentperfect from "./../../assets/images/women/presentperfect.gif";
import presentperfect1 from "./../../assets/images/women/presentperfect1.png";
import presentperfect2 from "./../../assets/images/women/presentperfect2.png";
import presentperfect3 from "./../../assets/images/women/presentperfect3.png";
import crushworthy from "./../../assets/images/women/crushworthy.gif";
import brands from "./../../assets/images/women/brands.jpeg";
import brands1 from "./../../assets/images/women/brands1.jpeg";
import brands2 from "./../../assets/images/women/brands2.jpeg";
import brands3 from "./../../assets/images/women/brands3.jpeg";
import topbrands from "./../../assets/images/women/topbrands.gif";
import freealterations from './../../assets/images/women/freealterations.png';
import returns from './../../assets/images/women/returns.png';
import newstyles from './../../assets/images/women/newstyles.png';
import shirts from './../../assets/images/women/shirts.jpeg';
import skirt from './../../assets/images/women/skirts.jpeg';
import tees from './../../assets/images/women/tees.jpeg';
import tops from './../../assets/images/women/tops.jpeg';
import jeans from './../../assets/images/women/jeans.jpeg';
import dress from './../../assets/images/women/dress.jpeg';
import sweetsavings from './../../assets/images/women/sweetsavings.gif';









const Women = () => {
  return (
    <div className="women">
      <div className="row">
        <div className="col-lg-12">
          <Carousels3
            image1={womenbanner1}
            image2={womenbanner2}
            image3={womenbanner3}
          />
        </div>
      </div>

      
        <div className="container pt-5">
          <div className="row justify-content-center  align-content-center w-100  mt-2">
              <div className="col-lg-4">
                 <div className=" d-flex flex-column gap-2 ">
                <center>
                   <img src={freealterations} alt="" className="w-25 img-fluid text-center"/>
                    <p className="w-50">Free Alterations at Store</p>
                </center>
                 </div>
              </div>
              <div className="col-lg-4">
              <div className=" d-flex flex-column gap-2">
                  <center>
                    <img src={returns} alt="" className="w-25 img-fluid text-center"/>
                    <p className="w-50">15days Return</p>
                  </center>
              </div>
              </div>
              <div className="col-lg-4">
              <div className=" d-flex flex-column gap-2">
                  <center>
                    <img src={newstyles} alt="" className="w-25 img-fluid text-center"/>
                    <p className="w-50">New styles every week</p>
                  </center>
               </div>
              </div>
          </div>
        </div>

        <div className="custom-container">
          <div className="row">
            <div className="d-grid gap-4">
                 <div className="col-lg-12 d-flex justify-content-center gap-4">
                    <img src={tops} alt="" className="w-25 img-fluid"/>
                    <img src={shirts} alt="" className="w-25 img-fluid"/>
                    <img src={dress} alt="" className="w-25 img-fluid"/>
                 </div>
                  <div className="col-lg-12 d-flex justify-content-center align-items-center gap-4">
                    <img src={tees} alt="" className="w-25 img-fluid"/>
                    <img src={skirt} alt="" className="w-25 img-fluid"/>
                    <img src={jeans} alt="" className="w-25 img-fluid"/>
                  </div>
              </div>
          </div>
        </div>





      

      <div className="custom-container">
        <div className="row pt-5">
          <div className="col-lg-4 col-4">
            <img src={fusion} alt="" className="w-100 img-fluid" />
          </div>
          <div className="col-lg-4 col-4">
            <img src={kurta} alt="" className="w-100 img-fluid" />
          </div>
          <div className="col-lg-4 col-4">
            <img src={suit} alt="" className="w-100 img-fluid" />
          </div>
        </div>
        <div className="row pt-5 justify-content-center">
          <div className="col-lg-12">
            <img src={presentperfect} alt="" className="w-100 img-fluid" />
          </div>
          <div className="col-lg-4 col-4" style={{ width: "350px" }}>
            <img src={presentperfect1} alt="" className="w-100 img-fluid w-" />
          </div>
          <div className="col-lg-4 col-4" style={{ width: "350px" }}>
            <img src={presentperfect2} alt="" className="w-100 img-fluid" />
          </div>
          <div className="col-lg-4 col-4" style={{ width: "350px" }}>
            <img src={presentperfect3} alt="" className="w-100 img-fluid" />
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-lg-12">
            <img src={crushworthy} alt="" className="w-100 img-fluid" />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <h1>product slider</h1>
      </div>

      <div className="custom-container">
        <div className="row">
          <div className="col-lg-12 pt-5">
            <img src={topbrands} alt="" className="w-100 img-fluid" />
          </div>
          <div className="col-lg-3">
            <img src={brands} alt="" className="w-100  img-fluid" />
          </div>
          <div className="col-lg-3">
            <img src={brands1} alt="" className="w-100 img-fluid" />
          </div>
          <div className="col-lg-3">
            <img src={brands2} alt="" className="w-100 img-fluid" />
          </div>
          <div className="col-lg-3">
            <img src={brands3} alt="" className="w-100 img-fluid" />
          </div>
        </div>
      </div>

      <div className="custom-container">
        <div className="row pt-5">
          <div className="col-lg-12">
          <img src={sweetsavings} alt="" className="w-100 img-fluid" />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <h1>Max discount product slider</h1>
      </div>
      
       <div className="custon-container">
        <div className="row">
          <div className="col-lg-12 py-3 mt-4 bg-black rounded-3">
             <h3 className="text-center text-white">SHOP ALL</h3>
          </div>
        </div>
       </div>

    </div>
  );
};

export default Women;
