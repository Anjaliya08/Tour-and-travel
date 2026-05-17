import React from 'react';
import Layout
 from '../components/Layout/Layout';
const Packages = () => {
  const packages = [
    {
      name: 'Char Dham Yatra',
      desc: '12-day spiritual journey covering Yamunotri, Gangotri, Kedarnath, and Badrinath.',
      img: '/images/i7.jpg',
    },
    {
      name: 'Golden Triangle Tour',
      desc: 'Explore Delhi, Agra, and Jaipur with guided tours, hotels & transport.',
      img: '/images/i8.jpg',
    },
    {
      name: 'Goa Beach Holiday',
      desc: 'Relax on the sunny beaches of Goa with 5-star resorts and local sightseeing.',
      img: '/images/i9.jpg',
    },
  ];

  const styles = {
    container: {
      padding: '50px 20px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
    },
    title: {
      fontSize: '2rem',
      color: '#007bff',
      marginBottom: '30px',
    },
    grid: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '30px',
    },
    card: {
      width: '300px',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      textAlign: 'left',
      backgroundColor: '#fff',
    },
    image: {
      width: '100%',
      height: '180px',
      objectFit: 'cover',
    },
    content: {
      padding: '20px',
    },
    name: {
      fontSize: '1.2rem',
      color: '#333',
      fontWeight: 'bold',
    },
    desc: {
      fontSize: '0.95rem',
      color: '#555',
      marginTop: '10px',
    },
  };

  return (
    <Layout>
      <div style={styles.container}>
        <h1 style={styles.title}>Popular Travel Packages</h1>
        <div style={styles.grid}>
          {packages.map((pkg, idx) => (
            <div key={idx} style={styles.card}>
              <img src={pkg.img} alt={pkg.name} style={styles.image} />
              <div style={styles.content}>
                <div style={styles.name}>{pkg.name}</div>
                <p style={styles.desc}>{pkg.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Packages;
