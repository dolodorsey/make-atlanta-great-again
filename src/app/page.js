import { getProducts, formatPrice } from '@/lib/shopify';
export const dynamic = 'force-dynamic';
const S = 'https://makeatlantagreatagain.myshopify.com';

const MOCKUPS = [
  { src: '/mockups/braves-blue-tee.png', label: 'Braves Script Tee' },
  { src: '/mockups/axes-pink-tee.png', label: 'Crossed Axes 2026' },
  { src: '/mockups/falcon-green-tee.png', label: 'Falcon Legacy Tee' },
  { src: '/mockups/mascot-vest.png', label: 'Chieftain Vest' },
  { src: '/mockups/falcon-cream-tee.png', label: 'Falcon Cream Tee' },
  { src: '/mockups/mascot-snapback.png', label: 'Gold Grillz Snapback' },
  { src: '/mockups/braves-white-tee.png', label: 'Atlanta 2021 Champs' },
  { src: '/mockups/axes-blue-tee.png', label: 'Crossed Tomahawk Blue' },
  { src: '/mockups/mascot-stadium-tee.png', label: 'Champions Tunnel' },
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

const CRESTS = [
  '/brand/MAGA_brave_gold.png','/brand/MAGA_atlanta_braves.png',
  '/brand/MAGA_hawks.png','/brand/MAGA_thrasher.png',
  '/brand/MAGA_falcon.png','/brand/MAGA_braves.png',
  '/brand/MAGA_brave.png','/brand/MAGA_thrashers.png',
];

function Card({ p }) {
  const img = p.images?.[0]?.src;
  const pr = p.variants?.[0]?.price;
  const vid = p.variants?.[0]?.id;
  if (!img) return null;
  return (
    <a href={`${S}/products/${p.handle}`} className="dc">
      <div className="dc__wrap">
        <img src={img} alt={p.title} className="dc__img" loading="lazy" />
        <a href={`${S}/cart/${vid}:1`} className="dc__cta">Add to Cart</a>
      </div>
      <div className="dc__info">
        <div className="dc__name">{p.title}</div>
        <div className="dc__price">{formatPrice(pr)}</div>
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
  const vests = byType['Vest'] || [];
  const truckers = byType['Trucker Hat'] || [];
  const pants = byType['Pants'] || [];
  const all = products || [];

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
          <div className="hero__actions">
            <a href={`${S}/collections/all-products`} className="btn-primary">Shop All 64 Pieces</a>
            <a href="#movement" className="btn-secondary">Join the Movement</a>
          </div>
        </div>
      </section>

      {/* SHOP — ALL SNAPBACKS — dense grid immediately */}
      <section className="shop">
        <div className="shop__header">
          <h2 className="shop__title">Snapbacks &mdash; {snaps.length} Designs</h2>
          <a href={`${S}/collections/snapbacks`} className="shop__link">View All &rarr;</a>
        </div>
        <div className="dgrid">
          {snaps.map(p => <Card key={p.id} p={p} />)}
        </div>
      </section>

      {/* CINEMATIC SHOWCASE — horizontal scroll */}
      <section className="showcase">
        <div className="showcase__header">
          <div className="showcase__tag">The Vintage Collection</div>
          <h2 className="showcase__title">Museum Pieces</h2>
        </div>
        <div className="showcase__scroll">
          {MOCKUPS.map((m, i) => (
            <a key={i} href={`${S}/collections/all-products`} className="showcase__card">
              <img src={m.src} alt={m.label} loading="lazy" />
            </a>
          ))}
        </div>
      </section>

      {/* ALL TEES */}
      <section className="shop">
        <div className="shop__header">
          <h2 className="shop__title">T-Shirts &mdash; {tees.length} Designs</h2>
          <a href={`${S}/collections/t-shirts`} className="shop__link">View All &rarr;</a>
        </div>
        <div className="dgrid">
          {tees.map(p => <Card key={p.id} p={p} />)}
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="manifesto">
        <p className="manifesto__text">
          Atlanta was never just a city. It was a <strong>feeling</strong>. A rhythm. A late-night memory.
          Before soul got replaced by sameness. <strong>This is for the ones who remember.</strong>
        </p>
      </section>

      {/* ALL TRUCKERS */}
      <section className="shop" style={{ background: 'var(--ch)' }}>
        <div className="shop__header">
          <h2 className="shop__title">Trucker Hats &mdash; {truckers.length} Designs</h2>
          <a href={`${S}/collections/trucker-hats`} className="shop__link">View All &rarr;</a>
        </div>
        <div className="dgrid">
          {truckers.map(p => <Card key={p.id} p={p} />)}
        </div>
      </section>

      {/* CAMPAIGN MERCH */}
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
              Freaknik nights essential.
            </p>
            <a href={`${S}/collections/all-products`} className="btn-primary">Shop Now</a>
          </div>
        </div>
      </section>

      {/* ALL BUCKET HATS */}
      <section className="shop">
        <div className="shop__header">
          <h2 className="shop__title">Bucket Hats &mdash; {buckets.length} Designs</h2>
          <a href={`${S}/collections/bucket-hats`} className="shop__link">View All &rarr;</a>
        </div>
        <div className="dgrid">
          {buckets.map(p => <Card key={p.id} p={p} />)}
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

      {/* ALL VESTS */}
      <section className="shop" style={{ background: 'var(--ch)' }}>
        <div className="shop__header">
          <h2 className="shop__title">Vests &mdash; {vests.length} Designs</h2>
          <a href={`${S}/collections/vests`} className="shop__link">View All &rarr;</a>
        </div>
        <div className="dgrid">
          {vests.map(p => <Card key={p.id} p={p} />)}
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

      {/* CRESTS */}
      <section className="crests">
        <div className="crests__header">
          <div className="crests__tag">The Crests</div>
          <h2 className="crests__title">Eight Teams. One City.</h2>
        </div>
        <div className="crests__grid">
          {CRESTS.map((src, i) => (
            <a key={i} href={`${S}/collections/all-products`} className="cc">
              <img src={src} alt="" loading="lazy" />
            </a>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="story">
        <div className="story__bg" style={{ backgroundImage: 'url(/merch/prime-time.png)' }} />
        <div className="story__content">
          <h2 className="story__title">The City Had <em>Soul</em></h2>
          <p className="story__text">
            From Bankhead to Buckhead. From Freaknik to Friday night fish frys.
            Atlanta wasn&rsquo;t just where you lived &mdash; it was how you moved.
          </p>
          <a href={`${S}/pages/about`} className="btn-secondary">Read the Story</a>
        </div>
      </section>

      {/* PANTS */}
      {pants.length > 0 && (
        <section className="shop">
          <div className="shop__header">
            <h2 className="shop__title">Pants &mdash; {pants.length} Design{pants.length > 1 ? 's' : ''}</h2>
            <a href={`${S}/collections/bottoms`} className="shop__link">View All &rarr;</a>
          </div>
          <div className="dgrid">
            {pants.map(p => <Card key={p.id} p={p} />)}
          </div>
        </section>
      )}

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
