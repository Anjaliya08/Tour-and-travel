import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const images = [
    "/images/i1.jpg",
    "/images/i2.jpg",
    "/images/i3.jpg",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Layout>

      {/* ======================= HERO SECTION ======================= */}
      <div
  style={{
    position: "relative",
    width: "100%",
    overflow: "hidden", // ✅ Prevent horizontal scroll
  }}
>
  {/* SLIDER */}
  <Slider {...sliderSettings}>
    {images.map((img, i) => (
      <div key={i}>
        <img
          src={img}
          alt={`slide-${i}`}
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
            filter: "brightness(55%)",
          }}
        />
      </div>
    ))}
  </Slider>

  {/* DARK OVERLAY */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(to right, rgba(0,0,0,0.65), rgba(0,0,0,0.35))",
    }}
  />

  {/* CONTENT */}
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "white",
      textAlign: "center",
      width: "100%",
      maxWidth: "950px",
      padding: "0 20px",
      zIndex: 2,
      boxSizing: "border-box",
    }}
  >
    {/* SMALL TAG */}
    <div
      data-aos="fade-down"
      style={{
        display: "inline-block",
        padding: "8px 18px",
        background: "rgba(255,255,255,0.12)",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: "30px",
        marginBottom: "25px",
        fontSize: "14px",
        fontWeight: "600",
        letterSpacing: "1px",
      }}
    >
      ✈️ Explore • Travel • Experience
    </div>

    {/* MAIN HEADING */}
    <h1
      data-aos="zoom-in"
      style={{
        fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
        fontWeight: "800",
        lineHeight: "1.2",
        marginBottom: "20px",
        textShadow: "0 4px 20px rgba(0,0,0,0.5)",
      }}
    >
      Discover India With <br />
      <span
        style={{
          background: "linear-gradient(90deg, #00c6ff, #0072ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Brother's Tour & Travel
      </span>
    </h1>

    {/* DESCRIPTION */}
    <p
      data-aos="fade-up"
      style={{
        fontSize: "clamp(1rem, 2vw, 1.3rem)",
        lineHeight: "1.8",
        color: "rgba(255,255,255,0.9)",
        maxWidth: "750px",
        margin: "0 auto",
        textShadow: "0 2px 8px rgba(0,0,0,0.4)",
      }}
    >
      From spiritual yatras to luxurious holidays — experience unforgettable
      journeys, premium comfort, and beautiful destinations all across India.
    </p>

    {/* BUTTONS */}
    <div
      data-aos="fade-up"
      style={{
        marginTop: "40px",
        display: "flex",
        justifyContent: "center",
        gap: "18px",
        flexWrap: "wrap",
      }}
    >
      <button
        style={{
          padding: "14px 30px",
          borderRadius: "40px",
          border: "none",
          background: "linear-gradient(135deg, #0072ff, #00c6ff)",
          color: "#fff",
          fontSize: "16px",
          fontWeight: "600",
          cursor: "pointer",
          boxShadow: "0 10px 25px rgba(0,114,255,0.4)",
          transition: "0.3s",
        }}
      >
        Explore Packages
      </button>

      <button
        style={{
          padding: "14px 30px",
          borderRadius: "40px",
          border: "1px solid rgba(255,255,255,0.4)",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(10px)",
          color: "#fff",
          fontSize: "16px",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Contact Us
      </button>
    </div>
  </div>
</div>
      {/* ======================= TRAVEL SERVICES ======================= */}
<section
  style={{
    padding: "60px 20px",
    background: "#f7fbff",
    textAlign: "center",
  }}
>
  <h2
    data-aos="fade-down"
    style={{ fontSize: "2.2rem", color: "#007bff", marginBottom: "10px" }}
  >
    Travel Services We Offer
  </h2>

  <p data-aos="fade-up" style={{ color: "#444", marginBottom: "40px" }}>
    Book Yatra, Tickets, Hotels & Rentals — everything in one place.
  </p>

  {/* ---------- NEW 2-LINE SERVICE GRID ---------- */}
  <div
    style={{
      maxWidth: "800px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "25px",
    }}
  >
    {/* Line 1 */}
    {[
      { icon: "🕉️", label: "Yatra", link: "/yatra" },
      { icon: "✈️", label: "Air", link: "/air" },
      { icon: "🚆", label: "Train", link: "/train" },
    ].map((item, i) => (
      <Link
        to={item.link}
        key={i}
        data-aos="zoom-in"
        style={{ textDecoration: "none", color: "#222" }}
      >
        <div
          style={{
            background: "#fff",
            padding: "25px 20px",
            borderRadius: "16px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
            transition: "0.3s",
            cursor: "pointer",
          }}
        >
          <div style={{ fontSize: "2.5rem" }}>{item.icon}</div>
          <h3 style={{ marginTop: "12px", fontSize: "1.2rem" }}>{item.label}</h3>
        </div>
      </Link>
    ))}

    {/* Line 2 */}
    {[
      { icon: "🏨", label: "Hotel", link: "/hotel" },
      { icon: "🚌", label: "Bus", link: "/bus" },
      { icon: "🚗", label: "Car", link: "/carbus" },
    ].map((item, i) => (
      <Link
        to={item.link}
        key={i}
        data-aos="zoom-in"
        style={{ textDecoration: "none", color: "#222" }}
      >
        <div
          style={{
            background: "#fff",
            padding: "25px 20px",
            borderRadius: "16px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
            transition: "0.3s",
            cursor: "pointer",
          }}
        >
          <div style={{ fontSize: "2.5rem" }}>{item.icon}</div>
          <h3 style={{ marginTop: "12px", fontSize: "1.2rem" }}>{item.label}</h3>
        </div>
      </Link>
    ))}
  </div>
</section>


      {/* ======================= POPULAR DESTINATIONS ======================= */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 data-aos="fade-down" style={{ fontSize: "2.2rem", color: "#007bff" }}>
          Popular Destinations
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "25px",
            marginTop: "35px",
          }}
        >
          {[
            { img: "/images/y1.jpg", name: "Kedarnath" },
            { img: "/images/p1.jpg", name: "Goa" },
            { img: "/images/p2.jpg", name: "Jaipur" },
            { img: "/images/p3.jpg", name: "Manali" },
          ].map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
                cursor: "pointer",
              }}
            >
              <img
                src={item.img}
                alt={item.name}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <h3 style={{ padding: "12px", background: "#fff" }}>{item.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ======================= WHY CHOOSE US ======================= */}
      <section
        style={{
          padding: "60px 20px",
          background: "#f7fbff",
          textAlign: "center",
        }}
      >
        <h2
          data-aos="fade-down"
          style={{ fontSize: "2.2rem", color: "#007bff", marginBottom: "20px" }}
        >
          Why Choose Us?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
            marginTop: "25px",
          }}
        >
          {[
            { icon: "⭐", text: "Trusted Travel Agency" },
            { icon: "💰", text: "Best Price Guarantee" },
            { icon: "📞", text: "24/7 Customer Support" },
            { icon: "🚌", text: "Comfort & Safety" },
          ].map((item, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              style={{
                background: "#fff",
                padding: "25px",
                borderRadius: "16px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.12)",
              }}
            >
              <div style={{ fontSize: "2.6rem" }}>{item.icon}</div>
              <p style={{ marginTop: "12px", fontSize: "1.1rem" }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ======================= TESTIMONIALS ======================= */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 data-aos="fade-down" style={{ fontSize: "2.2rem", color: "#007bff" }}>
          What Our Travelers Say
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          {[
            { quote: "Amazing Kedarnath trip arrangements!", name: "Aarti Mehra" },
            { quote: "Luxury buses & excellent support!", name: "Rajiv Pandey" },
            { quote: "Perfect holiday planning for my family.", name: "Preeti Kapoor" },
          ].map((item, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              style={{
                padding: "22px",
                borderRadius: "14px",
                background: "#fff",
                maxWidth: "300px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
              }}
            >
              “{item.quote}”
              <p style={{ marginTop: "10px", fontWeight: "600" }}>— {item.name}</p>
            </div>
          ))}
        </div>
      </section>

    </Layout>
  );
};

export default Home;
