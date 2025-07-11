// Content.tsx
import Heading from '@/components/Heading';
import Text from '@/components/Text';
import Calendar from '@/components/Calendar';

const Content: React.FC = () => {
  return (
    <div>
      <Heading title="平日活動について" />
      <Text>
        地学部では平日活動を開始します！<br />
        以下にスケジュールを載せておきます。
      </Text>

      {/* ← ここを修正 */}
      <Calendar
        year={2025}
        month={7}
        dayInfo={{
           13: { room: 'b202' },
           14: { room: 'b202'}
          }}
        showHeader={true}
      />
    </div>
  );
};

export default Content;
