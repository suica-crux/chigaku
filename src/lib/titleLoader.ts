import { titles } from '@/data/titles';
import order from '@/data/manual/dome/order.json';

type TitleKey = keyof typeof titles;

export function titleLoader(key: TitleKey): string | undefined {
  if (
    !key ||
    key === '_next' ||
    key === 'static' ||
    key.startsWith('[') ||
    key.startsWith('.') ||
    key.startsWith('$')
  ) {
    return undefined;
  }

  if (!(key in titles)) {
    console.error(
      `lib/titleLoader.ts: キー "${key}" は titles.ts に存在しません`
    );
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
    previous: index > 0 ? order[index - 1] : null,
    next: index >= 0 && index < order.length - 1 ? order[index + 1] : null,
  };
}
