import React from 'react';
 // Import the CSS file for styling

const ContentPhotoSection = () => {
  return (
    <section className="w3l-content-w-photo-6">
      <div className="content-photo-6-main py-5">
        <div className="container py-lg-5">
          <div className="align-photo-6-inf-cols row">
            <div className="photo-6-inf-right col-lg-6">
              <h3 className="hny-title text-left">
                All Branded Men's Suits are Flat <span>30% Discount</span>
              </h3>
              <p>Visit our shop to see amazing creations from our designers.</p>
              <a href="#" className="read-more btn">
                Shop Now
              </a>
            </div>
            <div className="photo-6-inf-left col-lg-6">
              <img src="assets/images/1.jpg" className="img-fluid" alt="Men's Suits" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentPhotoSection;
