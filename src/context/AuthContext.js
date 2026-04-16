import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  // Check existing session on app load
  useEffect(() => {
    const token = sessionStorage.getItem('jwtToken');
    const storedUser = localStorage.getItem('userDetails');
    if (token && storedUser) {
      setIsAuthenticated(true);
      setUserDetails(JSON.parse(storedUser));
    }
  }, []);

  const login = (token, userData) => {
    sessionStorage.setItem('jwtToken', token);
    localStorage.setItem('userDetails', JSON.stringify(userData));
    localStorage.setItem('isLogin', 'true');
    setIsAuthenticated(true);
    setUserDetails(userData);
  };

  const logout = () => {
    sessionStorage.removeItem('jwtToken');
    localStorage.removeItem('userDetails');
    localStorage.removeItem('isLogin');
    setIsAuthenticated(false);
    setUserDetails(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userDetails, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};