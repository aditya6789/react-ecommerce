import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const usdToInr = (usd) => {
    // You can update the rate as needed, here using 1 USD = 83 INR
    const rate = 83;
    return Math.round(usd * rate);
  };

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="text-center py-5 modern-cart-item">
              <div className="mb-4">
                <i className="fas fa-shopping-cart fa-4x text-muted"></i>
              </div>
              <h3 className="fw-bold mb-3">Your Cart is Empty</h3>
              <p className="text-muted mb-4">Looks like you haven't added anything to your cart yet. Start shopping to fill it up!</p>
              <Link to="/product" className="modern-btn modern-btn-primary me-3">
                <i className="fas fa-shopping-bag me-2"></i>
                Continue Shopping
              </Link>
              <Link to="/" className="modern-btn modern-btn-outline">
                <i className="fas fa-home me-2"></i>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const addItem = (product) => {
    dispatch(addCart(product));
  };
  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    state.map((item) => {
      return (subtotal += item.price * item.qty);
    });

    state.map((item) => {
      return (totalItems += item.qty);
    });
    return (
      <>
        <section className="py-5">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-8">
                <div className="modern-cart-item">
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <h4 className="fw-bold mb-0">
                      <i className="fas fa-shopping-cart me-2 text-primary"></i>
                      Shopping Cart ({totalItems} items)
                    </h4>
                  </div>
                  
                  {state.map((item) => {
                    return (
                      <div key={item.id} className="modern-cart-item mb-3">
                        <div className="row align-items-center">
                          <div className="col-md-2 col-4">
                            <div className="rounded-modern overflow-hidden">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="img-fluid"
                                style={{ height: '80px', objectFit: 'contain' }}
                              />
                            </div>
                          </div>

                          <div className="col-md-4 col-8">
                            <h6 className="fw-bold mb-1">{item.title.substring(0, 40)}...</h6>
                            <p className="text-muted small mb-0">Category: {item.category}</p>
                            <div className="text-primary fw-bold">₹{usdToInr(item.price)  }</div>
                          </div>

                          <div className="col-md-4 col-8 mt-3 mt-md-0">
                            <div className="modern-quantity-controls justify-content-center">
                              <button
                                className="modern-quantity-btn"
                                onClick={() => removeItem(item)}
                              >
                                <i className="fas fa-minus"></i>
                              </button>
                              <span className="fw-bold px-3">{item.qty}</span>
                              <button
                                className="modern-quantity-btn"
                                onClick={() => addItem(item)}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                            </div>  
                          </div>

                          <div className="col-md-2 col-4 text-end mt-3 mt-md-0">
                            <div className="fw-bold text-success">
                              ₹{usdToInr(item.price * item.qty).toFixed(2)}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="col-lg-4">
                <div className="modern-order-summary">
                  <h5 className="fw-bold mb-4">
                    <i className="fas fa-receipt me-2 text-primary"></i>
                    Order Summary
                  </h5>
                  
                  <div className="modern-summary-item">
                    <span>Products ({totalItems})</span>
                    <span className="fw-bold">₹{usdToInr(subtotal)}</span>
                  </div>
                  
                  <div className="modern-summary-item">
                    <span>
                      <i className="fas fa-shipping-fast me-2 text-success"></i>
                      Shipping
                    </span>
                    <span className="fw-bold">₹{usdToInr(shipping)}</span>
                  </div>
                  
                  <div className="modern-summary-item">
                    <span>Tax</span>
                    <span className="fw-bold">₹{usdToInr(0)}</span>
                  </div>
                  
                  <div className="modern-summary-item border-0 pt-3">
                    <span className="h5 mb-0">Total</span>
                      <span className="h5 mb-0 text-primary">₹{usdToInr(subtotal + shipping)}</span>
                  </div>

                  <Link
                    to="/checkout"
                    className="modern-btn modern-btn-primary w-100 mt-4"
                  >
                    <i className="fas fa-credit-card me-2"></i>
                    Proceed to Checkout
                  </Link>
                  
                  <Link
                    to="/product"
                    className="modern-btn modern-btn-outline w-100 mt-3"
                  >
                    <i className="fas fa-arrow-left me-2"></i>
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-5 py-4">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-gradient">Shopping Cart</h1>
          <p className="lead text-muted">Review your selected items before checkout</p>
        </div>
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
