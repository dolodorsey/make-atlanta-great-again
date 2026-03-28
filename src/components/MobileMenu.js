'use client';
import { useState, useEffect } from 'react';

const SHOPIFY = 'https://makeatlantagreatagain.myshopify.com';
const NAV_LINKS = [
  { label: 'Shop All', href: '/shop', internal: true },
  { label: 'T-Shirts', href: '/collections/t-shirts' },
  { label: 'Snapbacks', href: '/collections/snapbacks' },
  { label: 'Truckers', href: '/collections/trucker-hats' },
  { label: 'Bucket Hats', href: '/collections/bucket-hats' },
  { label: 'Vests', href: '/collections/vests' },
  { label: 'Swim Trunks', href: '/collections/swim-trunks' },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <button
        className="mobile-menu-btn"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span style={{
          display: 'block', width: 20, height: 1.5,
          background: '#F5EDD6', transition: 'all 0.3s',
          transform: open ? 'rotate(45deg) translate(4px, 4px)' : 'none',
        }} />
        <span style={{
          display: 'block', width: 20, height: 1.5,
          background: '#F5EDD6', transition: 'all 0.3s',
          opacity: open ? 0 : 1, marginTop: 5,
        }} />
        <span style={{
          display: 'block', width: 20, height: 1.5,
          background: '#F5EDD6', transition: 'all 0.3s',
          marginTop: 5,
          transform: open ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
        }} />
      </button>

      {open && (
        <div style={{
          position: 'fixed', left: 0, right: 0, bottom: 0,
          top: 88,
          background: 'rgba(10,10,10,0.98)',
          backdropFilter: 'blur(20px)',
          zIndex: 999, padding: '32px 24px',
          display: 'flex', flexDirection: 'column', gap: 0,
          overflowY: 'auto',
        }}>
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.internal ? link.href : `${SHOPIFY}${link.href}`}
              onClick={() => setOpen(false)}
              style={{
                display: 'block', padding: '18px 0',
                borderBottom: '1px solid rgba(245,237,214,0.06)',
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 24, fontWeight: 400,
                color: '#F5EDD6', textDecoration: 'none',
                letterSpacing: '0.04em',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`${SHOPIFY}/cart`}
            style={{
              display: 'block', marginTop: 28,
              padding: '16px 40px', background: '#C41E3A',
              color: '#F5EDD6', fontSize: 11, fontWeight: 600,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              textDecoration: 'none', textAlign: 'center',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            View Cart
          </a>
          <div style={{
            marginTop: 'auto', paddingTop: 32,
            fontSize: 9, letterSpacing: '0.3em',
            color: 'rgba(245,237,214,0.15)', textAlign: 'center',
            textTransform: 'uppercase',
            fontFamily: "'DM Sans', sans-serif",
          }}>
            OLD ATLANTA OVER EVERYTHING
          </div>
        </div>
      )}
    </>
  );
}
