import { titles } from '@/data/titles';
import order from '@/data/manual/dome/order.json';
import { dateFormatter } from './dateFormatter';

export function titleLoader(key: unknown): string | undefined {
  if (typeof key !== 'string' || !key) return undefined;

  if (key.startsWith('2')) return dateFormatter(key);
  if (key.startsWith('[') || key.startsWith('.') || key.startsWith('$') || !(key in titles)) {
    if (!(key in titles)) {
      console.error(`lib/titleLoader.ts: キー "${key}" は titles.ts に存在しません`);
    }
    return undefined;
  }

  return titles[key as keyof typeof titles];
}

export function getPages(current: string): {
  previous: string | null;
  next: string | null;
} {
  const index = order.indexOf(current);
  return {
    previous: index > 0 ? (order[index - 1] ?? null) : null,
    next: index >= 0 && index < order.length - 1 ? (order[index + 1] ?? null) : null,
  };
}
