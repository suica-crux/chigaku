import Heading from '@/components/Heading';
import Text from '@/components/Text';
import Calendar from '@/components/Calendar';
import CalendarLegend from '@/components/CalendarLegend';
import Link from 'next/link';
import Section from '@/components/Section';

const Content: React.FC = () => {
  return (
    <>
      <div>
        <Heading title="岩倉祭について" />
        <Text>
          地学部は岩倉祭に展示を出します！
          <br />
          詳細は以下をご確認ください。
          {/* 準備中...日付は以下をご確認ください */}
        </Text>

        <hr className="mt-4" />

        <Section title="天体ドーム見学">
          <Text>
            普段は地学部関係者を除いて先生ですら入れない天体ドームに、特別に入ることができます！
            <br />
            ぜひこの機会に、天体ドームの望遠鏡を触ってみてください。万象館3階です。
            <br />
            なお、天体ドーム見学に予約はありません。
          </Text>
        </Section>

        <Section title="プラネタリウム">
          <Text>
            地学部で制作したプラネタリウムを上映します！場所はB201教室です。
            <br />
            今年から一部の枠が予約制となりましたので、ご注意ください。
            <br />
            なお、予約枠に空きがある場合などは、当日参加の方がその枠に入れます。
            <br />
            予約、上演時間などの詳細は以下をご確認ください。
          </Text>
          <div className="flex justify-center mt-2">
            <Link
              href="/iwakura/planetarium"
              className="justify-center px-6 py-2 transition rounded-xl border-bdinfo text-txinfo bg-bginfo underline"
            >
              予約について
            </Link>
          </div>
        </Section>

        <Section title="その他の展示">
          <Text>そのほかにも、B202教室で、写真や、星座模型などを展示しています。</Text>
        </Section>

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
