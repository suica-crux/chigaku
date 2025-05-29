import Text from '@/components/Text';
import Alert from '@/components/Alert';
import Space from '@/components/Space';
import Link from 'next/link';
import Photo from '@/components/Photo';

const Content: React.FC = () => {
  return (
    <div>
      <Space size="lg" />
      <Text>
        比較的低い場所にある星や、比叡山などで練習するときははしごを使って観測すると便利です
        {/* <span className="text-sm">(というかそうしないと観測できないです)</span> */}
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
        はしご足元のUPペダルを踏むとロックが解除され、逆にDOWNペダルを踏むとロックがかかります。
      </Text>
      <Alert type="caution">
        はしごを動かすときは、望遠鏡のそばの出っ張りに気を付けてください。
        <br />
        はしごが乗り上げると、コードが断線する可能性があります。
        <Photo src="https://res.cloudinary.com/do81opzly/image/upload/v1748525012/IMG_3705_qu4mgf.jpg" />
      </Alert>
      <Space />

      <Text>
        階段がある方角にはしごを動かす際については、
        <Link
          href="/manual/dome/stairs"
          className="text-blue-500 hover:text-color-600 underline"
        >
          こちら
        </Link>
        にも目を通しておいてください。
      </Text>
    </div>
  );
};

export default Content;
