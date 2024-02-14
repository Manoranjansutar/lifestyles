import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';





const AddProduct = () => {

  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [brand,setBrand] = useState('');
  const [color,setColor] = useState('');
  const [gender,setGender] = useState('');
  const [category,setCategory] = useState('');
  const [oldPrice,setOldPrice] = useState('');
  const [newPrice,setNewPrice] = useState('');
  const [discount,setDiscount] = useState('');
  const [image,setImage] = useState('');
  const [image1,setImage1] = useState('');
  const [image2,setImage2] = useState('');
  const [image3,setImage3] = useState('');
  const [rating,setRating] =useState('');
  const [reviews,setReviews] = useState('');
  const [type,setType] = useState('');


  const save = ()=>{
     const url = 'http://localhost:1234/product';
     const newProduct = {
        title,
        description,
        brand,
        color,
        category,
        type,
        image,
        image1,
        image2,
        image3,
        newPrice,
        oldPrice,
        discount,
        rating,
        reviews,
        gender,
     }
     let postData = {
       headers:{'Content-Type':'application/json'},
       method:'post',
       body:JSON.stringify(newProduct)
     }
     fetch(url,postData)
     .then(response=>response.json())
     .then(msg=>{
      //  alert(title + "  " + 'successfully saved!!!');
         setTitle('');
         setBrand('');
         setCategory('');
         setDescription('');
         setColor('');
         setDiscount('');
         setGender('');
         setImage('');
         setImage1('');
         setImage2('');
         setImage3('');
         setNewPrice('');
         setOldPrice('');
         setType('');
         setRating('');
         setReviews('');
     })
  }

    
  return (
    <div className='addproduct bg-color'>
       <div className="p-4">
          
          <div className="container">
            <div className="row ">
                <h3 className='text-white pt-2 pb-3'>Add Product</h3>
                <div className="col-lg-8">
                    <div className="col-lg-12">
                        <h5 className='text-white py-3'>Product Title</h5>
                    </div>
                    <div className="col-lg-12">
                        <input type="text" className="form-control text-black "  placeholder='Enter Product Name'
                        value={title} onChange={(obj)=>setTitle(obj.target.value)} required
                        />
                    </div>
                    <div className="col-lg-12">
                        <h5 className='text-white py-3' >product Description</h5>
                    </div>
                    <div className="col-lg-12" >
                        <textarea name="" id="" cols="30" rows="5" className='form-control text-black' placeholder='Enter Product Description'
                        value={description} onChange={(obj)=>setDescription(obj.target.value)}
                        ></textarea>
                    </div>
                    <div className="col-lg-12">
                        <h5 className='text-white py-3 '>Display Images</h5>
                    </div>
                    <div className="col-lg-12 d-flex gap-4 text-white" >
                        <input type="text" className="form-control text-black w-50"  placeholder='Main Image' 
                        value={image} onChange={(obj)=>setImage(obj.target.value)} required
                        />
                        <input type="text" className="form-control text-black w-50" placeholder='Image-1' 
                        value={image1} onChange={(obj)=>setImage1(obj.target.value)} required
                        />
                    </div>
                    <div className="col-lg-12 d-flex gap-4 py-3" >
                        <input type="text" className="form-control text-black w-50" placeholder='Image-2'
                        value={image2} onChange={(obj)=>setImage2(obj.target.value)} required
                        />
                        <input type="text" className="form-control text-black w-50" placeholder='Image-3' 
                        value={image3} onChange={(obj)=>setImage3(obj.target.value)} required
                        />
                    </div>
                    <div className="col-lg-12">
                        <h5 className='text-white py-2'>Product Price</h5>
                    </div>
                    <div className="col-lg-12 d-flex gap-4" >
                        <div className='col-lg-4'>
                           <h6 className='text-white'>New Price</h6>
                           <input type="text" className="form-control text-black w-100" placeholder='Enter New Price'
                           value={newPrice} onChange={(obj)=> setNewPrice(obj.target.value)} required
                           />
                        </div>
                        <div className='col-lg-4'>
                           <h6 className='text-white'>Old Price</h6>
                           <input type="text" className="form-control text-black w-100" placeholder='Enter Old Price'
                           value={oldPrice} onChange={(obj)=>setOldPrice(obj.target.value)} required
                           />
                        </div>
                        <div className='col-lg-4'>
                           <h6 className='text-white'>Discount</h6>
                           <input type="text" className="form-control text-black w-75" placeholder='Enter Discount'
                           value={discount} onChange={(obj)=>setDiscount(obj.target.value)} required
                           />
                        </div>
                    </div>
                    <div className='col-lg-12 d-flex gap-4 py-2'>
                            <div className='col-lg-4'>
                               <h6 className='text-white'>Rating</h6>
                               <input type="text" className="form-control text-black w-100" placeholder='Enter Product Rating'
                               value={rating} onChange={(obj)=>setRating(obj.target.value)} required
                               />
                            </div>
                            <div className='col-lg-4'>
                               <h6 className='text-white'>Reviews</h6>
                               <input type="text" className="form-control text-black w-100" placeholder='Enter Product Reviews'
                               value={reviews} onChange={(obj)=>setReviews(obj.target.value)} required
                               />
                            </div>
                            <div className="col-lg-3">
                            <h6 className='text-white'>Type</h6>
                                <Form.Select aria-label="Default select example"
                                value={type} onChange={(obj)=>setType(obj.target.value)} required
                                >
                                  <option>Choose</option>
                              <option value="Old">Old</option>
                              <option value="New Arrival">New Arrival</option>
                              <option value="Sale">Sale</option>
                            </Form.Select>
                            </div>
                       </div>
                </div>
                <div className="col-lg-4">
                    <div className='container' style={{ background:'#141824'}}>
                       <h5 className='text-white pb-4 pt-2'>Category</h5>
                       <div className="col-lg-12 ">
                         <h6 className='text-white'>Gender</h6>
                         <Form.Select aria-label="Default select example"
                         value={gender} onChange={(obj)=>setGender(obj.target.value)} required
                         >
                           <option>Choose</option>
                          <option value="Men">Men</option>
                          <option value="Women">women</option>
                          <option value="Kids">kids</option>
                        </Form.Select>
                       </div>
                       <div className="col-lg-12 py-3">
                       <h6 className='text-white'>Categories</h6>
                         <Form.Select aria-label="Default select example"
                         value={category} onChange={(obj)=>setCategory(obj.target.value)} required
                         >
                           <option>Choose</option>
                          <option value="Tshirt">Tshirt</option>
                          <option value="Shirt">Shirt</option>
                          <option value="Jeans">Jeans</option>
                          <option value="Jacket">Jacket</option>
                          <option value="Tops">Tops</option>
                          <option value="Kurta">Kurta</option>
                        </Form.Select>
                       </div>
                       <div className="col-lg-12 ">
                       <h6 className='text-white'>Brand</h6>
                         <Form.Select aria-label="Default select example"
                         value={brand} onChange={(obj)=>setBrand(obj.target.value)} required
                         >
                           <option>Choose</option>
                          <option value="Arrow">Arrow</option>
                          <option value="Calvin Klein">Calvin Klein</option>
                          <option value="Flying Machine">Flying Machine</option>
                          <option value="Tommy hilfiger">Tommy hilfiger</option>
                          <option value="US POLO ASSN">US POLO ASSN</option>
                        </Form.Select>
                       </div>
                       <div className="col-lg-12 py-3">
                       <h6 className='text-white'>Color</h6>
                         <Form.Select aria-label="Default select example"
                         value={color} onChange={(obj)=>setColor(obj.target.value)} required
                         >
                           <option>Choose</option>
                         <option value="White">White</option>
                          <option value="Red">Red</option>
                          <option value="Brown">Brown</option>
                          <option value="Black">Black</option>
                          <option value="Blue">Blue</option>
                          <option value="Yellow">Yellow</option>
                          <option value="Green">Green</option>
                          <option value="Pink">Pink</option>
                        </Form.Select>
                       </div>
                       <div className='col-lg-12 pt-5 pb-4'>
                           <button className='btn btn-primary w-100 p-3' type='submit'
                           onClick={save}
                           >ADD PRODUCT</button>
                       </div>
                    </div>
                </div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default AddProduct
