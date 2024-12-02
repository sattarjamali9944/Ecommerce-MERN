import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductItem from './ProductItem';
import Sidebar from './SideBar';
import Header from './Header';

import { useSelector } from 'react-redux';
const brands = ['Brand A', 'Brand B'];

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories,setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/productApi')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        setFilteredProducts(data); // Set filteredProducts to all products initially
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  useEffect(() => {
    fetch('http://localhost:8080/catApi')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data2 => {
        setCategories(data2);
        
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  const handleFilter = (category, priceRange, brand) => {
    let updatedProducts = products;

    if (category) {
      updatedProducts = updatedProducts.filter(product => product.category === category);
    }

    if (priceRange) {
      const [minPrice, maxPrice] = priceRange;
      updatedProducts = updatedProducts.filter(product => product.price >= minPrice && product.price <= maxPrice);
    }

    if (brand) {
      updatedProducts = updatedProducts.filter(product => product.brand === brand);
    }

    setFilteredProducts(updatedProducts);
  };

  return (
    <>
      <section className="w3l-banner-slider-main inner-pagehny">
      <div className="breadcrumb-infhny">
        <div className="top-header-content">
          <Header />
          <div className="breadcrumb-contentnhy">
            <div className="container">
              <nav aria-label="breadcrumb">
                <h2 className="hny-title text-center">Products</h2>
                <ol className="breadcrumb mb-0">
                  <li>
                    <Link to="/">Home</Link>
                    <span className="fa fa-angle-double-right"></span>
                  </li>
                  <li className="active">Products</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>  
      <div className="product-page">
        <div className="container py-lg-5">
          <div className="row">
            <Sidebar 
              categories={categories} 
              brands={brands} 
              onFilter={handleFilter} 
            />
            <div className="col-lg-9 col-md-8 product-list">
              {filteredProducts.length ? (
                <div className="row">
                  {filteredProducts.map(product => (
                    <div key={product.id} className="col-lg-4 col-md-6 mb-4">
                      <ProductItem product={product} />
                    </div>
                  ))}
                </div>
              ) : (
                <p>No products found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
}

export default ProductPage;
