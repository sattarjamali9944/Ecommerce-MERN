import React from 'react';


const VideoSection = () => {
  return (
    <section className="w3l-video-6">
      <div className="video-66-info">
        <div className="container-fluid">
          <div className="video-grids-info row">
            <div className="video-gd-right col-lg-8">
              <div className="video-inner text-center">
                {/* Popup */}
                <a className="play-button btn popup-with-zoom-anim" href="#small-dialog">
                  <span className="fa fa-play" aria-hidden="true"></span>
                </a>
                <div id="small-dialog" className="mfp-hide">
                  <div className="search-top notify-popup">
                    <iframe
                      src="https://player.vimeo.com/video/246139491"
                      frameBorder="0"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                      title="Video"
                    ></iframe>
                  </div>
                </div>
                {/* //Popup */}
              </div>
            </div>
            <div className="video-gd-left col-lg-4 p-lg-5 p-4">
              <div className="p-xl-4 p-0 video-wrap">
                <h3 className="hny-title text-left">
                  All Branded Women's Bags are Flat <span>30% Discount</span>
                </h3>
                <p>Visit our shop to see amazing creations from our designers.</p>
                <a href="#" className="read-more btn">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
