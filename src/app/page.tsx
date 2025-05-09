import type { Metadata } from 'next';
import Heading from '@/components/Heading';
import Text from '@/components/Text';

export const metadata: Metadata = {
  title: 'トップページ - 同志社高校地学部',
};

export default function Home() {
  return (
    <div>
        <Heading title="地学部へようこそ" />
        <Text text="地学部では、月に一度の夜間天体観測を行っています。" />
    </div>
  );
}
