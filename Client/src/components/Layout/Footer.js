import React from "react";

const Footer = () => {
  const styles = {
    footer: {
      background: "linear-gradient(135deg, #004aad, #007bff)",
      padding: "40px 15px",
      color: "white",
      marginTop: "50px",
      fontFamily: "Arial, sans-serif",
      width: "100%",          // 👈 Full width footer
    },

    container: {
      display: "flex",
      justifyContent: "center",  
      gap: "40px",             
      flexWrap: "wrap",
      width: "100%",                // 👈 No fixed width
    },

    column: {
      width: "200px",               // 👈 Compact columns
      textAlign: "left",
    },

    heading: {
      fontSize: "16px",
      marginBottom: "10px",
      fontWeight: "bold",
      borderBottom: "2px solid #ffdf00",
      paddingBottom: "4px",
      display: "inline-block",
    },

    text: {
      fontSize: "13px",
      opacity: 0.9,
      marginBottom: "6px",
    },

    link: {
      fontSize: "13px",
      color: "#ffdf00",
      textDecoration: "none",
      display: "block",
      marginBottom: "5px",
    },

    bottomText: {
      textAlign: "center",
      marginTop: "20px",
      fontSize: "12px",
      opacity: 0.8,
    },
  };

  return (
    <footer style={styles.footer}>
      
      <div style={styles.container}>

        <div style={styles.column}>
          <h3 style={styles.heading}>Brother's Tour & Travel</h3>
          <p style={styles.text}>Your trusted travel partner.</p>
        </div>

        <div style={styles.column}>
          <h3 style={styles.heading}>Quick Links</h3>
          <a href="#home" style={styles.link}>Home</a>
          <a href="#about" style={styles.link}>About</a>
          <a href="#packages" style={styles.link}>Packages</a>
          <a href="#contact" style={styles.link}>Contact</a>
        </div>

        <div style={styles.column}>
          <h3 style={styles.heading}>Contact</h3>
          <p style={styles.text}>📞 9651855722</p>
          <p style={styles.text}>📞 9651855721</p>
          <p style={styles.text}>📧 info@brotherstourtravel.com</p>
        </div>

      </div>

      <p style={styles.bottomText}>
        © {new Date().getFullYear()} Brother's Tour & Travel. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
