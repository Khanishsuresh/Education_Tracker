import { createContext, useState, useContext } from 'react';
import axios from 'axios';

const API_ENDPOINTS = {
  ADMIN_LOGIN: '/adminlogin',
  USER_LOGIN: '/userlogin',
  USER_REGISTRATION: '/userreg',
};
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8001',
});


const handleErrorResponse = (error) => {
  if (error.response && error.response.data.includes("Email already exists")) {
    alert("Email already exists. Please use a different email.");
  } else {
    alert('Error during authentication');
  }
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [loading, setLoading] = useState(false);

  const signIn = async (email, password, role = 'user') => {
    setLoading(true);
    try {
      const endpoint = role === 'admin'? API_ENDPOINTS.ADMIN_LOGIN : API_ENDPOINTS.USER_LOGIN;
      const response = await axiosInstance.post(endpoint, { email, password });
  
      if (response.status === 200) {
        setUser({ email, role });
        setIsRegistered(response.data.isRegistered);
        localStorage.setItem('userEmail', email);
        return true;
      } else {
        handleErrorResponse(response);
        return false; 
      }
    } catch (error) {
      handleErrorResponse(error);
      return false; 
    } finally {
      setLoading(false);
    }
  };
  
  
  

  const signUp = async (name, email, password) => {
    try {
      const response = await axiosInstance.post(API_ENDPOINTS.USER_REGISTRATION, { name, email, password });
      if (response.status === 200) {
        console.log('User registered successfully:', response.data);
        return true;
      }
    } catch (error) {
      console.error('Error during sign-up:', error.message);
    }
    return false;
  };

  const signOut = () => {
    setUser(null);
    setIsRegistered(false);
  };

  return (
    <AuthContext.Provider value={{ user, isRegistered, signIn, signUp, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
