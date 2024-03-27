import React from 'react'
import './Products.css'
import Button from '../Button'
import Product from '../Product'
import Footer from '../Footer'

function Products() {
  return (
    <>
    <div className="topper" style={{ backgroundImage: "url(img-9.jpg)" }}>
        <div className="wrapper">
          <h1>All Products</h1>
          <Button goTo="/" customStyle="back-home">
            Back Home
          </Button>
        </div>
      </div>

      <div className='hero-section'>
        <div className='container'>
            <Product src="img-6.jpg" price="200" name="high quality product" />
            <Product src="img-6.jpg" price="200" name="high quality product" />
            <Product src="img-6.jpg" price="200" name="high quality product" />
            <Product src="img-6.jpg" price="200" name="high quality product" />
            <Product src="img-6.jpg" price="200" name="high quality product" />
            <Product src="img-6.jpg" price="200" name="high quality product" />
            <Product src="img-6.jpg" price="200" name="high quality product" />
            <Product src="img-6.jpg" price="200" name="high quality product" />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Products