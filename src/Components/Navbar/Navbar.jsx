import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import userIcon from '../../assets/user.svg';
import searchIcon from '../../assets/search.svg';
import cartIcon from '../../assets/cart.svg';
import likeIcon from '../../assets/like.svg';
import arrowIcon from '../../assets/arrow.svg';
import menuIcon from '../../assets/menu.svg';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [menuBTN, setMenuBTN] = useState(false);
  const counter = useSelector(state=> state.addCart.counter);

  return <nav className="Navbar">
    <div className="container">

      <div className="brand_menuBTN">
        <Link to="/" className='navbar_brand'>Bandage</Link>

        <div id="menuBTN" onClick={() => setMenuBTN(!menuBTN)}>
          <img src={menuIcon} alt="menu" />
        </div>

      </div>

      <div className={`links_list ${menuBTN === true ? "show" : "hide"}`}>

        <ul className='navbar_links_pages'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop <img src={arrowIcon} alt="arrowIcon" className='arrowIcon' /></Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Blog</Link></li>
          <li><Link to="/">Contact</Link></li>
          <li><Link to="/">Pages</Link></li>
        </ul>

        <ul className='navbar_links_login_icons'>
          <li><Link to="/"><img src={userIcon} alt="user" className='user_icon' /> Login / Register</Link></li>
          <li><Link to="/"><img src={searchIcon} alt="searchIcon" /></Link></li>
          <li><Link to="/"><img src={cartIcon} alt="cartIcon" className='nav_icon' /> <span className='badge_number'>{counter}</span></Link></li>
          <li><Link to="/"><img src={likeIcon} alt="likeIcon" className='nav_icon' /> <span className='badge_number'>2</span></Link></li>
        </ul>

      </div>

    </div>
  </nav>
}

export default Navbar;