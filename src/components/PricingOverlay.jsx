import React from 'react';
import './pricing.css';

export default function PricingOverlay({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'rgba(0,0,0,0.7)',
          padding: '25px',
          borderRadius: '8px',
          minWidth: '300px',
          maxWidth: '500px',
          border: '1px solid rgba(0,255,255,0.3)',
          boxShadow: '0 0 15px rgba(0,255,255,0.3)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="neon" style={{ textAlign: 'center' }}>Pricing Plans</h2>

        <div className="plan">
          <h3>Starter</h3>
          <p>$19/mo</p>
        </div>

        <div className="plan">
          <h3>Business</h3>
          <p>$49/mo</p>
        </div>

        <div className="plan">
          <h3>Pro</h3>
          <p>$99/mo</p>
        </div>

        <div className="plan">
          <h3>Enterprise</h3>
          <p>Custom pricing</p>
        </div>

        <button
          onClick={onClose}
          style={{
            width: '100%',
            marginTop: '20px',
            padding: '12px',
            background: '#00eaff',
            color: '#000',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            boxShadow: '0 0 10px #00eaff'
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
