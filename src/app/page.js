export const dynamic = 'force-dynamic';
const S = 'https://makeatlantagreatagain.myshopify.com';

const PIECES = [
  { src: '/mockups/design-grid-9up.png', cat: 'all' },
  { src: '/mockups/shorts-script-black-1.png', cat: 'shorts' },
  { src: '/mockups/trucker-hat-floating.png', cat: 'hats' },
  { src: '/mockups/charcoal-flag-vest.png', cat: 'vests' },
  { src: '/mockups/shorts-axes-red.png', cat: 'shorts' },
  { src: '/mockups/blue-mf-pitcher-tee.png', cat: 'tees' },
  { src: '/mockups/hawks-bucket-lookbook.png', cat: 'buckets' },
  { src: '/mockups/shorts-axes-navy-museum.png', cat: 'shorts' },
  { src: '/mockups/mascot-snapback-float.png', cat: 'hats' },
  { src: '/mockups/pink-axes-lookbook.png', cat: 'tees' },
  { src: '/mockups/shorts-script-white.png', cat: 'shorts' },
  { src: '/mockups/charcoal-braves-vest.png', cat: 'vests' },
  { src: '/mockups/axes-trucker-red.png', cat: 'hats' },
  { src: '/mockups/shorts-falcon-white-1.png', cat: 'shorts' },
  { src: '/mockups/falcons-bucket-museum.png', cat: 'buckets' },
  { src: '/mockups/olive-chief-tee-lookbook.png', cat: 'tees' },
  { src: '/mockups/shorts-axes-navy-boutique.png', cat: 'shorts' },
  { src: '/mockups/snapbacks-peachtree.png', cat: 'hats' },
  { src: '/mockups/charcoal-falcons-vest.png', cat: 'vests' },
  { src: '/mockups/shorts-mascot-black.png', cat: 'shorts' },
  { src: '/mockups/braves-bucket-lookbook.png', cat: 'buckets' },
  { src: '/mockups/hypnotic-nuvo-tee.png', cat: 'tees' },
  { src: '/mockups/shorts-axes-white-museum.png', cat: 'shorts' },
  { src: '/mockups/falcon-truckers-black.png', cat: 'hats' },
  { src: '/mockups/mascot-vest.png', cat: 'vests' },
  { src: '/mockups/shorts-script-navy.png', cat: 'shorts' },
  { src: '/mockups/script-pink-tee.png', cat: 'tees' },
  { src: '/mockups/bucket-hat-museum.png', cat: 'buckets' },
  { src: '/mockups/shorts-axes-red-4panel.png', cat: 'shorts' },
  { src: '/mockups/truckers-bar-red.png', cat: 'hats' },
  { src: '/mockups/mascot-boutique.png', cat: 'tees' },
  { src: '/mockups/shorts-script-red-museum.png', cat: 'shorts' },
  { src: '/mockups/snapbacks-bar-blue.png', cat: 'hats' },
  { src: '/mockups/patriot-vest-set.png', cat: 'vests' },
  { src: '/mockups/shorts-falcon-white-2.png', cat: 'shorts' },
  { src: '/mockups/falcon-green-store.png', cat: 'tees' },
  { src: '/mockups/script-trucker-collector.png', cat: 'hats' },
  { src: '/mockups/shorts-mascot-black-museum.png', cat: 'shorts' },
  { src: '/mockups/atl-store-display.png', cat: 'all' },
  { src: '/mockups/chieftain-cream-tee.png', cat: 'tees' },
  { src: '/mockups/shorts-script-black-2.png', cat: 'shorts' },
  { src: '/mockups/snapbacks-boutique-red.png', cat: 'hats' },
  { src: '/mockups/axes-blue-lifestyle.png', cat: 'tees' },
  { src: '/mockups/script-trucker-float.png', cat: 'hats' },
  { src: '/mockups/braves-blue-tee.png', cat: 'tees' },
  { src: '/mockups/mascot-snapback.png', cat: 'hats' },
  { src: '/mockups/falcon-cream-tee.png', cat: 'tees' },
  { src: '/mockups/truckers-models.png', cat: 'hats' },
  { src: '/mockups/varsity-store-white.png', cat: 'tees' },
  { src: '/mockups/pink-shop-display.png', cat: 'tees' },
  { src: '/mockups/mascot-green-lifestyle.png', cat: 'tees' },
  { src: '/mockups/falcon-green-tee.png', cat: 'tees' },
  { src: '/mockups/mascot-stadium-tee.png', cat: 'tees' },
  { src: '/mockups/axes-pink-tee.png', cat: 'tees' },
  { src: '/mockups/braves-white-tee.png', cat: 'tees' },
  { src: '/mockups/white-tees-grid.png', cat: 'tees' },
];

const CAT_LINKS = {
  all: `${S}/collections/all-products`,
  tees: `${S}/collections/t-shirts`,
  vests: `${S}/collections/vests`,
  hats: `${S}/collections/hats`,
  snapbacks: `${S}/collections/hats`,
  truckers: `${S}/collections/hats`,
  buckets: `${S}/collections/bucket-hats`,
  shorts: `${S}/collections/swimwear`,
  swimwear: `${S}/collections/swimwear`,
};

const SWIMWEAR = [
  { src: 'https://cdn.shopify.com/s/files/1/0787/5690/5210/files/250060-359498fe-df2f-407b-b695-4bd86f72907f.jpg', title: 'The Poolside — ATL One-Piece I', type: 'one-piece' },
  { src: 'https://cdn.shopify.com/s/files/1/0787/5690/5210/files/250060-fbc4ef40-0764-4621-949c-53206ed9e76a_78c10eca-b51d-4e70-9c9d-e7839a9215b1.jpg', title: 'The Poolside — ATL One-Piece II', type: 'one-piece' },
  { src: 'https://cdn.shopify.com/s/files/1/0787/5690/5210/files/250060-5d430a8b-04e8-401a-b20d-d2230b53eb76_982f1192-0b00-4a4d-82fe-7d7d0c5e0db2.jpg', title: 'The Poolside — ATL One-Piece III', type: 'one-piece' },
  { src: 'https://cdn.shopify.com/s/files/1/0787/5690/5210/files/250060-36b48571-0b33-4676-b5be-207cba8fbeff.jpg', title: 'The Poolside — ATL One-Piece IV', type: 'one-piece' },
  { src: '/mockups/shorts-axes-navy-boutique.png', title: 'Crossed Axes Swim — Navy', type: 'trunks' },
  { src: '/mockups/shorts-script-black-1.png', title: 'Script Swim — Black', type: 'trunks' },
  { src: '/mockups/shorts-falcon-white-1.png', title: 'Falcon Swim — White', type: 'trunks' },
  { src: '/mockups/shorts-axes-red.png', title: 'Crossed Axes Swim — Red', type: 'trunks' },
];

const LOGOS = [
  '/brand/MAGA_brave_gold.png',
  '/brand/MAGA_atlanta_braves.png',
  '/brand/MAGA_hawks.png',
  '/brand/MAGA_falcon.png',
  '/brand/MAGA_thrasher.png',
  '/brand/peachtree-script.png',
  '/brand/peachtree-skyline.png',
  '/brand/FLAG.png',
];

const GALLERY = [
  { src: '/mockups/olive-chief-tee-lookbook.png', label: 'Chieftain Tee — Olive', cat: 'tees' },
  { src: '/mockups/shorts-axes-navy-boutique.png', label: 'Crossed Axes Swim — Navy', cat: 'shorts' },
  { src: '/mockups/pink-axes-lookbook.png', label: 'Crossed Axes Tee — Pink', cat: 'tees' },
  { src: '/mockups/charcoal-braves-vest.png', label: 'Braves Script Vest', cat: 'vests' },
  { src: '/mockups/shorts-script-black-1.png', label: 'Script Swim — Black', cat: 'shorts' },
  { src: '/mockups/mascot-snapback.png', label: 'Gold Grillz Snap', cat: 'hats' },
  { src: '/mockups/shorts-falcon-white-1.png', label: 'Falcon Swim — White', cat: 'shorts' },
  { src: '/mockups/charcoal-flag-vest.png', label: 'Patriot Flag Vest', cat: 'vests' },
  { src: '/mockups/trucker-hat-floating.png', label: 'Script Trucker — White', cat: 'hats' },
  { src: '/mockups/shorts-axes-red.png', label: 'Crossed Axes Swim — Red', cat: 'shorts' },
  { src: '/mockups/hawks-bucket-lookbook.png', label: 'Hawks Crest Bucket', cat: 'buckets' },
  { src: '/mockups/script-pink-tee.png', label: 'Script Tomahawk Tee', cat: 'tees' },
  { src: '/mockups/shorts-mascot-black.png', label: 'Mascot Swim — Black', cat: 'shorts' },
  { src: '/mockups/axes-trucker-red.png', label: 'Axes Trucker — Red', cat: 'hats' },
  { src: '/mockups/charcoal-falcons-vest.png', label: 'Falcon Legacy Vest', cat: 'vests' },
  { src: '/mockups/shorts-script-navy.png', label: 'Script Swim — Navy', cat: 'shorts' },
];

const COLLECTIONS = [
  { src: '/mockups/olive-chief-tee-lookbook.png', title: 'T-Shirts', href: `${S}/collections/t-shirts` },
  { src: '/mockups/shorts-axes-navy-boutique.png', title: 'Swimwear', href: `${S}/collections/swimwear` },
  { src: '/mockups/snapbacks-boutique-red.png', title: 'Hats', href: `${S}/collections/hats` },
  { src: '/mockups/charcoal-falcons-vest.png', title: 'Vests', href: `${S}/collections/vests` },
  { src: '/mockups/hawks-bucket-lookbook.png', title: 'Bucket Hats', href: `${S}/collections/bucket-hats` },
  { src: '/mockups/design-grid-9up.png', title: 'Shop All', href: `${S}/collections/all-products` },
];

const CULTURE = [
  { src: '/culture/south-side.png', label: 'SOUTHSIDE MEMORIES', sub: 'Southside' },
  { src: '/culture/atlien.png', label: 'REAL ATLANTA ONLY', sub: 'ATLien' },
  { src: '/culture/cascade.png', label: 'CITY FULL OF FLAVOR', sub: 'Cascade' },
  { src: '/culture/waffle-house.png', label: 'LATE NIGHT ATLANTA', sub: 'Waffle House' },
  { src: '/culture/club-libra.png', label: 'BACK WHEN IT WAS HITTIN', sub: 'Club Libra' },
  { src: '/culture/lean-wit-it.png', label: 'WHEN THE CITY HAD SAUCE', sub: 'The City' },
  { src: '/mockups/blue-mf-pitcher-tee.png', label: 'CITY CLASSIC', sub: 'Blue MF Pitcher' },
  { src: '/mockups/hypnotic-nuvo-tee.png', label: 'OLD ATLANTA ENERGY', sub: 'Hypnotic & Nuvo' },
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

      {/* COLLECTIONS — RIGHT AFTER HERO */}
      <section className="collections" id="shop">
        <div className="collections__header">
          <div className="collections__tag">Pick Your Category</div>
          <h2 className="collections__title">Shop by Type</h2>
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

      {/* THE PIECES */}
      <section className="pieces" id="pieces">
        <div className="pieces__header">
          <div className="showcase__tag">The Full Lineup</div>
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
        <div className="logos__grid" style={{ gap: 'clamp(24px,4vw,48px)' }}>
          {LOGOS.map((src, i) => (
            <a key={i} href={`${S}/collections/all-products`} className="logos__item" style={{ maxWidth: 'clamp(80px,12vw,140px)' }}>
              <img src={src} alt="" loading="lazy" />
            </a>
          ))}
        </div>
      </section>

      {/* IF YOU KNOW, YOU KNOW */}
      <section className="culture">
        <div className="culture__header">
          <div className="culture__tag">You Know the Vibe</div>
          <h2 className="culture__title">If You Know, You Know</h2>
        </div>
        <div className="culture__grid">
          {CULTURE.map((c, i) => (
            <div key={i} className="culture__card">
              <img src={c.src} alt={c.label} loading="lazy" />
              <div className="culture__card__overlay">
                <div className="culture__card__label">{c.label}</div>
                <div className="culture__card__sub">{c.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="manifesto">
        <p className="manifesto__text">
          This ain&rsquo;t no regular Atlanta merch. This that <strong>&ldquo;you had to be there&rdquo;</strong> Atlanta.<br />
          The city before everything got watered down. Before everybody claimed it. Before it got too clean.<br />
          <strong>This for the ones who know what the city felt like for real.</strong>
        </p>
      </section>

      {/* PICK YOUR PIECE */}
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
                  {c.cat === 'tees' ? 'SHIRT' : c.cat === 'vests' ? 'VEST' : c.cat === 'shorts' ? 'SWIM' : c.cat === 'swimwear' ? 'SWIM' : c.cat === 'hats' ? 'HAT' : c.cat === 'buckets' ? 'BUCKET' : 'HAT'}
                </span>
              </div>
            </a>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 32, display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={`${S}/collections/t-shirts`} className="btn-secondary">Shop Tees</a>
          <a href={`${S}/collections/hats`} className="btn-secondary">Shop Hats</a>
          <a href={`${S}/collections/bucket-hats`} className="btn-secondary">Shop Buckets</a>
          <a href={`${S}/collections/vests`} className="btn-secondary">Shop Vests</a>
          <a href={`${S}/collections/swimwear`} className="btn-secondary">Shop Swimwear</a>
        </div>
      </section>

      {/* CAMPAIGN */}
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

      {/* SWIMWEAR DROP */}
      <section className="swimwear-drop" id="swimwear">
        <div className="swimwear-drop__header">
          <div className="showcase__tag">Now Live</div>
          <h2 className="showcase__title">The Poolside Collection</h2>
          <p style={{ color: 'var(--cr50)', fontSize: 'clamp(12px,1.1vw,14px)', maxWidth: 520, margin: '8px auto 0', textAlign: 'center', lineHeight: 1.8 }}>
            Swim trunks and one-piece swimsuits. Summer-ready, Atlanta-made. For the pool, the beach, and wherever else you need to show up correct.
          </p>
        </div>
        <div className="swimwear-drop__grid">
          {SWIMWEAR.map((s, i) => (
            <a key={i} href={`${S}/collections/swimwear`} className="swimwear-drop__card">
              <div className="swimwear-drop__img-wrap">
                <img src={s.src} alt={s.title} loading="lazy" />
                <div className="swimwear-drop__badge">{s.type === 'one-piece' ? 'NEW' : 'TRUNKS'}</div>
              </div>
              <div className="swimwear-drop__info">
                <span className="swimwear-drop__name">{s.title}</span>
                <span className="swimwear-drop__type">{s.type === 'one-piece' ? 'One-Piece Swimsuit' : 'Swim Trunks'}</span>
              </div>
            </a>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <a href={`${S}/collections/swimwear`} className="btn-primary">Shop All Swimwear</a>
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

      {/* TAP IN */}
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
