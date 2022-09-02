import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../Components/ProductCard/ProductCard.jsx';
import Products from '../../ProductsAPI.js'
import img1 from "../../assets/product13.jpg";
import img2 from "../../assets/product14.jpg";
import img3 from "../../assets/product15.jpg";
import rightArrow from "../../assets/leftArrow.svg";
import leftArrow from "../../assets/rightArrow.svg";
import arrow2Icon from "../../assets/arrow2.svg";
import fillStar from "../../assets/fill_star.svg";
import unFillStar from "../../assets/unfill_star.svg";
import likebtn from "../../assets/likebtn.svg";
import cartbtn from "../../assets/cartbtn.svg";
import eyebtn from "../../assets/eyebtn.svg";
import './Product.css';
import { useEffect } from 'react';

const Product = () => {
  const { id } = useParams();
  const stars_box = useRef();

  useEffect(() => {
    stars_box.current.innerHTML = "";
    for (let i = 0; i < Products[id - 1].rank; i++) {
      stars_box.current.innerHTML += `<img src=${fillStar} alt="fillStar" />`;
    }
    for (let j = 0; j < (5 - Products[id - 1].rank); j++) {
      stars_box.current.innerHTML += `<img src=${unFillStar} alt="unFillStar" />`;
    }
    console.log("aaa");
  },[id]);

  return <section className='productDetails'>

    <div className="top_section">
      <div className="container">
        <div className="route">
          <p>Home</p>
          <img src={arrow2Icon} alt="arrow2" />
          <p>Shop</p>
        </div>

        <div className="row product_details_section">
          <div className="col-md-6">
            <div className="left">
              <div className="hero_image">
                <img src={img1} alt="img1" />
              </div>
              <img src={leftArrow} alt="leftArrow" className='hero_image_arrows_l' />
              <img src={rightArrow} alt="rightArrow" className='hero_image_arrows_r' />
              <div className="another_images">
                <img src={img2} alt="img2" />
                <img src={img3} alt="img3" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right">
              <h4>{Products[id - 1].title}</h4>
              <div className="rank_stars">
                <div className="stars" ref={stars_box}></div>
                <h6>10 Reviews</h6>
              </div>
              <h3>${(+Products[id - 1].currentPrice).toLocaleString('en-US')}</h3>
              <div className="availability">
                <h6>Availability :</h6>
                {Products[id - 1].quantity > 0 ? <h6 className='in'>In Stock</h6> : <h6 className='out'>Out Of Stock</h6>}
              </div>
              <p>{Products[id - 1].desc}</p>
              <hr />
              <div className="colors">
                {Products[id - 1].colors.map((ele, index) => <div key={index} style={{ 'backgroundColor': `${ele}` }}></div>)}
              </div>
              <div className="btns">
                <button className='addToCartBtn'>Add To Cart</button>
                <button><img src={likebtn} alt="likebtn" /></button>
                <button><img src={cartbtn} alt="cartbtn" /></button>
                <button><img src={eyebtn} alt="eyebtn" /></button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div className="container">
      <h3 className='bestseller_title'>bestseller products</h3>
      <hr />
      <div className="row">
        {Products.filter((ele) => ele.rank >= 4).map((product, index) => {
          return (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12">
              <ProductCard id={product.id} image={product.image} title={product.title} category={product.category} price={product.price} currentPrice={product.currentPrice} colors={product.colors} />
            </div>
          )
        })}
      </div>
    </div>
  </section>
}

export default Product;