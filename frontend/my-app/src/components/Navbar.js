import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
//import './Navbar.css'; // Import the CSS file
 // Ensure you have axios or use fetch for API calls

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const user = useSelector((state) => state.auth.user);
  const baseUrl = useSelector((state) => state.auth.baseUrl);

  // Fetch categories from API
  useEffect(() => {
    fetch(`${baseUrl}catApi`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data);
        console.log(data);
        
      })
      .catch((error) => {
        console.log(error);
        
      });
  }, [])

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      <li>
          <div class="dropdown">
              <li class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categories
              </li>
              <div class="dropdown-menu" aria-labelledby="dropdownMenu3" style={{backgroundColor:'#000'}}>
                  {categories.length > 0 ? (
                          categories.map((category) => (
                            <li key={category._id} className="dropdown-item">
                              <NavLink className="nav-link" to={`/category/${category._id}`}>
                                {category.cat_name}
                              </NavLink>
                            </li>
                          ))
                        ) : (
                          <li className="dropdown-item">No categories available</li>
                        )}
              </div>
          </div>
      </li>
     
      <li className="nav-item">
        <NavLink className="nav-link" to="/product">Products</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
      {user ? (
        <>
          <li className="nav-item">
            <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/logout">Logout</NavLink>
          </li>
        </>
      ) : (
        <>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/register">Register</NavLink>
          </li>
        </>
      )}
    </ul>
  );
};

export default Navbar;
