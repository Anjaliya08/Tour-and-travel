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

const AirBooking = () => {
  const [hover, setHover] = useState(null);

  const flights = [
    {
      title: "Economy Class",
      text: "Affordable, comfortable seats for budget travel.",
      img: "/images/a1.jpg",
    },
    {
      title: "Business Class",
      text: "Premium comfort with priority check-in.",
      img: "/images/a2.webp",
    },
    {
      title: "First Class",
      text: "Luxury flying experience with top-notch service.",
      img: "/images/a3.png",
    },
  ];

  return (
    <Layout title="Air Ticket Booking">
      <div style={pageContainer}>
        <h1 style={heading}>Air Ticket Booking</h1>
        <p style={subText}>
          Book Economy, Business, and First Class flight tickets with ease.
        </p>

        <div style={cardGrid}>
          {flights.map((item, index) => (
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
                href="tel:9932092030"
                style={{
                  ...button,
                  backgroundColor: "#0d6efd",
                  display: "inline-block",
                  textDecoration: "none",
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

export default AirBooking;
