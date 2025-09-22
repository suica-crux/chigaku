import Heading from '@/components/Heading';
import Text from '@/components/Text';
import Link from 'next/link';

export const metadata = {
  title: '岩倉祭予約 - 同志社高校地学部',
};

export default function ReservePage() {
  return (
    <div>
      <Heading title="岩倉祭予約" />
      <Text>地学部は、岩倉祭の天体ドーム見学に任意の事前予約を実施します。</Text>

      <div className="p-2 my-4 bg-bglite rounded-lg">
        <Text size="lg" color="yellow">
          注意事項
        </Text>
        <Text>
          一回の上演は約11分間です。
          <br />
          予約は先着順で、定員に達し次第締め切ります。定員に達していない場合でも、それぞれ上映前日に予約は終了いたします。
          <br />
          定員は、予約3人、予約なし6人、計9人です。
        </Text>
        <ul>
          <li>
            ・ご予約は優先的にお席をご用意するためのもので、必須ではありません。当日参加も可能です。
          </li>
          <li>・ご予約の時間の都合が悪くなった場合でも、特に連絡は不要です。</li>
          <li>
            ・ご予約された時間の開始3分前までにお越しにならない場合、お席を他の方にご案内することがあります。
          </li>
          <li>・当日の進行や運営上の都合により、ご案内が前後する場合がございます。</li>
          <li>
            ・複数人でご予約の方は、仕様上お手数ですが、各自の端末にてお一人ずつご予約をお願いいたします。
          </li>
        </ul>
        {/* <Text>
          一回の上演は約11分間です。
          <br />
          ご予約は優先的にお席をご用意するためのもので、必須ではありません。
          <br />
          当日の進行や運営上の都合により、ご案内が前後する場合がございます。
        </Text>
        <Text>
          ご予約の開始時間3分前までにお越しください。
          <br />
          それまでにお見えにならない場合、お席を他の方にご案内することがあります。
        </Text>
        <Text>予約なしでも当日参加は可能ですが、混雑時はお待ちいただく場合がございます。</Text>
        <Text>
          予約は先着順で、定員に達し次第締め切ります。
          <br />
          定員は、予約3人、予約なし6人、計9人です。
          <br />
          複数人でご予約の方は、仕様上お手数ですが、各自の端末にてお一人ずつご予約をお願いいたします。
          <br />
          なお、定員に達していない場合でも、それぞれ上映前日に予約は終了いたします。
          <br />
          当日参加をご利用ください。
        </Text>
        <Text>なお、ご予約の時間のご都合が悪くなった場合でも、特にご連絡は不要です。</Text> */}
      </div>

      <div className="flex justify-center mt-2">
        <Link
          href="https://form.run/@iwakura-planetarium"
          target="_blank"
          className="justify-center px-6 py-2 transition rounded-xl border-bdinfo text-txinfo bg-bginfo hover:underline"
        >
          予約はこちら
        </Link>
      </div>
    </div>
  );
}
