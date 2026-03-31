import React from 'react';
import Logo from '../ui/Logo';

const Footer = () => {
  return (
    <footer>
        <div className="container footer-content">
            <div className="footer-brand">
                <Logo style={{ height: '48px', width: 'auto', marginBottom: '1rem' }} />
                <p>La plataforma educativa para profesionales latinos.</p>
            </div>
            <div className="footer-links">
                <h4>Enlaces</h4>
                <ul>
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#programas">Programas</a></li>
                    <li><a href="#mision">Nuestra Misión</a></li>
                </ul>
            </div>
            <div className="footer-contact">
                <h4>Contacto</h4>
                <p>info@piscinassinfronteras.com</p>
                <div className="socials">
                    <a href="#">FB</a>
                    <a href="#">IG</a>
                    <a href="#">LN</a>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Piscinas Sin Fronteras. Todos los derechos reservados.</p>
        </div>
    </footer>
  );
};

export default Footer;
