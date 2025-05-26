import Text from '@/components/Text';
import Alert from '@/components/Alert';
import Space from '@/components/Space';

const Content: React.FC = () => {
  return (
    <div>
      <Space size="lg" />
      <Text>
        比較的低い場所にある星や、比叡山などで練習するときははしごを使って観測すると便利です
        <span className="text-sm">(というかそうしないと観測できないです)</span>
        。
      </Text>
      <Text>
        ペダルが下がっていたらその車輪はロックされていて動きません。
        <br />
        反対に、跳ね上がっているときはロックがかかっておらず、車輪は動きます。
      </Text>
      <Alert type="caution">
        人が乗る前には、必ず車輪がロックされていることを確認してください。
      </Alert>

      <Space />
      <Text>
        UPペダルを踏むとロックが解除され、逆にDOWNペダルを踏むとロックがかかります。
      </Text>
      <Alert type="caution">
        はしごを動かすときは、望遠鏡のそばの出っ張りに気を付けてください。
        <br />
        はしごが乗り上げてしまうと、コードが断線する可能性があります。
      </Alert>
    </div>
  );
};

export default Content;
