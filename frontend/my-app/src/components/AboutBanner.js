import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const BannerSlider = () => {
  return (
    <section className="w3l-banner-slider-main inner-pagehny">
      <div className="breadcrumb-infhny">
        <div className="top-header-content">
          <Header/>

          <div className="breadcrumb-contentnhy">
            <div className="container">
              <nav aria-label="breadcrumb">
                <h2 className="hny-title text-center">About Us</h2>
                <ol className="breadcrumb mb-0">
                  <li>
                    <Link to="/">Home</Link>
                    <span className="fa fa-angle-double-right"></span>
                  </li>
                  <li className="active">About</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSlider;
