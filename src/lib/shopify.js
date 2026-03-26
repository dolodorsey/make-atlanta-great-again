const STORE = 'makeatlantagreatagain.myshopify.com';
const TOKEN = process.env.SHOPIFY_ADMIN_TOKEN;
const API = `https://${STORE}/admin/api/2024-01`;

export async function shopifyFetch(endpoint) {
  const res = await fetch(`${API}${endpoint}`, {
    headers: { 'X-Shopify-Access-Token': TOKEN },
    next: { revalidate: 300 },
  });
  if (!res.ok) throw new Error(`Shopify API error: ${res.status}`);
  return res.json();
}

export async function getProducts(status = 'active', limit = 250) {
  const data = await shopifyFetch(`/products.json?limit=${limit}&status=${status}`);
  return data.products;
}

export async function getCollections() {
  const data = await shopifyFetch('/smart_collections.json');
  return data.smart_collections;
}

export async function getCollectionProducts(handle) {
  const collections = await getCollections();
  const collection = collections.find(c => c.handle === handle);
  if (!collection) return { collection: null, products: [] };
  const data = await shopifyFetch(`/products.json?collection_id=${collection.id}&limit=250&status=active`);
  return { collection, products: data.products };
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
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
}
