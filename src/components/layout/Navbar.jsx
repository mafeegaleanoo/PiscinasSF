import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar" style={{
      background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
      boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.05)' : 'none'
    }}>
      <div className="nav-container">
        <Link to="/" className="brand-logo" style={{ display: 'flex', alignItems: 'center' }}>
          <Logo style={{ height: '48px', width: 'auto' }} />
        </Link>
        <ul className="nav-links">
          <li><Link to="/#programas">Programas</Link></li>
          <li><Link to="/#mision">Nuestra Misión</Link></li>
          {user ? (
            <li><Link to="/dashboard" className="btn btn-primary btn-nav">Mi Panel</Link></li>
          ) : (
            <li><Link to="/login" className="btn btn-primary btn-nav">Iniciar Sesión</Link></li>
          )}
        </ul>
        <div className="hamburger">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
