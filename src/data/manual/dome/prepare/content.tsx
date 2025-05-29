import Text from '@/components/Text';
import Alert from '@/components/Alert';
import Space from '@/components/Space';
import Photo from '@/components/Photo';

const Content: React.FC = () => {
  return (
    <div>
      <Alert type="caution">
        生徒のみでは使用不可
        <br />
        必ず顧問の先生と一緒に使ってください。頼めばいつでも対応いただけます。
      </Alert>
      <Text size="lg">スリッパを履く</Text>
      <Text>
        万象館の3階にあるスリッパ置き場で、用意されているスリッパに履き替えます。
      </Text>
      <Photo
        src="https://res.cloudinary.com/do81opzly/image/upload/v1748525015/IMG_3735_gbbeqd.jpg"
        caption="スリッパ置き場"
      />
      <Space />

      <Text size="lg">照明をつける</Text>
      <Text>
        ドームに入ってすぐの左側にあるスイッチで照明をつけます。上がドームの赤い照明、下が階段の蛍光灯です。
        <br />
        ドームの照明のスイッチは展望室にもあります。
      </Text>
      <Photo
        src="https://res.cloudinary.com/do81opzly/image/upload/v1748525058/IMG_3704_byjuxi.jpg"
        caption="照明の電源"
      />
      <Photo
        src="https://res.cloudinary.com/do81opzly/image/upload/v1748525010/IMG_3691_oiuopp.jpg"
        caption="展望室側の照明スイッチ"
      />
      <Space />

      <Text size="lg">ブレーカーを上げる</Text>
      <Text>ボタンを押してブレーカーの扉を開けます</Text>
      <Photo
        src="https://res.cloudinary.com/do81opzly/image/upload/v1748525064/IMG_3690_dgqcxy.jpg"
        caption="ブレーカーの扉を開ける前"
      />
      <Text>中のスイッチを上げます。</Text>
      <Photo
        src="https://res.cloudinary.com/do81opzly/image/upload/v1748525045/IMG_3758_wznf4d.jpg"
        caption="ブレーカーの扉を開けた後、ブレーカーを上げる前"
      />
      <Space />

      <Text size="lg">ドームを開ける</Text>
      <Text>鍵を開けて、ハンドルを反時計回りに回します。</Text>
      <Photo
        src="https://res.cloudinary.com/do81opzly/image/upload/v1748525145/Snapshot_29-05-2025_13_26_ouh4e1.jpg"
        caption="ドームの鍵"
      />
      <Photo
        src="https://res.cloudinary.com/do81opzly/image/upload/v1748525631/Snapshot_29-05-2025_13_23_resized_uncfrm.png"
        caption="このハンドルを回してドームを開けます"
      />
      <Space />

      <Text size="lg">ドームを動かす</Text>
      <Text>橙色のリモコンでドームを操作します。</Text>
      <Alert type="info">
        ボタンを押し続けるとモーターが焼き切れるかもしれないという言い伝えがあるので、5秒に1回ほど手を離しましょう。
      </Alert>
      <Photo
        src="https://res.cloudinary.com/do81opzly/image/upload/v1748524989/IMG_3703_qxiosz.jpg"
        caption="ドームのリモコン"
      />
      <Space />

      <Text size="lg">望遠鏡のロックを外す</Text>
      <Text>望遠鏡の黒いハンドルを反時計回りに回します。</Text>
      <Photo
        src="https://res.cloudinary.com/do81opzly/image/upload/v1748525023/IMG_3721_tdutcf.jpg"
        caption="望遠鏡をロックしているハンドル"
      />
      <Alert type="caution">
        錘を持って望遠鏡を動かす際、その錘自体を回さないように注意してください。
        <br />
        <span className="text-sm">業者による再調整が必要になるそうです。</span>
      </Alert>
      <Space />

      <Text size="xl">蓋を開ける</Text>
      <Text>
        レンズの蓋を開けます。とても固いので、工具で叩くなどして開けましょう。
      </Text>
      <Alert type="warn">
        <span className="text-xl">絶対に</span>太陽に向けないこと
      </Alert>
      <Photo
        src="https://res.cloudinary.com/do81opzly/image/upload/v1748525028/IMG_3724_k1wcgi.jpg"
        caption="望遠鏡の蓋"
      />
      <Space />

      <Text size="xl">赤道儀の電源を入れる</Text>
      <Text>
        地球の時点に伴って動く星や太陽などを観測する際は、赤道儀の電源を入れます。
        <br />
        上側のスイッチを、昼はSUN、夜はSTARに入れて、下側のPOWERスイッチを上げます。
      </Text>
      <Photo
        src="https://res.cloudinary.com/do81opzly/image/upload/v1748525028/IMG_3724_k1wcgi.jpg"
        caption="赤道儀の電源"
      />
      <Space />

      <Text size="xl">照明を落とす</Text>
      <Text>
        照明は観測の邪魔なので落とします。展望室のスイッチが便利です。
      </Text>
      <Photo
        src="https://res.cloudinary.com/do81opzly/image/upload/v1748525010/IMG_3691_oiuopp.jpg"
        caption="展望室側の照明スイッチ"
      />
    </div>
  );
};

export default Content;
