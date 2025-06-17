import Text from '@/components/Text';
import Alert from '@/components/Alert';
import Space from '@/components/Space';

const Content: React.FC = () => {
  return (
    <div>
      <Text size="lg">赤道儀の電源を落とす</Text>
      <Text>下側のPOWERスイッチを下げます。</Text>
      <Space />

      <Text size="lg">レンズに蓋をする</Text>
      <Text>レンズの蓋を閉じます。閉める際もとても固いので、工具で叩くなどして閉めましょう。</Text>
      <Space />

      <Text size="lg">望遠鏡を最初の形に戻す</Text>
      <Text>初めの向きに戻して、ハンドルを時計回りに回してロックしてください。</Text>
      <Alert type="caution">
        正確に曲の方角に向けてください。適当な戻し方をすると、それ以降望遠鏡のバランスが崩れます。
      </Alert>
      <Space />

      <Text size="lg">ドームを閉める</Text>
      <Text>ハンドルを時計回りに回してドームを閉め、鍵を閉めてロックします</Text>
      <Space />

      <Text size="lg">ブレーカーを落とす</Text>
      <Text>ブレーカーをOFFにして、ふたを閉めます。</Text>
      <Space />

      <Text size="lg">照明を落とす</Text>
      <Text>ドームの照明と階段下の照明をどちらも落とします。</Text>
    </div>
  );
};

export default Content;
