import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Css/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Hamburger menüyü aç/kapat
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
          <Link to="/" onClick={handleLinkClick}>
            <img
              className="navbar-logo"
              src="/WebsiteReactOgretenlerOdasi/assets/logo.jpg"
              alt="Logo"
            />
          </Link>
          <button
            className={`hamburger ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Menüyü Aç/Kapat"
          >
            {isOpen ? "✖" : "☰"}
          </button>
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

      {/* Menü açıkken tıklanabilir karartı */}
      {isOpen && <div className="backdrop" onClick={toggleMenu}></div>}

      <div className="navbar-space"></div>
    </>
  );
};

export default Navbar;
