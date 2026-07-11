const STORE = 'www.bodegabodegabodega.com';
const TOKEN = process.env.SHOPIFY_ADMIN_TOKEN;
const API = `https://${STORE}/admin/api/2024-01`;

export async function shopifyFetch(endpoint) {
  if (!TOKEN) {
    console.error('SHOPIFY_ADMIN_TOKEN not set');
    return null;
  }
  try {
    const res = await fetch(`${API}${endpoint}`, {
      headers: { 'X-Shopify-Access-Token': TOKEN },
      cache: 'no-store',
    });
    if (!res.ok) {
      console.error(`Shopify API ${res.status}: ${endpoint}`);
      return null;
    }
    return res.json();
  } catch (err) {
    console.error(`Shopify fetch error: ${err.message}`);
    return null;
  }
}

export async function getProducts(status = 'active', limit = 250) {
  const data = await shopifyFetch(`/products.json?limit=${limit}&status=${status}`);
  const all = data?.products || [];
  // Multi-brand store — always filter to brand_maga
  return all.filter(p => (p.tags || '').split(',').map(t => t.trim()).includes('brand_maga'));
}

export async function getCollections() {
  const data = await shopifyFetch('/smart_collections.json');
  return data?.smart_collections || [];
}

export async function getCollectionProducts(handle) {
  const collections = await getCollections();
  const collection = collections.find(c => c.handle === handle);
  if (!collection) return { collection: null, products: [] };
  const data = await shopifyFetch(`/products.json?collection_id=${collection.id}&limit=250&status=active`);
  const all = data?.products || [];
  return { collection, products: all.filter(p => (p.tags || '').split(',').map(t => t.trim()).includes('brand_maga')) };
}

export async function getProduct(handle) {
  const data = await shopifyFetch(`/products.json?handle=${handle}&status=active`);
  return data.products[0] || null;
}

export function getCheckoutUrl(variantId, quantity = 1) {
  return `https://${STORE}/cart/${variantId}:${quantity}`;
}

export function getProductUrl(handle) {
  return `https://${STORE}/products/${handle}`;
}

export function formatPrice(price) {
  const num = parseFloat(price);
  return '$' + num.toFixed(2);
}
