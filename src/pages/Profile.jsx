import React, { useState } from 'react';
import { Footer, Navbar } from '../components';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = updateUser(formData);
    if (success) {
      setIsEditing(false);
    }
  };

  const cancelEdit = () => {
    setFormData({
      name: user?.name || '',
      email: user?.email || ''
    });
    setIsEditing(false);
  };

  return (
    <>
      <Navbar />
      <div className="container my-5 py-4">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="modern-cart-item p-5">
              <div className="text-center mb-4">
                <img 
                  src={user?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || 'User')}&background=6366f1&color=fff`}
                  alt="Profile"
                  className="rounded-circle mb-3"
                  style={{ width: '120px', height: '120px' }}
                />
                <h2 className="fw-bold text-gradient">My Profile</h2>
                <p className="text-muted">Manage your account information</p>
              </div>

              {isEditing ? (
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
                      required
                    />
                  </div>
                  
                  <div className="d-flex gap-3">
                    <button 
                      type="submit"
                      className="modern-btn modern-btn-primary flex-fill"
                    >
                      <i className="fas fa-save me-2"></i>
                      Save Changes
                    </button>
                    <button 
                      type="button"
                      className="modern-btn modern-btn-outline flex-fill"
                      onClick={cancelEdit}
                    >
                      <i className="fas fa-times me-2"></i>
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <div>
                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      <i className="fas fa-user me-2 text-primary"></i>
                      Full Name
                    </label>
                    <div className="p-3 bg-light rounded-modern">
                      {user?.name}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      <i className="fas fa-envelope me-2 text-primary"></i>
                      Email Address
                    </label>
                    <div className="p-3 bg-light rounded-modern">
                      {user?.email}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      <i className="fas fa-calendar me-2 text-primary"></i>
                      Member Since
                    </label>
                    <div className="p-3 bg-light rounded-modern">
                      {new Date(user?.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <button 
                    className="modern-btn modern-btn-primary w-100"
                    onClick={() => setIsEditing(true)}
                  >
                    <i className="fas fa-edit me-2"></i>
                    Edit Profile
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
