import { getProducts, formatPrice } from '@/lib/shopify';
import ColorCycleCard from '@/components/ColorCycleCard';

export const dynamic = 'force-dynamic';
const S = 'https://bodgeaworldwide.myshopify.com';

const CATEGORIES = [
  { key: 'Snapback Cap,Trucker Hat', label: 'Hats', id: 'hats', multi: true },
  { key: 'Cap', label: 'Caps', id: 'caps' },
  { key: 'Hoodie', label: 'Hoodies', id: 'hoodies' },
  { key: 'Sweatshirt', label: 'Sweatshirts', id: 'sweatshirts' },
  { key: 'Jacket', label: 'Jackets', id: 'jackets' },
  { key: 'T-Shirt', label: 'T-Shirts', id: 'tees' },
  { key: 'Tank Top', label: 'Tank Tops', id: 'tank-tops' },
  { key: 'Polo', label: 'Polos', id: 'polos' },
  { key: 'Jersey', label: 'Jerseys', id: 'jerseys' },
  { key: 'Vest', label: 'Vests', id: 'vests' },
  { key: 'Bucket Hat', label: 'Bucket Hats', id: 'buckets' },
  { key: 'Pants', label: 'Pants', id: 'pants' },
  { key: 'Shorts', label: 'Shorts', id: 'shorts' },
  { key: 'Swim Trunks', label: 'Swim Trunks', id: 'swim-trunks' },
  { key: 'Swimsuit', label: 'Swimsuits', id: 'swimsuits' },
  { key: 'Sports Bra', label: 'Sports Bras', id: 'sports-bras' },
  { key: 'Leggings', label: 'Leggings', id: 'leggings' },
  { key: 'Dress', label: 'Dresses', id: 'dresses' },
  { key: 'Skirt', label: 'Skirts', id: 'skirts' },
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

function inferProductType(product) {
  if (product.product_type?.trim()) return product.product_type.trim();

  const title = product.title.toLowerCase();
  if (/bucket hat/.test(title)) return 'Bucket Hat';
  if (/snapback|trucker hat/.test(title)) return 'Trucker Hat';
  if (/cap|visor/.test(title)) return 'Cap';
  if (/sports? bra/.test(title)) return 'Sports Bra';
  if (/legging/.test(title)) return 'Leggings';
  if (/swimsuit|one-piece/.test(title)) return 'Swimsuit';
  if (/swim trunks|beach shorts/.test(title)) return 'Swim Trunks';
  if (/shorts/.test(title)) return 'Shorts';
  if (/sweatpants|jogger|\bpants\b|trouser/.test(title)) return 'Pants';
  if (/hoodie/.test(title)) return 'Hoodie';
  if (/sweatshirt/.test(title)) return 'Sweatshirt';
  if (/jacket|coat|windbreaker/.test(title)) return 'Jacket';
  if (/\bvest\b/.test(title)) return 'Vest';
  if (/jersey/.test(title)) return 'Jersey';
  if (/polo/.test(title)) return 'Polo';
  if (/tank top|muscle t-shirt|sleeveless/.test(title)) return 'Tank Top';
  if (/t-shirt|\btee\b/.test(title)) return 'T-Shirt';
  if (/dress/.test(title)) return 'Dress';
  if (/skirt/.test(title)) return 'Skirt';
  return 'Other';
}

export default async function ShopPage() {
  const products = await getProducts();
  const byType = {};
  (products || []).forEach(p => {
    const t = inferProductType(p);
    if (!byType[t]) byType[t] = [];
    byType[t].push(p);
  });

  const configuredTypes = new Set(CATEGORIES.flatMap(cat => cat.key.split(',').map(type => type.trim())));
  const sections = CATEGORIES.concat(
    Object.keys(byType)
      .filter(type => !configuredTypes.has(type))
      .map(type => ({ key: type, label: type === 'Other' ? 'Other Products' : type, id: `other-${type.toLowerCase().replace(/[^a-z0-9]+/g, '-')}` }))
  );

  return (
    <div style={{ paddingTop: 88 }}>
      {/* STICKY CATEGORY NAV */}
      <nav className="shop-nav">
        <div className="shop-nav__inner">
          {sections.map(cat => {
            const count = cat.multi
              ? cat.key.split(',').reduce((sum, k) => sum + (byType[k.trim()] || []).length, 0)
              : (byType[cat.key] || []).length;
            if (count === 0) return null;
            return (
              <a key={cat.id} href={`#${cat.id}`} className="shop-nav__link">
                {cat.label} <span className="shop-nav__count">&nbsp;({count})</span>
              </a>
            );
          })}
          <a href={`${S}/collections/maga`} className="shop-nav__link shop-nav__link--shopify">
            Shopify Store &rarr;
          </a>
        </div>
      </nav>

      {/* ALL PRODUCT SECTIONS — no banner, straight to products */}
      {sections.map(cat => {
        const items = cat.multi
          ? cat.key.split(',').flatMap(k => byType[k.trim()] || [])
          : (byType[cat.key] || []);
        if (items.length === 0) return null;

        // Determine if this category should hide manufacturer colors
        const isSingleColorType = cat.multi
          ? cat.key.split(',').some(k => SINGLE_COLOR_TYPES.includes(k.trim()))
          : SINGLE_COLOR_TYPES.includes(cat.key);
        // T-Shirts with Black + other colors: only show Black
        const isShirt = cat.key === 'T-Shirt';

        return (
          <section key={cat.id} id={cat.id} className="shop">
            <div className="shop__header">
              <h2 className="shop__title">{cat.label} &mdash; {items.length}</h2>
              <a href={`${S}/collections/maga`} className="shop__link">
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
