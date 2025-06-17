'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setResult('送信完了！ありがとうございました');
        setForm({ name: '', email: '', message: '' });
        toast.success('送信完了');
      } else {
        setResult(`エラー: ${data.error}`);
        toast.error('サーバーエラー');
      }
    } catch {
      setResult('送信失敗: サーバーに接続できませんでした。');
      toast.error('送信失敗');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">お問い合わせ</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="お名前"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border border-border px-4 py-2 bg-subbg"
          required
        />
        <input
          type="email"
          placeholder="メールアドレス"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border border-border px-4 py-2 bg-subbg"
          required
        />
        <textarea
          placeholder="メッセージ"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full border border-border px-4 py-2 bg-subbg"
          rows={5}
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-500 text-white px-4 py-2 rounded flex items-center justify-center gap-2"
        >
          {isSubmitting && (
            <div className="w-4 h-4 border-2 border-white border-t-transparent animate-spin rounded-full"></div>
          )}
          {isSubmitting ? '送信中...' : '送信'}
        </button>
      </form>
      <p
        className={`mt-4 text-sm text-fgfade transition-opacity duration-300 ${
          result ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {result}
      </p>
    </div>
  );
}
