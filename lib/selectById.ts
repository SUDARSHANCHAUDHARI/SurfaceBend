/**
 * Find an item by its `id` field, falling back to a provided default when
 * nothing matches. Used by the panel picker to keep the selected surface
 * stable when the active id is reset or unknown.
 */
export function selectById<T extends { id: string }>(
  items: T[],
  id: string | null,
  fallback: T
): T {
  if (id == null) return fallback;
  return items.find((item) => item.id === id) ?? fallback;
}
