import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import '../Css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Sol Kısım - Politikalar */}
        <div className="footer-left">
          <a href="#">Gizlilik Politikası</a>
          <a href="#">Veri Politikası</a>
          <a href="#">Aydınlatma Metni</a>
        </div>

        {/* Sağ Kısım - Sosyal Medya İkonları */}
        <div className="footer-right">
          <a href="mailto:example@example.com" className="social-icon">
            <FaEnvelope />
          </a>
          <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://wa.me/1234567890" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Telif Hakkı Bölümü */}
      <div className="footer-bottom">
        &copy; 2025 Tüm Hakları Saklıdır. Şirket Adı
      </div>
    </footer>
  );
};

export default Footer;
