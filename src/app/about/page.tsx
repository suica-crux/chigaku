import Heading from '@/components/Heading';
import Text from '@/components/Text';
import Space from '@/components/Space';
import Picture from '@/components/Picture';

export default function AboutPage() {
  return (
    <div>
      <Heading title="地学部について" />
      <Text>
        同志社高校地学部は、コロナなどの影響でなくなっていた部活を2021年にもう一度立ち上げ、以降続いている部活です。
        <br />
        現在、70人近くの生徒が所属している地学部ですが、現時点では月に1度の夜間天体観測(通称:
        夜天)を行っています。
        <br />
        夜天では、万象館にある天体望遠鏡を使って星を観測し、屋上で夜空を観察します。
      </Text>
      <Text>
        夏休みには合宿も行います。去年度(2024年)には兵庫にある西はりま天文台に行き、施設を見学、観察しました。
      </Text>
      <Picture pubId="IMG_2169_ngkfwh" caption="西はりま天文台見学の様子" />
      <Picture pubId="IMG_2185_j1o8lj" caption="生野銀山見学の様子" />
      <Space />
      <Text size="lg" className="bold">星を見たい君たちへ。一緒に地学部で活動しませんか。</Text>
      <Space />
      <Text size="sm">企画課より: 今後平日の活動も増やす予定です。随時更新</Text>
      {/* <Photo src="" /> */}

      {/* <Text size="lg">企画課 人員募集について</Text>
      <Text>詳細</Text> */}
    </div>
  );
}
