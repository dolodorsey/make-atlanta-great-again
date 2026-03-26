import './globals.css';
import MobileMenu from '@/components/MobileMenu';

export const metadata = {
  title: 'MAKE ATLANTA GREAT AGAIN — When Atlanta Was Atlanta',
  description: 'A cultural movement and premium streetwear campaign inspired by the soul of old Atlanta. Not a slogan. A reminder. Shop the collection.',
  openGraph: {
    title: 'MAKE ATLANTA GREAT AGAIN',
    description: 'When Atlanta was Atlanta. A tribute to the city before the soul got diluted.',
    url: 'https://thaoldatlanta.com',
    siteName: 'MAKE ATLANTA GREAT AGAIN',
    type: 'website',
  },
};

const SHOPIFY = 'https://makeatlantagreatagain.myshopify.com';

const NAV = [
  { label: 'Shop', href: `${SHOPIFY}/collections/all-products` },
  { label: 'Story', href: `${SHOPIFY}/pages/about` },
  { label: 'Archive', href: `${SHOPIFY}/collections/all-products` },
  { label: 'Movement', href: '#movement' },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <a href="/" className="nav__logo">MAGA</a>
          <ul className="nav__links">
            {NAV.map(n => (
              <li key={n.label}><a href={n.href} className="nav__link">{n.label}</a></li>
            ))}
            <li><a href={`${SHOPIFY}/cart`} className="nav__link" style={{ color: '#C9A84C' }}>Cart</a></li>
          </ul>
          <MobileMenu />
        </nav>
        <main>{children}</main>
        <footer className="footer">
          <div className="footer__grid">
            <div>
              <div className="footer__brand">MAKE ATLANTA GREAT AGAIN</div>
              <p className="footer__desc">
                A cultural movement and premium streetwear campaign inspired by the soul of old Atlanta. 
                Not political. Not generic merch. This is a tribute, a movement, and a uniform.
              </p>
            </div>
            <div>
              <div className="footer__heading">Shop</div>
              <a href={`${SHOPIFY}/collections/snapbacks`} className="footer__link">Snapbacks</a>
              <a href={`${SHOPIFY}/collections/trucker-hats`} className="footer__link">Truckers</a>
              <a href={`${SHOPIFY}/collections/bucket-hats`} className="footer__link">Buckets</a>
              <a href={`${SHOPIFY}/collections/t-shirts`} className="footer__link">Tees</a>
              <a href={`${SHOPIFY}/collections/vests`} className="footer__link">Vests</a>
              <a href={`${SHOPIFY}/collections/bottoms`} className="footer__link">Bottoms</a>
            </div>
            <div>
              <div className="footer__heading">Info</div>
              <a href={`${SHOPIFY}/pages/about`} className="footer__link">Our Story</a>
              <a href={`${SHOPIFY}/pages/faq`} className="footer__link">FAQ</a>
              <a href={`${SHOPIFY}/pages/contact`} className="footer__link">Contact</a>
              <a href={`${SHOPIFY}/policies/shipping-policy`} className="footer__link">Shipping</a>
              <a href={`${SHOPIFY}/policies/refund-policy`} className="footer__link">Returns</a>
            </div>
            <div>
              <div className="footer__heading">Contact</div>
              <a href="mailto:THEDOCTORDORSEY@gmail.com" className="footer__link">Email</a>
              <a href="tel:4048199609" className="footer__link">(404) 819-9609</a>
              <p className="footer__link" style={{ cursor: 'default' }}>Atlanta, Georgia</p>
            </div>
          </div>
          <div className="footer__bottom">
            <span>&copy; 2026 MAKE ATLANTA GREAT AGAIN</span>
            <span>A Kollective Hospitality Group brand</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
