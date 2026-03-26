import { getProducts, formatPrice } from '@/lib/shopify';

export const dynamic = 'force-dynamic';

const S = 'https://makeatlantagreatagain.myshopify.com';

const CULTURE = [
  { src: '/culture/waffle-house.png', label: 'Late Night Legend', sub: 'Waffle House', tall: true },
  { src: '/culture/marta.png', label: 'Old Atlanta Forever', sub: 'MARTA', wide: true },
  { src: '/culture/cascade.png', label: 'City of Soul', sub: 'Cascade', tall: true },
  { src: '/culture/south-side.png', label: 'Da South Side', sub: 'Young Hustler' },
  { src: '/culture/atlien.png', label: 'Southern Playalistic', sub: 'ATLien' },
  { src: '/culture/club-libra.png', label: 'Hood Icon', sub: 'Club Libra' },
  { src: '/culture/lean-wit-it.png', label: 'Back When the City Had Soul', sub: 'Lean Wit It Rock Wit It' },
];

const CRESTS = [
  { src: '/brand/MAGA_brave_gold.png', alt: 'Mascot Seal' },
  { src: '/brand/MAGA_atlanta_braves.png', alt: 'Crossed Axes 2026' },
  { src: '/brand/MAGA_hawks.png', alt: 'Hawks' },
  { src: '/brand/MAGA_thrasher.png', alt: 'Thrasher' },
  { src: '/brand/MAGA_falcon.png', alt: 'Falcon' },
  { src: '/brand/MAGA_braves.png', alt: 'Script Atlanta' },
  { src: '/brand/MAGA_brave.png', alt: 'Gold Grillz' },
  { src: '/brand/MAGA_thrashers.png', alt: 'Thrashers' },
];

function ProductCard({ product }) {
  const img = product.images?.[0]?.src;
  const price = product.variants?.[0]?.price;
  const vid = product.variants?.[0]?.id;
  return (
    <a href={`${S}/products/${product.handle}`} className="product-card">
      <div className="product-card__image-wrapper">
        {img && <img src={img} alt={product.title} className="product-card__image" loading="lazy" />}
        <div className="product-card__overlay">
          <a href={`${S}/cart/${vid}:1`} className="product-card__quick-shop">Add to Cart</a>
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
  const snaps = byType['Snapback Cap'] || [];
  const tees = byType['T-Shirt'] || [];
  const buckets = byType['Bucket Hat'] || [];

  return (
    <>
      {/* ══ HERO — cinematic with ATL panorama bg ══ */}
      <section className="hero">
        <div className="hero__bg" style={{ backgroundImage: 'url(/culture/hero-collage.png)' }} />
        <div className="hero__crests">
          <img src="/brand/MAGA_hawks.png" alt="" className="hero__crest" />
          <img src="/brand/MAGA_atlanta_braves.png" alt="" className="hero__crest" />
          <img src="/brand/MAGA_thrasher.png" alt="" className="hero__crest" />
          <img src="/brand/MAGA_brave.png" alt="" className="hero__crest" />
        </div>
        <div className="hero__content">
          <div className="hero__tag">2026 Collection &mdash; Atlanta, Georgia</div>
          <h1 className="hero__title">When Atlanta<br /><em>Was Atlanta</em></h1>
          <p className="hero__sub">A tribute to the city before the soul got diluted. Premium streetwear for the ones who remember.</p>
          <div className="hero__actions">
            <a href={`${S}/collections/all-products`} className="btn-primary">Shop the Drop</a>
            <a href="#movement" className="btn-secondary">Enter the Movement</a>
          </div>
        </div>
        <div className="hero__scroll"><span>Scroll</span><div className="hero__scroll-line" /></div>
      </section>

      {/* ══ MANIFESTO ══ */}
      <section className="manifesto">
        <p className="manifesto__text">
          Atlanta was never just a city. It was a <strong>feeling</strong>. A rhythm. A late-night memory.
          A certain kind of flavor you can&rsquo;t fake. Before the culture became content.
          Before soul got replaced by sameness. <strong>This is for the ones who remember.</strong>
        </p>
      </section>

      {/* ══ MARQUEE ══ */}
      <section className="marquee">
        <div className="marquee__track">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="marquee__item">WHEN ATLANTA WAS ATLANTA &bull; BACK WHEN THE CITY HAD SOUL &bull;</span>
          ))}
        </div>
      </section>

      {/* ══ CULTURE GRID — editorial old Atlanta collage ══ */}
      <section className="culture">
        <div className="culture__header">
          <div className="culture__tag">The Archive</div>
          <h2 className="culture__title">When the City Had Soul</h2>
        </div>
        <div className="culture__grid">
          {CULTURE.map((c, i) => (
            <div key={i} className={`culture__card${c.tall ? ' culture__card--tall' : ''}${c.wide ? ' culture__card--wide' : ''}`}>
              <img src={c.src} alt={c.label} loading="lazy" />
              <div className="culture__card__overlay">
                <div className="culture__card__label">{c.label}</div>
                <div className="culture__card__sub">{c.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ CAMPAIGN MERCH — hero product ══ */}
      <section className="campaign">
        <div className="campaign__inner">
          <div className="campaign__image">
            <img src="/merch/pitcher-tee.png" alt="Blue MF Pitcher Tee" />
          </div>
          <div className="campaign__content">
            <div className="campaign__tag">Campaign Drop</div>
            <h2 className="campaign__title">The Legendary<br /><em>Blue Pitcher</em></h2>
            <p className="campaign__desc">
              Atlanta&rsquo;s golden era refreshment. Bankhead Bounce. College Park fuel. 
              Freaknik nights essential. This ain&rsquo;t merch &mdash; it&rsquo;s a time machine.
            </p>
            <a href={`${S}/collections/all-products`} className="btn-primary">Shop Now</a>
          </div>
        </div>
      </section>

      {/* ══ CRESTS ══ */}
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

      {/* ══ SNAPBACKS ══ */}
      <section className="products">
        <div className="products__header">
          <div>
            <div className="products__tag">The Drop</div>
            <h2 className="products__title">Skyline Snapbacks</h2>
          </div>
          <a href={`${S}/collections/snapbacks`} className="products__count">All {snaps.length} pieces &rarr;</a>
        </div>
        <div className="product-grid">
          {snaps.slice(0, 8).map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* ══ STORY with bg image ══ */}
      <section className="story">
        <div className="story__bg" style={{ backgroundImage: 'url(/merch/prime-time.png)' }} />
        <div className="story__content">
          <h2 className="story__title">The City Had <em>Soul</em></h2>
          <p className="story__text">
            From Bankhead to Buckhead. From the Westside to Stone Mountain.
            From Magic City to the Varsity. From Freaknik to Friday night fish frys.
            Atlanta wasn&rsquo;t just where you lived &mdash; it was how you moved.
          </p>
          <a href={`${S}/pages/about`} className="btn-secondary">Read the Story</a>
        </div>
      </section>

      {/* ══ TEES ══ */}
      <section className="products" style={{ background: 'var(--obsidian)' }}>
        <div className="products__header">
          <div>
            <div className="products__tag">Essentials</div>
            <h2 className="products__title">Tees &amp; Heavyweights</h2>
          </div>
          <a href={`${S}/collections/t-shirts`} className="products__count">All {tees.length} &rarr;</a>
        </div>
        <div className="product-grid">
          {tees.slice(0, 8).map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* ══ BUCKETS ══ */}
      <section className="products">
        <div className="products__header">
          <div>
            <div className="products__tag">Headwear</div>
            <h2 className="products__title">Bucket Hats</h2>
          </div>
          <a href={`${S}/collections/bucket-hats`} className="products__count">All {buckets.length} &rarr;</a>
        </div>
        <div className="product-grid">
          {buckets.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* ══ JOIN THE MOVEMENT ══ */}
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
