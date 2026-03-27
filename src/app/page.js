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
  { src: '/mockups/blue-mf-pitcher-tee.png', cat: 'tees' },
  { src: '/mockups/hypnotic-nuvo-tee.png', cat: 'tees' },
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
  { src: '/mockups/pink-axes-lookbook.png', label: 'Crossed Axes Tee — Pink', cat: 'tees' },
  { src: '/mockups/script-pink-tee.png', label: 'Script Tomahawk Tee', cat: 'tees' },
  { src: '/mockups/pink-shop-display.png', label: 'Pink Collection', cat: 'tees' },
  { src: '/mockups/blue-mf-pitcher-tee.png', label: 'Blue MF Pitcher Tee', cat: 'tees' },
  { src: '/mockups/hypnotic-nuvo-tee.png', label: 'Hypnotic & Nuvo Tee', cat: 'tees' },
  { src: '/mockups/charcoal-braves-vest.png', label: 'Braves Script Vest', cat: 'vests' },
  { src: '/mockups/charcoal-flag-vest.png', label: 'Patriot Flag Vest', cat: 'vests' },
  { src: '/mockups/charcoal-falcons-vest.png', label: 'Falcon Legacy Vest', cat: 'vests' },
  { src: '/mockups/mascot-vest.png', label: 'Chieftain Cutoff', cat: 'vests' },
  { src: '/mockups/mascot-snapback.png', label: 'Gold Grillz Snap', cat: 'snapbacks' },
  { src: '/mockups/snapbacks-boutique-red.png', label: 'Snapback Collection', cat: 'snapbacks' },
  { src: '/mockups/trucker-hat-floating.png', label: 'Script Trucker — White', cat: 'truckers' },
  { src: '/mockups/axes-trucker-red.png', label: 'Axes Trucker — Red', cat: 'truckers' },
  { src: '/mockups/hawks-bucket-lookbook.png', label: 'Hawks Crest Bucket', cat: 'buckets' },
  { src: '/mockups/braves-bucket-lookbook.png', label: 'Braves Script Bucket', cat: 'buckets' },
  { src: '/mockups/falcons-bucket-museum.png', label: 'Falcon Bucket — Museum', cat: 'buckets' },
  { src: '/mockups/bucket-hat-museum.png', label: 'Chieftain Bucket', cat: 'buckets' },
];

const COLLECTIONS = [
  { src: '/mockups/olive-chief-tee-lookbook.png', title: 'T-Shirts', href: `${S}/collections/t-shirts` },
  { src: '/mockups/snapbacks-boutique-red.png', title: 'Snapbacks', href: `${S}/collections/snapbacks` },
  { src: '/mockups/charcoal-falcons-vest.png', title: 'Vests', href: `${S}/collections/vests` },
  { src: '/mockups/trucker-hat-floating.png', title: 'Truckers', href: `${S}/collections/trucker-hats` },
  { src: '/mockups/hawks-bucket-lookbook.png', title: 'Bucket Hats', href: `${S}/collections/bucket-hats` },
  { src: '/mockups/design-grid-9up.png', title: 'Shop All', href: `${S}/collections/all-products` },
];

const CULTURE = [
  { src: '/culture/waffle-house.png', label: 'LATE NIGHT ATLANTA', sub: 'Waffle House', tall: true },
  { src: '/culture/marta.png', label: 'OLD ATLANTA ENERGY', sub: 'MARTA', wide: true },
  { src: '/culture/cascade.png', label: 'CITY FULL OF FLAVOR', sub: 'Cascade', tall: true },
  { src: '/culture/south-side.png', label: 'SOUTHSIDE MEMORIES', sub: 'Southside' },
  { src: '/culture/atlien.png', label: 'REAL ATLANTA ONLY', sub: 'ATLien' },
  { src: '/culture/club-libra.png', label: 'BACK WHEN IT WAS HITTIN', sub: 'Club Libra' },
  { src: '/culture/lean-wit-it.png', label: 'WHEN THE CITY HAD SAUCE', sub: 'The City' },
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
          <p className="hero__sub">For the ones who remember when Atlanta really had motion.<br />Old clubs. Old days. Old logos. Real city energy. Put that sh*t on.</p>
          <div className="hero__actions">
            <a href="/shop" className="btn-primary">Shop the Drop</a>
            <a href="#pieces" className="btn-secondary">Run It Up</a>
          </div>
        </div>
      </section>

      {/* THE PIECES — SHOP THE DROP */}
      <section className="pieces" id="pieces">
        <div className="pieces__header">
          <div className="showcase__tag">Shop the Drop</div>
          <h2 className="showcase__title">The Pieces</h2>
          <p style={{ color: 'var(--cr50)', fontSize: 'clamp(12px,1.1vw,14px)', maxWidth: 480, margin: '8px auto 0', textAlign: 'center', lineHeight: 1.8 }}>
            Tees, hats, and pieces made for anybody still screaming old Atlanta over everything.
          </p>
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

      {/* WHAT YOU ON? — category section under logos */}
      <section className="editorial">
        <div className="editorial__header">
          <div className="showcase__tag">What You On?</div>
          <h2 className="showcase__title">Pick Your Piece</h2>
          <p style={{ color: 'var(--cr50)', fontSize: 'clamp(12px,1.1vw,14px)', maxWidth: 420, margin: '8px auto 0', textAlign: 'center', lineHeight: 1.8 }}>
            Rep your side. Wear the city right.
          </p>
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
          <a href={`${S}/collections/t-shirts`} className="btn-secondary">Shop Tees</a>
          <a href={`${S}/collections/snapbacks`} className="btn-secondary">Shop Snapbacks</a>
          <a href={`${S}/collections/trucker-hats`} className="btn-secondary">Shop Truckers</a>
          <a href={`${S}/collections/bucket-hats`} className="btn-secondary">Shop Buckets</a>
          <a href={`${S}/collections/vests`} className="btn-secondary">Shop Vests</a>
        </div>
      </section>

      {/* STRAIGHT OUT THE CITY — Collections */}
      <section className="collections">
        <div className="collections__header">
          <div className="collections__tag">Straight Out the City</div>
          <h2 className="collections__title">Find Your Piece</h2>
          <p style={{ color: 'var(--cr50)', fontSize: 'clamp(12px,1.1vw,14px)', maxWidth: 480, margin: '8px auto 0', textAlign: 'center', lineHeight: 1.8 }}>
            Inspired by the places, faces, nights, and moments that had Atlanta in a chokehold.
          </p>
        </div>
        <div className="collections__grid">
          {COLLECTIONS.map((c, i) => (
            <a key={i} href={c.href} className="collection-card">
              <div className="collection-card__img-wrap"><img src={c.src} alt={c.title} loading="lazy" /></div>
              <div className="collection-card__info">
                <span className="collection-card__title">{c.title}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* MID-PAGE STATEMENT */}
      <section className="manifesto">
        <p className="manifesto__text">
          This ain&rsquo;t no regular Atlanta merch. This that <strong>&ldquo;you had to be there&rdquo;</strong> Atlanta.<br />
          The city before everything got watered down. Before everybody claimed it. Before it got too clean.<br />
          <strong>This for the ones who know what the city felt like for real.</strong>
        </p>
      </section>

      {/* YOU KNOW THE VIBE — Archive */}
      <section className="culture">
        <div className="culture__header">
          <div className="culture__tag">You Know the Vibe</div>
          <h2 className="culture__title">If You Know, You Know</h2>
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

      {/* CITY CLASSIC — Campaign */}
      <section className="campaign">
        <div className="campaign__inner">
          <div className="campaign__image"><img src="/mockups/blue-mf-pitcher-tee.png" alt="Blue MF Pitcher Tee" /></div>
          <div className="campaign__content">
            <div className="campaign__tag">City Classic</div>
            <h2 className="campaign__title">The Legendary<br /><em>Blue Pitcher</em></h2>
            <p className="campaign__desc">Some pieces don&rsquo;t need a long story. If you know what this mean to Atlanta, that&rsquo;s enough.</p>
            <a href={`${S}/collections/t-shirts`} className="btn-primary">Cop Now</a>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="marquee">
        <div className="marquee__track">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="marquee__item">WHEN ATLANTA WAS ATLANTA &bull; FOR THE ONES WHO KNOW &bull; OLD ATLANTA OVER EVERYTHING &bull; REAL CITY ENERGY &bull;</span>
          ))}
        </div>
      </section>

      {/* TAP IN — Email capture */}
      <section className="movement" id="movement">
        <div className="movement__tag">Tap In</div>
        <h2 className="movement__title">First Dibs. Exclusives. Drops.</h2>
        <p className="movement__desc">Drops, exclusives, and first dibs before everybody else get there.</p>
        <div className="movement__form">
          <input type="email" className="movement__input" placeholder="Enter your email" />
          <button className="movement__submit">Tap In</button>
        </div>
      </section>
    </>
  );
}
