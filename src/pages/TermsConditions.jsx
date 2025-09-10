import React from 'react';
import { Footer, Navbar } from '../components';

const TermsConditions = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="modern-cart-item p-4">
              <div className="text-center mb-4">
                <h1 className="h2 fw-bold text-primary">Terms & Conditions</h1>
                <p className="text-muted">STYLOC GLOBAL TRADE (OPC) PRIVATE LIMITED</p>
              </div>

              <div className="content">
                <div className="mb-4">
                  <h3 className="h5 fw-bold mb-2">1. Introduction</h3>
                  <p className="mb-3">
                    Welcome to <strong>STYLOC GLOBAL TRADE (OPC) PRIVATE LIMITED</strong>. These Terms and Conditions 
                    govern your use of our website, services, and products. By using our platform, you agree to these Terms.
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="h5 fw-bold mb-2">2. Company Details</h3>
                  <p className="mb-2"><strong>Company:</strong> STYLOC GLOBAL TRADE (OPC) PRIVATE LIMITED</p>
                  <p className="mb-3">
                    <strong>Address:</strong> SHOP NO. SB-38, LAKE CITY MALL, BKAPUBAVADI GB ROAD, 
                    Chitalsar Manpada, Thane – 400607, Maharashtra, India
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="h5 fw-bold mb-2">3. Eligibility</h3>
                  <ul className="mb-3">
                    <li>Users must be 18 years or older to use our services</li>
                    <li>All information provided must be accurate and complete</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h3 className="h5 fw-bold mb-2">4. Products & Services</h3>
                  <ul className="mb-3">
                    <li>We display accurate product descriptions, prices, and availability</li>
                    <li>We may modify or discontinue products without prior notice</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h3 className="h5 fw-bold mb-2">5. Orders & Payments</h3>
                  <ul className="mb-3">
                    <li>Orders are confirmed only after successful payment</li>
                    <li>Prices include applicable taxes unless stated otherwise</li>
                    <li>We accept UPI, credit/debit cards, and net banking</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h3 className="h5 fw-bold mb-2">6. Shipping & Delivery</h3>
                  <ul className="mb-3">
                    <li>Delivery times are estimates and may vary</li>
                    <li>We are not responsible for courier/logistics delays</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h3 className="h5 fw-bold mb-2">7. Returns & Refunds</h3>
                  <ul className="mb-3">
                    <li>Returns accepted under our Return Policy conditions</li>
                    <li>Refunds processed within 7-10 working days after inspection</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h3 className="h5 fw-bold mb-2">8. User Responsibilities</h3>
                  <ul className="mb-3">
                    <li>Do not misuse our platform for fraudulent activities</li>
                    <li>Maintain confidentiality of your account and password</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h3 className="h5 fw-bold mb-2">9. Limitation of Liability</h3>
                  <p className="mb-3">
                    We are not liable for any indirect, incidental, or consequential damages arising from platform use.
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="h5 fw-bold mb-2">10. Governing Law</h3>
                  <p className="mb-3">
                    These Terms are governed by Indian law with jurisdiction at Thane, Maharashtra.
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

export default TermsConditions;
