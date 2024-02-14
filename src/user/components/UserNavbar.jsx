import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './../../assets/images/navbar/logo-lifestyle.svg';
import profile from './../../assets/images/navbar/profile.svg';
import cart from './../../assets/images/navbar/cart.svg';
import wishlist from './../../assets/images/navbar/wishlist-nav.svg';
import search from './../../assets/images/navbar/search1.svg';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Offers from '../pages/Offers';
import Home from '../pages/home/Home';
import DownloadApp from '../pages/DownloadApp';
import Help from '../pages/Help';
import Men from '../pages/Men';
import Women from '../pages/Women';
import NewArrival from '../pages/NewArrival';
import Wishlist from '../pages/Wishlist';
import Cart from '../pages/Cart';
import Kids from '../pages/Kids';
import Topbar from './Topbar.jsx';
import Footers from './../pages/Footers.jsx';
import Login from '../pages/Login.jsx';




const UserNavbar = () => {
  return (
    <BrowserRouter>
        <Topbar/>
    <div className='custom-container navbar-sticky'>
         <div className='row'>
           <div className='col-lg-12'>
             <Navbar expand="lg"   className="bg-white border-bottom navbar-sticky">
          <Container>
             <Link to='/'>
                <img src={logo} alt="" style={{width:'80px'}} />
             </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto fw-semibold">
                <Link to="/men" style={{textDecoration:'none',color:'black' , marginRight:'30px'}}>Men</Link>
                <Link to="/women" style={{textDecoration:'none',color:'black', marginRight:'30px'}}>Women</Link>
                <Link to="/kids" style={{textDecoration:'none',color:'black', marginRight:'30px'}}>Kids</Link>
                <Link to="/newarrival" style={{textDecoration:'none',color:'black', marginRight:'30px'}}>New Arrival</Link>
              </Nav>

              <Nav className="ms-auto">
                 <Nav.Link href="/profile" className=' d-flex  justify-content-center align-items-center me-5'>
                    <input type="text" />
                    <img src={search} alt="" style={{width:'20px'}}/>
                 </Nav.Link>
                <Link to="/login" className=' d-flex flex-column justify-content-center align-items-center fw-bold' style={{textDecoration:'none',color:'black' , marginRight:'20px'}}>
                    <img src={profile} alt="" style={{width:'20px'}}/>
                    <h4 className=' fs-6 fw-semibold'>Profile</h4>
                 </Link>
                <Link to="/wishlist" className=' d-flex flex-column justify-content-center align-items-center' style={{textDecoration:'none',color:'black' , marginRight:'20px'}}>
                    <img src={wishlist} alt="" style={{width:'20px'}}/>
                    <h4 className='fs-6 fw-semibold'> Wishlist</h4>
                </Link>
                <Link to="/cart" className=' d-flex flex-column justify-content-center align-items-center' style={{textDecoration:'none',color:'black' , marginRight:'20px'}}>
                    <img src={cart} alt="" style={{width:'20px'}}/>
                    <h4 className='fs-6 fw-semibold'>Cart</h4>
                </Link>
              </Nav> 
            </Navbar.Collapse>
          </Container>
            </Navbar>
           </div>
         </div>
    </div>


   
     
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/offers' element={<Offers />} />
          <Route path='/downloadApp' element={<DownloadApp />} />
          <Route path='/downloadApp' element={<Help />} />
          <Route path='/men' element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/newarrival" element={<NewArrival />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/kids" element={<Kids />} />
          <Route path='/login' element={<Login/>}/>
       </Routes>
       <Footers/>




    </BrowserRouter>
  )
}

export default UserNavbar
