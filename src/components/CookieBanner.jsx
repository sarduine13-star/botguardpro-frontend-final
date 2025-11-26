import React, { useState } from 'react';

export default function CookieBanner() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      background: 'rgba(0,0,0,0.85)',
      padding: '15px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTop: '1px solid rgba(0,255,255,0.3)',
      backdropFilter: 'blur(4px)',
      zIndex: 999
    }}>
      <span style={{ fontSize: '14px' }}>
        We use cookies to improve performance and security.
      </span>
      <button
        onClick={() => setOpen(false)}
        style={{
          background: '#00eaff',
          border: 'none',
          padding: '8px 14px',
          borderRadius: '4px',
          color: '#000',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 0 8px #00eaff'
        }}
      >
        OK
      </button>
    </div>
  );
}
