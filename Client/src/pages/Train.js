import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { pageContainer, heading, subText, cardGrid, card, button } from "../Styles/commonStyle";

const TrainBooking = () => {
  const [hover, setHover] = useState(null);

  const trains = [
    {
      title: "Sleeper Class",
      text: "Comfortable travel at budget prices.",
      img: "/images/t1.avif",
    },
    {
      title: "AC Chair Car",
      text: "Perfect for short journeys with AC comfort.",
      img: "/images/t4.jpeg",
    },
    {
      title: "Executive Class",
      text: "Premium seating with meals included.",
      img: "/images/t3.webp",
    },
  ];

  return (
    <Layout title="Train Booking">
      <div style={pageContainer}>
        <h1 style={heading}>Train Booking Services</h1>
        <p style={subText}>Book Sleeper, AC, and Executive class train tickets conveniently.</p>

        <div style={cardGrid}>
          {trains.map((item, index) => (
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

export default TrainBooking;


/* Enhanced version with gradient background, hero banner, scroll animations & WhatsApp button will be added here. */