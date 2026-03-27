export const dynamic = 'force-dynamic';
const S = 'https://makeatlantagreatagain.myshopify.com';

const PIECES = [
  { src: '/mockups/design-grid-9up.png', cat: 'all' },
  { src: '/mockups/olive-chief-tee-lookbook.png', cat: 'tees' },
  { src: '/mockups/pink-shop-display.png', cat: 'tees' },
  { src: '/mockups/trucker-hat-floating.png', cat: 'truckers' },
  { src: '/mockups/pink-axes-lookbook.png', cat: 'tees' },
  { src: '/mockups/charcoal-flag-vest.png', cat: 'vests' },
  { src: '/mockups/charcoal-falcons-vest.png', cat: 'vests' },
  { src: '/mockups/bucket-hat-museum.png', cat: 'buckets' },
  { src: '/mockups/charcoal-braves-vest.png', cat: 'vests' },
  { src: '/mockups/hawks-bucket-lookbook.png', cat: 'buckets' },
  { src: '/mockups/falcons-bucket-museum.png', cat: 'buckets' },
  { src: '/mockups/braves-bucket-lookbook.png', cat: 'buckets' },
  { src: '/mockups/mascot-boutique.png', cat: 'tees' },
  { src: '/mockups/axes-blue-lifestyle.png', cat: 'tees' },
  { src: '/mockups/truckers-bar-red.png', cat: 'truckers' },
  { src: '/mockups/falcon-green-store.png', cat: 'tees' },
  { src: '/mockups/varsity-store-white.png', cat: 'tees' },
  { src: '/mockups/mascot-green-lifestyle.png', cat: 'tees' },
  { src: '/mockups/atl-store-display.png', cat: 'all' },
  { src: '/mockups/snapbacks-peachtree.png', cat: 'snapbacks' },
  { src: '/mockups/truckers-models.png', cat: 'truckers' },
  { src: '/mockups/script-pink-tee.png', cat: 'tees' },
  { src: '/mockups/chieftain-cream-tee.png', cat: 'tees' },
  { src: '/mockups/patriot-vest-set.png', cat: 'vests' },
  { src: '/mockups/axes-pink-tee.png', cat: 'tees' },
  { src: '/mockups/axes-trucker-red.png', cat: 'truckers' },
  { src: '/mockups/braves-blue-tee.png', cat: 'tees' },
  { src: '/mockups/braves-white-tee.png', cat: 'tees' },
  { src: '/mockups/falcon-cream-tee.png', cat: 'tees' },
  { src: '/mockups/falcon-green-tee.png', cat: 'tees' },
  { src: '/mockups/falcon-truckers-black.png', cat: 'truckers' },
  { src: '/mockups/mascot-snapback-float.png', cat: 'snapbacks' },
  { src: '/mockups/mascot-snapback.png', cat: 'snapbacks' },
  { src: '/mockups/mascot-stadium-tee.png', cat: 'tees' },
  { src: '/mockups/mascot-vest.png', cat: 'vests' },
  { src: '/mockups/script-trucker-collector.png', cat: 'truckers' },
  { src: '/mockups/script-trucker-float.png', cat: 'truckers' },
  { src: '/mockups/snapbacks-bar-blue.png', cat: 'snapbacks' },
  { src: '/mockups/snapbacks-boutique-red.png', cat: 'snapbacks' },
  { src: '/mockups/white-tees-grid.png', cat: 'tees' },
];

const CAT_LINKS = {
  all: `${S}/collections/all-products`,
  tees: `${S}/collections/t-shirts`,
  vests: `${S}/collections/vests`,
  snapbacks: `${S}/collections/snapbacks`,
  truckers: `${S}/collections/trucker-hats`,
  buckets: `${S}/collections/bucket-hats`,
};

const LOGOS = [
  '/brand/MAGA_brave_gold.png','/brand/MAGA_atlanta_braves.png',
  '/brand/MAGA_hawks.png','/brand/MAGA_falcon.png',
  '/brand/MAGA_thrasher.png','/brand/MAGA_thrashers.png',
  '/brand/MAGA_brave.png','/brand/MAGA_braves.png',
  '/brand/peachtree-script.png','/brand/peachtree-skyline.png',
  '/brand/braves-script-white.png','/brand/FLAG.png',
];

const GALLERY = [
  { src: '/mockups/olive-chief-tee-lookbook.png', label: 'Chieftain Tee — Olive', cat: 'tees' },
  { src: '/mockups/charcoal-braves-vest.png', label: 'Braves Script Vest', cat: 'vests' },
  { src: '/mockups/trucker-hat-floating.png', label: 'Script Trucker — White', cat: 'truckers' },
  { src: '/mockups/pink-axes-lookbook.png', label: 'Crossed Axes Tee — Pink', cat: 'tees' },
  { src: '/mockups/hawks-bucket-lookbook.png', label: 'Hawks Crest Bucket', cat: 'buckets' },
  { src: '/mockups/charcoal-flag-vest.png', label: 'Patriot Flag Vest', cat: 'vests' },
  { src: '/mockups/braves-bucket-lookbook.png', label: 'Braves Script Bucket', cat: 'buckets' },
  { src: '/mockups/charcoal-falcons-vest.png', label: 'Falcon Legacy Vest', cat: 'vests' },
  { src: '/mockups/falcons-bucket-museum.png', label: 'Falcon Bucket — Museum', cat: 'buckets' },
  { src: '/mockups/bucket-hat-museum.png', label: 'Chieftain Bucket', cat: 'buckets' },
  { src: '/mockups/mascot-snapback.png', label: 'Gold Grillz Snap', cat: 'snapbacks' },
  { src: '/mockups/pink-shop-display.png', label: 'Pink Collection', cat: 'tees' },
  { src: '/mockups/script-pink-tee.png', label: 'Script Tomahawk Tee', cat: 'tees' },
  { src: '/mockups/mascot-vest.png', label: 'Chieftain Cutoff', cat: 'vests' },
  { src: '/mockups/snapbacks-boutique-red.png', label: 'Snapback Collection', cat: 'snapbacks' },
  { src: '/mockups/axes-trucker-red.png', label: 'Axes Trucker — Red', cat: 'truckers' },
];

const COLLECTIONS = [
  { src: '/mockups/olive-chief-tee-lookbook.png', title: 'T-Shirts', count: '16', href: `${S}/collections/t-shirts` },
  { src: '/mockups/snapbacks-boutique-red.png', title: 'Snapbacks', count: '20', href: `${S}/collections/snapbacks` },
  { src: '/mockups/charcoal-falcons-vest.png', title: 'Vests', count: '11', href: `${S}/collections/vests` },
  { src: '/mockups/trucker-hat-floating.png', title: 'Truckers', count: '10', href: `${S}/collections/trucker-hats` },
  { src: '/mockups/hawks-bucket-lookbook.png', title: 'Bucket Hats', count: '6', href: `${S}/collections/bucket-hats` },
  { src: '/mockups/design-grid-9up.png', title: 'All 64 Pieces', count: '64', href: `${S}/collections/all-products` },
];

const CULTURE = [
  { src: '/culture/waffle-house.png', label: 'Late Night Legend', sub: 'Waffle House', tall: true },
  { src: '/culture/marta.png', label: 'Old Atlanta Forever', sub: 'MARTA', wide: true },
  { src: '/culture/cascade.png', label: 'City of Soul', sub: 'Cascade', tall: true },
  { src: '/culture/south-side.png', label: 'Da South Side', sub: 'Young Hustler' },
  { src: '/culture/atlien.png', label: 'Southern Playalistic', sub: 'ATLien' },
  { src: '/culture/club-libra.png', label: 'Hood Icon', sub: 'Club Libra' },
  { src: '/culture/lean-wit-it.png', label: 'Back When the City Had Soul', sub: 'Lean Wit It' },
];

export default function HomePage() {
  const doubledPieces = [...PIECES, ...PIECES];
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <video className="hero__video" autoPlay muted loop playsInline poster="/culture/hero-collage.png">
          <source src="/culture/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero__video-overlay" />
        <div className="hero__crests">
          <img src="/brand/MAGA_hawks.png" alt="" className="hero__crest" />
          <img src="/brand/MAGA_atlanta_braves.png" alt="" className="hero__crest" />
          <img src="/brand/MAGA_thrasher.png" alt="" className="hero__crest" />
        </div>
        <div className="hero__content">
          <div className="hero__tag">2026 Collection</div>
          <h1 className="hero__title">Make Atlanta<br /><em>Great Again</em></h1>
          <p className="hero__sub">64 pieces. For the ones who remember when the city had soul.</p>
          <div className="hero__actions">
            <a href="/shop" className="btn-primary">Shop the Collection</a>
            <a href="#pieces" className="btn-secondary">See the Pieces</a>
          </div>
        </div>
      </section>

      {/* THE PIECES — INFINITE AUTO-SCROLL MARQUEE */}
      <section className="pieces" id="pieces">
        <div className="pieces__header">
          <div className="showcase__tag">2026 Collection</div>
          <h2 className="showcase__title">The Pieces</h2>
        </div>
        <div className="pieces__track-wrap">
          <div className="pieces__track">
            {doubledPieces.map((p, i) => (
              <a key={i} href={CAT_LINKS[p.cat]} className="pieces__card">
                <img src={p.src} alt="" loading="lazy" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section className="logos">
        <div className="logos__grid">
          {LOGOS.map((src, i) => (
            <a key={i} href={`${S}/collections/all-products`} className="logos__item">
              <img src={src} alt="" loading="lazy" />
            </a>
          ))}
        </div>
      </section>

      {/* PICK YOUR PIECE — under logos, click routes to category */}
      <section className="editorial">
        <div className="editorial__header">
          <div className="showcase__tag">Shirts &bull; Hats &bull; Vests &bull; Buckets</div>
          <h2 className="showcase__title">Pick Your Piece</h2>
        </div>
        <div className="editorial__grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {GALLERY.map((c, i) => (
            <a key={i} href={CAT_LINKS[c.cat]} className="editorial__card">
              <div className="editorial__card-img"><img src={c.src} alt={c.label} loading="lazy" /></div>
              <div className="editorial__card-label">
                {c.label}
                <span style={{ color: 'var(--gm)', marginLeft: 8, fontSize: 8, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  {c.cat === 'tees' ? 'SHIRT' : c.cat === 'vests' ? 'VEST' : 'HAT'}
                </span>
              </div>
            </a>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 32, display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={`${S}/collections/t-shirts`} className="btn-secondary">Shop Shirts</a>
          <a href={`${S}/collections/snapbacks`} className="btn-secondary">Shop Snapbacks</a>
          <a href={`${S}/collections/trucker-hats`} className="btn-secondary">Shop Truckers</a>
          <a href={`${S}/collections/bucket-hats`} className="btn-secondary">Shop Buckets</a>
          <a href={`${S}/collections/vests`} className="btn-secondary">Shop Vests</a>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="collections">
        <div className="collections__header">
          <div className="collections__tag">Shop by Collection</div>
          <h2 className="collections__title">Find Your Piece</h2>
        </div>
        <div className="collections__grid">
          {COLLECTIONS.map((c, i) => (
            <a key={i} href={c.href} className="collection-card">
              <div className="collection-card__img-wrap"><img src={c.src} alt={c.title} loading="lazy" /></div>
              <div className="collection-card__info">
                <span className="collection-card__title">{c.title}</span>
                <span className="collection-card__count">{c.count}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="manifesto">
        <p className="manifesto__text">
          Atlanta was never just a city. It was a <strong>feeling</strong>. Before soul got replaced by sameness. <strong>This is for the ones who remember.</strong>
        </p>
      </section>

      {/* CULTURE */}
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

      {/* CAMPAIGN */}
      <section className="campaign">
        <div className="campaign__inner">
          <div className="campaign__image"><img src="/merch/pitcher-tee.png" alt="Blue MF Pitcher" /></div>
          <div className="campaign__content">
            <div className="campaign__tag">Campaign Drop</div>
            <h2 className="campaign__title">The Legendary<br /><em>Blue Pitcher</em></h2>
            <p className="campaign__desc">Atlanta&rsquo;s golden era refreshment. Bankhead Bounce. Freaknik nights essential.</p>
            <a href={`${S}/collections/all-products`} className="btn-primary">Shop Now</a>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="marquee">
        <div className="marquee__track">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="marquee__item">WHEN ATLANTA WAS ATLANTA &bull;</span>
          ))}
        </div>
      </section>

      {/* MOVEMENT */}
      <section className="movement" id="movement">
        <div className="movement__tag">Join the Movement</div>
        <h2 className="movement__title">First Access. Limited Releases.</h2>
        <p className="movement__desc">Drops, activations, and stories from old Atlanta.</p>
        <div className="movement__form">
          <input type="email" className="movement__input" placeholder="Enter your email" />
          <button className="movement__submit">Join</button>
        </div>
      </section>
    </>
  );
}
