// import Link from 'next/link';
import { promises as fs } from 'fs';
import path from 'path';
import Heading from '@/app/components/Heading';
import { marked } from 'marked';

type Topics = {
  params: {
    category: string;
    topic: string;
  };
};

const TopicPage = async ({ params }: Topics) => {
  const { category, topic } = params;
  const categoryPath = path.join(process.cwd(), `src/app/manual/${category}`);
  const topicPath = path.join(categoryPath, topic);

  let categoryTitle = category;
  let topicTitle = topic;
  let content = '';

  try {
    // get category title
    const categoryTitleFile = path.join(categoryPath, 'title.json');
    const titleData = JSON.parse(await fs.readFile(categoryTitleFile, 'utf-8'));
    if (titleData.title) {
      categoryTitle = titleData.title;
    }
  } catch (error) {
    console.error(`title.json not found for category: ${category}`, error);
  }

  try {
    // get topic title
    const topicTitleFile = path.join(topicPath, 'title.json');
    const titleData = JSON.parse(await fs.readFile(topicTitleFile, 'utf-8'));
    if (titleData.title) {
      topicTitle = titleData.title;
    }
  } catch (error) {
    console.error(`title.json not found for topic: ${topic}`, error);
  }

  try {
    // get markdown content
    const contentFile = path.join(topicPath, 'content.md');
    const markdown = await fs.readFile(contentFile, 'utf-8');
    content = await marked.parse(markdown);
  } catch (error) {
    console.error(`content.md not found for topic: ${topic}`, error);
  }

  return (
    <div>
      <Heading title={`${categoryTitle} - ${topicTitle}`} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default TopicPage;