import React from 'react'
import '../css/Object.css';
import placeholder from '../assets/img/placeholder.png';
const Object = (datos) => {
  return (

    <>
    <div className='objectContainer'>
        <img src={placeholder} alt="product" className='productImage'/>
        <p className='combo'>Combo</p>
        <h4 className='productName'>{datos.producto}</h4>
        <p className='priceValue'>{datos.precio}</p>
    </div>
    </>
  )
}

export default Object