export function getStorageItems() {
  const saved = localStorage.getItem('items');
  return JSON.parse(saved) || [];
}
