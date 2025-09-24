import './globals.css';
import type { Metadata } from 'next';
import { M_PLUS_Rounded_1c } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Toaster } from 'react-hot-toast';
import OfflineAlert from '@/components/OfflineAlert';

const mPlusRounded = M_PLUS_Rounded_1c({
  weight: ['400', '700'],
  variable: '--font-mplus-rounded',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: '同志社高校地学部',
  description: '地学部ホームページ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta name="description" content="地学部ホームページ" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icons/icon-192.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        lang="ja"
        className={`${mPlusRounded.className} antialiased transition-colors duration-300`}
      >
        <Header />
        <div
          className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center
                min-h-screen p-8 pb-20 pt-20 gap-16 sm:p-20"
        >
          {/* row-1 : パンくず＋オフラインアラート  */}
          <div className="flex flex-col items-center w-full gap-2">
            {/* ↓ 左寄せしたいものは “self-start” で左に寄せる */}
            <div className="self-start">
              <Breadcrumbs />
            </div>

            {/* ↓ アラートは幅100%でテキスト中央揃え  */}
            <OfflineAlert />
          </div>

          {/* row-2 : メイン */}
          <main className="flex flex-col items-center row-start-2 gap-8 sm:items-start">
            {children}
            <Toaster position="bottom-right" />
          </main>

          {/* row-3 : 下部アイテム */}
        </div>

        <Footer />
      </body>
    </html>
  );
}
