import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
import Orders from '../pages/Orders'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from '../pages/Product'
import SellerNav from './SellerNav'
import ProductDetails from '../pages/ProductDetails'
import AddProduct from '../pages/AddProduct'






const SellerNavbar = () => {

  
  return (


    <BrowserRouter>
        <div className='d-flex'>
          <div className='w-auto' >
            <Sidebar/>
          </div>
          <div className='col overflow-auto'>
             
               <Routes>
                  <Route path='/' element={<><SellerNav/><Dashboard/></>}  / >
                  <Route path='/orders' element={<><SellerNav/><Orders/></>}/>
                  <Route path='/productdetails' element={<><SellerNav/><ProductDetails/></>}/>
                  <Route path='/addproduct' element={<><SellerNav/><AddProduct/></>}/>

               </Routes>
             
          </div>
        </div>
  </BrowserRouter>
  )
}

export default SellerNavbar

