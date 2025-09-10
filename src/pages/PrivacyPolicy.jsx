import React from 'react';
import { Footer, Navbar } from '../components';

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="modern-cart-item p-4">
              <div className="text-center mb-4">
                <h1 className="h2 fw-bold text-primary">Privacy Policy</h1>
                <p className="text-muted">STYLOC GLOBAL TRADE (OPC) PRIVATE LIMITED</p>
              </div>

              <div className="content">
                <div className="mb-4">
                  <h3 className="h5 fw-bold mb-2">1. Introduction</h3>
                  <p className="mb-3">
                    At <strong>STYLOC GLOBAL TRADE (OPC) PRIVATE LIMITED</strong>, we respect your privacy and are 
                    committed to protecting your personal data. This Privacy Policy explains how we collect, use, 
                    and safeguard your information.
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="h5 fw-bold mb-2">2. Information We Collect</h3>
                  <p className="mb-2"><strong>Personal Information:</strong> Name, email, phone number, billing/shipping address</p>
                  <p className="mb-2"><strong>Payment Information:</strong> Collected securely via payment gateways</p>
                  <p className="mb-3"><strong>Usage Data:</strong> IP address, browser type, and activity on our website</p>
                </div>

                <div className="mb-4">
                  <h3 className="h5 fw-bold mb-2">3. How We Use Your Information</h3>
                  <ul className="mb-3">
                    <li>To process orders and payments</li>
                    <li>To deliver products and services</li>
                    <li>To improve customer experience and website functionality</li>
                    <li>To send updates, offers, and promotions (only with your consent)</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h3 className="h5 fw-bold mb-2">4. Data Sharing & Disclosure</h3>
                  <ul className="mb-3">
                    <li>We do not sell your personal data</li>
                    <li>Data may be shared with trusted third parties (logistics providers, payment gateways) for order fulfillment</li>
                    <li>We may disclose information if required by law</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h3 className="h5 fw-bold mb-2">5. Data Security</h3>
                  <p className="mb-3">
                    We use encryption and secure servers to protect your data. However, no method of online 
                    transmission is 100% secure.
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="h5 fw-bold mb-2">6. Cookies Policy</h3>
                  <p className="mb-3">
                    We use cookies to improve user experience and website performance. You can disable cookies 
                    in your browser settings, but some features may not function properly.
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="h5 fw-bold mb-2">7. Your Rights</h3>
                  <ul className="mb-3">
                    <li>You can request access, correction, or deletion of your data</li>
                    <li>You may opt-out of promotional communications anytime</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h3 className="h5 fw-bold mb-2">8. Updates to Privacy Policy</h3>
                  <p className="mb-3">
                    We may update this policy from time to time. Users will be notified of significant changes.
                  </p>
                </div>

                <div className="bg-light p-3 rounded-modern text-center">
                  <h5 className="fw-bold mb-2">Contact Us</h5>
                  <p className="mb-1"><strong>STYLOC GLOBAL TRADE (OPC) PRIVATE LIMITED</strong></p>
                  <p className="mb-0">SHOP NO. SB-38, LAKE CITY MALL, BKAPUBAVADI GB ROAD, Chitalsar Manpada, Thane – 400607, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
