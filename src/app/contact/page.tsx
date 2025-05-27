import Heading from "@/components/Heading";
import Text from "@/components/Text";
// import ContactComp from "./component";

export default function ContactPage() {
  return (
    <div>
      <Heading title="お問い合わせ" />
      <Text>地学部へのお問い合わせは、以下の方法を受け付けています。</Text>
      <ul className="list-disc list-inside">
        <li>メールを送りつける</li>
        <li>InstagramにDMを送りつける</li>
        <li>謎の化石を持って3D教室に飛び込む<span className="text-rose-400">（推奨）</span></li>
      </ul>
      {/* <ContactComp /> */}
    </div>
  )}