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
  { key: 'Swimsuit', label: 'Swimsuits', id: 'swimsuits' },
];

// Product types where we should HIDE manufacturer color variants
// Only show the actual product color (usually the first/primary one)
const SINGLE_COLOR_TYPES = [
  'Snapback Cap',
  'Trucker Hat', 
  'Bucket Hat',
  'Swim Trunks',
  'Swimsuit',
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
    <div style={{ paddingTop: 88 }}>
      {/* STICKY CATEGORY NAV */}
      <nav className="shop-nav">
        <div className="shop-nav__inner">
          {CATEGORIES.map(cat => {
            const count = (byType[cat.key] || []).length;
            if (count === 0) return null;
            return (
              <a key={cat.id} href={`#${cat.id}`} className="shop-nav__link">
                {cat.label} <span className="shop-nav__count">&nbsp;({count})</span>
              </a>
            );
          })}
          <a href={`${S}/collections/all-products`} className="shop-nav__link shop-nav__link--shopify">
            Shopify Store &rarr;
          </a>
        </div>
      </nav>

      {/* ALL PRODUCT SECTIONS — no banner, straight to products */}
      {CATEGORIES.map(cat => {
        const items = byType[cat.key] || [];
        if (items.length === 0) return null;

        // Determine if this category should hide manufacturer colors
        const isSingleColorType = SINGLE_COLOR_TYPES.includes(cat.key);
        // T-Shirts with Black + other colors: only show Black
        const isShirt = cat.key === 'T-Shirt';

        return (
          <section key={cat.id} id={cat.id} className="shop">
            <div className="shop__header">
              <h2 className="shop__title">{cat.label} &mdash; {items.length}</h2>
              <a href={`${S}/collections/${cat.id === 'tees' ? 't-shirts' : cat.id === 'truckers' ? 'trucker-hats' : cat.id === 'buckets' ? 'bucket-hats' : cat.id === 'swim-trunks' || cat.id === 'swimsuits' ? 'swimwear' : cat.id}`} className="shop__link">
                View on Shopify &rarr;
              </a>
            </div>
            <div className="dgrid">
              {items.map(p => {
                const colorOpt = p.options?.find(o => o.name.toLowerCase() === 'color');
                const colors = colorOpt?.values || [];
                const hasBlack = colors.some(c => c.toLowerCase() === 'black');
                const isMultiColor = colors.length > 1;

                // For hats/shorts: always show single color (hide manufacturer variants)
                const singleColorOnly = isSingleColorType;
                // For shirts: if has black + others, show black only
                const blackOnly = isShirt && hasBlack && isMultiColor;

                return (
                  <ColorCycleCard 
                    key={p.id} 
                    product={p} 
                    storeUrl={S} 
                    blackOnly={blackOnly}
                    singleColorOnly={singleColorOnly}
                  />
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
