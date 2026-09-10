const STORAGE_KEY = "ctp-favorites";

export function getFavorites(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}

export function toggleFavorite(id: string): string[] {
  const current = getFavorites();
  const next = current.includes(id)
    ? current.filter((x) => x !== id)
    : [...current, id];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return next;
}

export function isFavorite(id: string): boolean {
  return getFavorites().includes(id);
}
