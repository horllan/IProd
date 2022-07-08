import React, {useState, useEffect} from 'react'
import useSharedState from "./UseSharedState"
import Modal from "./Modal"

export default function Home() {
  const {product, productList, setProduct, setProductList, details} = useSharedState()
  
  const handleChange = (e)=>{
    e.preventDefault();
    const {name, value} = e.target
    setProduct({...product, [name] : value})
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    const newProduct = { id : Date.now().toString(), ...product}
     const {productName, productPrice, productInfo} = product
    if (productName && productPrice && productInfo) {
      

     setProductList([...productList, newProduct])
     
    setProduct(details);
  

    };
   }
  return (
    <div>
      <h4 className="center teal-text">IProd Home page</h4>
      <p className="flow-text">Fill the form with the appropriate details to Add new products</p>
      <form>
        <div className="input-field">
          <label htmlFor="productName">Product Name</label>
          <input onChange={(e)=> handleChange(e)} name="productName" id="productName" type="text" />
        </div>
        <div className="input-field">
          <label htmlFor="productPrice">Product Price</label>
          <input onChange={(e)=> handleChange(e)} name="productPrice" id="productPrice" type="number"/>
        </div>
        <div className="input-field">
          <label htmlFor="info">Product Info</label>
          <input onChange={(e)=> handleChange(e)} name="productInfo" id="productInfo" type="text"/>
        </div>
        <div className="input-field center">
        <button onClick={(e)=>handleSubmit(e)} type="submit" className=" hoverable yellow btn btn-small btn-floating"><i className="material-icons black-text">add</i></button>
        </div>
      </form>
    </div >
  )
  }