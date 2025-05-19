import { promises as fs } from 'fs';
import path from 'path';
import Link from 'next/link';
import Heading from '@/components/Heading';
import { titleLoader } from '@/lib/titleLoader';

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await Promise.resolve(params);
  const categoryPath = path.join(process.cwd(), 'src/app/manual', category);

  let categoryTitle = category; // デフォルトはフォルダ名
  let topics: { slug: string; title: string }[] = [];
  let topicOder: string[] = [];

  // load category title
  try {
    const titleData = titleLoader(categoryTitle);
    if (titleData) {
      categoryTitle = titleData;
    }
  } catch (error) {
    console.error(
      `app/manual/[category]/page.tsx: title not found for ${category}`,
      error
    );
  }

  // load oder.json
  try {
    const oderPath = path.join(categoryPath, 'oder.json');
    const oderJson = await fs.readFile(oderPath, 'utf-8');
    topicOder = JSON.parse(oderJson);
  } catch {
    console.warn(
      `app/manual/[category]/page.tsx: oder.json not found in ${categoryPath}. Using alphabetical oder.`
    );
  }

  // category/ 以下のフォルダ (topic) を取得
  try {
    const entries = await fs.readdir(categoryPath, { withFileTypes: true });

    const topicCandidates = entries.filter(
      (entry) => entry.isDirectory() && !entry.name.startsWith('[')
    );

    const loadedTopics = await Promise.all(
      topicCandidates.map(async (entry) => {
        const slug = entry.name;
        let title = slug;

        try {
          const titleData = titleLoader(slug);
          if (titleData) {
            title = titleData;
          }
        } catch (error) {
          console.error(
            `app/manual/[category]/page.tsx: title not found for ${category}/${slug}`,
            error
          );
        }

        return { slug: slug, title: title };
      })
    );

    if (topicOder.length > 0) {
      const topicMap = Object.fromEntries(loadedTopics.map((t) => [t.slug, t]));
      const orderedSlugs = new Set(topicOder);

      const orderedTopics = topicOder
        .map((slug) => topicMap[slug])
        .filter(Boolean);

      const rest = loadedTopics.filter((t) => !orderedSlugs.has(t.slug));

      topics = [...orderedTopics, ...rest];
    } else {
      topics = loadedTopics;
    }
  } catch (error) {
    console.error(
      `app/manual/[category]/page.tsx: Failed to read topics in ${category}`,
      error
    );
  }

  return (
    <main className="p-6">
      <Heading title={categoryTitle} />
      {topics.length === 0 ? (
        <p>このカテゴリにはまだ記事がありません</p>
      ) : (
        <ul className="space-y-2">
          {topics.map(({ slug, title }) => (
            <li key={slug}>
              <Link href={`/manual/${category}/${slug}`} className="underline">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
