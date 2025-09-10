import React from "react";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user, isAuthenticated } = useAuth();

  return (
    <>
      <section className="modern-hero">
        <img
          className="position-absolute w-100 h-100"
          src="./assets/main.png.jpg"
          alt="Hero Background"
          style={{ objectFit: 'cover', zIndex: 0 }}
        />
        <div className="container hero-content fade-in-up">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              {isAuthenticated() && (
                <div className="mb-4">
                  <h3 className="text-white mb-2">
                    Welcome back, {user?.name?.split(' ')[0]}! 👋
                  </h3>
                </div>
              )}
              <h1 className="display-3 fw-bold mb-4">
                Discover Your Perfect Style
              </h1>
              <p className="lead mb-5">
                Explore our curated collection of premium fashion, electronics, and lifestyle products. 
                Find exactly what you're looking for with unbeatable quality and prices.
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <a href="#products" className="modern-btn modern-btn-primary modern-btn-lg pulse-animation">
                  <i className="fas fa-shopping-bag me-2"></i>
                  Shop Now
                </a>
                <a href="/about" className="modern-btn modern-btn-secondary">
                  <i className="fas fa-info-circle me-2"></i>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4 text-center fade-in-up">
              <div className="p-4">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-shipping-fast fa-2x"></i>
                </div>
                <h4 className="fw-bold">Free Shipping</h4>
                <p className="text-muted">Free shipping on orders over $50. Fast and reliable delivery worldwide.</p>
              </div>
            </div>
            <div className="col-md-4 text-center fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="p-4">
                <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-shield-alt fa-2x"></i>
                </div>
                <h4 className="fw-bold">Secure Payment</h4>
                <p className="text-muted">Your payment information is processed securely with industry-standard encryption.</p>
              </div>
            </div>
            <div className="col-md-4 text-center fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="p-4">
                <div className="bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-headset fa-2x"></i>
                </div>
                <h4 className="fw-bold">24/7 Support</h4>
                <p className="text-muted">Our customer support team is here to help you anytime, anywhere.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
