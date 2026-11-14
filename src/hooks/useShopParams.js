export default function useShopParams() {
  const q = new URLSearchParams(window.location.search)
  return {
    shop: q.get('shop') || 'Your Fitness Repair',
    city: q.get('city') || 'your city',
    phone: q.get('phone') || '(555) 000-0000',
  }
}