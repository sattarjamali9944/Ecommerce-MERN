import React, { useState } from 'react';

const Sidebar = ({ categories, brands, onFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedBrand, setSelectedBrand] = useState('');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    onFilter(e.target.value, priceRange, selectedBrand);
  };

  const handlePriceRangeChange = (e) => {
    const range = e.target.value.split('-').map(Number);
    setPriceRange(range);
    onFilter(selectedCategory, range, selectedBrand);
  };

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
    onFilter(selectedCategory, priceRange, e.target.value);
  };

  return (
    <div className="sidebar col-lg-3 col-md-4">
      <h3 className="sidebar-title">Filters</h3>
      <div className="filter-category">
        <h5>Category</h5>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category.cat_name}</option>
          ))}
        </select>
      </div>
      <div className="filter-price">
        <h5>Price Range</h5>
        <select value={priceRange.join('-')} onChange={handlePriceRangeChange}>
          <option value="0-100">0 - 100</option>
          <option value="101-200">101 - 200</option>
          <option value="201-300">201 - 300</option>
          <option value="301-500">301 - 500</option>
        </select>
      </div>
      <div className="filter-brand">
        <h5>Brand</h5>
        <select value={selectedBrand} onChange={handleBrandChange}>
          <option value="">All Brands</option>
          {brands.map(brand => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Sidebar;
