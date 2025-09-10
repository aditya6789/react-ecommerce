import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
    const state = useSelector(state => state.handleCart)
    const { user, logout, isAuthenticated } = useAuth()
    const [showUserMenu, setShowUserMenu] = useState(false)
    const dropdownRef = useRef(null)

    const handleLogout = () => {
        logout()
        setShowUserMenu(false)
    }

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowUserMenu(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <nav className="navbar navbar-expand-lg modern-navbar py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    <i className="fas fa-shopping-bag me-2"></i>
                    Styloc 
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                <i className="fas fa-home me-1"></i>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">
                                <i className="fas fa-th-large me-1"></i>
                                Products
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">
                                <i className="fas fa-info-circle me-1"></i>
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">
                                <i className="fas fa-envelope me-1"></i>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    
                    <div className="d-flex align-items-center gap-2">
                        <NavLink to="/cart" className="modern-btn modern-btn-primary position-relative">
                            <i className="fas fa-shopping-cart"></i>
                            Cart
                            {state.length > 0 && (
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {state.length}
                                </span>
                            )}
                        </NavLink>
                        
                        {isAuthenticated() ? (
                            <div className="position-relative" ref={dropdownRef}>
                                <button 
                                    className="modern-btn modern-btn-outline d-flex align-items-center"
                                    onClick={() => setShowUserMenu(!showUserMenu)}
                                >
                                    <img 
                                        src={user?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || 'User')}&background=6366f1&color=fff`}
                                        alt="Profile"
                                        className="rounded-circle me-2"
                                        style={{ width: '24px', height: '24px' }}
                                    />
                                    <span className="d-none d-md-inline">{user?.name?.split(' ')[0]}</span>
                                    <i className={`fas fa-chevron-${showUserMenu ? 'up' : 'down'} ms-2`}></i>
                                </button>
                                
                                {showUserMenu && (
                                    <div className="position-absolute end-0 mt-2 py-2 bg-white rounded-modern shadow-modern-lg" style={{ minWidth: '200px', zIndex: 1000 }}>
                                        <div className="px-3 py-2 border-bottom">
                                            <div className="fw-bold">{user?.name}</div>
                                            <small className="text-muted">{user?.email}</small>
                                        </div>
                                        <NavLink 
                                            to="/profile" 
                                            className="d-block px-3 py-2 text-decoration-none text-dark"
                                            onClick={() => setShowUserMenu(false)}
                                        >
                                            <i className="fas fa-user me-2"></i>
                                            My Profile
                                        </NavLink>
                                        <NavLink 
                                            to="/orders" 
                                            className="d-block px-3 py-2 text-decoration-none text-dark"
                                            onClick={() => setShowUserMenu(false)}
                                        >
                                            <i className="fas fa-shopping-bag me-2"></i>
                                            My Orders
                                        </NavLink>
                                        <hr className="my-1" />
                                        <button 
                                            className="d-block w-100 px-3 py-2 text-start border-0 bg-transparent text-danger"
                                            onClick={handleLogout}
                                        >
                                            <i className="fas fa-sign-out-alt me-2"></i>
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <>
                                <NavLink to="/login" className="modern-btn modern-btn-outline">
                                    <i className="fas fa-sign-in-alt"></i>
                                    Login
                                </NavLink>
                                <NavLink to="/register" className="modern-btn modern-btn-outline">
                                    <i className="fas fa-user-plus"></i>
                                    Register
                                </NavLink>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar