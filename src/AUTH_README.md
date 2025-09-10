# Authentication System Documentation

## Overview
This React E-Commerce application includes a complete authentication system using localStorage for data persistence (no backend required).

## Features

### 🔐 **Authentication**
- User Registration with validation
- User Login with session management
- Protected Routes
- User Profile Management
- Logout functionality

### 🎨 **UI Features**
- Modern, responsive login/register forms
- Password visibility toggle
- Form validation with error messages
- Loading states
- User avatar integration
- User dropdown menu in navbar

### 🛡️ **Security Features**
- Email validation
- Password length requirements
- Duplicate email prevention
- Session management (Remember Me functionality)
- Protected route redirects

## How to Use

### 1. **Demo Account**
A demo account is automatically created:
- **Email**: `demo@Styloc .com`
- **Password**: `demo123`

### 2. **Registration**
- Navigate to `/register`
- Fill out the form with:
  - Full Name (required)
  - Email (must be valid and unique)
  - Password (minimum 6 characters)
  - Confirm Password (must match)
- Agree to terms and conditions
- Click "Create Account"

### 3. **Login**
- Navigate to `/login`
- Enter email and password
- Optionally check "Remember Me" for persistent session
- Click "Sign In"
- Or use "Try Demo Account" button

### 4. **User Profile**
- Click on user avatar/name in navbar when logged in
- Select "My Profile" from dropdown
- View and edit profile information

### 5. **Logout**
- Click on user avatar/name in navbar
- Select "Logout" from dropdown

## Technical Implementation

### 📁 **File Structure**
```
src/
├── context/
│   └── AuthContext.js          # Authentication context and logic
├── components/
│   ├── Navbar.jsx             # Updated with auth integration
│   └── ProtectedRoute.jsx     # Route protection component
└── pages/
    ├── Login.jsx              # Login page
    ├── Register.jsx           # Registration page
    └── Profile.jsx            # User profile page
```

### 🔧 **Authentication Context**
Located in `src/context/AuthContext.js`, provides:
- `user` - Current user object
- `loading` - Loading state
- `register(userData)` - Registration function
- `login(credentials)` - Login function
- `logout()` - Logout function
- `updateUser(data)` - Update user profile
- `isAuthenticated()` - Check if user is logged in

### 🛣️ **Protected Routes**
- Checkout page requires authentication
- Profile page requires authentication
- Redirects to login with return URL on access attempt

### 💾 **Data Storage**
- User data stored in `localStorage.users` array
- Current session in `localStorage.currentUser` (Remember Me) or `sessionStorage.currentUser`
- Demo account automatically created on first visit

### 🔄 **Session Management**
- **Remember Me**: Session persists in localStorage
- **Regular Login**: Session only in sessionStorage (cleared on browser close)
- Automatic session restoration on page reload

## User Data Structure

```javascript
{
  id: "unique-id",
  name: "User Name",
  email: "user@example.com",
  password: "hashed-in-real-app",
  createdAt: "2024-01-01T00:00:00.000Z",
  avatar: "https://ui-avatars.com/api/..."
}
```

## Development Notes

### 🔒 **Security Considerations**
- In production, passwords should be hashed
- Consider implementing JWT tokens
- Add rate limiting for login attempts
- Implement proper password reset functionality

### 🚀 **Future Enhancements**
- Social login integration (Google, Facebook)
- Two-factor authentication
- Password strength indicator
- Account verification via email
- User roles and permissions

## Usage Examples

### Using Authentication in Components
```jsx
import { useAuth } from '../context/AuthContext';

function MyComponent() {
  const { user, isAuthenticated, logout } = useAuth();
  
  if (!isAuthenticated()) {
    return <div>Please log in</div>;
  }
  
  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```

### Creating Protected Routes
```jsx
import ProtectedRoute from '../components/ProtectedRoute';

<Route 
  path="/protected" 
  element={
    <ProtectedRoute>
      <ProtectedComponent />
    </ProtectedRoute>
  } 
/>
```

## Testing the System

1. **Registration Flow**:
   - Try registering with invalid emails
   - Test password mismatch
   - Verify duplicate email prevention

2. **Login Flow**:
   - Test with demo account
   - Test "Remember Me" functionality
   - Test invalid credentials

3. **Protected Routes**:
   - Access `/checkout` without login
   - Verify redirect to login
   - Confirm return to original page after login

4. **User Management**:
   - Update profile information
   - Test logout functionality
   - Check session persistence
