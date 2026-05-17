import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaPlaneDeparture,
} from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);

      // Close menu when screen becomes desktop
      if (!mobile) setMenuOpen(false);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header style={styles.header}>
      {/* LOGO */}
      <div style={styles.logo}>
        <div style={styles.logoIcon}>
          <FaPlaneDeparture />
        </div>

        <div>
          <div style={styles.logoMain}>Brother's</div>
          <div style={styles.logoSub}>Tour & Travel</div>
        </div>
      </div>

      {/* MOBILE MENU ICON */}
      {isMobile && (
        <div style={styles.hamburger} onClick={toggleMenu}>
          {menuOpen ? (
            <FaTimes size={24} />
          ) : (
            <FaBars size={24} />
          )}
        </div>
      )}

      {/* NAVIGATION */}
      <nav
        style={{
          ...styles.nav,
          ...(isMobile
            ? menuOpen
              ? styles.navMobileOpen
              : styles.navMobileClosed
            : styles.navDesktop),
        }}
      >
        <a href="/" style={styles.link}>
          Home
        </a>

        <a href="/aboutus" style={styles.link}>
          About
        </a>

        <a href="/package" style={styles.link}>
          Packages
        </a>

        <a href="/service" style={styles.link}>
          Services
        </a>

        <a href="/contact" style={styles.link}>
          Contact
        </a>
      </nav>
    </header>
  );
};

const styles = {
  /* HEADER */
  header: {
    background:
      "linear-gradient(135deg, #ffffff 0%, #f3f8ff 50%, #e8f1ff 100%)",
    padding: "14px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 999,
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    borderBottom: "1px solid rgba(0,123,255,0.1)",
    flexWrap: "wrap",
  },

  /* LOGO */
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    cursor: "pointer",
  },

  logoIcon: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #007bff, #00c6ff)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "22px",
    boxShadow: "0 6px 18px rgba(0,123,255,0.35)",
  },

  logoMain: {
    fontSize: "22px",
    fontWeight: "800",
    color: "#007bff",
    lineHeight: "1",
    letterSpacing: "0.5px",
  },

  logoSub: {
    fontSize: "12px",
    color: "#555",
    fontWeight: "500",
    marginTop: "3px",
    letterSpacing: "1px",
  },

  /* HAMBURGER */
  hamburger: {
    cursor: "pointer",
    color: "#007bff",
    display: "flex",
    alignItems: "center",
  },

  /* NAV */
  nav: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },

  navDesktop: {
    display: "flex",
  },

  navMobileOpen: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    background: "#ffffff",
    flexDirection: "column",
    alignItems: "center",
    padding: "25px 0",
    display: "flex",
    gap: "20px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
    borderTop: "1px solid #eee",
  },

  navMobileClosed: {
    display: "none",
  },

  /* LINKS */
  link: {
    color: "#1e3a5f",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "16px",
    padding: "8px 12px",
    transition: "0.3s ease",
  },

  /* BUTTON */
  bookBtn: {
    background: "linear-gradient(135deg, #007bff, #00c6ff)",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "30px",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "14px",
    boxShadow: "0 6px 18px rgba(0,123,255,0.3)",
    transition: "0.3s ease",
  },
};

export default Header;