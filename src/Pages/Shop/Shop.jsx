import React from 'react'
import ProductCard from '../../Components/ProductCard/ProductCard'
import Products from "../../ProductsAPI.js";
import searchIcon from "../../assets/search-inp.svg";
import menuGridIcon from "../../assets/menuGrid.svg";
import listGridIcon from "../../assets/listGrid.svg";
import arrow2Icon from "../../assets/arrow2.svg";
import { Link } from "react-router-dom";

import "./Shop.css";

const Shop = () => {
  return <section className='shop'>

    {/* categories */}
    <div className="shop_categories">
      <div className="container">

        <div className="row">
          <div className="col-12">
            <div className="top_part">
              <h3>Shop</h3>
              <div className="routes">
                <p>Home</p>
                <img src={arrow2Icon} alt="arrow2" />
                <p>Shop</p>
              </div>
            </div>
          </div>
        </div>

        <div className="categories">
          <div className="category">
            <Link to="/">
              <h5>cloths</h5>
              <p>5 Items</p>
            </Link>
          </div>
          <div className="category">
            <Link to="/">
              <h5>cloths</h5>
              <p>5 Items</p>
            </Link>
          </div>
          <div className="category">
            <Link to="/">
              <h5>cloths</h5>
              <p>5 Items</p>
            </Link>
          </div>
          <div className="category">
            <Link to="/">
              <h5>cloths</h5>
              <p>5 Items</p>
            </Link>
          </div>
          <div className="category">
            <Link to="/">
              <h5>cloths</h5>
              <p>5 Items</p>
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/* allProducts  */}
    <div className='container'>
      <div className="row shop_top">
        <div className="col-lg-4 col-md-4 col-sm-6">
          <div className="feature">
            <p>Showing all {Products.length} results</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-6">

          <div className="feature search_box">
            <form>
              <input type="search" placeholder='Search' />
              <img src={searchIcon} alt="search icon" />
            </form>
          </div>

          <div className="feature grid_box">
            <h6>Views:</h6>
            <div className="views">
              <div><img src={menuGridIcon} alt="menuGrid" /></div>
              <div><img src={listGridIcon} alt="listGrid" /></div>
            </div>
          </div>

        </div>

        <div className="col-lg-4 col-md-4 col-sm-6">
          <div className="feature">
            <select>
              <option>Sort</option>
              <option value="Low price">Low price</option>
              <option value="High price">High price</option>
            </select>
            <button>Filter</button>
          </div>
        </div>

      </div>
      <div className="row shop_allProducts">
        {Products.map((product, index) => {
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

export default Shop;