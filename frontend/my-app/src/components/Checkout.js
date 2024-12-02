import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const user = useSelector((state) => state.auth.user);
  const baseUrl = useSelector((state) => state.auth.baseUrl);

  console.log(`console${user}`);
     
     
  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({
    name: '',
    address: '',
    paymentMethod: 'Credit Card',
  });
  const navigate = useNavigate();
  useEffect(() => {
    // Redirect to login if user.user_id is empty
    if (user === '' || user === null || user === undefined) {
      navigate('/login');
    }
  }, [user, navigate]);

  useEffect(() => {
    const savedCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare order data
    const orderData = {
       // Replace with actual user ID from session or auth context
      cartItems: cart,
      shippingDetails: {
        name: form.name,
        address: form.address,
        paymentMethod: form.paymentMethod,
        userId: user.user_id,
      },
      
    };
    console.log(orderData);
    try {
      // Send POST request to backend
      const response = await fetch('http://localhost:8080/api/cart/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();

      if (result.success) {
        // Clear the cart
        sessionStorage.removeItem('cart');
        setCart([]);

        // Redirect to confirmation page
        navigate('/confirmation');
      } else {
        console.error('Order placement failed:', result.message);
        // Handle error (e.g., show a message to the user)
      }
    } catch (error) {
      console.error('Network error:', error);
      // Handle network error (e.g., show a message to the user)
    }
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <h3>Order Summary</h3>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td><img src={`${baseUrl}/${item.image}`} alt={item.title} width="100" height="100" /></td>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>{item.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3>Total Price: ${calculateTotalPrice()}</h3>
        <div>
          <label>
            <input type='text' name='user_id' value = {user?.user_id || 0} />
            Name:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Address:
            <textarea
              name="address"
              value={form.address}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Payment Method:
            <select
              name="paymentMethod"
              value={form.paymentMethod}
              onChange={handleInputChange}
            >
              <option value="Credit Card">Credit Card</option>
              <option value="PayPal">PayPal</option>
              {/* Add more payment options if needed */}
            </select>
          </label>
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
