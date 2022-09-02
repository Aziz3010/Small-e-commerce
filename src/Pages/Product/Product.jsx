import React from 'react';
import {useParams} from 'react-router-dom';
import Products from '../../ProductsAPI.js'

const Product = () => {
  const {id} = useParams();
  // console.log(Products[id]);

  return <section className='productDetails'>
    <div className="container">
      <div className="row">
        <div className="col-md-6"><div className="left"></div></div>
        <div className="col-md-6"><div className="right"></div></div>
      </div>
    </div>
  </section>
}

export default Product