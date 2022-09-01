import React from 'react'
import ProductCard from '../../Components/ProductCard/ProductCard'
import Products from "../../ProductsAPI.js";
import searchIcon from "../../assets/search-inp.svg";
import menuGridIcon from "../../assets/menuGrid.svg";
import listGridIcon from "../../assets/listGrid.svg";
import "./Shop.css";

const Shop = () => {
  return <section className='shop'>
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
              <input type="search" placeholder='Search'/>
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
              <ProductCard image={product.image} title={product.title} category={product.category} price={product.price} currentPrice={product.currentPrice} colors={product.colors} />
            </div>
          )
        })}
      </div>
    </div>
  </section>
}

export default Shop;