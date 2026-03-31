import React from 'react';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <>
      <Navbar />
      <div className="dashboard-wrapper" style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '60px', background: 'var(--surface-dark)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <h1 className="section-title" style={{ margin: 0, textAlign: 'left', fontSize: '2.5rem' }}>Bienvenido, <span>{user?.name.split(' ')[0]}</span></h1>
              <p style={{ color: 'var(--text-secondary)' }}>Tu panel de estudiante y progreso de certificaciones</p>
            </div>
            <button onClick={logout} className="btn" style={{ background: '#f1f5f9', color: 'var(--slate)', border: '1px solid var(--border)' }}>
              Cerrar Sesión
            </button>
          </div>

          <div className="cards-grid">
            <div className="glass-card" style={{ padding: '30px' }}>
              <h3 style={{ marginBottom: '15px', color: 'var(--navy)' }}>Tus Cursos</h3>
              <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '12px', border: '1px dashed var(--border)', textAlign: 'center' }}>
                <p style={{ color: 'var(--slate)', marginBottom: '15px' }}>Aún no estás inscrito en ningún curso.</p>
                <a href="/cpo" className="btn btn-primary" style={{ display: 'inline-block' }}>Explorar Catálogo</a>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '30px' }}>
              <h3 style={{ marginBottom: '15px', color: 'var(--navy)' }}>Progreso de Certificación</h3>
              
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontWeight: 600, color: 'var(--slate)' }}>CPO (Certified Pool Operator)</span>
                  <span style={{ color: 'var(--primary)', fontWeight: 600 }}>0%</span>
                </div>
                <div style={{ height: '8px', background: 'var(--border)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '0%', background: 'linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)' }}></div>
                </div>
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontWeight: 600, color: 'var(--slate)' }}>CPI (Certified Pool Inspector)</span>
                  <span style={{ color: 'var(--primary)', fontWeight: 600 }}>0%</span>
                </div>
                <div style={{ height: '8px', background: 'var(--border)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '0%', background: 'linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)' }}></div>
                </div>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '30px' }}>
              <h3 style={{ marginBottom: '15px', color: 'var(--navy)' }}>Comunidad (Academia)</h3>
              <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '12px', border: '1px solid var(--border)' }}>
                <span style={{ display: 'inline-block', padding: '4px 10px', background: '#e0f2fe', color: '#0369a1', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, marginBottom: '10px' }}>Próximamente</span>
                <p style={{ color: 'var(--slate)', fontSize: '0.95rem' }}>El foro de estudiantes exclusivos de Piscinas Sin Fronteras estará disponible pronto.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
