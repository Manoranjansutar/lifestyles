import { CiCircleRemove } from "react-icons/ci"; 
import { AiFillEdit } from "react-icons/ai"; 
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";


const ProductDetails = () => {

   const [allProduct,updateProduct] = useState([]);

   const getProduct = () =>{
    fetch('http://localhost:1234/product')
    .then(response =>response.json())
    .then(productArray =>{
        updateProduct(productArray.reverse());
    })
 }

 useEffect(() =>{
    getProduct();
 },[1])





  return (
    <div className="productdetails bg-color">
      <div className="p-4">
        <div className="container">
          <div className="row">
            <h3 className="text-white pt-2 pb-3">Product ({allProduct.length} Items)</h3>
            <div className="col-lg-12">
              <Table striped  hover variant="dark" className="text-center"> 
                <thead>
                  <tr>
                    <th>Product ID</th>
                    <th>Product Image</th>
                    <th>Brand</th>
                    <th>Gender</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th>Edit</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                 {
                    allProduct.map((product,index) =>{ 
                       return(
                        <tr key={index}>
                        <td>{product.id}</td>
                       <td>
                         <img src={product.image} height='100' width='100' alt="" />
                       </td>
                       <td>{product.brand}</td>
                       <td>{product.gender}</td>
                       <td>{product.category}</td>
                       <td>{product.newPrice}</td>
                       <td>{product.discount}</td>
                       <td><AiFillEdit className="fs-4 text-primary fw-bolder fw-bolder" /></td>
                       <td><CiCircleRemove className=" fs-4 text-danger"/></td>
                   </tr>
                       )
                    })
                 }
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
