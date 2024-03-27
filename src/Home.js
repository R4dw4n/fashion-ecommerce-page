import React, { useState } from 'react'
import Button from './Button';
import Cards from './Cards';
import Footer from './Footer';
import './Home.css'
import Sales from './Sales';
import Trends from './Trends';

function Home() {
  let imgs = ['rsz_img-11.jpg', 'img-12.jpg', 'img-2.jpg'];
  const [index, setIndex] = useState(0);

  const interval = setInterval(() => {
    setIndex((index + 1) % imgs.length);

    clearInterval(interval);
    }, 3000);

  return (
    <>
    <div className='hero-container' style={{backgroundImage: `url(${imgs[index]})`}}>
      <h1 className='hero-header'>BUY 1 <br></br> GET 1 FREE</h1>
      <p className='hero-p'>MONTHLY OFFER</p>
      <Button customStyle='hero-btn'>SHOP NOW</Button>
    </div>

    <Cards />
    <Trends />
    <Sales />
    <Footer />
    </>
  )
}

export default Home