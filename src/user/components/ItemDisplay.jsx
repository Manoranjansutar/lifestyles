import React, { useEffect, useState } from 'react'
import Item from './Item';

const ItemDisplay = () => {

    const [allProduct,updateProduct] = useState([]);

    const getProduct = () =>{
     fetch('http://localhost:1234/product')
     .then(response =>response.json())
     .then(productArray =>{
         updateProduct(productArray);
     })
  }
 
  useEffect(() =>{
     getProduct();
  },[1])


  return (
    <div className='pt-5'>
      {
          allProduct.map((item,index) =>{
              if(item.brand === 'Arrow'){
                 return(
                    <Item  key={index}
                    title = {item.title}
                   gender ={item.gender}
                   image={item.image}
                   image1={item.image1}
                   image2={item.image2}
                   newPrice={item.newPrice}
                   oldPrice={item.oldPrice}
                   rating={item.rating}
                   reviews={item.reviews}
                   category={item.category}
                   discount={item.discount}
                   brand={item.brand}/>
                  
                 )
              }
          })
      }
    </div>
  )
}

export default ItemDisplay
