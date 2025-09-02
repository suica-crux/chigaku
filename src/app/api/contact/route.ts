import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { db } from '@/lib/firebaseAdmin';
import { ContactSchema } from '@/lib/schemas';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = ContactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: '入力内容に誤りがあります。' }, { status: 400 });
    }

    const { name, email, message } = result.data;

    await db.collection('contacts').add({ name, email, message, timestamp: new Date() });

    if (!process.env.RESEND_FROM || (!process.env.RESEND_TO_ONE && !process.env.RESEND_TO_TWO)) {
      throw new Error('メール設定が不完全です。');
    }

    // メールを送信
    await resend.emails.send({
      from: process.env.RESEND_FROM,
      to: [process.env.RESEND_TO_ONE, process.env.RESEND_TO_TWO].filter((v): v is string =>
        Boolean(v)
      ),
      subject: `新しいお問い合わせ from ${name}`,
      text: `新しいお問い合わせ
      名前: ${name}
      メール: ${email}
      メッセージ: ${message}`,
    });

    await resend.emails.send({
      from: process.env.RESEND_FROM,
      to: email!,
      subject: `お問い合わせのご確認`,
      text: `
        問い合わせを受け付けました

        
        【お名前】
        ${name}
        
        【メールアドレス】
        ${email}

        【メッセージ】
        ${message}
        
        ご連絡ありがとうございます。
        返信にはお時間をいただく場合がありますので、ご了承ください。
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    if (err instanceof Error) console.error('APIエラー:', err);
    else console.error('APIエラー: 未知のエラー ', err);

    return NextResponse.json({ error: '送信失敗' }, { status: 500 });
  }
}
