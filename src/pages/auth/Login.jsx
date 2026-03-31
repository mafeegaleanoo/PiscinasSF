import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Logo from '../../components/ui/Logo';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      await login(email, password);
      // Wait for mock auth to resolve, then navigate
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Error al iniciar sesión');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="auth-wrapper" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '80px', paddingBottom: '40px', background: 'var(--surface-dark)' }}>
        <div className="auth-card glass-card" style={{ maxWidth: '400px', width: '100%', margin: '0 20px', padding: '40px 30px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
             <Logo style={{ height: '50px' }} />
          </div>
          
          <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Iniciar Sesión</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '30px' }}>Accede a tu panel de estudiante</p>
          
          {error && <div style={{ background: '#fee2e2', color: '#ef4444', padding: '10px', borderRadius: '8px', marginBottom: '20px', fontSize: '0.9rem' }}>{error}</div>}
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="form-group">
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Correo Electrónico</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ width: '100%', padding: '12px', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '1rem', boxSizing: 'border-box' }}
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
                style={{ width: '100%', padding: '12px', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '1rem', boxSizing: 'border-box' }}
                placeholder="••••••••"
              />
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary btn-block" 
              disabled={isLoading}
              style={{ marginTop: '10px', opacity: isLoading ? 0.7 : 1 }}
            >
              {isLoading ? 'Iniciando...' : 'Iniciar Sesión'}
            </button>
          </form>
          
          <p style={{ textAlign: 'center', marginTop: '25px', fontSize: '0.95rem' }}>
            ¿No tienes cuenta? <Link to="/register" style={{ color: 'var(--primary)', fontWeight: '600', textDecoration: 'none' }}>Regístrate aquí</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
