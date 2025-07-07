import Heading from '@/components/Heading';
import { dateFormatter } from '@/lib/dateFormatter';

export default async function TopicPage(props: {
  params: Promise<{ schedule: string }>;
}) {
  const {schedule} = await props.params;
  const plan = schedule;
  console.log(`plan: ${plan}`)

  let ContentComponent: React.ComponentType | null = null;

  try {
    const contentModule = await import(`@/data/schedule/${plan}/content.tsx`);
    ContentComponent = contentModule.default;
  } catch (error) {
    console.error(
      `app/manual/[schedule]/page.tsx: content.tsx not found for plan: ${plan}`,
      error
    );
  }

  let date
  try {
    date = dateFormatter(plan)
  } catch {
    console.error(`app/manual/[schedule]/page.tsx: 日付形式が非対応です`)
  }

  return (
    <div>
      <Heading title={`${date} 地学部`} />
      {ContentComponent ? <ContentComponent /> : <p>指定されたファイルが見つかりませんでした</p>}
    </div>
  );
}
