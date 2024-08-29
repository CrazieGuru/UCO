import React from 'react';
import error from '../../assets/images/error.jpg'
function ErrorPage() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f8f9fa',
      color: '#343a40',
      textAlign: 'center',
      padding: '20px',
    },
    heading: {
      fontSize: '5rem',
      margin: '0',
    },
    subheading: {
      fontSize: '1.5rem',
      margin: '20px 0',
    },
    button: {
      padding: '10px 20px',
      fontSize: '1rem',
      color: '#fff',
      backgroundColor: '#007bff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    image: {
      width: '300px',
      height: 'auto',
      margin: '20px 0',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <h2 style={styles.subheading}>Page Not Found</h2>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <img
        style={styles.image}
        src={error} // Replace with your own image
        alt="404 Not Found"
      />
      <a href="/" style={styles.button}>Go Home</a>
    </div>
  );
}

export default ErrorPage;
