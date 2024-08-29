
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import React from 'react';
function UserOrdersPage() {
  const orders = [
    {
      id: 1,
      date: '2024-08-25',
      items: 'Wireless Mouse, Keyboard',
      status: 'Shipped',
      total: '$45.00',
    },
    {
      id: 2,
      date: '2024-08-24',
      items: 'Bluetooth Headphones',
      status: 'Delivered',
      total: '$89.00',
    },
    {
      id: 3,
      date: '2024-08-27',
      items: 'Pizaa',
      status: 'Delivered',
      total: '$89.00',
    },
    // Add more orders here
  ];

  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#f4f4f9',
      minHeight: '100vh',
    },
    heading: {
      fontSize: '1.8rem',
      color: '#333',
      marginBottom: '20px',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px',
      padding: '20px',
      transition: 'transform 0.2s',
    },
    cardHover: {
      transform: 'scale(1.02)',
    },
    orderInfo: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px',
    },
    orderItems: {
      color: '#555',
      fontSize: '1rem',
    },
    statusShipped: {
      color: '#17a2b8',
      fontWeight: 'bold',
    },
    statusDelivered: {
      color: 'green',
      fontWeight: 'bold',
    },
    button: {
      padding: '10px 20px',
      fontSize: '0.9rem',
      color: '#fff',
      backgroundColor: '#007bff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    viewDetails: {
      marginTop: '10px',
    },
  };

  return (
    <>
    <Navbar/>
    <div style={styles.container}>
      <h1 style={styles.heading}>My Orders</h1>
      {orders.map((order) => (
        <div
          key={order.id}
          style={styles.card}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <div style={styles.orderInfo}>
            <div>
              <h2>Order #{order.id}</h2>
              <p>{order.date}</p>
              <p style={styles.orderItems}>{order.items}</p>
            </div>
            <div>
              <span
                style={
                  order.status === 'Delivered'
                    ? styles.statusDelivered
                    : styles.statusShipped
                }
              >
                {order.status}
              </span>
              <p>{order.total}</p>
            </div>
          </div>
          {/* <a href={`/order/${order.id}`} style={{ ...styles.button, ...styles.viewDetails }}>
            View Details
          </a> */}
        </div>
      ))}
    </div>
    <Footer/> 
    </>
  );
}

export default UserOrdersPage;