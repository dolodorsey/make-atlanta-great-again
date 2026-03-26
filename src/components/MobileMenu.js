'use client';
import { useState } from 'react';

const SHOPIFY = 'https://makeatlantagreatagain.myshopify.com';
const NAV_LINKS = [
  { label: 'Shop All', href: '/collections/all-products' },
  { label: 'Snapbacks', href: '/collections/snapbacks' },
  { label: 'Truckers', href: '/collections/trucker-hats' },
  { label: 'Buckets', href: '/collections/bucket-hats' },
  { label: 'Tees', href: '/collections/t-shirts' },
  { label: 'Vests', href: '/collections/vests' },
  { label: 'Pants', href: '/collections/bottoms' },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="mobile-menu-btn"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span style={{
          display: 'block', width: 20, height: 2,
          background: '#fff', transition: 'all 0.3s',
          transform: open ? 'rotate(45deg) translate(4px, 4px)' : 'none',
        }} />
        <span style={{
          display: 'block', width: 20, height: 2,
          background: '#fff', transition: 'all 0.3s',
          opacity: open ? 0 : 1, marginTop: 5,
        }} />
        <span style={{
          display: 'block', width: 20, height: 2,
          background: '#fff', transition: 'all 0.3s',
          marginTop: 5,
          transform: open ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
        }} />
      </button>

      {open && (
        <div style={{
          position: 'fixed', inset: 0, top: 72,
          background: 'rgba(10,10,10,0.97)',
          backdropFilter: 'blur(20px)',
          zIndex: 999, padding: '40px 24px',
          display: 'flex', flexDirection: 'column', gap: 0,
        }}>
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={`${SHOPIFY}${link.href}`}
              onClick={() => setOpen(false)}
              style={{
                display: 'block', padding: '20px 0',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                fontFamily: 'var(--font-display)',
                fontSize: 28, fontWeight: 300,
                color: '#fff', textDecoration: 'none',
                letterSpacing: '0.03em',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`${SHOPIFY}/cart`}
            style={{
              display: 'inline-block', marginTop: 32,
              padding: '16px 40px', background: 'var(--red)',
              color: '#fff', fontSize: 13, fontWeight: 600,
              letterSpacing: '0.15em', textTransform: 'uppercase',
              textDecoration: 'none', textAlign: 'center',
            }}
          >
            View Cart
          </a>
        </div>
      )}
    </>
  );
}
