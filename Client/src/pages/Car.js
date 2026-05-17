import React from "react";
import Layout from "../components/Layout/Layout";

const CarBus = () => {
  const cars = [
    {
      name: "Ertiga",
      // price: "₹13 per km",
      img: "/images/images.webp",
    },
    {
      name: "Kia Carens",
      // price: "₹14 per km",
      img: "/images/kia.avif",
    },
    {
      name: "Hyundai Aura",
      // price: "₹11 per km",
      img: "/images/aura.webp",
    },
    {
      name: "Innova Crysta",
      // price: "₹18 per km",
      img: "/images/innova.jpg",
    },
    {
      name: "Toyota Fortuner",
      // price: "₹32 per km",
      img: "/images/f1.jpg",
    },
    {
      name: "Urbania",
      // price: "₹45 per km",
      img: "/images/u1.png",
    },

    {
      name: "Breeza",
      // price: "₹45 per km",
      img: "/images/b1.jpg",
    },

    {
      name: "Bolero",
      // price: "₹45 per km",
      img: "/images/b2.jpg",
    },
  ];

  return (
    <Layout title="Car & Bus Rental Service">
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          padding: "50px 20px",
          background:
            "linear-gradient(135deg, #dbeafe, #eff6ff, #bfdbfe)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "95%",
            maxWidth: "1300px",
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(10px)",
            borderRadius: "25px",
            padding: "50px 30px",
            textAlign: "center",
            boxShadow: "0 10px 40px rgba(59,130,246,0.2)",
            border: "1px solid rgba(255,255,255,0.5)",
          }}
        >
          {/* Heading */}
          {/* <h1
            style={{
              color: "#1d4ed8",
              fontSize: "42px",
              fontWeight: "800",
              marginBottom: "10px",
              letterSpacing: "1px",
            }}
          >
            Brother's TOUR AND TRAVELS
          </h1> */}

          <h1
            style={{
              fontSize: "40px",
              color: "#334155",
              marginBottom: "18px",
              fontWeight: "500",
            }}
          >
            Your Trusted Travel Partner Across India
          </h1>

          <div
            style={{
              width: "120px",
              height: "4px",
              background: "#60a5fa",
              margin: "0 auto 35px",
              borderRadius: "20px",
            }}
          />

          <h2
            style={{
              color: "#2563eb",
              marginBottom: "40px",
              fontSize: "22px",
              fontWeight: "700",
              textTransform: "uppercase",
            }}
          >
            Vehicle Options – All India Services
          </h2>

          {/* Car Cards Container */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "35px",
            }}
          >
            {cars.map((car, index) => (
              <div
                key={index}
                style={{
                  background: "#ffffff",
                  padding: "18px",
                  borderRadius: "22px",
                  textAlign: "center",
                  color: "#0f172a",
                  boxShadow: "0 8px 25px rgba(37,99,235,0.12)",
                  transition: "all 0.35s ease",
                  cursor: "pointer",
                  border: "1px solid #dbeafe",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-8px) scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 35px rgba(37,99,235,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(37,99,235,0.12)";
                }}
              >
                <div
                  style={{
                    overflow: "hidden",
                    borderRadius: "18px",
                  }}
                >
                  <img
                    src={car.img}
                    alt={car.name}
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                      transition: "0.4s",
                    }}
                  />
                </div>

                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: "700",
                    marginTop: "18px",
                    marginBottom: "8px",
                    color: "#1e3a8a",
                  }}
                >
                  {car.name}
                </h3>

                <p
                  style={{
                    fontSize: "17px",
                    color: "#2563eb",
                    fontWeight: "600",
                    marginBottom: "15px",
                  }}
                >
                  {car.price}
                </p>

                {/* <button
                  style={{
                    background:
                      "linear-gradient(to right, #3b82f6, #60a5fa)",
                    color: "#fff",
                    border: "none",
                    padding: "10px 22px",
                    borderRadius: "30px",
                    fontSize: "15px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "0.3s",
                    boxShadow: "0 4px 12px rgba(59,130,246,0.3)",
                  }}
                >
                  Book Now
                </button> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CarBus;