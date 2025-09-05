import Heading from '@/components/Heading';
import Text from '@/components/Text';
import Calendar from '@/components/Calendar';
import CalendarLegend from '@/components/CalendarLegend';
import Link from 'next/link';

const Content: React.FC = () => {
  return (
    <>
      <div>
        <Heading title="岩倉祭について" />
        <Text>
          地学部は岩倉祭に展示を出します！
          <br />
          {/* 詳細は以下をご確認ください。 */}
          準備中...日付は以下をご確認ください
        </Text>

        <div className="flex justify-center mt-4">
          <Link
            href="/iwakura/reserve"
            className="justify-center px-6 py-2 transition rounded-xl border-bdinfo text-txinfo bg-bginfo"
          >
            予約はこちら
          </Link>
        </div>

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
    </>
  );
};

export default Content;
