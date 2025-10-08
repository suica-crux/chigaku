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
          {/* 地学部は岩倉祭に展示を出します！ */}
          地学部は2025年度岩倉祭の展示を無事に行えました！
          <br />
          {/* 詳細は以下をご確認ください。 */}
          関わってくださった全ての方に感謝します。
        </Text>

        {/* <hr className="mt-4" />

        <Section title="天体ドーム見学">
          <Text>
            普段は、地学部関係者を除いて先生ですら入れない天体ドームに、特別に入ることができます！
            <br />
            ぜひこの機会に、直径30cmの、大きな天体望遠鏡を触ってみてください。
            <br />
            場所は、万象館3階です。
            <br />
            実施時間は、
            <br />
            27日（土）は14時15分〜15時15分
            <br />
            28日（日）は13時45分〜15時15分 です。
            <br />
            なお、天体ドーム見学に予約はありません。先着順でご案内します。
          </Text>
        </Section>

        <Section title="プラネタリウム">
          <Text>
            地学部で制作したプラネタリウムを上映します！
            <br />
            待合室である万象館2階、B202教室にお越しください。
            <br />
            昨年とは内容が異なっています。昨年いらっしゃった方もぜひご覧ください。
            <br />
            今年から、各上映9席のうち、3席ずつ事前予約が可能となりました。
            <br />
            予約、上映時間などの詳細は以下の詳細画面をご確認ください。
          </Text>
          <div className="flex justify-center mt-2">
            <Link
              href="/iwakura/planetarium"
              className="justify-center px-6 py-2 transition rounded-xl border-bdinfo text-txinfo bg-bginfo underline"
            >
              プラネタリウム上映について
            </Link>
          </div>
        </Section>

        <Section title="その他の展示">
          <Text>そのほかにも、万象館2階B202教室で、写真や、星座模型などを展示しています。</Text>
        </Section>

        <Text size="lg">展示日程</Text>
        <CalendarLegend iwakura />
        <Calendar
          year={2025}
          month={9}
          dayInfo={{
            27: { room: 'iwakura' },
            28: { room: 'iwakura' },
          }}
        /> */}
      </div>
    </>
  );
};

export default Content;
