import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if a user session exists in local storage on load
  useEffect(() => {
    const storedUser = localStorage.getItem('psf_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Mock login for now, eventually replace with Supabase/Auth0
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          const fakeUser = { id: 1, name: "Estudiante Profesional", email, role: "student" };
          setUser(fakeUser);
          localStorage.setItem('psf_user', JSON.stringify(fakeUser));
          resolve(fakeUser);
        } else {
          reject(new Error("Por favor, ingresa credenciales válidas."));
        }
      }, 800);
    });
  };

  const register = (name, email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (name && email && password) {
          const fakeUser = { id: Date.now(), name, email, role: "student" };
          setUser(fakeUser);
          localStorage.setItem('psf_user', JSON.stringify(fakeUser));
          resolve(fakeUser);
        } else {
          reject(new Error("Todos los campos son requeridos."));
        }
      }, 800);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('psf_user');
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
