import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ image, title, category, price, currentPrice, colors }) => {
  return <div className='ProductCard'>
    <div className="image_box">
      <img src={image} alt={title} />
    </div>
    <div className="product_details">
      <h5>{title}</h5>
      <Link to="/">{category}</Link>
      <div className="prices">
        <p className='price'>${price}</p>
        <p className='currentPrice'>${currentPrice}</p>
      </div>
      <div className="colors_box">
        {colors.map((ele, index) => <div key={index} style={{'backgroundColor': `${ele}`}}></div>)}
      </div>
    </div>
  </div>
}

export default ProductCard;