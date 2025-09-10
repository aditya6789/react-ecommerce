import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const componentMounted = useRef(true);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      if (componentMounted.current) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
    };

    getProducts();

    return () => {
      componentMounted.current = false;
    };
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="modern-filter-container text-center mb-5">
          <h4 className="fw-bold mb-4">Filter by Category</h4>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            <button
              className="modern-filter-btn"
              onClick={() => setFilter(data)}
            >
              <i className="fas fa-th me-2"></i>
              All Products
            </button>
            <button
              className="modern-filter-btn"
              onClick={() => filterProduct("men's clothing")}
            >
              <i className="fas fa-tshirt me-2"></i>
              Men's Clothing
            </button>
            <button
              className="modern-filter-btn"
              onClick={() => filterProduct("women's clothing")}
            >
              <i className="fas fa-female me-2"></i>
              Women's Clothing
            </button>
            <button
              className="modern-filter-btn"
              onClick={() => filterProduct("jewelery")}
            >
              <i className="fas fa-gem me-2"></i>
              Jewelry
            </button>
            <button
              className="modern-filter-btn"
              onClick={() => filterProduct("electronics")}
            >
              <i className="fas fa-laptop me-2"></i>
              Electronics
            </button>
          </div>
        </div>

        {filter.map((product, index) => {
          return (
            <div
              id={product.id}
              key={product.id}
              className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="modern-product-card text-center h-100">
                <div className="position-relative overflow-hidden" style={{ borderRadius: '12px 12px 0 0' }}>
                  <img
                    className="card-img-top p-3"
                    src={product.image}
                    alt={product.title}
                    height={250}
                    style={{ objectFit: 'contain' }}
                  />
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge bg-primary rounded-pill">
                      <i className="fas fa-star me-1"></i>
                      {product.rating?.rate || '4.5'}
                    </span>
                  </div>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold mb-3">
                    {product.title.substring(0, 50)}{product.title.length > 50 ? '...' : ''}
                  </h5>
                  <p className="card-text text-muted flex-grow-1">
                    {product.description.substring(0, 100)}...
                  </p>
                  <div className="price fw-bold text-primary mb-3">
                    ₹{product.price}
                  </div>
                  <div className="d-flex gap-2 mt-auto">
                    <Link
                      to={"/product/" + product.id}
                      className="modern-btn modern-btn-outline flex-fill"
                    >
                      <i className="fas fa-eye me-1"></i>
                      View Details
                    </Link>
                    <button
                      className="modern-btn modern-btn-primary flex-fill"
                      onClick={() => {
                        toast.success("Added to cart successfully!", {
                          duration: 2000,
                          style: {
                            background: '#10b981',
                            color: 'white',
                          },
                        });
                        addProduct(product);
                      }}
                    >
                      <i className="fas fa-cart-plus me-1"></i>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <>
      <section id="products" className="py-5">
        <div className="container">
          <div className="text-center mb-5 fade-in-up">
            <h2 className="display-4 fw-bold text-gradient mb-3">Latest Products</h2>
            <p className="lead text-muted">Discover our handpicked selection of premium products</p>
          </div>
          <div className="row justify-content-center">
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
