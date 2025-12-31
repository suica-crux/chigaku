import Alert from '@/components/Alert';
import Heading from '@/components/Heading';
import type { Metadata } from 'next';
import Text from '@/components/Text';

export const metadata: Metadata = {
  title: '注意事項 - 同志社高校地学部',
};

export default function CuationPage() {
  return (
    <div>
      <Heading title="注意事項" />
      <Text size="lg">活動前の注意事項</Text>
      <Alert type="caution">
        夜天の保護者案内/参加申込書は必ず部活前日までに提出してください。
        <br />
        活動当日の提出や、提出なしでの参加は制度上認められないためご注意ください。
        <br />
        なお、提出の際は直接顧問の先生または職員室の先生に手渡ししてください。
      </Alert>
      <Text size="lg">活動中の注意事項</Text>
      <Alert type="caution">
        活動中は万象館から外に出ることはできません。飲み物や食べ物は活動が始まるまでに各自で用意しておいてください。
        <br />
        食べ物等のごみはごみ箱に捨てずに持ち帰ってください。
      </Alert>
      <Alert type="caution">屋上にある銀色の筒を蹴ったり、触れなたりしないように気を付けてください。</Alert>
    </div>
  );
}
