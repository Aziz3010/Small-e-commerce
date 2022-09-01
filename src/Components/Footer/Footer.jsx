import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import f from "../../assets/f.svg";
import i from "../../assets/i.svg";
import t from "../../assets/t.svg";

const Footer = () => {
  return <footer>
    <div className="container">

      <div className="row">
        <div className="col-sm-6">
          <div className="top_footer_l">
            <Link to="/" className='navbar_brand'>Bandage</Link>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="top_footer_r">
            <Link to="/"><img src={f} alt="facebook" /></Link>
            <Link to="/"><img src={i} alt="instagram" /></Link>
            <Link to="/"><img src={t} alt="twitter" /></Link>
          </div>
        </div>
      </div>
      <hr />

      <div className="row">

        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
          <div className="footer_data">
            <h5>Company Info</h5>
            <ul>
              <li><Link to="/">About Us</Link></li>
              <li><Link to="/">Carrier</Link></li>
              <li><Link to="/">We are hiring</Link></li>
              <li><Link to="/">Blog</Link></li>
            </ul>
          </div>
        </div>

        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
          <div className="footer_data">
            <h5>Legal</h5>
            <ul>
              <li><Link to="/">About Us</Link></li>
              <li><Link to="/">Carrier</Link></li>
              <li><Link to="/">We are hiring</Link></li>
              <li><Link to="/">Blog</Link></li>
            </ul>
          </div>
        </div>

        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
          <div className="footer_data">
            <h5>Features</h5>
            <ul>
              <li><Link to="/">Business Marketing</Link></li>
              <li><Link to="/">User Analytic</Link></li>
              <li><Link to="/">Live Chat</Link></li>
              <li><Link to="/">Unlimited Support</Link></li>
            </ul>
          </div>
        </div>

        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
          <div className="footer_data">
            <h5>Resources</h5>
            <ul>
              <li><Link to="/">IOS &amp; Android</Link></li>
              <li><Link to="/">Watch a Demo</Link></li>
              <li><Link to="/">Customers</Link></li>
              <li><Link to="/">API</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12">
          <div className="subscribe">
            <h5>Get In Touch</h5>
            <form>
              <input type="text" name="subscribe" placeholder='Your Email' />
              <button>Subscribe</button>
            </form>
            <p>Lore imp sum dolor Amit</p>
          </div>
        </div>
      
      </div>

    </div>
  </footer>
}

export default Footer;