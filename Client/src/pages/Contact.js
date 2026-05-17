import React from "react";
import Layout from "../components/Layout/Layout";

const Contact = () => {
  const styles = {
    container: {
      padding: "70px 20px",
      fontFamily: "Arial, sans-serif",
      background:
        "linear-gradient(135deg, #f0f4f8 0%, #eaf3ff 50%, #f7fbff 100%)",
      minHeight: "100vh",
      textAlign: "center",
    },

    title: {
      fontSize: "3rem",
      color: "#1A3D7D",
      marginBottom: "15px",
      fontWeight: "800",
      letterSpacing: "1px",
    },

    subtitle: {
      color: "#555",
      fontSize: "1.1rem",
      marginBottom: "50px",
    },

    cardContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "35px",
    },

    card: {
      background: "#fff",
      borderRadius: "20px",
      padding: "35px",
      width: "350px",
      boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
      transition: "0.3s ease",
    },

    cardTitle: {
      fontSize: "1.8rem",
      color: "#007bff",
      marginBottom: "20px",
      fontWeight: "700",
    },

    text: {
      color: "#444",
      fontSize: "1rem",
      lineHeight: "1.8",
    },

    number: {
      display: "block",
      marginTop: "15px",
      color: "#007bff",
      fontSize: "1.2rem",
      textDecoration: "none",
      fontWeight: "600",
    },

    whatsapp: {
      display: "block",
      marginTop: "12px",
      color: "#25D366",
      fontSize: "1.1rem",
      textDecoration: "none",
      fontWeight: "600",
    },

    feeBox: {
      marginTop: "20px",
      background: "linear-gradient(135deg, #007bff, #00c6ff)",
      color: "#fff",
      padding: "18px",
      borderRadius: "15px",
      fontSize: "1.3rem",
      fontWeight: "700",
      boxShadow: "0 10px 20px rgba(0,123,255,0.25)",
    },

    qrImage: {
      width: "220px",
      height: "220px",
      objectFit: "cover",
      borderRadius: "15px",
      marginTop: "25px",
      border: "6px solid #f0f4f8",
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    },

    note: {
      marginTop: "18px",
      color: "#666",
      fontSize: "0.95rem",
      lineHeight: "1.7",
    },

    address: {
      marginTop: "18px",
      color: "#444",
      lineHeight: "1.8",
      fontSize: "1rem",
    },
  };

  return (
    <Layout>
      <div style={styles.container}>
        <h1 style={styles.title}>Contact & Consultation</h1>

        <p style={styles.subtitle}>
          Plan your perfect trip with Brother's Tour & Travel
        </p>

        <div style={styles.cardContainer}>
          {/* CONTACT CARD */}
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Get In Touch</h2>

            <p style={styles.text}>
              Contact us for:
              <br />
              ✓ Car Booking
              <br />
              ✓ Bus Booking
              <br />
              ✓ Hotel Booking
              <br />
              ✓ Tour Packages
              <br />
              ✓ Char Dham & Yatra Services
            </p>

            <div style={styles.address}>
              <strong>Address:</strong>
              <br />
              Madad Alli Ka Purwa,
              <br />
              Rauzagaon Rudauli,
              <br />
              Ayodhya (U.P.) 224116
            </div>

            {/* <a href="tel:+919651855722" style={styles.number}>
              📞 9651855722
            </a>

            <a href="tel:+919651855721" style={styles.number}>
              📞 9651855721
            </a> */}

            <a
              href="https://wa.me/919651855722"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.whatsapp}
            >
              WhatsApp: 9651855722
            </a>

            <a
              href="https://wa.me/919651855721"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.whatsapp}
            >
              WhatsApp: 9651855721
            </a>
          </div>

          {/* CONSULTATION + QR CARD */}
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Consultation Fees</h2>

            <p style={styles.text}>
              Get personalized travel planning and complete guidance for your
              trip, hotel selection, transportation, and yatra packages.
            </p>

            <div style={styles.feeBox}>
              Consultation Fee: ₹499
            </div>

            {/* QR CODE IMAGE */}
            <img
              src="/images/code.jpeg"
              alt="QR Code"
              style={styles.qrImage}
            />

            <p style={styles.note}>
              Scan the QR code to pay consultation fees.
              <br />
              After payment, send the screenshot on WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;