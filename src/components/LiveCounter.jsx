import React, { useEffect, useState } from 'react';

export default function LiveCounter() {
  const [count, setCount] = useState(2347);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        background: 'rgba(0,0,0,0.5)',
        padding: '20px',
        borderRadius: '6px',
        border: '1px solid rgba(0,255,255,0.25)',
        textAlign: 'center',
        marginTop: '20px'
      }}
    >
      <h3 className="neon">Live Threats Blocked</h3>
      <p style={{ fontSize: '2rem', margin: 0 }}>{count.toLocaleString()}</p>
    </div>
  );
}
