import Heading from '@/components/Heading';
import { dateFormatter } from '@/lib/dateFormatter';

export default async function TopicPage(
  props: { params: Promise<{ schedule: string }> }
) {
  const { schedule: plan } = await props.params;
  console.log(`plan: ${plan}`);

  let ContentComponent: React.ComponentType | null = null;
  try {
    const contentModule = await import(
      `@/data/schedule/${plan}/content.tsx`
    );
    ContentComponent = contentModule.default;
  } catch (error) {
    console.error(
      `app/manual/[schedule]/page.tsx: content.tsx が見つかりません plan=${plan}`,
      error
    );
  }

  let titleDate: string;
    if (/^\d{4}-\d{2}-\d{2}$/.test(plan)) {
    try {
      titleDate = dateFormatter(plan);
    } catch (e) {
      console.error(
        `app/manual/[schedule]/page.tsx: dateFormatter で例外 plan=${plan}`,
        e
      );
        titleDate = plan;
    }
  } else {
      titleDate = plan;
  }

  return (
    <div>
      <Heading title={`${titleDate} 地学部`} />
      {ContentComponent ? (
        <ContentComponent />
      ) : (
        <p>指定されたファイルが見つかりませんでした。</p>
      )}
    </div>
  );
}
