import React from "react";
import logo from './../../assets/images/navbar/logo-lifestyle.svg';




const Footers = () => {
  return (
    <div>
      <div className="container-fluid">
        <div
          className="row mt-5"
          style={{ padding: "40px", backgroundColor: "#f2f2f2" }}
        >
          <div className="col-lg-12">
            <center>
              <h2 className="text-black text-uppercase">
                Get The Latest News & Offers In Beauty & Fashion
              </h2>
              <div className="d-flex justify-content-center align-items-center pt-3">
                <input
                  type="text"
                  className=" input-group w-25"
                  style={{ height: "40px" }}
                />
                <button className="btn  btn-dark bg-black">SUBSCRIBE</button>
              </div>
            </center>
          </div>
        </div>
      </div>

      <div className="custom-container pt-5">
        <div className="row">
          <center>
            <div className="col-lg-12 text-uppercase d-flex gap-5 justify-content-center align-items-center text-black fw-bold">
              <p>who we are</p>
              <p>frequently asked questions</p>
              <p>contact us</p>
            </div>
          </center>
        </div>
        <div className="row pt-2">
          <center>
            <div className="col-lg-12 text-uppercase d-flex gap-4 justify-content-center align-items-center">
              <p className="d-flex justify-content-center align-items-center gap-2">©2024
              <img src={logo} alt="" className="img-fluid" style={{height:'20px'}}/></p>
              <p  style={{fontSize:'12px'}}>| Privacy | PolicyTerms & Conditions</p>
            </div>
            <div className="col-lg-12 text-black fw-bold text-uppercase">
              <p>top brands</p>
              <p  style={{fontSize:'14px'}} className=" text-muted">U.S. Polo Assn. | Flying Machine | Arrow | Tommy Hilfiger | Calvin Klein</p>
            </div>
            <div className="col-lg-12 text-black fw-bold text-uppercase">
              <p>TOP CATEGORIES</p>
              <p  style={{fontSize:'14px'}} className=" text-muted">Men Clothing | Women Clothing | Kids Clothing | OffersNew Arrivals</p>
            </div>
          </center>
        </div>
      </div>

    </div>
  );
};

export default Footers;
