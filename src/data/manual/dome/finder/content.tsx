import Text from '@/components/Text';
import Space from '@/components/Space';

const Content: React.FC = () => {
  return (
    <div>
      <Text size="xl">ファインダーについて</Text>
      <Text>
        ファインダーは、望遠鏡の上側についている小さい覗き口の名前です。
        <br />
        望遠鏡本体より倍率が低く、その分広い範囲を探せます。
        <br />
        本体を覗く前に大まかな位置調整のために使われます。
      </Text>
      <Space size="lg" />

      <Text size="xl">ファインダーの調整手順</Text>
      <Text size="lg">対象を決める</Text>
      <Text>
        まず、観測したい対象を決めます。近い物の方がより適しています。例えば、比叡山のロープウェイやケーブルカーの駅がおすすめです。
      </Text>
      <Space />

      <Text size="lg">望遠鏡本体で中心を合わせる</Text>
      <Text>
        望遠鏡本体で対象を中心に合わせます。そのあと、望遠鏡のロックを締めておくのがおすすめです。
      </Text>
      <Space />

      <Text size="lg">ファインダーで中心を合わせる</Text>
      <Text>
        ファインダーの十字線の中心に対象を合わせます。ファインダーの調整は、ファインダーの側面にあるねじを回して行います。
      </Text>
      <Space />

      <Text size="lg">確認する</Text>
      <Text>
        本体とファインダーで対象を覗き、ずれていなければ調整完了です。お疲れさまでした。
        <br />
        もしずれていればもう一度調整しましょう。
      </Text>
    </div>
  );
};

export default Content;
