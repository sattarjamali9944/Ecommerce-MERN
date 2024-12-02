import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';

import { useSelector } from 'react-redux';

import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import './assets/css/style-starter.css';


function App() {



  return (
    // <div className="App">

    //  {/* <Router>
    //   <Navbar />

    //   <Routes>
    //      <Route path="/" element={<Home />} />
    //     {/*<Route path="/login" element={<Login />} />
    //     <Route path="/register" element={<Register />} />
    //     <Route path="/users" element={<Users />} />
    //     <Route path="/dashboard" element={<Dashboard />} />
    //     <Route path="/product" element={<Product />} />
    //     <Route path="/product-list" element={<ProductList />} />
    //     <Route path="/category-list" element={<CategoryList />} />
    //     <Route path="/logout" element={<Logout />} /> */}

    //   </Routes>
    // </Router> */}
     
    // </div>
  );
}

export default App;
