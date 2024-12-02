import React, { useEffect } from 'react';


const Footer = () => {
  // Function to show or hide the scroll-to-top button
  const handleScroll = () => {
    const button = document.getElementById('movetop');
    if (window.scrollY > 20) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  };

  // Scroll to the top of the document
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="w3l-footer-22">
      <div className="footer-hny py-5">
        <div className="container py-lg-5">
          <div className="text-txt row">
            <div className="left-side col-lg-4">
              <h3>
                <a className="logo-footer" href="index.html">
                  Spry<span className="lohny">S</span>tore
                </a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio consectetur.
                Vivamus a ligula quam. Ut blandit eu leo non suscipit.
              </p>
              <ul className="social-footerhny mt-lg-5 mt-4">
                <li><a className="facebook" href="#"><span className="fa fa-facebook" aria-hidden="true"></span></a></li>
                <li><a className="twitter" href="#"><span className="fa fa-twitter" aria-hidden="true"></span></a></li>
                <li><a className="google" href="#"><span className="fa fa-google-plus" aria-hidden="true"></span></a></li>
                <li><a className="instagram" href="#"><span className="fa fa-instagram" aria-hidden="true"></span></a></li>
              </ul>
            </div>

            <div className="right-side col-lg-8 pl-lg-5">
              <h4>Women's Day Special Offer: All Branded Sandals are Flat 50% Discount</h4>
              <div className="sub-columns">
                <div className="sub-one-left">
                  <h6>Useful Links</h6>
                  <div className="footer-hny-ul">
                    <ul>
                      <li><a href="index.html">Home</a></li>
                      <li><a href="about.html">About</a></li>
                      <li><a href="#">Blog</a></li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                    <ul>
                      <li><a href="#">Careers</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Terms and Conditions</a></li>
                      <li><a href="contact.html">Support</a></li>
                    </ul>
                  </div>
                </div>
                <div className="sub-two-right">
                  <h6>Our Store</h6>
                  <p className="mb-5">49436 Broaddus Honey Court Avenue, Madisonville KY 95020, United States of America</p>
                  <h6>We accept:</h6>
                  <ul>
                    <li><a className="pay-method" href="#"><span className="fa fa-cc-visa" aria-hidden="true"></span></a></li>
                    <li><a className="pay-method" href="#"><span className="fa fa-cc-mastercard" aria-hidden="true"></span></a></li>
                    <li><a className="pay-method" href="#"><span className="fa fa-cc-paypal" aria-hidden="true"></span></a></li>
                    <li><a className="pay-method" href="#"><span className="fa fa-cc-amex" aria-hidden="true"></span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="below-section row">
            <div className="columns col-lg-6">
              <ul className="jst-link">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Term of Service</a></li>
                <li><a href="contact.html">Customer Care</a></li>
              </ul>
            </div>
            <div className="columns col-lg-6 text-lg-right">
              <p>
                © 2020 SpryStore. All rights reserved. Design by{' '}
                <a href="https://w3layouts.com/" target="_blank" rel="noopener noreferrer">
                  W3Layouts
                </a>
              </p>
            </div>
            <button onClick={scrollToTop} id="movetop" title="Go to top">
              <span className="fa fa-angle-double-up"></span>
            </button>
          </div>
        </div>
      </div>
    </section>


  );
};

export default Footer;
