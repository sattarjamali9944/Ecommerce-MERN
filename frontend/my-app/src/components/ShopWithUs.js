// src/components/ShopWithUs.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// CatItem component to render each category grid item
const CatItem = ({ to, imgSrc, altText, title }) => (
  <div className="col-lg-2 col-md-4 col-6 welcome-image">
    <div className="boxhny13">
      <Link to={to}>
        <img src={imgSrc} className="img-fluid" style={{ height: '120px', width: '120px' }} alt={altText} />
        <div className="boxhny-content">
          <h3 className="title">{title}</h3>
        </div>
      </Link>
    </div>
    <h4><Link to={to}>{altText}</Link></h4>
  </div>
);

const ShopWithUs = () => {
  const baseUrl = useSelector((state) => state.auth.baseUrl); // Fetch baseUrl from Redux store
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${baseUrl}catApi`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []); // Empty dependency array ensures this runs only on mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section className="w3l-grids-hny-2">
      <div className="grids-hny-2-mian py-5">
        <div className="container py-lg-5">
          <h3 className="hny-title mb-0 text-center">
            Shop With <span>Us</span>
          </h3>
          <p className="mb-4 text-center">Handpicked Favourites just for you</p>
          <div className="welcome-grids row mt-5">
            {data.map((cat, index) => (
              <CatItem
                key={index}
                to={`${baseUrl}${cat.to}`} // Concatenating base URL and category's `to` path
                imgSrc={`${baseUrl}${cat.image}`} // Correctly constructing image URL
                altText={cat.cat_name}
                title={cat.cat_name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopWithUs;
