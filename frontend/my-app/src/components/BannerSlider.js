// src/components/BannerSlider.js
import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';


const BannerSlider = () => {
  return (
    <section className="w3l-banner-slider-main">
      <div className="top-header-content">
        <Header/>
        
        <div className="bannerhny-content">
          {/* Carousel */}
          <div className="content-baner-inf">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container">
                    <div className="carousel-caption">
                      <h3>Women's Fashion <br />50% Off</h3>
                      <a href="#" className="shop-button btn">Shop Now</a>
                    </div>
                  </div>
                </div>
                <div className="carousel-item item2">
                  <div className="container">
                    <div className="carousel-caption">
                      <h3>Men's Fashion <br />60% Off</h3>
                      <a href="#" className="shop-button btn">Shop Now</a>
                    </div>
                  </div>
                </div>
                <div className="carousel-item item3">
                  <div className="container">
                    <div className="carousel-caption">
                      <h3>Women's Fashion <br />50% Off</h3>
                      <a href="#" className="shop-button btn">Shop Now</a>
                    </div>
                  </div>
                </div>
                <div className="carousel-item item4">
                  <div className="container">
                    <div className="carousel-caption">
                      <h3>Men's Fashion <br />60% Off</h3>
                      <a href="#" className="shop-button btn">Shop Now</a>
                    </div>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          {/* Right Banner */}
          <div className="right-banner">
            <div className="right-1">
              <h4>Men's Fashion <br />50% Off</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSlider;
