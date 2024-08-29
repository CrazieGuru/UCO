import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PaymentPage() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [saveCard, setSaveCard] = useState(false);

  const navigate = useNavigate()
  const handlePayment = (e) => {
    e.preventDefault();
    // Add payment processing logic here
    alert('Payment processed successfully!');
    navigate('/success')

  };

  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#f4f4f9',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    paymentForm: {
      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '400px',
      width: '100%',
    },
    heading: {
      fontSize: '1.5rem',
      marginBottom: '20px',
      color: '#333',
      textAlign: 'center',
    },
    inputGroup: {
      marginBottom: '15px',
    },
    label: {
      fontSize: '0.9rem',
      color: '#555',
      marginBottom: '5px',
      display: 'block',
    },
    input: {
      width: '100%',
      padding: '10px',
      fontSize: '1rem',
      borderRadius: '5px',
      border: '1px solid #ced4da',
    },
    button: {
      width: '100%',
      padding: '10px',
      fontSize: '1rem',
      color: '#fff',
      backgroundColor: '#007bff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '20px',
    },
    summary: {
      backgroundColor: '#f8f9fa',
      padding: '20px',
      borderRadius: '10px',
      marginBottom: '20px',
    },
    summaryItem: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '10px',
    },
    saveCardOption: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '10px',
    },
    checkbox: {
      marginRight: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <form style={styles.paymentForm} onSubmit={handlePayment}>
        <a href="/cart"><i class="fa fa-arrow-left" style={{color:"black",fontSize:"20px"}}></i></a>  
        <h2 style={styles.heading}>Payment Details</h2>
        
        <div style={styles.summary}>
          <div style={styles.summaryItem}>
            <span>Order Total:</span>
            <strong>$80.40</strong>
          </div>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Card Number</label>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            style={styles.input}
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        
        <div style={styles.inputGroup}>
          <label style={styles.label}>Expiry Date</label>
          <input
            type="text"
            placeholder="MM/YY"
            style={styles.input}
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>CVV</label>
          <input
            type="text"
            placeholder="123"
            style={styles.input}
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Name on Card</label>
          <input
            type="text"
            placeholder="John Doe"
            style={styles.input}
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
          />
        </div>

        <div style={styles.saveCardOption}>
          <input
            type="checkbox"
            style={styles.checkbox}
            checked={saveCard}
            onChange={(e) => setSaveCard(e.target.checked)}
          />
          <label>Save card for future payments</label>
        </div>

        <button type="submit" style={styles.button}>Pay Now</button>
      </form>
    </div>
  );
}

export default PaymentPage;
