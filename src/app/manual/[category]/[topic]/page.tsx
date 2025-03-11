import Link from 'next/link';
import { promises as fs } from 'fs';
import path from 'path';
import Heading from '@/app/components/Heading';

export default async function TopicPage({
  params,
}: {
  params: { category: string; topic: string };
}) {
  const { category, topic } = params;
  const categoryPath = path.join(process.cwd(), `src/app/manual/${category}`);
  const topicPath = path.join(categoryPath, topic);

  let categoryTitle = category;
  let topicTitle = topic;

  try {
    const categoryTitleFile = path.join(categoryPath, 'title.json');
    const titleData = JSON.parse(await fs.readFile(categoryTitleFile, 'utf-8'));
    if (titleData.title) {
      categoryTitle = titleData.title;
    }
  } catch (error) {
    console.error(`title.json not found for category: ${category}`);
  }

  try {
    const topicTitleFile = path.join(topicPath, 'title.json');
    const titleData = JSON.parse(await fs.readFile(topicTitleFile, 'utf-8'));
    if (titleData.title) {
      topicTitle = titleData.title;
    }
  } catch (error) {
    console.error(`title.json not found for topic: ${topic}`);
  }

  return (
    <div>
      <Heading title={`${categoryTitle} - ${topicTitle}`} />
    </div>
  );
}
