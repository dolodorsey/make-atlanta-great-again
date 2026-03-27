import { getProducts, formatPrice } from '@/lib/shopify';
import ColorCycleCard from '@/components/ColorCycleCard';

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
              {items.map(p => (
                <ColorCycleCard key={p.id} product={p} storeUrl={S} />
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}
