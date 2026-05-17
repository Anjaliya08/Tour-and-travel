import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { pageContainer, heading, subText, cardGrid, card, button } from "../Styles/commonStyle";

const Yatra = () => {
  const [hover, setHover] = useState(null);

  const packages = [
    { title: "Kedarnath", days: "3 Nights / 4 Days", img: "/images/y1.jpg" },
    { title: "Badrinath", days: "2 Nights / 3 Days", img: "/images/y2.jpg" },
    { title: "Gangotri", days: "1 Night / 2 Days", img: "/images/y3.jpg" },
    { title: "Yamunotri", days: "3 Nights / 4 Days", img: "/images/y4.jpg" },
    { title: "Ayodhya", days: "1 Night / 2 Days", img: "/images/r1.jpg" },
    { title: "Mathura vrindavan", days: "3 Nights / 4 Days", img: "/images/v1.webp" },
  ];

  return (
    <Layout title="Char Dham Yatra - Brother’s Tour & Travel">
      <div style={pageContainer}>
        <h1 style={heading}>Char Dham Yatra Packages</h1>
        <p style={subText}>Experience a peaceful and sacred journey with all-inclusive packages.</p>

        <div style={cardGrid}>
          {packages.map((item, index) => (
            <div
              key={index}
              style={{
                ...card,
                transform: hover === index ? "translateY(-6px)" : "translateY(0)",
                boxShadow:
                  hover === index
                    ? "0 12px 22px rgba(0,0,0,0.12)"
                    : "0 8px 20px rgba(0,0,0,0.06)",
                cursor: "pointer",
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
              <p>{item.days}</p>
              <button style={button}>Book Now</button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Yatra;
