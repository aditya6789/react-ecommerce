import React, { useState } from 'react'
import { Footer, Navbar } from "../components";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!agreeTerms) {
            alert('Please agree to the Terms & Conditions');
            return;
        }

        setLoading(true);
        
        const success = await register(formData);
        
        if (success) {
            navigate('/'); // Redirect to home page after successful registration
        }
        
        setLoading(false);
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
                                    <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                                        <i className="fas fa-user-plus fa-2x"></i>
                                    </div>
                                    <h2 className="fw-bold text-gradient">Create Account</h2>
                                    <p className="text-muted">Join us today and start your shopping journey</p>
                                </div>
                                
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="name" className="form-label fw-bold">
                                            <i className="fas fa-user me-2 text-primary"></i>
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg rounded-modern"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your full name"
                                            required
                                        />
                                    </div>
                                    
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
                                                placeholder="Create a strong password"
                                                required
                                                minLength="6"
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
                                        <small className="text-muted">Password must be at least 6 characters long</small>
                                    </div>
                                    
                                    <div className="mb-4">
                                        <label htmlFor="confirmPassword" className="form-label fw-bold">
                                            <i className="fas fa-lock me-2 text-primary"></i>
                                            Confirm Password
                                        </label>
                                        <div className="position-relative">
                                            <input
                                                type={showConfirmPassword ? "text" : "password"}
                                                className="form-control form-control-lg rounded-modern"
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                value={formData.confirmPassword}
                                                onChange={handleChange}
                                                placeholder="Confirm your password"
                                                required
                                            />
                                            <button
                                                type="button"
                                                className="btn position-absolute end-0 top-50 translate-middle-y"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                style={{ border: 'none', background: 'none' }}
                                            >
                                                <i className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'} text-muted`}></i>
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <div className="mb-4">
                                        <div className="form-check">
                                            <input 
                                                className="form-check-input" 
                                                type="checkbox" 
                                                id="terms"
                                                checked={agreeTerms}
                                                onChange={(e) => setAgreeTerms(e.target.checked)}
                                                required
                                            />
                                            <label className="form-check-label" htmlFor="terms">
                                                I agree to the <Link to="/terms" className="text-decoration-none fw-bold">Terms & Conditions</Link> and <Link to="/privacy" className="text-decoration-none fw-bold">Privacy Policy</Link>
                                            </label>
                                        </div>
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
                                                    Creating Account...
                                                </>
                                            ) : (
                                                <>
                                                    <i className="fas fa-user-plus me-2"></i>
                                                    Create Account
                                                </>
                                            )}
                                        </button>
                                    </div>
                                    
                                    <div className="text-center">
                                        <p className="mb-0">
                                            Already have an account? 
                                            <Link to="/login" className="text-decoration-none fw-bold ms-1">
                                                Sign in here
                                            </Link>
                                        </p>
                                    </div>
                                </form>
                                
                                <hr className="my-4" />
                                
                                <div className="text-center">
                                    <p className="text-muted mb-3">Or sign up with</p>
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
    )
}

export default Register