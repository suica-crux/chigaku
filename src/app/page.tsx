import type { Metadata } from 'next';
import Heading from '@/components/Heading';
import Text from '@/components/Text';
import Alert from '@/components/Alert';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'トップページ - 同志社高校地学部',
};

export default function Home() {
  return (
    <div>
      <Heading title="地学部へようこそ" />
      <Text>地学部では、月に一度の夜間天体観測を行っています。</Text>
      <Text>スマホの方は右上のメニュー(三本線)から各ページを開いてください</Text>

      <Alert type="info">
        地学部は岩倉祭に模擬店を出店します！
        <br />
        <Link href="/iwakura" className="underline">
          詳細はこちら
        </Link>
      </Alert>
    </div>
  );
}
