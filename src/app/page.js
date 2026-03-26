import { getProducts, getCollections, formatPrice } from '@/lib/shopify';

export const dynamic = 'force-dynamic';

const SHOPIFY = 'https://makeatlantagreatagain.myshopify.com';

function ProductCard({ product }) {
  const img = product.images?.[0]?.src;
  const price = product.variants?.[0]?.price;
  const variantId = product.variants?.[0]?.id;
  const handle = product.handle;

  return (
    <a href={`${SHOPIFY}/products/${handle}`} className="product-card">
      <div className="product-card__image-wrapper">
        {img ? (
          <img src={img} alt={product.title} className="product-card__image" loading="lazy" />
        ) : (
          <div style={{ width: '100%', height: '100%', background: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#404040', fontSize: 12, letterSpacing: '0.1em' }}>
            NO IMAGE
          </div>
        )}
        <div className="product-card__overlay">
          <a href={`${SHOPIFY}/cart/${variantId}:1`} className="product-card__quick-shop" onClick={(e) => e.stopPropagation()}>
            ADD TO CART
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

function CategoryCard({ title, count, image, href }) {
  return (
    <a href={href} className="category-card">
      {image ? (
        <img src={image} alt={title} className="category-card__image" loading="lazy" />
      ) : (
        <div className="category-card__image" style={{ background: 'linear-gradient(135deg, #1B2A4A, #0F1A2E)' }} />
      )}
      <div className="category-card__overlay">
        <div className="category-card__title">{title}</div>
        <div className="category-card__count">{count} pieces</div>
      </div>
    </a>
  );
}

export default async function HomePage() {
  const [products, collections] = await Promise.all([
    getProducts(),
    getCollections(),
  ]);

  // Group products by type
  const byType = {};
  products.forEach(p => {
    const t = p.product_type || 'Other';
    if (!byType[t]) byType[t] = [];
    byType[t].push(p);
  });

  // Get representative images for categories
  const categoryData = [
    { title: 'Snapbacks', key: 'Snapback Cap', handle: 'snapbacks' },
    { title: 'Trucker Hats', key: 'Trucker Hat', handle: 'trucker-hats' },
    { title: 'Bucket Hats', key: 'Bucket Hat', handle: 'bucket-hats' },
    { title: 'T-Shirts', key: 'T-Shirt', handle: 't-shirts' },
    { title: 'Vests', key: 'Vest', handle: 'vests' },
    { title: 'Pants', key: 'Pants', handle: 'bottoms' },
  ].map(cat => ({
    ...cat,
    count: (byType[cat.key] || []).length,
    image: (byType[cat.key] || [])[0]?.images?.[0]?.src || null,
  }));

  // Featured products — snapbacks first (most visually striking)
  const snapbacks = byType['Snapback Cap'] || [];
  const tees = byType['T-Shirt'] || [];
  const buckets = byType['Bucket Hat'] || [];

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="hero__content">
          <div className="hero__eyebrow">2026 Collection &mdash; Atlanta Streetwear</div>
          <h1 className="hero__title">
            Make Atlanta<br /><em>Great Again</em>
          </h1>
          <p className="hero__subtitle">
            64 premium pieces across 7 categories. Snapbacks, truckers, bucket hats, 
            tees, vests &amp; pants. Original ATL designs. Made with pride.
          </p>
          <div className="hero__actions">
            <a href={`${SHOPIFY}/collections/all-products`} className="btn-primary">Shop the Collection</a>
            <a href={`${SHOPIFY}/collections/headwear`} className="btn-secondary">Headwear</a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="stat">
          <div className="stat__number">64</div>
          <div className="stat__label">Products</div>
        </div>
        <div className="stat">
          <div className="stat__number">7</div>
          <div className="stat__label">Categories</div>
        </div>
        <div className="stat">
          <div className="stat__number">20</div>
          <div className="stat__label">Snapback Designs</div>
        </div>
        <div className="stat">
          <div className="stat__number">521</div>
          <div className="stat__label">Variants</div>
        </div>
      </section>

      {/* SNAPBACKS */}
      <section>
        <div className="container">
          <div className="section-header">
            <h2 className="section-header__title">Skyline Snapbacks</h2>
            <a href={`${SHOPIFY}/collections/snapbacks`} className="section-header__count">View All {snapbacks.length} &rarr;</a>
          </div>
        </div>
        <div className="product-grid">
          {snapbacks.slice(0, 8).map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* CATEGORIES */}
      <section style={{ padding: '80px 0 0' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-header__title">Shop by Category</h2>
            <span className="section-header__count">{products.length} total pieces</span>
          </div>
        </div>
        <div className="category-grid">
          {categoryData.map(cat => (
            <CategoryCard
              key={cat.handle}
              title={cat.title}
              count={cat.count}
              image={cat.image}
              href={`${SHOPIFY}/collections/${cat.handle}`}
            />
          ))}
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="brand-story">
        <div className="container">
          <h2 className="brand-story__title">For the City.<br />By the City.</h2>
          <p className="brand-story__text">
            MAKE ATLANTA GREAT AGAIN is a lifestyle brand born from the belief that Atlanta &mdash; the 
            culture capital of the South &mdash; deserves to be repped with the same pride and energy 
            its people carry every single day. From Bankhead to Buckhead, from the Westside to Stone Mountain.
          </p>
          <a href={`${SHOPIFY}/pages/about`} className="btn-secondary">About Us</a>
        </div>
      </section>

      {/* T-SHIRTS */}
      <section>
        <div className="container">
          <div className="section-header">
            <h2 className="section-header__title">Tees &amp; Heavyweights</h2>
            <a href={`${SHOPIFY}/collections/t-shirts`} className="section-header__count">View All {tees.length} &rarr;</a>
          </div>
        </div>
        <div className="product-grid">
          {tees.slice(0, 8).map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* BUCKET HATS */}
      <section>
        <div className="container">
          <div className="section-header">
            <h2 className="section-header__title">Bucket Hats</h2>
            <a href={`${SHOPIFY}/collections/bucket-hats`} className="section-header__count">All {buckets.length} designs &rarr;</a>
          </div>
        </div>
        <div className="product-grid">
          {buckets.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* SHIPPING BAR */}
      <section className="stats" style={{ background: 'var(--navy-deep)' }}>
        <div className="stat">
          <div className="stat__number" style={{ fontSize: 24 }}>Free Shipping</div>
          <div className="stat__label">Over $150</div>
        </div>
        <div className="stat">
          <div className="stat__number" style={{ fontSize: 24 }}>ATL Made</div>
          <div className="stat__label">Designed with Pride</div>
        </div>
        <div className="stat">
          <div className="stat__number" style={{ fontSize: 24 }}>14 Days</div>
          <div className="stat__label">Easy Returns</div>
        </div>
        <div className="stat">
          <div className="stat__number" style={{ fontSize: 24 }}>Secure</div>
          <div className="stat__label">Checkout</div>
        </div>
      </section>
    </>
  );
}
