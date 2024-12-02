import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar'

function Header() {

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const savedCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    setCartCount(savedCart.length);
  }, []);
  return (
    <header className="tophny-header">
          <div className="container-fluid">
            <div className="top-right-strip row">
              {/* Left Content */}
              <div className="top-hny-left-content col-lg-6 pl-lg-0">
              <h6>
              Upto 30% off on All styles,{' '}
              <Link to="#" className="highlight">
                Click here for{' '}
                <span className="fa fa-hand-o-right hand-icon" aria-hidden="true"></span>
                <span className="highlight">More details</span>
              </Link>
            </h6>
              </div>
              {/* Right Content */}
              <ul className="top-hnt-right-content col-lg-6">
                
                <li className="transmitvcart galssescart2 cart cart box_1">
                  
                    <Link className="top_transmitv_cart" to='/cart'>
                      My Cart ({cartCount || 0}) <span className="fa fa-shopping-cart">

                      </span>
                    </Link>
                  
                </li>
              </ul>
              {/* Overlay Login */}
              <div className="overlay-login text-left">
                <button type="button" className="overlay-close1">
                  <i className="fa fa-times" aria-hidden="true"></i>
                </button>
                <div className="wrap">
                  <h5 className="text-center mb-4">Login Now</h5>
                  <div className="login-bghny p-md-5 p-4 mx-auto mw-100">
                    <form action="#" method="post">
                      <div className="form-group">
                        <p className="login-texthny mb-2">Email address</p>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" required />
                        <small id="emailHelp" className="form-text text-muted">
                          We'll never share your email with anyone else.
                        </small>
                      </div>
                      <div className="form-group">
                        <p className="login-texthny mb-2">Password</p>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="" required />
                      </div>
                      <div className="form-check mb-2">
                        <div className="userhny-check">
                          <label className="check-remember container">
                            <input type="checkbox" className="form-check" /> <span className="checkmark"></span>
                            <p className="privacy-policy">Remember me</p>
                          </label>
                          <div className="clearfix"></div>
                        </div>
                      </div>
                      <button type="submit" className="submit-login btn mb-4">Sign In</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Navbar */}
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid serarc-fluid">
              <a className="navbar-brand" href="index.html">
                Spry<span className="lohny">S</span>tore
              </a>
              <div className="search-right">
                <a href="#search" title="search">
                  <span className="fa fa-search mr-2" aria-hidden="true"></span>
                  <span className="search-text">Search here</span>
                </a>
                <div id="search" className="pop-overlay">
                  <div className="popup">
                    <form action="#" method="post" className="search-box">
                      <input type="search" placeholder="Keyword" name="search" required autofocus />
                      <button type="submit" className="btn">Search</button>
                    </form>
                  </div>
                  <a className="close" href="#">×</a>
                </div>
              </div>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon fa fa-bars"> </span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Navbar/>
              </div>
            </div>
          </nav>
        </header>
  )
}

export default Header