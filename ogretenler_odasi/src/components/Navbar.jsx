import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Css/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Hamburger menüyü aç/kapa
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Hamburger menü açıldığında scroll'u kapat, kapandığında geri aç
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Linke tıklandığında menüyü kapat
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-top">
          <h1 className="navbar-logo">LOGO</h1>
          <div className="hamburger" onClick={toggleMenu}>
            {isOpen ? "✖" : "☰"}
          </div>
        </div>
        <div className={`navbar-bottom ${isOpen ? "open" : ""}`}>
          <Link to="/" onClick={handleLinkClick}>Anasayfa</Link>
          <Link to="/about" onClick={handleLinkClick}>Hakkımızda</Link>
          <Link to="/issue" onClick={handleLinkClick}>Sayılar</Link>
          <Link to="/event" onClick={handleLinkClick}>Etkinlikler</Link>
          <Link to="/stores" onClick={handleLinkClick}>Satış Noktaları</Link>
          <Link to="/contact" onClick={handleLinkClick}>İletişim</Link>
        </div>
      </nav>
      <div className="navbar-space"></div>
    </>
  );
};

export default Navbar;
