import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Product.css'; 
const Product = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productImage, setProductImage] = useState(null);

   const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', productName);
    formData.append('price', productPrice);
    formData.append('description', productDescription);
    formData.append('image', productImage);

    try {
        const response = await fetch('http://localhost/project/addProduct.php', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            // If response is not ok, try to extract the error message from the response body
            const errorData = await response.json();
            alert(`Failed to add product: ${errorData.error || 'Unknown error'}`);
        } else {
            const responseData = await response.json();
            alert('Product added successfully!');
            setProductName('');
            setProductPrice('');
            setProductDescription('');
            setProductImage(null);
        }
    } catch (error) {
        // Catch any network or unexpected errors
        alert(`Failed to add product due to a network error: ${error.message}`);
    }
};


    return (
        <div className='container'>
           <div className = 'row'>

            <Link to="/product-list">Product Lists</Link>
            <Link to="/category-list">Categories</Link>
            

            <h2>Add Product   </h2>
            <div class="col-sm-3">
            </div>
            <div class="col-sm-6">
             <form onSubmit={handleSubmit} encType="multipart/form-data" className="product-form">
                <div className="form-group">
                    <label>Product Name:</label>
                    <input 
                        type="text" 
                        value={productName} 
                        onChange={(e) => setProductName(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <label>Product Price:</label>
                    <input 
                        type="text" 
                        value={productPrice} 
                        onChange={(e) => setProductPrice(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <label>Product Description:</label>
                    <textarea 
                        value={productDescription} 
                        onChange={(e) => setProductDescription(e.target.value)} 
                    ></textarea>
                </div>
                <div className="form-group">
                    <label>Product Image:</label>
                    <input 
                        type="file" 
                        onChange={(e) => setProductImage(e.target.files[0])} 
                    />
                </div>
                <button type="submit" className="submit-button">Add Product</button>
            </form>
        </div>
        <div class="col-sm-3"></div>
        </div>    
    </div>
    );
};

export default Product;
