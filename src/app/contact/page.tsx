import Link from 'next/link';
import Heading from '@/components/Heading';
import Text from '@/components/Text';
import ContactComp from './component';
import ListItem from '@/components/ListItem';
import { ExternalLink } from 'lucide-react';

export default function ContactPage() {
  return (
    <div>
      <Heading title="お問い合わせ" />
      <Text>地学部へのお問い合わせは、以下の方法を受け付けています。</Text>
      <ul className="list-disc list-inside">
        <ListItem>下のフォームから担当者にメールを投げつける</ListItem>
        <ListItem>
          <Link href="https://instagram.com/dhs_chigakubu" target="_blank">
            Instagram&nbsp;
            <ExternalLink className="w-5 h-5 text-current inline" />
          </Link>
          &nbsp;にDMを送りつける
        </ListItem>
        <ListItem recommended>謎の化石を持って3Dまたは2Cの教室に飛び込む</ListItem>
      </ul>
      <ContactComp />
    </div>
  );
}
