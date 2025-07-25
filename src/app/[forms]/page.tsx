export default async function TopicPage(props: { params: Promise<{ forms: string }> }) {
  const { forms } = await props.params;
  const title = forms;

  let ContentComponent: React.ComponentType | null = null;
  try {
    const contentModule = await import(`@/data/forms/${title}/content.tsx`);
    ContentComponent = contentModule.default;
  } catch (error) {
    console.error(`app/[forms]/page.tsx: content.tsx が見つかりません title=${title}`, error);
  }

  return (
    <div>
      {ContentComponent ? <ContentComponent /> : <p>指定されたファイルが見つかりませんでした。</p>}
    </div>
  );
}
