import Heading from '@/components/Heading';
import Text from '@/components/Text';
import Calendar from '@/components/Calendar';
import CalendarLegend from '@/components/CalendarLegend';

const Content: React.FC = () => {
  return (
    <div>
      <Heading title="平日活動について" />
      <Text>
        地学部では平日活動を開始します！
        <br />
        以下にスケジュールを載せておきます。
      </Text>

      <CalendarLegend />
      <Calendar
        year={2025}
        month={7}
        dayInfo={{
          13: { room: 'b202', time: '19:00-24:00' },
          14: { room: 'b202', time: '0:00-6:00' },
          17: { room: 's109', time: '9:30-13:00' },
          22: { room: 's109', time: '12:00-15:30' },
          25: { room: 's109', time: '9:30-13:00' },
          28: { room: 's109', time: '9:30-13:00' },
          29: { room: 's109', time: '12:00-15:30' },
        }}
      />
      <Calendar
        year={2025}
        month={8}
        dayInfo={{
          5: { room: 'b202', time: '19:00-24:00' },
          6: { room: 'b202', time: '0:00-6:00' },
          19: { room: 's109', time: '9:30-13:00' },
          20: { room: 's109', time: '9:30-13:00' },
          21: { room: 's109', time: '9:30-13:00' },
          25: { room: 'b202', time: '19:00-24:00' },
          26: { room: 'b202', time: '0:00-6:00' },
          29: { room: 's110', time: '13:00-15:30' },
        }}
      />
    </div>
  );
};

export default Content;
