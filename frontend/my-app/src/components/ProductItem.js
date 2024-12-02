import React from 'react';
import { useSelector } from 'react-redux';
const ProductItem = ({ product }) => {
  const baseUrl = useSelector((state) => state.auth.baseUrl);
  const currencySign = useSelector((state) => state.auth.currencySign);
  return (
    <div className="product-item" key={product._id}>
      <img src={`${baseUrl}${product.image}`} alt={product.title} className="img-fluid" style={{ height: '220px', width:'250px' }}/>
      <h5>{product.title}</h5>
      <p>{currencySign} {product.price.toFixed(2)}</p>
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  );
}

export default ProductItem;
