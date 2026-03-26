import { getProducts, formatPrice } from '@/lib/shopify';

export const dynamic = 'force-dynamic';
const S = 'https://makeatlantagreatagain.myshopify.com';

const CATEGORIES = [
  { key: 'Snapback Cap', label: 'Snapbacks', id: 'snapbacks' },
  { key: 'T-Shirt', label: 'T-Shirts', id: 'tees' },
  { key: 'Vest', label: 'Vests', id: 'vests' },
  { key: 'Trucker Hat', label: 'Trucker Hats', id: 'truckers' },
  { key: 'Bucket Hat', label: 'Bucket Hats', id: 'buckets' },
  { key: 'Pants', label: 'Pants', id: 'pants' },
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

export default async function ShopPage() {
  const products = await getProducts();
  const byType = {};
  (products || []).forEach(p => {
    const t = p.product_type || 'Other';
    if (!byType[t]) byType[t] = [];
    byType[t].push(p);
  });

  return (
    <>
      {/* Category jump bar — fixed at top */}
      <section className="shop-nav">
        <div className="shop-nav__inner">
          {CATEGORIES.map(cat => {
            const count = (byType[cat.key] || []).length;
            return count > 0 ? (
              <a key={cat.id} href={`#${cat.id}`} className="shop-nav__link">
                {cat.label} <span className="shop-nav__count">({count})</span>
              </a>
            ) : null;
          })}
          <a href={`${S}/collections/all-products`} className="shop-nav__link shop-nav__link--shopify">
            Shopify Store &rarr;
          </a>
        </div>
      </section>

      {/* All categories with anchor IDs */}
      {CATEGORIES.map(cat => {
        const items = byType[cat.key] || [];
        if (items.length === 0) return null;
        return (
          <section key={cat.id} id={cat.id} className="shop">
            <div className="shop__header">
              <h2 className="shop__title">{cat.label} &mdash; {items.length}</h2>
              <a href={`${S}/collections/${cat.id === 'tees' ? 't-shirts' : cat.id === 'truckers' ? 'trucker-hats' : cat.id === 'buckets' ? 'bucket-hats' : cat.id}`} className="shop__link">
                View on Shopify &rarr;
              </a>
            </div>
            <div className="dgrid">
              {items.map(p => <Card key={p.id} p={p} />)}
            </div>
          </section>
        );
      })}
    </>
  );
}
