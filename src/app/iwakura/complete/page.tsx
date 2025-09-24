import Text from '@/components/Text';
import Link from 'next/link';

export default function CompletePage() {
  return (
    <div>
      <Text size="lg">予約完了</Text>
      <Text>ご予約ありがとうございました</Text>

      <div className="flex justify-center mt-2">
        <Link
          href="/iwakura/planetarium"
          className="justify-center px-6 py-2 transition rounded-xl border-bdinfo text-txinfo bg-bginfo underline"
        >
          戻る
        </Link>
      </div>
    </div>
  );
}
