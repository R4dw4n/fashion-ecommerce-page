import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'

function Product({src, name, price}) {
  return (
    <div className='product-wrapper'>
       <div className='img-wrapper'>
            <Link to='/'>
                <img src={src} alt={name} width='300px' height='300px'/>
            </Link>
        </div> 

        <div className='details'>
            <h3 className='product-name'>
                <Link to='/' className='product-link'>{name}</Link>
            </h3>

        <div className='product-price-details'>
            <ul className='price-ul'>
                <li className='price'>${price}.00</li>
                <li className='price'><del>${+price + 100}.00</del></li>
            </ul>
        </div>

        </div>
    </div>
  )
}

export default Product