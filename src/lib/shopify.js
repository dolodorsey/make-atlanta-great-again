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

export async function getProducts(limit = 250) {
  const data = await shopifyFetch(`/collections/maga/products.json?limit=${limit}`);
  return data?.products || [];
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
    products: handle === 'maga' ? products : products.filter(hasBrandTag),
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
