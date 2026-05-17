import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      background:
        "linear-gradient(135deg, #f8fbff 0%, #eef6ff 50%, #e4f0ff 100%)",
      padding: "70px 20px",
    },

    hero: {
      maxWidth: "1000px",
      margin: "0 auto 70px",
      textAlign: "center",
    },

    badge: {
      display: "inline-block",
      padding: "8px 22px",
      borderRadius: "30px",
      background: "linear-gradient(135deg, #007bff, #00c6ff)",
      color: "#fff",
      fontWeight: "700",
      fontSize: "0.95rem",
      marginBottom: "20px",
      boxShadow: "0 8px 20px rgba(0,123,255,0.25)",
    },

    title: {
      fontSize: "3.2rem",
      fontWeight: "800",
      color: "#1A3D7D",
      marginBottom: "20px",
      lineHeight: "1.2",
    },

    subtitle: {
      fontSize: "1.15rem",
      color: "#555",
      maxWidth: "850px",
      margin: "0 auto",
      lineHeight: "1.9",
    },

    section: {
      maxWidth: "1100px",
      margin: "0 auto 60px",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "40px",
      background: "#fff",
      borderRadius: "24px",
      padding: "40px",
      boxShadow: "0 20px 60px rgba(0,123,255,0.08)",
      border: "1px solid rgba(0,123,255,0.08)",
    },

    reverseSection: {
      flexDirection: "row-reverse",
    },

    imageWrapper: {
      flex: "1 1 450px",
      textAlign: "center",
    },

    image: {
      width: "100%",
      maxWidth: "500px",
      height: "350px",
      objectFit: "cover",
      borderRadius: "20px",
      boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
    },

    content: {
      flex: "1 1 450px",
      textAlign: "left",
    },

    sectionTitle: {
      fontSize: "2rem",
      fontWeight: "700",
      color: "#1A3D7D",
      marginBottom: "20px",
    },

    text: {
      fontSize: "1.05rem",
      color: "#444",
      lineHeight: "1.9",
      marginBottom: "15px",
    },

    highlight: {
      color: "#007bff",
      fontWeight: "700",
    },

    statsContainer: {
      maxWidth: "1100px",
      margin: "0 auto 70px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "25px",
    },

    statCard: {
      background: "#fff",
      borderRadius: "20px",
      padding: "30px 20px",
      textAlign: "center",
      boxShadow: "0 12px 35px rgba(0,123,255,0.08)",
      border: "1px solid rgba(0,123,255,0.06)",
    },

    statNumber: {
      fontSize: "2.2rem",
      fontWeight: "800",
      color: "#007bff",
      marginBottom: "10px",
    },

    statLabel: {
      fontSize: "1rem",
      color: "#555",
      fontWeight: "600",
    },

    founderSection: {
      maxWidth: "1100px",
      margin: "0 auto",
      background: "linear-gradient(135deg, #007bff, #00c6ff)",
      color: "#fff",
      padding: "50px 40px",
      borderRadius: "28px",
      textAlign: "center",
      boxShadow: "0 20px 60px rgba(0,123,255,0.25)",
    },

    founderTitle: {
      fontSize: "2rem",
      fontWeight: "800",
      marginBottom: "20px",
    },

    founderText: {
      fontSize: "1.1rem",
      lineHeight: "2",
      maxWidth: "850px",
      margin: "0 auto",
    },
  };

  return (
    <Layout>
      <div style={styles.container}>
        {/* Hero Section */}
        <div style={styles.hero}>
          <div style={styles.badge} data-aos="zoom-in">
            Trusted Travel Partner
          </div>

          <h1 style={styles.title} data-aos="fade-down">
            About Brother’s Tour & Travel
          </h1>

          <p style={styles.subtitle} data-aos="fade-up">
            At <span style={styles.highlight}>Brother’s Tour & Travel</span>,
            we transform journeys into unforgettable experiences. Whether you
            dream of a spiritual pilgrimage, a family vacation, or a luxurious
            getaway, we ensure every detail is planned with care and precision.
          </p>
        </div>

        {/* Stats */}
        <div style={styles.statsContainer}>
          <div style={styles.statCard} data-aos="fade-up">
            <div style={styles.statNumber}>1000+</div>
            <div style={styles.statLabel}>Happy Travelers</div>
          </div>

          <div style={styles.statCard} data-aos="fade-up" data-aos-delay="100">
            <div style={styles.statNumber}>500+</div>
            <div style={styles.statLabel}>Tour Packages</div>
          </div>

          <div style={styles.statCard} data-aos="fade-up" data-aos-delay="200">
            <div style={styles.statNumber}>24/7</div>
            <div style={styles.statLabel}>Customer Support</div>
          </div>

          <div style={styles.statCard} data-aos="fade-up" data-aos-delay="300">
            <div style={styles.statNumber}>100%</div>
            <div style={styles.statLabel}>Trusted Service</div>
          </div>
        </div>

        {/* Section 1 */}
        <div style={styles.section} data-aos="fade-right">
          <div style={styles.imageWrapper}>
            <img
              src="/images/i4.jpg"
              alt="Spiritual Travel"
              style={styles.image}
            />
          </div>

          <div style={styles.content}>
            <h2 style={styles.sectionTitle}>Spiritual & Pilgrimage Tours</h2>
            <p style={styles.text}>
              From the sacred heights of <span style={styles.highlight}>Char Dham</span>,
              Kedarnath, Badrinath, and Vaishno Devi to other religious
              destinations across India, we create spiritually fulfilling
              journeys with complete comfort and peace of mind.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div
          style={{ ...styles.section, ...styles.reverseSection }}
          data-aos="fade-left"
        >
          <div style={styles.imageWrapper}>
            <img
              src="/images/i5.jpg"
              alt="Holiday Packages"
              style={styles.image}
            />
          </div>

          <div style={styles.content}>
            <h2 style={styles.sectionTitle}>Customized Holiday Packages</h2>
            <p style={styles.text}>
              Explore destinations like Kerala, Goa, Kashmir, Rajasthan, and
              more with packages tailored to your budget—whether economical,
              premium, or luxury.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div style={styles.section} data-aos="fade-up">
          <div style={styles.imageWrapper}>
            <img
              src="/images/i6.jpg"
              alt="Transport Services"
              style={styles.image}
            />
          </div>

          <div style={styles.content}>
            <h2 style={styles.sectionTitle}>Reliable Travel Services</h2>
            <p style={styles.text}>
              We provide car rentals, tempo travellers, buses, hotel bookings,
              and flight/train ticket assistance to make your travel experience
              smooth and hassle-free.
            </p>
          </div>
        </div>

        {/* Founder Section */}
        <div style={styles.founderSection} data-aos="zoom-in-up">
          <h2 style={styles.founderTitle}>Founded by Karan</h2>
          <p style={styles.founderText}>
            Brother’s Tour & Travel was founded with a simple vision—to offer
            trustworthy, affordable, and memorable travel experiences.
            Karan built this company on the values of honesty, dedication, and
            exceptional customer service, ensuring every traveler feels cared
            for from start to finish.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;