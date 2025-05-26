import Text from '@/components/Text';
import Alert from '@/components/Alert';
import Space from '@/components/Space';

const Content: React.FC = () => {
  return (
    <>
      <Alert type="caution">
        必ず顧問の先生と一緒に使ってください。
        <br />
        先生を呼んだらいつでも快く対応してくださいます。
      </Alert>
      <Text size="xl">スリッパを履く</Text>
      <Text>
        万象館の3階にあるスリッパ置き場で、用意されているスリッパに履き替えます。
      </Text>
      {/* スリッパ置き場の画像 */}
      <Space />

      <Text size="xl">照明をつける</Text>
      <Text>
        ドームに入ってすぐの左側にあるスイッチで照明をつけます。上がドームの赤い照明、下が階段の蛍光灯です。
        <br />
        ドームの照明のスイッチは展望室にもあります。
      </Text>
      {/* 照明電源の画像 */}
      <Space />

      <Text size="xl">ブレーカーを上げる</Text>
      <Text>ブレーカーの扉を開け、中のスイッチを上げます。</Text>
      {/* ブレーカーの、ふたを開ける前と開けた後の写真 */}
      <Space />

      <Text size="xl">ドームを開ける</Text>
      <Text>鍵を開けて、ハンドルを反時計回りに回します。</Text>
      {/* ドームを開けるとこの写真 */}
      <Space />

      <Text size="xl">ドームを動かす</Text>
      <Text>橙色のリモコンでドームを操作します。</Text>
      <Alert type="info">
        ボタンを押し続けるとモーターが焼き切れるかもしれないという言い伝えがあるので、5秒に1回ほど手を離しましょう。
      </Alert>
      {/* リモコンの写真 */}
      <Space />

      <Text size="xl">望遠鏡のロックを外す</Text>
      <Text>望遠鏡の黒いハンドルを反時計回りに回します。</Text>
      {/* 以下略 */}
      <Alert type="caution">
        錘を持って望遠鏡を動かす際、その錘自体を回さないように注意してください。
        <br />
        <span className="text-sm">
          業者による再調整が必要になるらしいです。
        </span>
      </Alert>
      <Space />

      <Text size='xl'>蓋を開ける</Text>
      <Text>レンズの蓋を開けます。とても固いので、工具で叩くなどして開けましょう。</Text>
      <Alert type='warn'><span className='text-xl'>絶対に</span>太陽に向けないこと</Alert>
      <Space />

      <Text size='xl'>赤道儀の電源を入れる</Text>
      <Text>地球の時点に伴って動く星や太陽などを観測する際は、赤道儀の電源を入れます。<br />上側のスイッチを、お昼はSUN、夜はSTARに入れて、POWERを上げます。</Text>
      <Space />

      <Text size='xl'>照明を落とす</Text>
      <Text>照明は観測の邪魔なので落とします。展望室のスイッチが便利です。</Text>
    </>
  );
};

export default Content;
