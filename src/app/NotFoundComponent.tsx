'use client';

import React from 'react';
import Link from 'next/link';
import Heading from '@/components/Heading';
import Text from '@/components/Text';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFoundComponent() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => Math.max(prev - 1, 0));
    }, 1000);

    const timeout = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        {/* <h1 className="text-6xl font-bold text-red-400">Error: 404</h1> */}
        <Heading
          warn={true}
          title="404"
          subtitle="指定されたページは広大な宇宙のどこを探してもありませんでした。URLを確認してください。"
        />
        <p className="mt-4 text-base text-gray-700">
          URLの送信者または
          <Link href="" className="text-blue-500 hover:text-blue-700">
            管理者に問い合わせて
          </Link>
          ください。
        </p>
        <Text text={`${countdown} 秒後にトップーページに移動します`} />
        <Link
          href="/"
          className="inline-block mt-6 text-blue-500 hover:text-blue-700"
        >
          トップページに戻る
        </Link>
      </div>
    </div>
  );
}
