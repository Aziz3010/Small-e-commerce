import React, { useState } from 'react'
import ProductCard from '../../Components/ProductCard/ProductCard'
import ProductsAPI from "../../ProductsAPI.js";
import searchIcon from "../../assets/search-inp.svg";
import menuGridIcon from "../../assets/menuGrid.svg";
import listGridIcon from "../../assets/listGrid.svg";
import arrow2Icon from "../../assets/arrow2.svg";
import { Link } from "react-router-dom";
import "./Shop.css";

const Shop = () => {
  const [allProducts, setAllProducts] = useState(ProductsAPI);

  const filterHandle = (e) => {
    let parentElement = e.target.parentElement;
    let selectElement = parentElement.firstElementChild.value;
    let newProductsSort = [];

    switch (selectElement) {
      case 'low_price':
        const productLowPrice = allProducts.sort((a, b) => a.currentPrice - b.currentPrice);
        for (let i = 0; i < productLowPrice.length; i++) {
          newProductsSort.push(productLowPrice[i]);
        }
        break;
      case 'high_price':
        const productHighPrice = allProducts.sort((a, b) => b.currentPrice - a.currentPrice);
        for (let i = 0; i < productHighPrice.length; i++) {
          newProductsSort.push(productHighPrice[i]);
        }
        break;
      default:
        const defaultProductsAPI = allProducts.sort((a, b) => a.id - b.id);
        for (let i = 0; i < defaultProductsAPI.length; i++) {
          newProductsSort.push(defaultProductsAPI[i]);
        }
        break;
    }
    setAllProducts(newProductsSort);
  }

  const searchHandle = (e) => {
    let searchWord = e.target.value.toLowerCase();
    if (searchWord !== '') {
      let newProductsArr = allProducts.filter((product) => product.title.toLowerCase().includes(searchWord));
      if (newProductsArr.length !== 0) {
        setAllProducts(newProductsArr);
      } else {
        setAllProducts(ProductsAPI);
      }
    } else {
      setAllProducts(ProductsAPI);
    }
  }

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
            <p>Showing all {allProducts.length} results</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-6">

          <div className="feature search_box">
            <form>
              <input onChange={(e) => { searchHandle(e) }} type="search" placeholder='Search' />
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
              <option value="sort">Sort</option>
              <option value="low_price">Low price</option>
              <option value="high_price">High price</option>
            </select>
            <button onClick={(e) => filterHandle(e)}>Filter</button>
          </div>
        </div>

      </div>
      <div className="row shop_allProducts">
        {allProducts.map((product, index) => {
          return (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12" onClick={() => { window.scrollTo(0, 0) }}>
              <ProductCard id={product.id} image={product.image} title={product.title} category={product.category} price={product.price} currentPrice={product.currentPrice} colors={product.colors} />
            </div>
          )
        })}
      </div>
      {/* Pagination */}
      <div className="pagination_container">
        <div className="pagination">
          <div className="first"><p>first</p></div>
          <div className="page"><p>1</p></div>
          <div className="page active"><p>2</p></div>
          <div className="page"><p>3</p></div>
          <div className="next"><p>next</p></div>
        </div>
      </div>
    </div>
  </section>
}

export default Shop;