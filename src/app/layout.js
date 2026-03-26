import './globals.css';
import MobileMenu from '@/components/MobileMenu';

export const metadata = {
  title: 'MAKE ATLANTA GREAT AGAIN — Premium Atlanta Streetwear',
  description: 'Premium Atlanta streetwear. Snapbacks, bucket hats, truckers, tees, vests & pants. 64 pieces, original designs, made with ATL pride.',
  openGraph: {
    title: 'MAKE ATLANTA GREAT AGAIN',
    description: 'Premium Atlanta streetwear. 64 pieces. Original designs. Made with ATL pride.',
    url: 'https://makeatlantagreatagain.myshopify.com',
    siteName: 'MAKE ATLANTA GREAT AGAIN',
    type: 'website',
  },
};

const NAV_LINKS = [
  { label: 'Shop All', href: '/collections/all-products' },
  { label: 'Snapbacks', href: '/collections/snapbacks' },
  { label: 'Truckers', href: '/collections/trucker-hats' },
  { label: 'Buckets', href: '/collections/bucket-hats' },
  { label: 'Tees', href: '/collections/t-shirts' },
  { label: 'Vests', href: '/collections/vests' },
  { label: 'Pants', href: '/collections/bottoms' },
];

const SHOPIFY_BASE = 'https://makeatlantagreatagain.myshopify.com';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <a href="/" className="nav__logo">MAGA</a>
          <ul className="nav__links">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a href={`${SHOPIFY_BASE}${link.href}`} className="nav__link">{link.label}</a>
              </li>
            ))}
          </ul>
          <a href={`${SHOPIFY_BASE}/cart`} className="nav__link" style={{ color: '#C9A84C' }}>Cart</a>
          <MobileMenu />
        </nav>
        <main>{children}</main>
        <footer className="footer">
          <div className="container">
            <div className="footer__grid">
              <div>
                <div className="footer__brand">MAKE ATLANTA GREAT AGAIN</div>
                <p className="footer__desc">
                  Premium Atlanta streetwear born from the belief that ATL deserves to be repped with 
                  the same pride and energy its people carry every day. 64 pieces. Original designs. 
                  Made with ATL pride.
                </p>
              </div>
              <div>
                <div className="footer__heading">Shop</div>
                {NAV_LINKS.map(link => (
                  <a key={link.href} href={`${SHOPIFY_BASE}${link.href}`} className="footer__link">{link.label}</a>
                ))}
              </div>
              <div>
                <div className="footer__heading">Info</div>
                <a href={`${SHOPIFY_BASE}/pages/about`} className="footer__link">About</a>
                <a href={`${SHOPIFY_BASE}/pages/faq`} className="footer__link">FAQ</a>
                <a href={`${SHOPIFY_BASE}/pages/contact`} className="footer__link">Contact</a>
                <a href={`${SHOPIFY_BASE}/policies/shipping-policy`} className="footer__link">Shipping</a>
                <a href={`${SHOPIFY_BASE}/policies/refund-policy`} className="footer__link">Returns</a>
              </div>
              <div>
                <div className="footer__heading">Contact</div>
                <a href="mailto:THEDOCTORDORSEY@gmail.com" className="footer__link">Email Us</a>
                <a href="tel:4048199609" className="footer__link">(404) 819-9609</a>
                <p className="footer__link" style={{ cursor: 'default' }}>Atlanta, Georgia</p>
              </div>
            </div>
            <div className="footer__bottom">
              <span>&copy; 2026 MAKE ATLANTA GREAT AGAIN. All rights reserved.</span>
              <span>A Kollective Hospitality Group brand.</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
