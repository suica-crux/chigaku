import { promises as fs } from 'fs';
import path from 'path';
import Heading from '@/components/Heading';
import { marked } from 'marked';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Photo from '@/components/Photo';
import Text from '@/components/Text';

export default async function TopicPage({
  params,
}: {
  params: Promise<{
    category: string;
    topic: string;
  }>;
}) {
  const { category, topic } = await params;
  const categoryPath = path.join(process.cwd(), `src/app/manual/${category}`);
  const topicPath = path.join(categoryPath, topic);

  let categoryTitle = category;
  let topicTitle = topic;
  let content = '';

  try {
    const categoryTitleFile = path.join(categoryPath, 'title.json');
    const titleData = JSON.parse(await fs.readFile(categoryTitleFile, 'utf-8'));
    if (titleData.title) {
      categoryTitle = titleData.title;
    }
  } catch (error) {
    console.error(`title.json not found for category: ${category}`, error);
  }

  try {
    const topicTitleFile = path.join(topicPath, 'title.json');
    const titleData = JSON.parse(await fs.readFile(topicTitleFile, 'utf-8'));
    if (titleData.title) {
      topicTitle = titleData.title;
    }
  } catch (error) {
    console.error(`title.json not found for topic: ${topic}`, error);
  }

  try {
    const contentFile = path.join(topicPath, 'content.mdx');
    content = await fs.readFile(contentFile, 'utf-8');
  } catch (error) {
    console.error(`content.mdx not found for topic: ${topic}`, error);
  }

  return (
    <div>
      <Heading title={`${categoryTitle} - ${topicTitle}`} />
      <MDXRemote
        source={content}
        components={{
          Photo,
          Text,
          img: (props) => (
            <img {...props} className="w-1/2 mx-auto rounded-lg shadow-lg" />
          ),
        }}
      />
    </div>
  );
}
