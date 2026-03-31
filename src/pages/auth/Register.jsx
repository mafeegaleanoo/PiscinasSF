import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Logo from '../../components/ui/Logo';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }
    
    setIsLoading(true);
    
    try {
      await register(name, email, password);
      // Wait for mock auth to resolve, then navigate to dashboard
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Error al registrar la cuenta');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="auth-wrapper" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '100px', paddingBottom: '40px', background: 'var(--surface-dark)' }}>
        <div className="auth-card glass-card" style={{ maxWidth: '420px', width: '100%', margin: '0 20px', padding: '40px 30px' }}>
          
          <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Crear una Cuenta</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '30px' }}>Únete a la academia líder para latinos</p>
          
          {error && <div style={{ background: '#fee2e2', color: '#ef4444', padding: '10px', borderRadius: '8px', marginBottom: '20px', fontSize: '0.9rem' }}>{error}</div>}
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div className="form-group">
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Nombre Completo</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{ width: '100%', padding: '10px', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '1rem', boxSizing: 'border-box' }}
                placeholder="Juan Pérez"
              />
            </div>
            
            <div className="form-group">
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Correo Electrónico</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ width: '100%', padding: '10px', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '1rem', boxSizing: 'border-box' }}
                placeholder="tu@correo.com"
              />
            </div>
            
            <div className="form-group">
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Contraseña</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ width: '100%', padding: '10px', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '1rem', boxSizing: 'border-box' }}
                placeholder="••••••••"
                minLength={6}
              />
            </div>
            
            <div className="form-group">
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Confirmar Contraseña</label>
              <input 
                type="password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                style={{ width: '100%', padding: '10px', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '1rem', boxSizing: 'border-box' }}
                placeholder="••••••••"
                minLength={6}
              />
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary btn-block" 
              disabled={isLoading}
              style={{ marginTop: '15px', opacity: isLoading ? 0.7 : 1 }}
            >
              {isLoading ? 'Registrando...' : 'Comenzar Ahora'}
            </button>
          </form>
          
          <p style={{ textAlign: 'center', marginTop: '25px', fontSize: '0.95rem' }}>
            ¿Ya tienes cuenta? <Link to="/login" style={{ color: 'var(--primary)', fontWeight: '600', textDecoration: 'none' }}>Iniciar sesión</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
