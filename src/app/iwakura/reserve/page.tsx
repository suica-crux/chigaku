import Heading from '@/components/Heading';
import Text from '@/components/Text';
import Timetable from '@/components/Timetable';

export const metadata = {
  title: '岩倉祭予約 - 同志社高校地学部',
};

export default function ReservePage() {
  return (
    <div>
      <Heading title="岩倉祭予約" />
      <Text>地学部は、岩倉祭の天体ドーム見学に任意の事前予約を実施します。</Text>
      <Timetable date={26} startHour={9} endHour={17} workMinutes={10} breakMinutes={5} />
    </div>
  );
}
