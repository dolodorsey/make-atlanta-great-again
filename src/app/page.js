import { getProducts, formatPrice } from '@/lib/shopify';

export const dynamic = 'force-dynamic';

const S = 'https://makeatlantagreatagain.myshopify.com';

const CRESTS = [
  { src: '/brand/MAGA_brave_gold.png', alt: 'Mascot Seal' },
  { src: '/brand/MAGA_atlanta_braves.png', alt: 'Crossed Axes 2026' },
  { src: '/brand/MAGA_hawks.png', alt: 'Hawks Wingspan' },
  { src: '/brand/MAGA_thrasher.png', alt: 'Thrasher Shield' },
  { src: '/brand/MAGA_falcon.png', alt: 'Falcon Strike' },
  { src: '/brand/MAGA_braves.png', alt: 'Script Atlanta' },
  { src: '/brand/MAGA_brave.png', alt: 'Gold Grillz Mascot' },
  { src: '/brand/FLAG.png', alt: 'ATL Flag' },
];

function ProductCard({ product }) {
  const img = product.images?.[0]?.src;
  const price = product.variants?.[0]?.price;
  const variantId = product.variants?.[0]?.id;
  return (
    <a href={`${S}/products/${product.handle}`} className="product-card">
      <div className="product-card__image-wrapper">
        {img ? (
          <img src={img} alt={product.title} className="product-card__image" loading="lazy" />
        ) : (
          <div style={{ width: '100%', height: '100%', background: '#1a1a1a' }} />
        )}
        <div className="product-card__overlay">
          <a href={`${S}/cart/${variantId}:1`} className="product-card__quick-shop">
            Add to Cart
          </a>
        </div>
      </div>
      <div className="product-card__info">
        <span className="product-card__title">{product.title}</span>
        <span className="product-card__price">{formatPrice(price)}</span>
      </div>
    </a>
  );
}

export default async function HomePage() {
  const products = await getProducts();

  const byType = {};
  (products || []).forEach(p => {
    const t = p.product_type || 'Other';
    if (!byType[t]) byType[t] = [];
    byType[t].push(p);
  });

  const snapbacks = byType['Snapback Cap'] || [];
  const tees = byType['T-Shirt'] || [];
  const buckets = byType['Bucket Hat'] || [];
  const vests = byType['Vest'] || [];
  const truckers = byType['Trucker Hat'] || [];
  const featured = [...snapbacks.slice(0, 2), ...tees.slice(0, 2)];

  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1 — CINEMATIC HERO
          ═══════════════════════════════════════════ */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="hero__crests">
          <img src="/brand/MAGA_hawks.png" alt="" className="hero__crest" />
          <img src="/brand/MAGA_atlanta_braves.png" alt="" className="hero__crest" />
          <img src="/brand/MAGA_thrasher.png" alt="" className="hero__crest" />
          <img src="/brand/MAGA_brave.png" alt="" className="hero__crest" />
        </div>
        <div className="hero__content">
          <div className="hero__tag">2026 Collection &mdash; Atlanta, Georgia</div>
          <h1 className="hero__title">
            When Atlanta<br /><em>Was Atlanta</em>
          </h1>
          <p className="hero__sub">
            A tribute to the city before the soul got diluted. Not a slogan. A reminder.
            Premium streetwear for the ones who remember.
          </p>
          <div className="hero__actions">
            <a href={`${S}/collections/all-products`} className="btn-primary">Shop the Drop</a>
            <a href="#movement" className="btn-secondary">Enter the Movement</a>
          </div>
        </div>
        <div className="hero__scroll">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — MANIFESTO
          ═══════════════════════════════════════════ */}
      <section className="manifesto">
        <p className="manifesto__text">
          Atlanta was never just a city. It was a <strong>feeling</strong>. A rhythm. 
          A late-night memory. A certain kind of flavor you can&rsquo;t fake.
          Before the culture became content. Before soul got replaced by sameness.
          <strong> This is for the ones who remember.</strong>
        </p>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — MARQUEE BAND
          ═══════════════════════════════════════════ */}
      <section className="marquee">
        <div className="marquee__track">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="marquee__item">
              WHEN ATLANTA WAS ATLANTA <span className="marquee__dot">&bull;</span> BACK WHEN THE CITY HAD SOUL <span className="marquee__dot">&bull;</span>
            </span>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — CREST GALLERY
          ═══════════════════════════════════════════ */}
      <section className="crests">
        <div className="crests__header">
          <div className="crests__tag">The Crests</div>
          <h2 className="crests__title">Eight Teams. One City.</h2>
        </div>
        <div className="crests__grid">
          {CRESTS.map((c, i) => (
            <a key={i} href={`${S}/collections/all-products`} className="crest-card">
              <img src={c.src} alt={c.alt} className="crest-card__img" loading="lazy" />
            </a>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — FLAGSHIP DROP (Snapbacks)
          ═══════════════════════════════════════════ */}
      <section className="products">
        <div className="products__header">
          <div>
            <div className="products__tag">The Drop</div>
            <h2 className="products__title">Skyline Snapbacks</h2>
          </div>
          <a href={`${S}/collections/snapbacks`} className="products__count">
            All {snapbacks.length} pieces &rarr;
          </a>
        </div>
        <div className="product-grid">
          {snapbacks.slice(0, 8).map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6 — STORY / SOUL SECTION
          ═══════════════════════════════════════════ */}
      <section className="story">
        <h2 className="story__title">
          The City Had <em>Soul</em>
        </h2>
        <p className="story__text">
          From Bankhead to Buckhead. From the Westside to Stone Mountain.
          From Magic City to the Varsity. From Freaknik to Friday night fish frys.
          Atlanta wasn&rsquo;t just where you lived &mdash; it was how you moved.
        </p>
        <a href={`${S}/pages/about`} className="btn-secondary">Read the Story</a>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 7 — TEES & HEAVYWEIGHTS
          ═══════════════════════════════════════════ */}
      <section className="products" style={{ background: 'var(--obsidian)' }}>
        <div className="products__header">
          <div>
            <div className="products__tag">Essentials</div>
            <h2 className="products__title">Tees &amp; Heavyweights</h2>
          </div>
          <a href={`${S}/collections/t-shirts`} className="products__count">
            All {tees.length} pieces &rarr;
          </a>
        </div>
        <div className="product-grid">
          {tees.slice(0, 8).map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 8 — BUCKET HATS
          ═══════════════════════════════════════════ */}
      <section className="products">
        <div className="products__header">
          <div>
            <div className="products__tag">Headwear</div>
            <h2 className="products__title">Bucket Hats</h2>
          </div>
          <a href={`${S}/collections/bucket-hats`} className="products__count">
            All {buckets.length} designs &rarr;
          </a>
        </div>
        <div className="product-grid">
          {buckets.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 9 — JOIN THE MOVEMENT
          ═══════════════════════════════════════════ */}
      <section className="movement" id="movement">
        <div className="movement__tag">Join the Movement</div>
        <h2 className="movement__title">First Access. City Activations. Limited Releases.</h2>
        <p className="movement__desc">
          Get notified before drops go live. Be first to city activations, private releases,
          events, and stories from old Atlanta.
        </p>
        <div className="movement__form">
          <input type="email" className="movement__input" placeholder="Enter your email" />
          <button className="movement__submit">Join</button>
        </div>
      </section>
    </>
  );
}
