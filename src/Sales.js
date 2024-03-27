import React from 'react'
import { Link } from 'react-router-dom'
import './Sales.css'

function Sales() {
  return (
    <div className='sales-container'>
        <div className='trend-item'>
            <div className='head-title'>
                <h3>TOP <span className='lol'>SALE</span></h3>
            </div>

            <div className='sales-content'>
                <div className='pic-content'>
                    <span className='label'>New</span>
                    <Link to='/products'><img src='img-4.jpg' alt='sale' /></Link>
                </div>

                <div className='sale-description'>
                    <Link to='/products' className='product-name'><h4>High Quality Product</h4></Link>
                    <div className='prices'>
                        <ul>
                            <li className='price'>$200.00</li>
                            <li className='price'><del>$300.00</del></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='sales-content'>
                <div className='pic-content'>
                    <span className='label'>New</span>
                    <Link to='/products'><img src='img-5.jpg' alt='sale' /></Link>
                </div>

                <div className='sale-description'>
                    <Link to='/products' className='product-name'><h4>High Quality Product</h4></Link>
                    <div className='prices'>
                        <ul>
                            <li className='price'>$200.00</li>
                            <li className='price'><del>$300.00</del></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='sales-content'>
                <div className='pic-content'>
                    <span className='label'>New</span>
                    <Link to='/products'><img src='img-6.jpg' alt='sale' /></Link>
                </div>

                <div className='sale-description'>
                    <Link to='/products' className='product-name'><h4>High Quality Product</h4></Link>
                    <div className='prices'>
                        <ul>
                            <li className='price'>$200.00</li>
                            <li className='price'><del>$300.00</del></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className='trend-item'>
            <div className='head-title'>
                <h3>BEST <span className='lol'>SALE</span></h3>
            </div>

            <div className='sales-content'>
                <div className='pic-content'>
                    <span className='label'>New</span>
                    <Link to='/products'><img src='img-4.jpg' alt='sale' /></Link>
                </div>

                <div className='sale-description'>
                    <Link to='/products' className='product-name'><h4>High Quality Product</h4></Link>
                    <div className='prices'>
                        <ul>
                            <li className='price'>$200.00</li>
                            <li className='price'><del>$300.00</del></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='sales-content'>
                <div className='pic-content'>
                    <span className='label'>New</span>
                    <Link to='/products'><img src='img-5.jpg' alt='sale' /></Link>
                </div>

                <div className='sale-description'>
                    <Link to='/products' className='product-name'><h4>High Quality Product</h4></Link>
                    <div className='prices'>
                        <ul>
                            <li className='price'>$200.00</li>
                            <li className='price'><del>$300.00</del></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='sales-content'>
                <div className='pic-content'>
                    <span className='label'>New</span>
                    <Link to='/products'><img src='img-6.jpg' alt='sale' /></Link>
                </div>

                <div className='sale-description'>
                    <Link to='/products' className='product-name'><h4>High Quality Product</h4></Link>
                    <div className='prices'>
                        <ul>
                            <li className='price'>$200.00</li>
                            <li className='price'><del>$300.00</del></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className='trend-item'>
            <div className='head-title'>
                <h3>BEST <span className='lol'>OFFER</span></h3>
            </div>

            <div className='sales-content'>
                <div className='pic-content'>
                    <span className='label'>New</span>
                    <Link to='/products'><img src='img-4.jpg' alt='sale' /></Link>
                </div>

                <div className='sale-description'>
                    <Link to='/products' className='product-name'><h4>High Quality Product</h4></Link>
                    <div className='prices'>
                        <ul>
                            <li className='price'>$200.00</li>
                            <li className='price'><del>$300.00</del></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='sales-content'>
                <div className='pic-content'>
                    <span className='label'>New</span>
                    <Link to='/products'><img src='img-5.jpg' alt='sale' /></Link>
                </div>

                <div className='sale-description'>
                    <Link to='/products' className='product-name'><h4>High Quality Product</h4></Link>
                    <div className='prices'>
                        <ul>
                            <li className='price'>$200.00</li>
                            <li className='price'><del>$300.00</del></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='sales-content'>
                <div className='pic-content'>
                    <span className='label'>New</span>
                    <Link to='/products'><img src='img-6.jpg' alt='sale' /></Link>
                </div>

                <div className='sale-description'>
                    <Link to='/products' className='product-name'><h4>High Quality Product</h4></Link>
                    <div className='prices'>
                        <ul>
                            <li className='price'>$200.00</li>
                            <li className='price'><del>$300.00</del></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Sales