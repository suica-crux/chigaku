import Text from '@/components/Text';
// import Link from 'next/link';
import Space from '@/components/Space';
import Picture from '@/components/Picture';

const Content: React.FC = () => {
  return (
    <div>
      <Text size="lg">ファインダーで中心を合わせる</Text>
      <Text>
        ファインダーの十字線の中心に対象を合わせます。
        {/* 詳しくは
        <Link
          href="/manual/dome/finder"
          className="text-blue-500 hover:text-color-600 underline"
        >
          こちら
        </Link>
        を参照してください。 */}
      </Text>
      <Space />

      <Text size="lg">接眼レンズでも中心を合わせる</Text>
      <Text>
        ファインダーで中心を合わせた後、接眼レンズで中心を合わせます。
        <br />
        下の黒いリモコンで微調整もできます。
      </Text>
      <Picture pubId="IMG_3757_vfrzwy" caption="望遠鏡の微調整リモコン" />
      <Space />

      <Text size="lg">ピントを合わせる</Text>
      <Text>
        接眼レンズの上のねじを緩めた後に、ピント調節ねじを回してピントを合わせます。
      </Text>
      <Picture pubId="IMG_3726_nso8bd" caption="ピント調節ねじ" />
    </div>
  );
};

export default Content;
