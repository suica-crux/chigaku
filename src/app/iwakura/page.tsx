import Heading from '@/components/Heading';
import Text from '@/components/Text';
import Calendar from '@/components/Calendar';
import CalendarLegend from '@/components/CalendarLegend';

const Content: React.FC = () => {
  return (
    <div>
      <Heading title="平日活動について" />
      <Text>
        地学部は岩倉祭に展示を出します！
        <br />
        {/* 詳細は以下をご確認ください。 */}
        準備中...日付は以下をご確認ください
      </Text>

      <CalendarLegend iwakura />
      <Calendar
        year={2025}
        month={9}
        dayInfo={{
          27: { room: 'iwakura' },
          28: { room: 'iwakura' },
        }}
      />
    </div>
  );
};

export default Content;
