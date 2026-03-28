import './globals.css';
import MobileMenu from '@/components/MobileMenu';
import PasswordGate from '@/components/PasswordGate';

export const metadata = {
  title: 'MAKE ATLANTA GREAT AGAIN — Old Atlanta Over Everything',
  description: 'For the ones who remember when Atlanta really had motion. Not a costume. Not outsider merch. Just real Atlanta on real pieces.',
  openGraph: {
    title: 'MAKE ATLANTA GREAT AGAIN',
    description: 'For the ones who remember when Atlanta really had motion. Old clubs. Old days. Old logos. Real city energy.',
    url: 'https://thaoldatlanta.com',
    siteName: 'MAKE ATLANTA GREAT AGAIN',
    type: 'website',
  },
};

const SHOPIFY = 'https://makeatlantagreatagain.myshopify.com';

const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Shop All', href: '/shop' },
  { label: 'Tees', href: `${SHOPIFY}/collections/t-shirts` },
  { label: 'Hats', href: `${SHOPIFY}/collections/snapbacks` },
  { label: 'Snapbacks', href: `${SHOPIFY}/collections/snapbacks` },
  { label: 'Truckers', href: `${SHOPIFY}/collections/trucker-hats` },
  { label: 'Buckets', href: `${SHOPIFY}/collections/bucket-hats` },
  { label: 'Vests', href: `${SHOPIFY}/collections/vests` },
  { label: 'Swim Trunks', href: `${SHOPIFY}/collections/swim-trunks` },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PasswordGate>
        {/* ANNOUNCEMENT BAR */}
        <div className="announce">
          <div className="announce__track">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="announce__item">EARLY ACCESS — USE CODE "FAMILY" FOR 50% OFF EVERYTHING &bull;</span>
            ))}
          </div>
        </div>

        <nav className="nav">
          <a href="/" className="nav__logo">MAKE ATLANTA GREAT AGAIN</a>
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
                MAKE ATLANTA GREAT AGAIN is for the ones who still miss when the city had its own flavor. Not a costume. Not a joke. Not outsider merch. Just real Atlanta on real pieces.
              </p>
            </div>
            <div>
              <div className="footer__heading">Shop</div>
              <a href={`${SHOPIFY}/collections/t-shirts`} className="footer__link">Tees</a>
              <a href={`${SHOPIFY}/collections/snapbacks`} className="footer__link">Snapbacks</a>
              <a href={`${SHOPIFY}/collections/trucker-hats`} className="footer__link">Truckers</a>
              <a href={`${SHOPIFY}/collections/bucket-hats`} className="footer__link">Buckets</a>
              <a href={`${SHOPIFY}/collections/vests`} className="footer__link">Vests</a>
              <a href={`${SHOPIFY}/collections/swim-trunks`} className="footer__link">Swim Trunks</a>
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
              <div className="footer__heading">Tap In</div>
              <a href="mailto:THEDOCTORDORSEY@gmail.com" className="footer__link">Email</a>
              <a href="tel:4048199609" className="footer__link">(404) 819-9609</a>
              <p className="footer__link" style={{ cursor: 'default' }}>Atlanta, Georgia</p>
            </div>
          </div>
          <div className="footer__bottom">
            <span>&copy; 2026 MAKE ATLANTA GREAT AGAIN &mdash; OLD ATLANTA OVER EVERYTHING</span>
            <span>A Kollective Hospitality Group brand</span>
          </div>
        </footer>
        </PasswordGate>
      </body>
    </html>
  );
}
