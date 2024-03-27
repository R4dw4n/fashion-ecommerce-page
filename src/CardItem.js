import React from 'react'
import './CardItem.css'

function CardItem({title, iconLogo, text}) {
  return (
    <div className='card-container'>
        <i className={`icon ${iconLogo}`}></i>
        <h4>{title}</h4>
        <p className='card-p'>{text}</p>
    </div>
  )
}

export default CardItem