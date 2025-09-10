import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated()) {
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const success = await login({ ...formData, rememberMe });
    
    if (success) {
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    }
    
    setLoading(false);
  };

  // Demo account helper
  const fillDemoAccount = () => {
    setFormData({
      email: 'demo@Styloc .com',
      password: 'demo123'
    });
  };

  return (
    <>
      <Navbar />
      <section className="py-5 bg-light min-vh-100 d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="modern-cart-item p-5">
                <div className="text-center mb-4">
                  <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <i className="fas fa-user fa-2x"></i>
                  </div>
                  <h2 className="fw-bold text-gradient">Welcome Back!</h2>
                  <p className="text-muted">Sign in to your account to continue shopping</p>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="email" className="form-label fw-bold">
                      <i className="fas fa-envelope me-2 text-primary"></i>
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg rounded-modern"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="password" className="form-label fw-bold">
                      <i className="fas fa-lock me-2 text-primary"></i>
                      Password
                    </label>
                    <div className="position-relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control form-control-lg rounded-modern"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                      />
                      <button
                        type="button"
                        className="btn position-absolute end-0 top-50 translate-middle-y"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ border: 'none', background: 'none' }}
                      >
                        <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} text-muted`}></i>
                      </button>
                    </div>
                  </div>
                  
                  <div className="mb-4 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="remember"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                      />
                      <label className="form-check-label" htmlFor="remember">
                        Remember me
                      </label>
                    </div>
                    <button type="button" className="btn-link text-decoration-none p-0 border-0 bg-transparent">Forgot password?</button>
                  </div>
                  
                  <div className="d-grid mb-4">
                    <button 
                      className="modern-btn modern-btn-primary" 
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <i className="fas fa-spinner fa-spin me-2"></i>
                          Signing In...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-sign-in-alt me-2"></i>
                          Sign In
                        </>
                      )}
                    </button>
                  </div>
                  
                  <div className="text-center">
                    <p className="mb-0">
                      Don't have an account? 
                      <Link to="/register" className="text-decoration-none fw-bold ms-1">
                        Create one here
                      </Link>
                    </p>
                  </div>
                </form>
                
                <hr className="my-4" />
                
                <div className="text-center">
                  <div className="mb-3">
                    <button 
                      type="button" 
                      className="modern-btn modern-btn-outline w-100"
                      onClick={fillDemoAccount}
                    >
                      <i className="fas fa-play me-2"></i>
                      Try Demo Account
                    </button>
                    <small className="text-muted d-block mt-1">Email: demo@Styloc .com | Password: demo123</small>
                  </div>
                  
                  <p className="text-muted mb-3">Or continue with</p>
                  <div className="d-flex gap-3 justify-content-center">
                    <button type="button" className="modern-btn modern-btn-outline" disabled>
                      <i className="fab fa-google me-2"></i>
                      Google
                    </button>
                    <button type="button" className="modern-btn modern-btn-outline" disabled>
                      <i className="fab fa-facebook-f me-2"></i>
                      Facebook
                    </button>
                  </div>
                  <small className="text-muted d-block mt-2">Social login coming soon!</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
