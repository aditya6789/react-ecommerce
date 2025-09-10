import React from "react";
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="mb-5">
              <h3 className="fw-bold text-primary mb-4">Who We Are</h3>
              <p className="lead">
                Welcome to <strong>STYLOC GLOBAL TRADE (OPC) PRIVATE LIMITED</strong>, your trusted partner in delivering quality products with a customer-first approach.
              </p>
              <p>
                We are a registered company based in Thane, Maharashtra, committed to making online shopping simple, secure, and accessible for everyone.
              </p>
            </div>

            <div className="mb-5">
              <h3 className="fw-bold text-primary mb-4">Our Location</h3>
              <div className="d-flex align-items-center">
                <i className="fas fa-map-marker-alt text-primary me-3 fa-lg"></i>
                <p className="mb-0">
                  SHOP NO. SB-38, Lake City Mall, BKAPUBAVADI GB Road, Chitalsar Manpada, Thane – 400607, Maharashtra
                </p>
              </div>
            </div>

            <div className="mb-5">
              <h3 className="fw-bold text-primary mb-4">Our Mission</h3>
              <p>
                To build an e-commerce platform where customers can shop with trust and convenience. We focus on delivering authentic products, ensuring timely deliveries, and providing excellent customer support.
              </p>
            </div>

            <div className="mb-5">
              <h3 className="fw-bold text-primary mb-4">Why Choose Us</h3>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-check-circle text-success me-3"></i>
                    <span>Wide range of quality products</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-check-circle text-success me-3"></i>
                    <span>Secure payment options</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-check-circle text-success me-3"></i>
                    <span>Fast & reliable delivery</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-check-circle text-success me-3"></i>
                    <span>Easy returns & refunds</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center bg-light p-4 rounded">
              <h3 className="fw-bold text-primary mb-3">Our Vision</h3>
              <p className="lead mb-0">
                To become a leading name in e-commerce by combining technology, innovation, and customer satisfaction. We don't just sell products — we deliver experiences that add value to your lifestyle.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row justify-content-center">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Men's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
