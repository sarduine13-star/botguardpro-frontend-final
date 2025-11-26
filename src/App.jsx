import React, { useState } from 'react';
import CookieBanner from './components/CookieBanner.jsx';
import EmailCapture from './components/EmailCapture.jsx';
import SpinShield from './components/SpinShield.jsx';
import LiveCounter from './components/LiveCounter.jsx';
import PricingOverlay from './components/PricingOverlay.jsx';

export default function App() {
  const [email, setEmail] = useState('');
  const [openSection, setOpenSection] = useState(null);
  const [openPricing, setOpenPricing] = useState(false);

  const toggle = (key) => {
    setOpenSection(openSection === key ? null : key);
  };

  return (
    <>
      <PricingOverlay open={openPricing} onClose={() => setOpenPricing(false)} />

      <header
        style={{
          textAlign: 'center',
          padding: '30px 0',
          background: 'rgba(0,0,0,0.50)',
          backdropFilter: 'blur(5px)',
          borderBottom: '1px solid rgba(0,255,255,0.25)',
          position: 'relative'
        }}
      >
        <img
          src="/american-flag.png"
          alt="flag"
          style={{
            width: '60px',
            position: 'absolute',
            top: '15px',
            right: '15px',
            opacity: 0.85
          }}
        />
        <h1 className="neon" style={{ fontSize: '3rem' }}>
          BotGuard Pro
        </h1>
        <p style={{ color: '#8ccfff', marginTop: '-10px' }}>
          Built in America. Protects Your Digital Storefront.
        </p>

        <button
          onClick={() => setOpenPricing(true)}
          className="buy-btn"
          style={{
            marginTop: '15px',
            padding: '10px 18px',
            borderRadius: '6px',
            background: '#00d1ff',
            color: '#000',
            fontWeight: 'bold',
            border: 'none',
            boxShadow: '0 0 12px #00d1ff',
            cursor: 'pointer'
          }}
        >
          View Plans & Pricing
        </button>
      </header>

      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
        <div className="card">
          <h2 className="neon">See BotGuard Pro In Action</h2>
          <video
            src="/demo.mp4"
            autoPlay
            muted
            loop
            controls
            style={{ width: '100%', borderRadius: '6px' }}
          />
        </div>

        <div className="card">
          <h3 className="neon">Testimonials</h3>
          <blockquote>
            “BotGuard Pro stopped our bot attacks instantly.” — D.L.
          </blockquote>
          <blockquote>
            “Fastest setup we've used. Night and day difference.” — K.R.
          </blockquote>
          <blockquote>
            “We sleep better knowing our data isn’t being scraped.” — S.M.
          </blockquote>
        </div>

        <LiveCounter />

        <div className="card">
          <h3 className="neon">Start Your Protection</h3>
          <EmailCapture email={email} setEmail={setEmail} />
          <p style={{ opacity: 0.75 }}>Email required to spin the Shield.</p>
        </div>

        <SpinShield email={email} />

        <div className="card" style={{ marginTop: '30px' }}>
          <h2 className="neon">What BotGuard Pro Does</h2>
          <p style={{ opacity: 0.75 }}>Click each section to reveal details.</p>

          <div className="expand" onClick={() => toggle('firewall')}>
            BotGuard Firewall (Click)
          </div>
          {openSection === 'firewall' && (
            <div className="expand-content">
              Blocks AI scrapers, credential-stuffers, brute-force bots, spam engines,
              data harvesters, and automated attacks. Real-time filtering, IP intelligence,
              and speed-protection layer included.
            </div>
          )}

          <div className="expand" onClick={() => toggle('threats')}>
            Threats We Stop (Click)
          </div>
          {openSection === 'threats' && (
            <div className="expand-content">
              <ul>
                <li>AI scraping & content theft</li>
                <li>Password-stuffing bots</li>
                <li>Shadow crawlers</li>
                <li>Fake traffic bots</li>
                <li>Brute force attempts</li>
              </ul>
            </div>
          )}

          <div className="expand" onClick={() => toggle('plans')}>
            Plan Details (Click)
          </div>
          {openSection === 'plans' && (
            <div className="expand-content">
              <p>Starter — Basic firewall + scrape protection</p>
              <p>Business — Adds speed layer + analytics</p>
              <p>Pro — Adds AI threat analysis + custom rules</p>
              <p>Enterprise — Custom build + private support</p>
            </div>
          )}
        </div>
      </main>

      <footer
        style={{
          marginTop: '50px',
          textAlign: 'center',
          padding: '25px',
          background: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(4px)',
          borderTop: '1px solid rgba(0,255,255,0.25)'
        }}
      >
        <a href="/privacy" className="footer-link">
          Privacy Policy
        </a>
        {' '}•{' '}
        <a href="/terms" className="footer-link">
          Terms of Service
        </a>
        <p style={{ opacity: 0.7, marginTop: '10px' }}>
          © {new Date().getFullYear()} Redwine Innovations. All Rights Reserved.
        </p>
      </footer>

      <CookieBanner />
    </>
  );
}
