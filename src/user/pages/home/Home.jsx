import React from "react";
import Carousels3 from "../../components/Carousels3";
import bank from "./../../../assets/images/home/bank.gif";
import homebanner1 from "./../../../assets/images/home/home-banner1.gif";
import homebanner2 from "./../../../assets/images/home/home-banner2.jpg";
import homebanner3 from "./../../../assets/images/home/home-banner3.jpg";
import wintersale from "./../../../assets/images/home/wintersale.webp";
import last1 from "./../../../assets/images/home/last1.jpeg";
import last2 from "./../../../assets/images/home/last2.jpeg";
import last3 from "./../../../assets/images/home/last3.jpeg";
import last4 from "./../../../assets/images/home/last4.jpeg";
import watch from "./../../../assets/images/home/watch-discover.gif";
import header from "./../../../assets/images/home/header.jpeg";
import video1 from "./../../../assets/images/home/video1.mp4";
import video2 from "./../../../assets/images/home/video2.mp4";
import video3 from "./../../../assets/images/home/video3.mp4";
import video4 from "./../../../assets/images/home/video4.mp4";
import brands from "./../../../assets/images/home/global-brands.gif";
import temptingdiscount from "./../../../assets/images/home/tempting-discounts.gif";
import men20 from "./../../../assets/images/home/min-20.jpeg";
import men40 from "./../../../assets/images/home/min-40.jpeg";
import men60 from "./../../../assets/images/home/min-60.jpeg";
import men50 from "./../../../assets/images/home/men50.jpeg";
import urban from "./../../../assets/images/home/urban.gif";
import urban1 from "./../../../assets/images/home/urban1.jpeg";
import urban2 from "./../../../assets/images/home/urban2.jpeg";
import urban3 from "./../../../assets/images/home/urban3.jpeg";
import urban4 from "./../../../assets/images/home/urban4.jpeg";
import faves from "./../../../assets/images/home/faves.gif";
import img1 from "./../../../assets/images/home/img1.jpeg";
import img2 from "./../../../assets/images/home/img2.jpeg";
import img3 from "./../../../assets/images/home/img3.jpeg";
import img4 from "./../../../assets/images/home/img4.jpeg";
import img5 from "./../../../assets/images/home/img5.jpeg";
import img6 from "./../../../assets/images/home/img6.jpeg";
import customertestimonials from "./../../../assets/images/home/customer-testimonials.gif";
import customertestimonials1 from "./../../../assets/images/home/testimonials1.jpeg";
import customertestimonials2 from "./../../../assets/images/home/testimonials2.jpeg";
import customertestimonials3 from './../../../assets/images/home/testimonial4..jpeg';
import personalshopping from './../../../assets/images/home/personal-shopper.webp';
import SlickCarousel6 from "../../components/SlickCarousel6";
import brands1 from './../../../assets/images/slick/brands1.jpeg';
import brands2 from './../../../assets/images/slick/brands2.jpeg';
import brands3 from './../../../assets/images/slick/brands3.jpeg';
import brands4 from './../../../assets/images/slick/brands5.jpeg';
import brands5 from './../../../assets/images/slick/brands4.jpeg';
import ItemDisplay from "../../components/ItemDisplay";




const Home = () => {
  return (
    <div className="home">
      <div className="row">
        <div className="col-lg-12">
          <Carousels3
            image1={homebanner1}
            image2={homebanner2}
            image3={homebanner3}
          />
        </div>
      </div>
  

      {/* <div className="custom-container">
        <div className="row ">
          <div className="col-lg-12">
            <img
              src={bank}
              alt=""
              className="py-sm-1 w-100 py-md-3 img-fluid mt-4 h-75"
            />
          </div>
        </div>
      </div> */}

      <div className="custom-container pt-4 pb-2">
        <div className="row">
          <div className="col-lg-12 col-auto">
            <img
              src={wintersale}
              alt=""
              className="py-2 img-fluid w-100 py-sm-1"
            />
          </div>
        </div>
      </div>

      <div className="custom-container pt-2 ">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <img src={last1} alt="" className="img-fluid rounded-4" />
          </div>
          <div className="col-lg-3 col-md-6">
            <img src={last2} alt="" className="img-fluid rounded-4 " />
          </div>
          <div className="col-lg-3 col-md-6">
            <img src={last3} alt="" className="img-fluid rounded-4" />
          </div>
          <div className="col-lg-3 col-md-6">
            <img src={last4} alt="" className="img-fluid rounded-4" />
          </div>
        </div>
      </div>

      <div className="custom-container">
        <div className="row">
          <div className="col-lg-12">
            <img src={watch} alt="" className="w-100 pt-4" />
          </div>
          <div className="col-lg-12">
            <img src={header} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-lg-3">
            <video src={video1} autoPlay loop className="img-fluid rounded-4"></video>
          </div>
          <div className="col-lg-3">
            <video src={video2} autoPlay loop className="img-fluid rounded-4"></video>
          </div>
          <div className="col-lg-3">
            <video src={video3} autoPlay loop className="img-fluid rounded-4"></video>
          </div>
          <div className="col-lg-3">
            <video src={video4} autoPlay loop className="img-fluid rounded-4"></video>
          </div>
        </div>
      </div>

      <div className="custom-container">
        <div className="row">
          <div className="col-lg-12">
          <h1 className="custom-title py-4">BRANDS TO DISCOVER</h1>
          </div>
        </div>
      </div>

      <div className="custon-container">
        <div className="row">
          <div className="col-lg-12 rounded-3">
             <SlickCarousel6 image1={brands1} image2 = {brands2} image3 = {brands3} image4 = {brands4} image5= {brands5} />
          </div>
        </div>
       </div>

      <div className="custom-container">
        <div className="row">
          <div className="col-lg-12">
          <h1 className="custom-title py-4">tempting discount</h1>
          </div>
        </div>
        <div className="row pb-2 d-flex justify-content-center  align-items-center">
          
            <div className="col-lg-3 ">
              <img src={men20} alt="" className="img-fluid w-100 py-sm-1" />
            </div>
            <div className="col-lg-3">
              <img src={men40} alt="" className="img-fluid w-100 py-sm-1" />
            </div>
            <div className="col-lg-3">
              <img src={men60} alt="" className="img-fluid w-100 py-sm-1" />
            </div>
          
          <div className="col-lg-12 py-3 ">
            <img src={men50} alt="" className="img-fluid w-100 py-sm-1" />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <img src={urban} alt="" className="w-100" />
          </div>
        </div>
      </div>

       <div className="custom-container">
          <div className="col-lg-12">
            <div className="row pt-3">
              <div className="col-lg-3 col-md-6">
                <img src={urban1} alt="" className="img-fluid rounded-4" />
              </div>
              <div className="col-lg-3 col-md-6">
                <img src={urban2} alt="" className="img-fluid rounded-4 " />
              </div>
              <div className="col-lg-3 col-md-6">
                <img src={urban3} alt="" className="img-fluid rounded-4" />
              </div>
              <div className="col-lg-3 col-md-6">
                <img src={urban4} alt="" className="img-fluid rounded-4" />
              </div>
            </div>
          </div>
       </div>
    

      <div className="custom-container">
        <div className="row">
          <div className="col-lg-12">
          <h1 className="custom-title py-4">markdown on faves</h1>
          </div>
        </div>
      </div>

      <div className="faves d-flex gap-2">
        <div className="d-flex flex-column gap-2">
          <img src={img1} alt="" className="w-100" />
          <img src={img4} alt="" className="w-100" />
        </div>
        <div className="d-flex flex-column gap-2">
          <img src={img2} alt="" className="w-100" />
          <img src={img5} alt="" className="w-100" />
        </div>
        <div className="d-flex flex-column gap-2">
          <img src={img3} alt="" className="w-100" />
          <img src={img6} alt="" className="w-100" />
        </div>
      </div>

      <div className="custom-container">
        <div className="row">
          <div className="col-lg-12">
          <h1 className="custom-title py-4">Customer testimonials</h1>
          </div>
        </div>
        <div className="col-lg-12">
          <Carousels3
            image1={customertestimonials1}
            image2={customertestimonials2}
            image3={customertestimonials3}
          />
        </div>
      </div>

      <div className="custom-container">
        <div className="row">
          <div className="col-lg-12 mt-4">
             <img src={personalshopping} alt=""  className="img-fluid w-100 py-sm-1" />
          </div>
        </div>
      </div>

      <div className="custon-container">
        <div className="row">
          <div className="col-lg-12 py-3 mt-4 bg-black rounded-3">
             <h3 className="text-center text-white">SHOP ALL</h3>
          </div>
        </div>
       </div>


      
          
      <div className="flex">
           <ItemDisplay/>
           
      </div>
      
      
    </div>
  );
};

export default Home;
