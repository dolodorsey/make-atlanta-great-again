const STORE = process.env.SHOPIFY_STORE_DOMAIN || 'bodgeaworldwide.myshopify.com';
const ORIGIN = `https://${STORE.replace(/^https?:\/\//, '')}`;
const BRAND_TAG = 'brand:maga';

async function shopifyFetch(path) {
  try {
    const res = await fetch(`${ORIGIN}${path}`, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'MagaWeb/1.0',
      },
      cache: 'no-store',
    });

    if (!res.ok) {
      console.error(`Shopify ${res.status}: ${path}`);
      return null;
    }

    return res.json();
  } catch (err) {
    console.error(`Shopify fetch error (${path}): ${err.message}`);
    return null;
  }
}

function hasBrandTag(product) {
  const tags = Array.isArray(product?.tags)
    ? product.tags
    : (product?.tags || '').split(',').map(tag => tag.trim());
  return tags.includes(BRAND_TAG);
}

function isNewUntaggedImport(product) {
  const tags = Array.isArray(product?.tags)
    ? product.tags
    : (product?.tags || '').split(',').map(tag => tag.trim()).filter(Boolean);
  return tags.length === 0;
}

export async function getProducts(limit = 250) {
  // The newly imported catalog is currently untagged in Shopify. Per the
  // store owner, every unassigned item in this import belongs to MAGA.
  // Fetch both public catalog pages so the storefront is not capped at 250.
  const [pageOne, pageTwo] = await Promise.all([
    shopifyFetch(`/products.json?limit=${limit}&page=1`),
    shopifyFetch(`/products.json?limit=${limit}&page=2`),
  ]);

  const products = [
    ...(pageOne?.products || []),
    ...(pageTwo?.products || []),
  ];

  const uniqueProducts = Array.from(
    new Map(products.map(product => [product.id, product])).values()
  );

  return uniqueProducts.filter(
    product => hasBrandTag(product) || isNewUntaggedImport(product)
  );
}

export async function getCollections() {
  const data = await shopifyFetch('/collections.json?limit=250');
  return data?.collections || [];
}

export async function getCollectionProducts(handle) {
  const data = await shopifyFetch(`/collections/${handle}/products.json?limit=250`);
  const products = data?.products || [];
  return {
    collection: (await getCollections()).find(collection => collection.handle === handle) || null,
    products: handle === 'make-atlanta-great-again' ? products : products.filter(hasBrandTag),
  };
}

export async function getProduct(handle) {
  const data = await shopifyFetch(`/products/${handle}.json`);
  const product = data?.product || null;
  return product && hasBrandTag(product) ? product : null;
}

export function getCheckoutUrl(variantId, quantity = 1) {
  return `${ORIGIN}/cart/${variantId}:${quantity}`;
}

export function getProductUrl(handle) {
  return `${ORIGIN}/products/${handle}`;
}

export function formatPrice(price) {
  const num = parseFloat(price);
  return Number.isNaN(num) ? '' : '$' + num.toFixed(2);
}
