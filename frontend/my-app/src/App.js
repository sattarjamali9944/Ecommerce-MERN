import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Product from './components/ProductPage'
// Import other components as needed
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';
import CategoryDetail from './components/CategoryDetail';


import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style-starter.css';
import { Contact } from './components/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/logout" element={<Logout />} />
        <Route path="/category/:id" element={<CategoryDetail/>} />
       </Routes>
    </Router>
  );
}

export default App;

