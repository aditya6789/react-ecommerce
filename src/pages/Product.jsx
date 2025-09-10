import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import { Footer, Navbar } from "../components";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      setLoading2(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
      const response2 = await fetch(
        `https://fakestoreapi.com/products/category/${data.category}`
      );
      const data2 = await response2.json();
      setSimilarProducts(data2);
      setLoading2(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 py-3">
              <Skeleton height={400} width={400} />
            </div>
            <div className="col-md-6 py-5">
              <Skeleton height={30} width={250} />
              <Skeleton height={90} />
              <Skeleton height={40} width={70} />
              <Skeleton height={50} width={110} />
              <Skeleton height={120} />
              <Skeleton height={40} width={110} inline={true} />
              <Skeleton className="mx-3" height={40} width={110} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="container my-5 py-4">
          <div className="row g-5">
            <div className="col-md-6">
              <div className="modern-product-card p-4">
                <img
                  className="img-fluid rounded-modern"
                  src={product.image}
                  alt={product.title}
                  style={{ maxHeight: '500px', objectFit: 'contain', width: '100%' }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <span className="badge bg-primary rounded-pill px-3 py-2 text-uppercase small">
                  {product.category}
                </span>
              </div>
              <h1 className="display-5 fw-bold mb-4">{product.title}</h1>
              
              <div className="d-flex align-items-center mb-4">
                <div className="me-3">
                  {[...Array(5)].map((_, i) => (
                    <i 
                      key={i} 
                      className={`fas fa-star ${
                        i < Math.floor(product.rating?.rate || 4) ? 'text-warning' : 'text-muted'
                      }`}
                    ></i>
                  ))}
                </div>
                <span className="text-muted">({product.rating?.rate || '4.5'}) • {product.rating?.count || '120'} reviews</span>
              </div>
              
              <div className="mb-4">
                <span className="h2 fw-bold text-primary">${product.price}</span>
                <span className="text-muted ms-2">Free shipping on orders over $50</span>
              </div>
              
              <div className="mb-4">
                <h5 className="fw-bold mb-3">Description</h5>
                <p className="lead text-muted">{product.description}</p>
              </div>
              
              <div className="mb-4">
                <h6 className="fw-bold mb-3">Features</h6>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    Premium Quality Materials
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    Fast & Free Shipping
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    30-Day Return Policy
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    Secure Payment
                  </li>
                </ul>
              </div>
              
              <div className="d-grid gap-3">
                <button
                  className="modern-btn modern-btn-primary"
                  onClick={() => addProduct(product)}
                >
                  <i className="fas fa-cart-plus me-2"></i>
                  Add to Cart
                </button>
                <Link to="/cart" className="modern-btn modern-btn-secondary">
                  <i className="fas fa-shopping-cart me-2"></i>
                  View Cart
                </Link>
              </div>
              
              <div className="mt-4 p-3 bg-light rounded-modern">
                <div className="row text-center">
                  <div className="col-4">
                    <i className="fas fa-shipping-fast fa-2x text-primary mb-2"></i>
                    <p className="small mb-0 fw-bold">Fast Delivery</p>
                  </div>
                  <div className="col-4">
                    <i className="fas fa-shield-alt fa-2x text-success mb-2"></i>
                    <p className="small mb-0 fw-bold">Secure Payment</p>
                  </div>
                  <div className="col-4">
                    <i className="fas fa-undo fa-2x text-warning mb-2"></i>
                    <p className="small mb-0 fw-bold">Easy Returns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const Loading2 = () => {
    return (
      <>
        <div className="my-4 py-4">
          <div className="d-flex">
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowSimilarProduct = () => {
    return (
      <>
        <div className="py-4 my-4">
          <div className="d-flex gap-4 overflow-auto">
            {similarProducts.map((item) => {
              return (
                <div key={item.id} className="modern-product-card text-center" style={{ minWidth: '280px' }}>
                  <div className="position-relative overflow-hidden" style={{ borderRadius: '12px 12px 0 0' }}>
                    <img
                      className="card-img-top p-3"
                      src={item.image}
                      alt={item.title}
                      height={200}
                      style={{ objectFit: 'contain' }}
                    />
                    <div className="position-absolute top-0 end-0 m-3">
                      <span className="badge bg-primary rounded-pill">
                        <i className="fas fa-star me-1"></i>
                        {item.rating?.rate || '4.5'}
                      </span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h6 className="card-title fw-bold mb-3">
                      {item.title.substring(0, 25)}...
                    </h6>
                    <div className="price fw-bold text-primary mb-3">
                      ${item.price}
                    </div>
                    <div className="d-grid gap-2">
                      <Link
                        to={"/product/" + item.id}
                        className="modern-btn modern-btn-outline"
                      >
                        <i className="fas fa-eye me-1"></i>
                        View
                      </Link>
                      <button
                        className="modern-btn modern-btn-primary"
                        onClick={() => addProduct(item)}
                      >
                        <i className="fas fa-cart-plus me-1"></i>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Navbar />
      <div className="fade-in-up">
        {loading ? <Loading /> : <ShowProduct />}
        
        <section className="py-5 bg-light">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold text-gradient">You May Also Like</h2>
              <p className="lead text-muted">Discover similar products that might interest you</p>
            </div>
            <div className="d-none d-md-block">
              <Marquee
                pauseOnHover={true}
                pauseOnClick={true}
                speed={50}
              >
                {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
              </Marquee>
            </div>
            <div className="d-md-none">
              {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Product;
