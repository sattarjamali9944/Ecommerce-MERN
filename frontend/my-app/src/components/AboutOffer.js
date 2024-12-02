import React from 'react'
import { Link } from 'react-router-dom'

function AboutOffer() {
  return (
    <>
        <section className="w3l-specification-6">
        <div className="specification-6-mian py-5">
          <div className="container py-lg-5">
            <div className="row story-6-grids text-left">
              <div className="col-lg-5 story-gd">
                <img src="assets/images/left2.jpg" className="img-fluid" alt="What We Offer" />
              </div>
              <div className="col-lg-7 story-gd pl-lg-4">
                <h3 className="hny-title">
                  What We <span>Offer</span>
                </h3>
                <p>
                  Lorem illum facere aperiam sequi optio consectetur adipisicing elitFuga, suscipit totam animi
                  consequatur saepe blanditiis. Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi
                  optio consectetur adipisicing elit. Fuga, suscipit totam animi consequatur saepe blanditiis.
                </p>

                <div className="row story-info-content mt-md-5 mt-4">
                  <div className="col-md-6 story-info">
                    <h5>
                      <Link to="/visit-store">01. Visit Store</Link>
                    </h5>
                    <p>
                      Lorem illum facere aperiam sequi optio consectetur adipisicing elitFuga, suscipit totam animi
                      consequatur.
                    </p>
                  </div>
                  <div className="col-md-6 story-info">
                    <h5>
                      <Link to="/add-to-cart">02. Add To Cart</Link>
                    </h5>
                    <p>
                      Lorem illum facere aperiam sequi optio consectetur adipisicing elitFuga, suscipit totam animi
                      consequatur.
                    </p>
                  </div>
                  <div className="col-md-6 story-info">
                    <h5>
                      <Link to="/gift-cards">03. Gift Cards</Link>
                    </h5>
                    <p>
                      Lorem illum facere aperiam sequi optio consectetur adipisicing elitFuga, suscipit totam animi
                      consequatur.
                    </p>
                  </div>
                  <div className="col-md-6 story-info">
                    <h5>
                      <Link to="/unique-shop">04. Unique Shop</Link>
                    </h5>
                    <p>
                      Lorem illum facere aperiam sequi optio consectetur adipisicing elitFuga, suscipit totam animi
                      consequatur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
    </>    
  )
}

export default AboutOffer