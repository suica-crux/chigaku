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

      <div className="p-2 my-4 bg-bglite rounded-lg">
        <Text size="lg" color="yellow">
          注意事項
        </Text>
        <Text>
          ご予約の時間の5分前までにはお越しください。
          <br />
          それ以降は、お席を他のお待ちの方にご案内する可能性がございます。
        </Text>
        <Text>予約なしでも当日参加は可能ですが、混雑時はお待ちいただく場合がございます。</Text>
        <Text>
          予約は先着順で、定員に達し次第締め切ります。
          <br />
          なお、定員に達していない場合でも、9月26日をもって予約は終了いたします。
          <br />
          当日参加をご利用ください。
        </Text>
        <Text>なお、ご予約の時間のご都合が悪くなった場合でも、特にご連絡は不要です。</Text>
      </div>

    <div className="p-2 mt-4 mb-4 border border-gray-300 rounded-lg">
      <Text className="mb-2 text-lg font-bold text-center">26日の予約の空き状況</Text>
      <div className="p-4">
      <Timetable date={26} startHour={9} endHour={17} workMinutes={10} breakMinutes={5} />
      </div>
    </div>
    </div>
  );
}
