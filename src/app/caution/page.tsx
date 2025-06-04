import Alert from '@/components/Alert';
import Heading from '@/components/Heading';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '注意事項 - 同志社高校地学部',
};

export default function CuationPage() {
  return (
    <div>
      <Heading title="注意事項" />
      <Alert type="caution">屋上にある銀色の筒に触れないように気を付けてください。</Alert>
    </div>
  );
}
