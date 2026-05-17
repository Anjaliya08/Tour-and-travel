import React from "react";
import { FaHotel, FaBus, FaCar, FaPlane, FaTrain, FaMapMarkedAlt } from "react-icons/fa";
import Layout from "../components/Layout/Layout";
const Services = () => {
  const services = [
    {
      icon: <FaHotel size={40} />,
      title: "Hotel Booking",
      description: "Book comfortable and luxurious hotels across India with best deals.",
    },
    {
      icon: <FaBus size={40} />,
      title: "Bus Services",
      description: "AC and Non-AC buses for group and solo travel experiences.",
    },
    {
      icon: <FaCar size={40} />,
      title: "Car & Mini Bus Rental",
      description: "Private cars and mini-buses for city tours and Char Dham Yatra.",
    },
    {
      icon: <FaPlane size={40} />,
      title: "Flight Booking",
      description: "Domestic and international flight ticket bookings at competitive prices.",
    },
    {
      icon: <FaTrain size={40} />,
      title: "Railway Ticket Booking",
      description: "Fast and reliable railway ticket bookings for all major routes.",
    },
    {
      icon: <FaMapMarkedAlt size={40} />,
      title: "Custom Tour Packages",
      description: "Tailored packages for Char Dham Yatra and pan-India tours.",
    },
  ];

  return (
    <Layout>
    <>
      <style>
        {`
        .services-container {
          padding: 60px 20px;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .services-title {
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 40px;
          color: #333;
        }

        .services-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
        }

        .service-card {
          background-color: #f9f9f9;
          padding: 30px 20px;
          border-radius: 15px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          width: 300px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }

        .service-icon {
          margin-bottom: 15px;
          color: #0077b6;
        }

        .service-title {
          font-size: 20px;
          margin-bottom: 10px;
          color: #222;
        }

        .service-description {
          font-size: 16px;
          color: #555;
        }

        @media (max-width: 768px) {
          .services-grid {
            flex-direction: column;
            align-items: center;
          }
        }
      `}
      </style>

      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
    </Layout>
  );
};

export default Services;
