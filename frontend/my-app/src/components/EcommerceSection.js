import React, {useState,useEffect} from 'react';
import { useSelector } from 'react-redux';


const EcommerceSection = () => {
  const [products, setProducts] = useState([]);
  const baseUrl = useSelector((state) => state.auth.baseUrl); // Fetch baseUrl from Redux store
  const currencySign = useSelector((state) => state.auth.currencySign);

  useEffect(() => {
    fetch(`${baseUrl}productApi`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse JSON once
      })
      .then(data => {
        setProducts(data); // Set the state with the data
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  const addToCart = (product) => {
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    cart.push(product);
    sessionStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.title} has been added to the cart`);
    
  };
  return (
    <section className="w3l-ecommerce-main">
      <div className="ecom-contenthny py-5">
        <div className="container py-lg-5">
          <h3 className="hny-title mb-0 text-center">
            Shop With <span>Us</span>
          </h3>
          <p className="text-center">Handpicked Favourites just for you</p>
          <div className="ecom-products-grids row mt-lg-5 mt-3">
        
          {products.map((product) => (
             <div key={product._id} className="col-lg-3 col-6 product-incfhny mt-4">
                <div className="product-grid2 transmitv">
                    <div className="product-image2">
                      <a href="#">
                        <img className="pic-1 img-fluid" src={`${baseUrl}${product.image}`} style={{ height: '220px', width:'250px' }} alt={product.title} />
                        <img className="pic-2 img-fluid" src={`${baseUrl}${product.image}`} style={{ height: '220px', width:'250px' }} alt={product.title} />
                      </a>
                      <ul className="social">
                        <li><a href="#" data-tip="Quick View"><span className="fa fa-eye"></span></a></li>
                        <li><a href="#" data-tip="Add to Cart"><span className="fa fa-shopping-bag"></span></a></li>
                      </ul>
                      <div className="transmitv single-item">
                        
                          <button onClick={() => addToCart(product)} className="transmitv-cart ptransmitv-cart add-to-cart">
                            Add to Cart
                          </button>
                        
                      </div>
                    </div>
                    <div className="product-content">
                      <h3 className="title"><a href="#">{product.title}{product.cat_info.length > 0 && (
                    <div>
          
                      <>
                        {product.cat_info.map(cat => (
                          <span key={cat._id}>
                            <p>Name: {cat.cat_name}</p>
                                
                          </span>
                        ))}
                      </>
                    </div>
                    )}</a></h3>
                      <span className="price">
                        {`${currencySign} ${product.price}`}
                      </span>
                    </div>
                </div>
           </div>
          ))}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceSection;
