import Heading from '@/components/Heading';
import Text from '@/components/Text';
// import Link from 'next/link';

export const metadata = {
  title: '岩倉祭予約 - 同志社高校地学部',
};

export default function ReservePage() {
  return (
    <div>
      <Heading title="岩倉祭予約" />
      {/* <Text>地学部では、岩倉祭のプラネタリウムに任意の事前予約を実施します。</Text> */}
      <Text>地学部では、2025年度岩倉祭のプラネタリウムに任意の事前予約を実施しました。</Text>

      {/* <div className="p-2 my-4 bg-bglite rounded-lg">
        <Text size="lg" color="yellow">
          注意事項
        </Text>
        <ul className="list-disc pl-5">
          <li>一回の上演は約11分間です。</li>
          <li>
            予約は先着順で、定員に達し次第締め切ります。
            <br />
            定員に達していない場合でも、それぞれ上映前日に締め切ります。
          </li>
          <li>定員は1回9人で、うち事前予約が可能なのは3人です。</li>
          <li>
            ご予約は優先的にお席をご用意するためのもので、必須ではありません。
            <br />
            当日の参加も可能です。
          </li>
          <li>ご予約の時間の都合が悪くなった場合でも、連絡は不要です。</li>
          <li>
            ご予約の上映開始時刻の3分前までにお越しいただけない場合、お席を他の方にご案内することがあります。
          </li>
          <li>
            当日の進行や運営上の都合により、やむを得ずご案内の順番が前後する場合がございます。
          </li>
          <li>
            複数人でご予約の方は、お手数ですが、各自の端末にてお一人ずつご予約をお願いいたします。
          </li>
        </ul>
      </div> */}

      <div className="p-2 my-4 rounded-lg">
        <Text>予約受付は終了しました。ありがとうございました。</Text>
      </div>

      {/* <div className="flex justify-center mt-2">
        <Link
          href="https://form.run/@iwakura-planetarium"
          target="_blank"
          className="justify-center px-6 py-2 transition rounded-xl border-bdinfo text-txinfo bg-bginfo hover:underline"
        >
          予約はこちら
        </Link>
      </div> */}
    </div>
  );
}
