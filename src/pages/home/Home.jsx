import React, { useEffect } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

const Home = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const cards = document.querySelectorAll('.program-card, .glass-card, .mission-text');
      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (cardTop < windowHeight * 0.85) {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }
      });
    };

    const cards = document.querySelectorAll('.program-card, .mission-text');
    cards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    window.addEventListener('scroll', animateOnScroll);
    setTimeout(animateOnScroll, 100);

    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <>
      <Navbar />
      
      <header className="hero" id="inicio">
          <div className="hero-content">
              <h1 className="hero-title">Capacitación de Piscinas en <span>Tu Idioma</span></h1>
              <p className="hero-subtitle">Eliminamos la barrera del idioma para que alcances tu máximo potencial. La academia líder mundial de certificaciones CPO, CPI y educación profesional en español.</p>
              <div className="hero-actions">
                  <a href="#programas" className="btn btn-primary btn-large">Explorar Programas</a>
                  <a href="#mision" className="btn btn-secondary btn-large">Saber Más</a>
              </div>
          </div>
          <div className="hero-graphics">
              <div className="glass-card floating">
                  <div className="icon">🏆</div>
                  <div>
                      <h4>Certificación CPO</h4>
                      <p>En Español</p>
                  </div>
              </div>
              <div className="glass-card floating delay-1">
                  <div className="icon">🔍</div>
                  <div>
                      <h4>Certificación CPI</h4>
                      <p>Inspector Autorizado</p>
                  </div>
              </div>
          </div>
      </header>

      <section className="programs-section" id="programas">
          <div className="container">
              <h2 className="section-title">Nuestros <span>Programas</span></h2>
              <p className="section-desc">Certificaciones reconocidas a nivel mundial, ahora disponibles 100% en español para la comunidad Latina.</p>
              
              <div className="cards-grid">
                  <div className="program-card">
                      <div className="card-glow"></div>
                      <div className="card-content">
                          <div className="card-icon">🏊‍♂️</div>
                          <h3>CPO</h3>
                          <p className="full-name">Certified Pool & Spa Operator</p>
                          <p className="description">La credencial de capacitación en piscinas y spa más reconocida y verificable del mundo, traducida y adaptada para hispanohablantes.</p>
                          <ul className="features">
                              <li>✓ Material oficial en Español</li>
                              <li>✓ Examen de certificación</li>
                              <li>✓ 5 años de validez</li>
                          </ul>
                          <a href="#" className="btn btn-primary btn-block">Inscribirse en CPO</a>
                      </div>
                  </div>

                  <div className="program-card">
                      <div className="card-glow"></div>
                      <div className="card-content">
                          <div className="card-icon">📋</div>
                          <h3>CPI</h3>
                          <p className="full-name">Certified Pool Inspector</p>
                          <p className="description">Programa de capacitación especializado para la realización de inspecciones profesionales de piscinas y spas comerciales y residenciales.</p>
                          <ul className="features">
                              <li>✓ Estándares internacionales</li>
                              <li>✓ Identificación de riesgos</li>
                              <li>✓ Auditorías de seguridad</li>
                          </ul>
                          <a href="#" className="btn btn-primary btn-block">Inscribirse en CPI</a>
                      </div>
                  </div>

                  <div className="program-card featured">
                      <span className="badge">Nuevo</span>
                      <div className="card-glow"></div>
                      <div className="card-content">
                          <div className="card-icon">🎓</div>
                          <h3>Academia</h3>
                          <p className="full-name">Piscinas Sin Fronteras</p>
                          <p className="description">Educación continua, cursos patentados, foros comunitarios y recursos diseñados exclusivamente para el profesional latino de piscinas.</p>
                          <ul className="features">
                              <li>✓ Cursos exclusivos semanales</li>
                              <li>✓ Acceso a comunidad privada</li>
                              <li>✓ Recursos descargables</li>
                          </ul>
                          <a href="#" className="btn btn-glow btn-block">Únete a la Academia</a>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section className="mission-section" id="mision">
          <div className="container">
              <div className="mission-grid">
                  <div className="mission-text">
                      <h2 className="section-title">Rompemos la <span>Barrera del Idioma</span></h2>
                      <p>Miles de profesionales talentosos latinos se han visto limitados en su crecimiento debido a las barreras del idioma. En Piscinas Sin Fronteras, creemos que el talento no tiene idioma.</p>
                      <p>Nuestra misión es convertirnos en la plataforma de educación de piscinas en español líder en el mundo, asegurando que cada profesional latino tenga las herramientas, certificaciones y el apoyo para alcanzar su máximo potencial.</p>
                      <div className="stats">
                          <div className="stat-item">
                              <h3>100%</h3>
                              <p>En Español</p>
                          </div>
                          <div className="stat-item">
                              <h3>3</h3>
                              <p>Programas Clave</p>
                          </div>
                          <div className="stat-item">
                              <h3>Infinito</h3>
                              <p>Potencial</p>
                          </div>
                      </div>
                  </div>
                  <div className="mission-image">
                      <div className="gradient-sphere"></div>
                  </div>
              </div>
          </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
