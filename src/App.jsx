import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserNavbar from "./user/components/UserNavbar";
import SellerNavbar from "./seller/components/SellerNavbar";
import 'bootstrap/dist/js/bootstrap.bundle.js'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




function App() {
  let sellerLogin = false;
  return (
    sellerLogin ? <SellerNavbar /> :<UserNavbar/>
  )
  
}

export default App
