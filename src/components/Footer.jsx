import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="modern-footer">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <h5 className="fw-bold text-white mb-4">
                <i className="fas fa-shopping-bag me-2"></i>
                StyleStore
              </h5>
              <p className="mb-4">
                Your one-stop destination for premium fashion, electronics, and lifestyle products. 
                We bring you quality and style at unbeatable prices.
              </p>
              <div className="d-flex gap-3">
                <button className="btn btn-link text-decoration-none p-0 border-0 bg-transparent">
                  <i className="fab fa-facebook-f fa-lg"></i>
                </button>
                <button className="btn btn-link text-decoration-none p-0 border-0 bg-transparent">
                  <i className="fab fa-twitter fa-lg"></i>
                </button>
                <button className="btn btn-link text-decoration-none p-0 border-0 bg-transparent">
                  <i className="fab fa-instagram fa-lg"></i>
                </button>
                <button className="btn btn-link text-decoration-none p-0 border-0 bg-transparent">
                  <i className="fab fa-linkedin-in fa-lg"></i>
                </button>
              </div>
            </div>
            
            <div className="col-lg-2 col-md-6">
              <h6 className="fw-bold text-white mb-4">Quick Links</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="/" className="text-decoration-none">Home</a></li>
                <li className="mb-2"><a href="/product" className="text-decoration-none">Products</a></li>
                <li className="mb-2"><a href="/about" className="text-decoration-none">About Us</a></li>
                <li className="mb-2"><a href="/contact" className="text-decoration-none">Contact</a></li>
              </ul>
            </div>
            
            <div className="col-lg-2 col-md-6">
              <h6 className="fw-bold text-white mb-4">Categories</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><button className="btn btn-link text-decoration-none p-0 border-0 bg-transparent">Men's Fashion</button></li>
                <li className="mb-2"><button className="btn btn-link text-decoration-none p-0 border-0 bg-transparent">Women's Fashion</button></li>
                <li className="mb-2"><button className="btn btn-link text-decoration-none p-0 border-0 bg-transparent">Electronics</button></li>
                <li className="mb-2"><button className="btn btn-link text-decoration-none p-0 border-0 bg-transparent">Jewelry</button></li>
              </ul>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <h6 className="fw-bold text-white mb-4">Contact Info</h6>
              <div className="mb-3">
                <i className="fas fa-map-marker-alt me-2"></i>
                123 Fashion Street, Style City, SC 12345
              </div>
              <div className="mb-3">
                <i className="fas fa-phone me-2"></i>
                +1 (555) 123-4567
              </div>
              <div className="mb-3">
                <i className="fas fa-envelope me-2"></i>
                info@stylestore.com
              </div>
            </div>
          </div>
          
          <hr className="my-4" style={{ borderColor: '#374151' }} />
          
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mb-0">
                © 2024 StyleStore. All rights reserved. Made with ❤️
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="d-flex justify-content-md-end gap-4 mt-3 mt-md-0">
                <Link to="/privacy" className="text-decoration-none small">Privacy Policy</Link>
                <Link to="/terms" className="text-decoration-none small">Terms of Service</Link>
                <Link to="/contact" className="text-decoration-none small">Support</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
