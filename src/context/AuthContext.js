import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on app start
  useEffect(() => {
    // Initialize demo account if no users exist
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    if (existingUsers.length === 0) {
      const demoUser = {
        id: 'demo-user-001',
        name: 'Demo User',
        email: 'demo@stylestore.com',
        password: 'demo123',
        createdAt: new Date().toISOString(),
        avatar: 'https://ui-avatars.com/api/?name=Demo+User&background=6366f1&color=fff'
      };
      localStorage.setItem('users', JSON.stringify([demoUser]));
    }

    // Check if user is logged in
    const storedUser = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('currentUser');
        sessionStorage.removeItem('currentUser');
      }
    }
    setLoading(false);
  }, []);

  // Register function
  const register = async (userData) => {
    try {
      const { name, email, password, confirmPassword } = userData;

      // Validation
      if (!name || !email || !password || !confirmPassword) {
        toast.error('Please fill in all fields');
        return false;
      }

      if (password !== confirmPassword) {
        toast.error('Passwords do not match');
        return false;
      }

      if (password.length < 6) {
        toast.error('Password must be at least 6 characters long');
        return false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        toast.error('Please enter a valid email address');
        return false;
      }

      // Check if user already exists
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const userExists = existingUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
      
      if (userExists) {
        toast.error('User with this email already exists');
        return false;
      }

      // Create new user
      const newUser = {
        id: Date.now().toString(),
        name: name.trim(),
        email: email.toLowerCase().trim(),
        password, // In a real app, this would be hashed
        createdAt: new Date().toISOString(),
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=6366f1&color=fff`
      };

      // Save to users list
      existingUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(existingUsers));

      // Set current user (auto-login after registration)
      const userToStore = { ...newUser };
      delete userToStore.password; // Don't store password in current user
      
      setUser(userToStore);
      localStorage.setItem('currentUser', JSON.stringify(userToStore));

      toast.success('Account created successfully! Welcome to StyleStore!');
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      toast.error('An error occurred during registration');
      return false;
    }
  };

  // Login function
  const login = async (credentials) => {
    try {
      const { email, password, rememberMe } = credentials;

      // Validation
      if (!email || !password) {
        toast.error('Please fill in all fields');
        return false;
      }

      // Get users from localStorage
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const user = existingUsers.find(u => 
        u.email.toLowerCase() === email.toLowerCase().trim() && u.password === password
      );

      if (!user) {
        toast.error('Invalid email or password');
        return false;
      }

      // Create user session
      const userToStore = { ...user };
      delete userToStore.password; // Don't store password in session

      setUser(userToStore);
      
      // Store in localStorage or sessionStorage based on "Remember Me"
      if (rememberMe) {
        localStorage.setItem('currentUser', JSON.stringify(userToStore));
      } else {
        sessionStorage.setItem('currentUser', JSON.stringify(userToStore));
        localStorage.removeItem('currentUser'); // Clear any existing persistent session
      }

      toast.success(`Welcome back, ${user.name}!`);
      return true;
    } catch (error) {
      console.error('Login error:', error);
      toast.error('An error occurred during login');
      return false;
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('currentUser');
    toast.success('Logged out successfully');
  };

  // Update user profile
  const updateUser = (updatedData) => {
    try {
      const updatedUser = { ...user, ...updatedData };
      setUser(updatedUser);
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      
      // Also update in users list
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const userIndex = existingUsers.findIndex(u => u.id === user.id);
      if (userIndex !== -1) {
        existingUsers[userIndex] = { ...existingUsers[userIndex], ...updatedData };
        localStorage.setItem('users', JSON.stringify(existingUsers));
      }
      
      toast.success('Profile updated successfully');
      return true;
    } catch (error) {
      console.error('Update user error:', error);
      toast.error('Failed to update profile');
      return false;
    }
  };

  // Check if user is authenticated
  const isAuthenticated = () => {
    return user !== null;
  };

  // Get user role (for future use)
  const getUserRole = () => {
    return user?.role || 'customer';
  };

  const value = {
    user,
    loading,
    register,
    login,
    logout,
    updateUser,
    isAuthenticated,
    getUserRole
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
