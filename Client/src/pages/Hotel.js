import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { pageContainer, heading, subText, cardGrid, card, button } from "../Styles/commonStyle";

const Hotel = () => {
  const [hover, setHover] = useState(null);

  const hotels = [
    { title: "Luxury Hotels", text: "5-Star hotels with premium amenities.", img: "/images/h1.jpg" },
    { title: "Budget Hotels", text: "Affordable stays with comfort.", img: "/images/h3.jpg" },
    { title: "Family Hotels", text: "Perfect for large groups.", img: "/images/h2.jpeg" },
  ];

  return (
    <Layout title="Hotel Reservations">
      <div style={pageContainer}>
        <h1 style={heading}>Hotel Reservations</h1>
        <p style={subText}>Choose from luxury, budget, and family-friendly hotels.</p>

        <div style={cardGrid}>
          {hotels.map((item, index) => (
            <div
              key={index}
              style={{
                ...card,
                transform: hover === index ? "translateY(-6px)" : "translateY(0)",
                transition: "0.3s ease",
                boxShadow:
                  hover === index
                    ? "0 12px 22px rgba(0,0,0,0.12)"
                    : "0 8px 20px rgba(0,0,0,0.06)",
              }}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(null)}
            >
              <img
                src={item.img}
                style={{
                  width: "100%",
                  height: "160px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "10px",
                }}
                alt={item.title}
              />

              <h3>{item.title}</h3>
              <p>{item.text}</p>

              <a
                href="tel:9876543210"
                style={{
                  ...button,
                  backgroundColor: "#0d6efd",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Call Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Hotel;
