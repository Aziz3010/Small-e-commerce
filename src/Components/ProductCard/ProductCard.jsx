import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, image, title, category, price, currentPrice, colors }) => {
  return <Link to={`/shop/${id}`} className='ProductCard'>
    <div className="image_box">
      <img src={image} alt={title} />
    </div>
    <div className="product_details">
      <h5>{title}</h5>
      <p>{category}</p>
      <div className="prices">
        <p className='price'>${price}</p>
        <p className='currentPrice'>${currentPrice}</p>
      </div>
      <div className="colors_box">
        {colors.map((ele, index) => <div key={index} style={{ 'backgroundColor': `${ele}` }}></div>)}
      </div>
    </div>
  </Link>
}

export default ProductCard;