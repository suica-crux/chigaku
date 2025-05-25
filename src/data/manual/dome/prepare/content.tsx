import Text from '@/components/Text';
import Alert from '@/components/Alert';
import Space from '@/components/Space';

const Content: React.FC = () => {
  return (
    <>
      <Alert type="warn">必ず顧問の先生と一緒に使ってください</Alert>
      <Text size="xl">スリッパを履く</Text>
      <Text>万象館の3階にあるスリッパ置き場で、用意されているスリッパに履き替えます。</Text>
      {/* スリッパ置き場の画像 */}
      <Space />
    
      <Text size="xl">照明をつける</Text>
      <Text>ドームに入ってすぐの左側にあるスイッチで照明をつけます。<br />上がドームの赤い照明、下が階段の蛍光灯</Text>
      {/* 照明電源の画像 */}
      <Space />

      <Text size='xl'>ブレーカーを上げる</Text>
      <Text>ブレーカーの扉を開け、中のスイッチを上げます。</Text>
      {/* ブレーカーの、ふたを開ける前と開けた後の写真 */}
      <Space />
    </>
  );
};

export default Content;
