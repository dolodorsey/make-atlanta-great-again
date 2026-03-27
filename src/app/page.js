export const dynamic = 'force-dynamic';
const S = 'https://makeatlantagreatagain.myshopify.com';

/* Cinematic pieces — horizontal scroll showcase */
const PIECES = [
  '/mockups/mascot-boutique.png',
  '/mockups/axes-blue-lifestyle.png',
  '/mockups/truckers-bar-red.png',
  '/mockups/falcon-green-store.png',
  '/mockups/varsity-store-white.png',
  '/mockups/mascot-green-lifestyle.png',
  '/mockups/atl-store-display.png',
  '/mockups/snapbacks-peachtree.png',
  '/mockups/truckers-models.png',
  '/mockups/script-pink-tee.png',
  '/mockups/chieftain-cream-tee.png',
  '/mockups/patriot-vest-set.png',
];

/* Collection covers — cinematic mockup for each category */
const COLLECTIONS = [
  { src: '/mockups/snapbacks-boutique-red.png', title: 'Snapbacks', count: '20', href: `${S}/collections/snapbacks` },
  { src: '/mockups/white-tees-grid.png', title: 'T-Shirts', count: '16', href: `${S}/collections/t-shirts` },
  { src: '/mockups/mascot-vest.png', title: 'Vests', count: '11', href: `${S}/collections/vests` },
  { src: '/mockups/falcon-truckers-black.png', title: 'Trucker Hats', count: '10', href: `${S}/collections/trucker-hats` },
  { src: '/mockups/axes-blue-tee.png', title: 'Bucket Hats', count: '6', href: `${S}/collections/bucket-hats` },
  { src: '/mockups/mascot-stadium-tee.png', title: 'All Products', count: '64', href: `${S}/collections/all-products` },
];

/* Individual cinematic product cards — one per mockup */
const TEE_CARDS = [
  { src: '/mockups/script-pink-tee.png', label: 'Script Tomahawk Tee', href: `${S}/collections/t-shirts` },
  { src: '/mockups/chieftain-cream-tee.png', label: 'Chieftain Series', href: `${S}/collections/t-shirts` },
  { src: '/mockups/falcon-green-tee.png', label: 'Falcon Legacy Tee', href: `${S}/collections/t-shirts` },
  { src: '/mockups/braves-blue-tee.png', label: 'Braves Script Tee', href: `${S}/collections/t-shirts` },
  { src: '/mockups/braves-white-tee.png', label: 'Atlanta 2021 Champs', href: `${S}/collections/t-shirts` },
  { src: '/mockups/axes-blue-tee.png', label: 'Crossed Tomahawk', href: `${S}/collections/t-shirts` },
];

const HAT_CARDS = [
  { src: '/mockups/axes-trucker-red.png', label: 'Chieftain Trucker', href: `${S}/collections/trucker-hats` },
  { src: '/mockups/script-trucker-float.png', label: 'Script Trucker', href: `${S}/collections/trucker-hats` },
  { src: '/mockups/script-trucker-collector.png', label: 'Collector Edition', href: `${S}/collections/trucker-hats` },
  { src: '/mockups/mascot-snapback-float.png', label: 'Mascot Snapback', href: `${S}/collections/snapbacks` },
  { src: '/mockups/mascot-snapback.png', label: 'Gold Grillz Snap', href: `${S}/collections/snapbacks` },
  { src: '/mockups/snapbacks-bar-blue.png', label: 'Blue Collection', href: `${S}/collections/snapbacks` },
];

const LOGOS = [
  '/brand/MAGA_brave_gold.png','/brand/MAGA_atlanta_braves.png',
  '/brand/MAGA_hawks.png','/brand/MAGA_falcon.png',
  '/brand/MAGA_thrasher.png','/brand/MAGA_thrashers.png',
  '/brand/MAGA_brave.png','/brand/MAGA_braves.png',
  '/brand/peachtree-script.png','/brand/peachtree-skyline.png',
  '/brand/braves-script-white.png','/brand/FLAG.png',
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
  return (
    <>
      {/* HERO — video, buttons only */}
      <section className="hero">
        <video className="hero__video" autoPlay muted loop playsInline poster="/culture/hero-collage.png">
          <source src="/culture/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero__video-overlay" />
        <div className="hero__content">
          <div className="hero__actions">
            <a href="/shop" className="btn-primary">Shop All 64 Pieces</a>
            <a href="#movement" className="btn-secondary">Join the Movement</a>
          </div>
        </div>
      </section>

      {/* SHOWCASE — horizontal scroll of cinematic lifestyle images */}
      <section className="showcase">
        <div className="showcase__header">
          <div className="showcase__tag">2026 Collection</div>
          <h2 className="showcase__title">The Pieces</h2>
        </div>
        <div className="showcase__scroll">
          {PIECES.map((src, i) => (
            <a key={i} href="/shop" className="showcase__card">
              <img src={src} alt="" loading="lazy" />
            </a>
          ))}
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

      {/* TEES — cinematic product cards */}
      <section className="editorial">
        <div className="editorial__header">
          <div className="showcase__tag">Tees &amp; Heavyweights</div>
          <h2 className="showcase__title">16 Designs</h2>
        </div>
        <div className="editorial__grid">
          {TEE_CARDS.map((c, i) => (
            <a key={i} href={c.href} className="editorial__card">
              <div className="editorial__card-img"><img src={c.src} alt={c.label} loading="lazy" /></div>
              <div className="editorial__card-label">{c.label}</div>
            </a>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <a href={`${S}/collections/t-shirts`} className="btn-primary">Shop All Tees</a>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="manifesto">
        <p className="manifesto__text">
          Atlanta was never just a city. It was a <strong>feeling</strong>. A rhythm. A late-night memory.
          Before soul got replaced by sameness. <strong>This is for the ones who remember.</strong>
        </p>
      </section>

      {/* HATS — cinematic product cards */}
      <section className="editorial" style={{ background: 'var(--ch)' }}>
        <div className="editorial__header">
          <div className="showcase__tag">Headwear</div>
          <h2 className="showcase__title">Snapbacks &amp; Truckers</h2>
        </div>
        <div className="editorial__grid">
          {HAT_CARDS.map((c, i) => (
            <a key={i} href={c.href} className="editorial__card">
              <div className="editorial__card-img"><img src={c.src} alt={c.label} loading="lazy" /></div>
              <div className="editorial__card-label">{c.label}</div>
            </a>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <a href={`${S}/collections/headwear`} className="btn-primary">Shop All Headwear</a>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="marquee">
        <div className="marquee__track">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="marquee__item">WHEN ATLANTA WAS ATLANTA &bull; BACK WHEN THE CITY HAD SOUL &bull;</span>
          ))}
        </div>
      </section>

      {/* COLLECTIONS — mockup covers */}
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
                <span className="collection-card__count">{c.count} pieces</span>
              </div>
            </a>
          ))}
        </div>
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
            <p className="campaign__desc">Atlanta&rsquo;s golden era refreshment. Bankhead Bounce. College Park fuel. Freaknik nights essential.</p>
            <a href={`${S}/collections/all-products`} className="btn-primary">Shop Now</a>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="story">
        <div className="story__bg" style={{ backgroundImage: 'url(/merch/prime-time.png)' }} />
        <div className="story__content">
          <h2 className="story__title">The City Had <em>Soul</em></h2>
          <p className="story__text">From Bankhead to Buckhead. From Freaknik to Friday night fish frys. Atlanta wasn&rsquo;t just where you lived &mdash; it was how you moved.</p>
          <a href={`${S}/pages/about`} className="btn-secondary">Read the Story</a>
        </div>
      </section>

      {/* MOVEMENT */}
      <section className="movement" id="movement">
        <div className="movement__tag">Join the Movement</div>
        <h2 className="movement__title">First Access. Limited Releases.</h2>
        <p className="movement__desc">Drops, city activations, private releases, and stories from old Atlanta.</p>
        <div className="movement__form">
          <input type="email" className="movement__input" placeholder="Enter your email" />
          <button className="movement__submit">Join</button>
        </div>
      </section>
    </>
  );
}
