import React from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import "../../Css/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Google Maps */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.6138942030975!2d28.356723275857384!3d40.21765087147234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b5e1300d613005%3A0xb4f1bcdd7c2184de!2sAtat%C3%BCrk%20Blv.%2C%20Karacabey%2FBursa!5e0!3m2!1sen!2str!4v1743033092823!5m2!1sen!2str"
          title="Google Maps"
          frameBorder="0"
          allowFullScreen
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>

      {/* Açık Adres */}
      <div className="open-address">
        <p>Atatürk Bulvarı, Karacabey, Bursa, Türkiye</p>
      </div>

      {/* İletişim Bilgileri */}
      <div className="contact-info">
        <div>
          <i className="fas fa-envelope"></i>
          <p>bilgi@ogretenlerodasi.com</p>
        </div>
      </div>

      {/* Sosyal Medya */}
      <div className="social-media">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook/>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram/>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter/>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin/>
        </a>
      </div>
    </div>
  );
};

export default Contact;
