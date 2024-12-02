import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../assets/css/ProductList.css'; // Import the CSS file


const ProductsList = () => {
    const user = useSelector((state) => state.auth.user);
    const baseUrl = useSelector((state) => state.auth.baseUrl);
    const fullUrl = `${baseUrl}productApi`;
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);
    const [error, setError] = useState(null);

     const addToCart = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            setCart(cart.map(item => 
                item.id === product.id 
                ? { ...item, quantity: item.quantity + 1 } 
                : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${baseUrl}productApi`);
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const removeFromCart = (product) => {
        setCart(cart.filter(item => item.id !== product.id));
    };

     const handleCheckout = async () => {
        try {
            const response = await fetch('http://localhost/project/saveCart.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: user.id, // Replace with actual user ID
                    cartItems: cart
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to save cart');
            }

            const result = await response.json();
            alert(result.success || 'Cart saved successfully!');
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

   

    if (loading) {
        return <p>Loading products...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="products-list">
            <h2>Products</h2>
            {products.length === 0 ? (
                <p>No products available</p>
            ) : (
                <div className="products-grid">
                    {products.map(product => (
                        <div key={product._id} className="product-card">
                            {product.image && (
                                <img
                                    src={`${baseUrl}/${product.image}`}
                                    style={{ width: '200px', height: '150px' }}
                                    alt={product.name}
                                    className="product-image"
                                />
                            )}
                            <div className="product-details">
                                <h3 className="product-name">{product.title}</h3>
                                <p className="product-price">${product.price}</p>
                                <p className="product-description">{product.detail}</p>
                                 <button onClick={() => addToCart(product)} className="add-to-cart-button">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {cart.length > 0 && (
                <div className="cart">
                    <h2>Your Cart</h2>
                    {cart.map(item => (
                        <div key={item.id} className="cart-item">
                            <h4>{item.name}</h4>
                            <p>Price: ${item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <button onClick={() => removeFromCart(item)}>Remove</button>
                        </div>
                    ))}
                    <button onClick={handleCheckout} className="checkout-button">
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProductsList;
