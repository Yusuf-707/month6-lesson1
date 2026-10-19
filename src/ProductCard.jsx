import React from 'react'

export default function ProductCard(props) {
    const {title, brand, description, images, price, rating} = props
  return (
    <div className='product__card'>
        <h3 className='product__card-title'>{title}</h3>
        <span className='product__card-brand'>{brand}</span>
        <img className='product__card-images' src={images[0]} alt="" />
        <span className='product__card-description'>
        <p>{description}</p>
        </span>
        <span className='product__card-price'><strong> цена:</strong>{price}</span>
    </div>
  )
}
