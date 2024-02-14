import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { AiOutlineDashboard } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

const Sidebar = () => {
  const [active, setactive] = useState("1");
  const [open, setOpen] = useState(false);

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-white sticky-top"
      style={{ width: "280px", height: "100vh" , background:'#141824'}}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none" >
        <span className="fs-4">LifeStyle</span>
      </a>
      <hr />

      <ul className="nav nav-pills flex-column mb-auto">

        <li onClick={() => {setactive("1"); }}>
          <Link to="/" className={`nav-link  text-white ${active === "1" && "active"}`}>
            <AiOutlineHome className="me-2 mb-1" />
            Dashboard
          </Link>
        </li>


        <li onClick={() => { setactive("2"); }} >
          <Link to="/orders" className={`nav-link text-white ${active === "2" && "active"}`}>
            <AiOutlineDashboard className="me-2 mb-1" />
            Orders
          </Link>
        </li>
        
        <li>
        <span onClick={() => { setactive("7")}} className={`nav-link text-white  ${ active === "7" && "active" }`}>
            <Button onClick={() => setOpen(!open)}  aria-controls="example-collapse-text" aria-expanded={open}
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
              }} 
              className="mr-4" >
              <MdOutlineProductionQuantityLimits className="me-2 mb-1" />
              Product
            </Button>
        </span>
          <Collapse in={open}>
            <div id="example-collapse-text">
              <li onClick={() => { setactive("5")}} >
                <Link to="/productdetails" className={`nav-link text-white  ${
                    active === "5" && "active" }`}>
                  <AiOutlineDashboard className="me-2 mb-1" />
                  Product Details
                </Link>
              </li>
              <li onClick={() => { setactive("6")}}>
                <Link to="/addproduct" className={`nav-link text-white  ${
                    active === "6" && "active" }`}>
                  <AiOutlineDashboard className="me-2 mb-1" />
                  Add Product 
                </Link>
              </li>
            </div>
          </Collapse>
        </li>


        <li onClick={() => { setactive("4");}} >
          <a href="#" className={`nav-link text-white ${active === "4" && "active"}`}>
            Customers
          </a>
        </li>

      </ul>

      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
        <ul
          className="dropdown-menu dropdown-menu-dark text-small shadow"
          aria-labelledby="dropdownUser1"
        >
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

{
  /* <a href="#" class="menu__link menu__link--sublist menu__link--sublist-caret" aria-expanded="true">Utilities</a> */
}
