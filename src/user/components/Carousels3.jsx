import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


const Carousels3 = (props) => {
  return (
   <div className="row">
    <div className="col-lg-12">
    <Carousel data-bs-theme="dark">
      <Carousel.Item >
        <img
          className="d-block w-100 img-fluid"
          src={props.image1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={props.image2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={props.image3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
   </div>
  )
}

export default Carousels3
