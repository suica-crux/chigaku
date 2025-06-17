import { z } from 'zod';

export const ContactSchema = z.object({
  name: z.string().min(1, '名前は必須です').max(64, '名前は64文字以内で入力してください'),
  email: z
    .string()
    .email('有効なメールアドレスを入力してください')
    .max(128, 'メールアドレスは128文字以内で入力してください'),
  message: z
    .string()
    .min(1, 'メッセージは必須です')
    .max(1024, 'メッセージは1024文字以内で入力してください'),
});

export type ContactFormData = z.infer<typeof ContactSchema>;
