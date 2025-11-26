import React, { useState } from 'react';
import './shield.css';

export default function SpinShield({ email }) {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);

  const spin = () => {
    if (!email) return alert("Enter email first!");
    setSpinning(true);
    setTimeout(() => {
      setSpinning(false);
      const outcomes = ["10% OFF", "FREE WEEK", "NO LUCK", "TRY AGAIN", "5% OFF"];
      setResult(outcomes[Math.floor(Math.random() * outcomes.length)]);
    }, 2000);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <div
        className={spinning ? "shield spinning" : "shield"}
        onClick={spin}
      ></div>
      {result && (
        <p className="neon" style={{ marginTop: "15px", fontSize: "1.4rem" }}>
          Result: {result}
        </p>
      )}
    </div>
  );
}
