import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import {
  pageContainer,
  heading,
  subText,
  cardGrid,
  card,
  button,
} from "../Styles/commonStyle";

const Bus = () => {
  const [hover, setHover] = useState(null);

  const buses = [
    {
      title: "Mini Bus",
      text: "18–26 Seater Comfortable Mini Bus",
      img: "/images/mini.jpg",
    },
    {
      title: "Luxury Coach",
      text: "Premium AC Coach for Long Tours",
      img: "/images/bus.webp",
    },
    {
      title: "Tour Bus",
      text: "Best for School, College & Group Tours",
      img: "/images/luxury.webp",
    },
  ];

  return (
    <Layout title="Bus Rentals">
      <div style={pageContainer}>
        <h1 style={heading}>Bus Rental Services</h1>
        <p style={subText}>
          Comfortable, Safe & Affordable Buses For Every Journey
        </p>

        <div style={cardGrid}>
          {buses.map((item, index) => (
            <div
              key={index}
              style={{
                ...card,
                transform: hover === index ? "translateY(-6px)" : "translateY(0)",
                transition: "0.3s ease",
                boxShadow:
                  hover === index
                    ? "0 12px 22px rgba(0,0,0,0.14)"
                    : "0 8px 20px rgba(0,0,0,0.08)",
              }}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(null)}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "160px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "10px",
                }}
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

export default Bus;
