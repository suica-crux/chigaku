import Heading from '@/components/Heading';
import { titleLoader, getPages } from '@/lib/titleLoader';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default async function TopicPage(props: {
  params: Promise<{ category: string; topic: string }>;
}) {
  const params = await props.params;
  const { category, topic } = params;

  let categoryTitle = category;
  let topicTitle = topic;
  let ContentComponent: React.ComponentType | null = null;

  try {
    const titleData = titleLoader(categoryTitle);
    if (titleData) {
      categoryTitle = titleData;
    }
  } catch (error) {
    console.error(
      `app/manual/[category]/[topic]/page.tsx: title not found for category: ${category}`,
      error
    );
  }

  try {
    const titleData = titleLoader(topicTitle);
    if (titleData) {
      topicTitle = titleData;
    }
  } catch (error) {
    console.error(
      `app/manual/[category]/[topic]/page.tsx: title not found for topic: ${topic}`,
      error
    );
  }

  try {
    const contentModule = await import(
      `@/data/manual/${category}/${topic}/content.tsx`
    );
    ContentComponent = contentModule.default;
  } catch (error) {
    console.error(
      `app/manual/[category]/[topic]/page.tsx: content.tsx not found for topic: ${topic}`,
      error
    );
  }

  const { previous, next } = getPages(topic);
  const previousTitle = titleLoader(previous);
  const nextTitle = titleLoader(next);

  return (
    <div>
      <Heading title={`${categoryTitle} - ${topicTitle}`} />
      {ContentComponent ? (
        <ContentComponent />
      ) : (
        <p>指定されたファイルが見つかりませんでした</p>
      )}

      <div className="flex justify-between items-center mt-10">
        {previous ? (
          <Link
            href={`/manual/${category}/${previous}`}
            className="inline-flex items-center gap-2 px-4 py-2 text-foreground bg-subbg hover:bg-bghover rounded transition"
          >
            <ChevronLeft className="w-5 h-5" />
            前のページ
            <br />({`${previousTitle}`})
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={`/manual/${category}/${next}`}
            className="inline-flex items-center gap-2 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded transition"
          >
            次のページ
            <br />({`${nextTitle}`})
            <ChevronRight className="w-5 h-5" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
