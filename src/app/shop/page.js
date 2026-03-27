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
  { key: 'Swim Trunks', label: 'Swim Trunks', id: 'swim-trunks' },
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
              {items.map(p => {
                // For T-Shirts with multiple colors including Black, only show Black
                const isShirt = cat.key === 'T-Shirt';
                const colorOpt = p.options?.find(o => o.name.toLowerCase() === 'color');
                const colors = colorOpt?.values || [];
                const hasBlack = colors.some(c => c.toLowerCase() === 'black');
                const isMultiColor = colors.length > 1;
                const showBlackOnly = isShirt && hasBlack && isMultiColor;
                return (
                  <ColorCycleCard key={p.id} product={p} storeUrl={S} blackOnly={showBlackOnly} />
                );
              })}
            </div>
          </section>
        );
      })}
    </>
  );
}
