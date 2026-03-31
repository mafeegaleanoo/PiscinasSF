import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
          <li><a href="#programas">Programas</a></li>
          <li><a href="#mision">Nuestra Misión</a></li>
          <li><a href="#comunidad" className="btn btn-primary btn-nav">Únete Ahora</a></li>
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
