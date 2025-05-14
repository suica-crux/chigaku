import { titles } from '@/data/titles';

type TitleKey = keyof typeof titles;

export function titleLoader(key: TitleKey): string | undefined {
  if (key === '_next') {
    console.log('"_next"がtitleLoaderで検出されました');
    return undefined;
  }

  const result = titles[key];

  if (!result) {
    throw new Error(`キー "${key}" は titles.ts に存在しません`);
  }

  return result;
}
