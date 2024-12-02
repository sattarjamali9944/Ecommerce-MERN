import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <>
      <section className="w3l-wecome-content-6">
        <div className="ab-content-6-mian py-5">
          <div className="container py-lg-5">
            <div className="welcome-grids row">
              <div className="col-lg-6 mb-lg-0 mb-5">
                <h3 className="hny-title">
                  About Our Spry<span>Store</span>
                </h3>
                <p className="my-4">
                  Excepteur sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu ullamcorper.
                  Nunc id ipsum fringilla, gravida felis vitae. Phasellus lacinia id, sunt in culpa quis. Phasellus
                  lacinia
                </p>
                <p className="mb-4">
                  Excepteur sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu ullamcorper.
                  Nunc id ipsum fringilla.
                </p>
                <div className="read">
                  <Link to="/shop" className="read-more btn">
                    Shop Now
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 welcome-image">
                <img src="assets/images/2.jpg" className="img-fluid" alt="About SpryStore" />
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default AboutSection;
