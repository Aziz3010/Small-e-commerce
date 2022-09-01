import React from 'react';
import './Brands.css';
import b1 from '../../assets/b1.svg';
import b2 from '../../assets/b2.svg';
import b3 from '../../assets/b3.svg';
import b4 from '../../assets/b4.svg';
import b5 from '../../assets/b5.svg';
import b6 from '../../assets/b6.svg';

const Brands = () => {
  return <>
    <section className='Brands'>
      <div className="container">
        <div className="row">

          <div className="col-md-2 col-sm-4">
            <div className="item">
              <img src={b1} alt="b1" />
            </div>
          </div>

          <div className="col-md-2 col-sm-4">
            <div className="item">
              <img src={b2} alt="b2" />
            </div>
          </div>

          <div className="col-md-2 col-sm-4">
            <div className="item">
              <img src={b3} alt="b3" />
            </div>
          </div>

          <div className="col-md-2 col-sm-4">
            <div className="item">
              <img src={b4} alt="b4" />
            </div>
          </div>


          <div className="col-md-2 col-sm-4">
            <div className="item">
              <img src={b5} alt="b5" />
            </div>
          </div>


          <div className="col-md-2 col-sm-4">
            <div className="item">
              <img src={b6} alt="b6" />
            </div>
          </div>

        </div>
      </div>
    </section>
  </>
}

export default Brands;