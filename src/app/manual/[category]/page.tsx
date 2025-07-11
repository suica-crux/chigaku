import { promises as fs } from 'fs';
import path from 'path';
import Link from 'next/link';
import Heading from '@/components/Heading';
import { titleLoader } from '@/lib/titleLoader';
import { Metadata } from 'next';
import ListItem from '@/components/ListItem';

export async function generateStaticParams() {
  const manualPath = path.join(process.cwd(), 'src/data/manual');
  const entries = await fs.readdir(manualPath, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => ({
      category: entry.name,
    }));
}

export const metadata: Metadata = {
  title: 'マニュアル - 同志社高校地学部',
};

export default async function CategoryPage(props: { params: Promise<{ category: string }> }) {
  const params = await props.params;
  const { category } = params;
  const categoryPath = path.join(process.cwd(), 'src/data/manual', category);

  let categoryTitle = category; // デフォルトはフォルダ名
  let topics: { slug: string; title: string }[] = [];
  let topicOrder: string[] = [];

  // load category title
  try {
    const titleData = titleLoader(categoryTitle);
    if (titleData) {
      categoryTitle = titleData;
    }
  } catch (error) {
    console.error(`app/manual/[category]/page.tsx: title not found for ${category}`, error);
  }

  // load order.json
  try {
    const orderPath = path.join(categoryPath, 'order.json');
    const orderJson = await fs.readFile(orderPath, 'utf-8');
    topicOrder = JSON.parse(orderJson);
  } catch {
    console.warn(
      `app/manual/[category]/page.tsx: order.json not found in ${categoryPath}. Using alphabetical order.`
    );
  }

  // category/ 以下のフォルダ (topic) を取得
  try {
    const entries = await fs.readdir(categoryPath, { withFileTypes: true });

    const topicCandidates = entries.filter((entry) => entry.isDirectory());

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

    if (topicOrder.length > 0) {
      const topicMap = Object.fromEntries(loadedTopics.map((t) => [t.slug, t]));
      const orderedSlugs = new Set(topicOrder);

      const orderedTopics = topicOrder.map((slug) => topicMap[slug]).filter(Boolean);

      const rest = loadedTopics.filter((t) => !orderedSlugs.has(t.slug));

      topics = [...orderedTopics, ...rest];
    } else {
      topics = loadedTopics;
    }
  } catch (error) {
    console.error(`app/manual/[category]/page.tsx: Failed to read topics in ${category}`, error);
  }

  return (
    <main className="p-6">
      <Heading title={categoryTitle} />
      {topics.length === 0 ? (
        <p>このカテゴリにはまだ記事がありません</p>
      ) : (
        <ul className="space-y-2">
          {topics.map(({ slug, title }) => (
            <ListItem type="link" key={slug} slug={slug} className="text-lg text-center">
              <Link href={`/manual/${category}/${slug}`}>{title}</Link>
            </ListItem>
          ))}
        </ul>
      )}
    </main>
  );
}
