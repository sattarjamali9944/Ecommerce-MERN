import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Cart = () => {
  const baseUrl = useSelector((state) => state.auth.baseUrl);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load the cart from sessionStorage
    const savedCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const handleRemoveItem = (index) => {
    // Remove item from cart
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const calculateTotalPrice = () => {
    // Calculate total price of items in the cart
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };
  const handleCheckout = () => {
    navigate('/checkout');
  }
  return (
    <div>
      <h2>Your Cart</h2>
      <p>Total items: {cart.length}</p>
      {cart.length > 0 ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Details</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td><img src={`${baseUrl}/${item.image}`} alt={item.title} width="100" height="100" /></td>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>{item.detail}</td>
                  <td>
                    <button onClick={() => handleRemoveItem(index)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total Price: ${calculateTotalPrice()}</h3>
          <button onClick={handleCheckout} style={{marginTop:'20px'}}>Checkout</button>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
