import React from 'react';

export default function EmailCapture({ email, setEmail }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert(`Email submitted: ${email}`);
      }}
      style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
    >
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{
          padding: '10px',
          borderRadius: '6px',
          border: '1px solid rgba(0,255,255,0.3)',
          background: 'rgba(0,0,0,0.35)',
          color: '#fff'
        }}
      />

      <button
        type="submit"
        style={{
          padding: '10px',
          borderRadius: '6px',
          background: '#00eaff',
          color: '#000',
          fontWeight: 'bold',
          boxShadow: '0 0 10px #00eaff',
          cursor: 'pointer'
        }}
      >
        Continue
      </button>
    </form>
  );
}
