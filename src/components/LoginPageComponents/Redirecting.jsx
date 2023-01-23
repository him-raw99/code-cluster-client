import React from 'react';

const Redirecting = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
      fontWeight: 'bold',
      textAlign: 'center',
      background: 'white'
    }}>
      Redirecting...
    </div>
  );
}

export default Redirecting;
