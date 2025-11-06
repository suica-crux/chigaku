'use client';

import { useState } from 'react';
import { ChevronDown, ChevronRight, FileCode, FolderOpen, Code2, Layers } from 'lucide-react';

export default function AppRouterExplanation() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState({
    structure: true,
    metadata: false,
    component: false,
    routing: false,
    dynamicRouting: false,
    manualStructure: false,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const codeExamples = {
    pagetsx: `// src/app/page.tsx
import type { Metadata } from 'next';
import Heading from '@/components/Heading';
import Text from '@/components/Text';

export const metadata: Metadata = {
  title: 'トップページ - 同志社高校地学部',
};

export default function Home() {
  return (
    <div>
      <Heading title="地学部へようこそ" />
      <Text>地学部では、月に約1回の夜間天体観測を行っています。</Text>
      <Text>スマホの方は右上のメニュー(三本線)から各ページを開いてください</Text>
    </div>
  );
}`,
    layout: `// src/app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}`,
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-3 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Next.js App Router ホームページ解説
          </h1>
          <p className="text-gray-300">
            chigakuプロジェクトの
            <code className="bg-purple-800/50 px-2 py-1 rounded">app/page.tsx</code>を理解しよう
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {[
            { id: 'overview', label: '概要', icon: Layers },
            { id: 'structure', label: 'ファイル構造', icon: FolderOpen },
            { id: 'code', label: 'コード解説', icon: Code2 },
            { id: 'tips', label: '実装のヒント', icon: FileCode },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activeTab === id
                  ? 'bg-purple-600 shadow-lg scale-105'
                  : 'bg-slate-800 hover:bg-slate-700'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 shadow-2xl border border-purple-500/20">
          {activeTab === 'overview' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-purple-300 mb-4">App Routerとは?</h2>
              <div className="bg-slate-900/50 p-4 rounded-lg border border-purple-500/30">
                <p className="text-gray-300 leading-relaxed">
                  Next.js 13以降で導入された新しいルーティングシステムです。
                  <code className="bg-purple-800/50 px-2 py-1 rounded mx-1">app</code>
                  ディレクトリ内のファイル構造が、そのままURLの構造になります。
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-linear-to-br from-blue-900/30 to-blue-800/20 p-4 rounded-lg border border-blue-500/30">
                  <h3 className="text-xl font-semibold text-blue-300 mb-2">🎯 主な特徴</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• サーバーコンポーネントがデフォルト</li>
                    <li>• ファイルベースのルーティング</li>
                    <li>• レイアウトの共有が簡単</li>
                    <li>• メタデータの管理が容易</li>
                  </ul>
                </div>

                <div className="bg-linear-to-br from-purple-900/30 to-purple-800/20 p-4 rounded-lg border border-purple-500/30">
                  <h3 className="text-xl font-semibold text-purple-300 mb-2">📁 page.tsxの役割</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• ルートのメインコンテンツを定義</li>
                    <li>• SEO用のメタデータをエクスポート</li>
                    <li>• デフォルトでサーバー側でレンダリング</li>
                    <li>• layout.tsxで囲まれる</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4 mt-4">
                <h3 className="text-yellow-300 font-semibold mb-2">💡 このプロジェクトでは</h3>
                <p className="text-gray-300">
                  <code className="bg-slate-700 px-2 py-1 rounded">src/app/page.tsx</code>が
                  ホームページ(<code className="bg-slate-700 px-2 py-1 rounded">/</code>
                  )として機能し、 カスタムコンポーネント(
                  <code className="bg-slate-700 px-2 py-1 rounded">Heading</code>,
                  <code className="bg-slate-700 px-2 py-1 rounded ml-1">Text</code>
                  )を使ってコンテンツを表示しています。
                </p>
              </div>
            </div>
          )}

          {activeTab === 'structure' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-purple-300 mb-4">ファイル構造</h2>

              <div className="bg-slate-900 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <div className="text-green-400">src/</div>
                <div className="ml-4 text-blue-400">├── app/</div>
                <div className="ml-8 text-yellow-400">
                  │ ├── layout.tsx{' '}
                  <span className="text-gray-500">{'// 全ページ共通レイアウト'}</span>
                </div>
                <div className="ml-8 text-pink-400">
                  │ ├── page.tsx{' '}
                  <span className="text-gray-500">{'// ホームページ (/) ← これ!'}</span>
                </div>
                <div className="ml-8 text-gray-400">│ ├── globals.css</div>
                <div className="ml-8 text-blue-400">│ ├── about/</div>
                <div className="ml-12 text-pink-400">
                  │ │ └── page.tsx <span className="text-gray-500">{'// /about'}</span>
                </div>
                <div className="ml-8 text-blue-400">│ ├── contact/</div>
                <div className="ml-12 text-pink-400">
                  │ │ ├── page.tsx <span className="text-gray-500">{'// /contact'}</span>
                </div>
                <div className="ml-12 text-cyan-400">
                  │ │ └── component.tsx{' '}
                  <span className="text-gray-500">{'// フォーム用クライアントコンポーネント'}</span>
                </div>
                <div className="ml-8 text-blue-400">
                  │ ├── manual/ <span className="text-orange-400">← 動的ルーティングの例!</span>
                </div>
                <div className="ml-12 text-pink-400">
                  │ │ ├── page.tsx{' '}
                  <span className="text-gray-500">{'// /manual (カテゴリ一覧)'}</span>
                </div>
                <div className="ml-12 text-blue-400">│ │ └── [category]/</div>
                <div className="ml-16 text-pink-400">
                  │ │ ├── page.tsx{' '}
                  <span className="text-gray-500">{'// /manual/dome (記事一覧)'}</span>
                </div>
                <div className="ml-16 text-blue-400">│ │ └── [topic]/</div>
                <div className="ml-20 text-pink-400">
                  │ │ └── page.tsx{' '}
                  <span className="text-gray-500">{'// /manual/dome/prepare'}</span>
                </div>
                <div className="ml-8 text-blue-400">│ └── api/</div>
                <div className="ml-12 text-blue-400">│ └── contact/</div>
                <div className="ml-16 text-orange-400">
                  │ └── route.ts <span className="text-gray-500">{'// APIルート'}</span>
                </div>
                <div className="ml-4 text-purple-400">
                  ├── components/{' '}
                  <span className="text-gray-500">{'// 再利用可能なUI(画面のパーツ)'}</span>
                </div>
                <div className="ml-8 text-gray-300">│ ├── Heading.tsx</div>
                <div className="ml-8 text-gray-300">│ ├── Text.tsx</div>
                <div className="ml-8 text-gray-300">│ └── ...</div>
                <div className="ml-4 text-purple-400">
                  ├── data/ <span className="text-gray-500">{'// 動的コンテンツ'}</span>
                </div>
                <div className="ml-8 text-blue-400">│ ├── manual/</div>
                <div className="ml-12 text-blue-400">│ │ └── dome/</div>
                <div className="ml-16 text-blue-400">│ │ ├── prepare/</div>
                <div className="ml-20 text-cyan-400">│ │ │ └── content.tsx</div>
                <div className="ml-16 text-blue-400">│ │ ├── howto/</div>
                <div className="ml-20 text-cyan-400">│ │ │ └── content.tsx</div>
                <div className="ml-16 text-orange-400">
                  │ │ └── order.json <span className="text-gray-500">{'// 記事の順序'}</span>
                </div>
                <div className="ml-8 text-yellow-400">
                  │ └── titles.ts <span className="text-gray-500">{'// URL→タイトル変換'}</span>
                </div>
                <div className="ml-4 text-purple-400">
                  └── lib/ <span className="text-gray-500">{'// ユーティリティ関数'}</span>
                </div>
                <div className="ml-8 text-gray-300">├── titleLoader.ts</div>
                <div className="ml-8 text-gray-300">└── ...</div>
              </div>

              <div className="space-y-3 mt-6">
                {[
                  {
                    key: 'structure' as const,
                    title: 'layout.tsx vs page.tsx',
                    content: (
                      <div className="space-y-2 text-gray-300">
                        <p>
                          <strong className="text-purple-300">layout.tsx:</strong>{' '}
                          複数ページで共通のUI(ヘッダー、フッター等)を定義
                        </p>
                        <p>
                          <strong className="text-pink-300">page.tsx:</strong>{' '}
                          そのルート固有のコンテンツを定義
                        </p>
                        <div className="bg-slate-900/70 p-3 rounded mt-2">
                          <code className="text-sm">
                            最終的なHTML = layout.tsx(children = page.tsx)
                          </code>
                        </div>
                      </div>
                    ),
                  },
                  {
                    key: 'routing' as const,
                    title: 'ルーティングの仕組み',
                    content: (
                      <div className="space-y-2 text-gray-300">
                        <p>フォルダ名 = URLパス</p>
                        <div className="bg-slate-900/70 p-3 rounded space-y-1 text-sm">
                          <div>
                            <code className="text-green-400">app/page.tsx</code> →{' '}
                            <code className="text-blue-400">/</code>
                          </div>
                          <div>
                            <code className="text-green-400">app/about/page.tsx</code> →{' '}
                            <code className="text-blue-400">/about</code>
                          </div>
                          <div>
                            <code className="text-green-400">app/manual/[category]/page.tsx</code> →{' '}
                            <code className="text-blue-400">/manual/dome</code>
                          </div>
                        </div>
                      </div>
                    ),
                  },
                  {
                    key: 'dynamicRouting' as const,
                    title: '動的ルーティング [category]',
                    content: (
                      <div className="space-y-3 text-gray-300">
                        <p>
                          <code className="bg-slate-700 px-2 py-1 rounded">[category]</code>
                          は動的セグメント。どんな値でも受け取れます。
                        </p>
                        <div className="bg-slate-900/70 p-3 rounded space-y-2 text-sm">
                          <p className="text-purple-300 font-semibold">
                            例: /manual/dome にアクセス
                          </p>
                          <div className="space-y-1">
                            <div>
                              1️⃣ <code className="text-orange-400">[category]</code> =
                              &quot;dome&quot;
                            </div>
                            <div>
                              2️⃣ <code className="text-green-400">params.category</code>で値を取得
                            </div>
                            <div>3️⃣ データを読み込んで表示</div>
                          </div>
                        </div>
                        <pre className="bg-slate-950 p-3 rounded text-xs overflow-x-auto">
                          <code>{`// app/manual/[category]/page.tsx
export default async function CategoryPage(
  props: { params: Promise<{ category: string }> }
) {
  const { category } = await props.params;
  // category = "dome"
  return <div>{category}のページ</div>;
}`}</code>
                        </pre>
                      </div>
                    ),
                  },
                  {
                    key: 'manualStructure' as const,
                    title: 'manualの3層構造',
                    content: (
                      <div className="space-y-3 text-gray-300">
                        <p className="text-yellow-300 font-semibold">
                          このプロジェクトの特徴的な構造!
                        </p>

                        <div className="bg-linear-to-r from-purple-900/30 to-blue-900/30 p-4 rounded-lg border border-purple-500/30">
                          <p className="text-lg font-semibold text-purple-300 mb-2">
                            📚 3階層のURL構造
                          </p>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                              <span className="bg-purple-600 px-2 py-1 rounded text-xs">層1</span>
                              <code className="bg-slate-700 px-2 py-1 rounded">/manual</code>
                              <span className="text-gray-400">→ カテゴリ一覧</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="bg-blue-600 px-2 py-1 rounded text-xs">層2</span>
                              <code className="bg-slate-700 px-2 py-1 rounded">/manual/dome</code>
                              <span className="text-gray-400">→ トピック一覧</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="bg-green-600 px-2 py-1 rounded text-xs">層3</span>
                              <code className="bg-slate-700 px-2 py-1 rounded">
                                /manual/dome/prepare
                              </code>
                              <span className="text-gray-400">→ 記事本文</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-slate-900/70 p-4 rounded">
                          <p className="text-blue-300 font-semibold mb-2">🗂️ データの配置</p>
                          <pre className="text-xs overflow-x-auto">
                            <code>{`src/
├── app/manual/
│   ├── page.tsx              # 層1: カテゴリ一覧
│   └── [category]/
│       ├── page.tsx          # 層2: トピック一覧
│       └── [topic]/
│           └── page.tsx      # 層3: 記事表示
│
└── data/manual/
    └── dome/                 # カテゴリ名
        ├── order.json        # 記事の順序
        ├── prepare/
        │   └── content.tsx   # 記事の中身
        └── howto/
            └── content.tsx`}</code>
                          </pre>
                        </div>

                        <div className="bg-green-900/20 border border-green-500/30 rounded p-3">
                          <p className="text-green-300 font-semibold mb-2">🔄 データフロー</p>
                          <ol className="space-y-1 text-sm list-decimal list-inside">
                            <li>
                              URLから<code className="bg-slate-700 px-1 rounded">category</code>と
                              <code className="bg-slate-700 px-1 rounded">topic</code>を取得
                            </li>
                            <li>
                              <code className="bg-slate-700 px-1 rounded">
                                data/manual/{'{category}'}/{'{topic}'}/content.tsx
                              </code>
                              を動的import
                            </li>
                            <li>
                              <code className="bg-slate-700 px-1 rounded">titleLoader</code>
                              でタイトルを変換
                            </li>
                            <li>コンテンツをレンダリング</li>
                          </ol>
                        </div>

                        <div className="bg-orange-900/20 border border-orange-500/30 rounded p-3">
                          <p className="text-orange-300 font-semibold mb-2">💡 order.jsonの役割</p>
                          <pre className="bg-slate-950 p-2 rounded text-xs mt-2">
                            <code>{`// data/manual/dome/order.json
["prepare", "howto", "quit", "ladder"]`}</code>
                          </pre>
                          <p className="text-sm mt-2">
                            記事の表示順序を制御。ファイル名のアルファベット順ではなく、任意の順序で表示できます。
                          </p>
                        </div>
                      </div>
                    ),
                  },
                ].map(({ key, title, content }) => (
                  <div key={key} className="bg-slate-900/30 rounded-lg border border-purple-500/20">
                    <button
                      onClick={() => toggleSection(key)}
                      className="w-full flex items-center justify-between p-4 hover:bg-slate-800/50 transition-colors rounded-lg"
                    >
                      <span className="font-semibold text-purple-300">{title}</span>
                      {expandedSections[key] ? (
                        <ChevronDown className="w-5 h-5" />
                      ) : (
                        <ChevronRight className="w-5 h-5" />
                      )}
                    </button>
                    {expandedSections[key] && <div className="px-4 pb-4">{content}</div>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'code' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-purple-300 mb-4">コード詳細解説</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-300 mb-2">📄 page.tsx の全体像</h3>
                  <pre className="bg-slate-950 p-4 rounded-lg overflow-x-auto text-sm border border-purple-500/30">
                    <code className="text-gray-300">{codeExamples.pagetsx}</code>
                  </pre>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-linear-to-br from-blue-900/20 to-blue-800/10 p-4 rounded-lg border border-blue-500/30">
                    <h4 className="font-semibold text-blue-300 mb-2">1️⃣ Metadata のエクスポート</h4>
                    <pre className="bg-slate-950 p-3 rounded text-xs overflow-x-auto">
                      <code className="text-gray-300">{`export const metadata: Metadata = {
  title: 'トップページ - 同志社高校地学部',
};`}</code>
                    </pre>
                    <p className="text-gray-300 text-sm mt-2">
                      ブラウザのタブに表示されるタイトルを設定。SEOにも重要!
                    </p>
                  </div>

                  <div className="bg-linear-to-br from-purple-900/20 to-purple-800/10 p-4 rounded-lg border border-purple-500/30">
                    <h4 className="font-semibold text-purple-300 mb-2">2️⃣ Homeコンポーネント</h4>
                    <pre className="bg-slate-950 p-3 rounded text-xs overflow-x-auto">
                      <code className="text-gray-300">{`export default function Home() {
  return (
    <div>
      <Heading title="..." />
      <Text>...</Text>
    </div>
  );
}`}</code>
                    </pre>
                    <p className="text-gray-300 text-sm mt-2">
                      ページの実際の内容。カスタムコンポーネントを使用してUIを構築。
                    </p>
                  </div>
                </div>

                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-green-300 mb-2">🔍 カスタムコンポーネント</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-start gap-2">
                      <code className="bg-slate-700 px-2 py-1 rounded shrink-0">Heading</code>
                      <span>
                        タイトルを表示。propsで
                        <code className="bg-slate-700 px-1 rounded">title</code>を受け取る
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <code className="bg-slate-700 px-2 py-1 rounded shrink-0">Text</code>
                      <span>本文テキストを表示。childrenでテキスト内容を受け取る</span>
                    </div>
                    <p className="mt-2 text-yellow-300">
                      💡 これらは
                      <code className="bg-slate-700 px-2 py-1 rounded">src/components/</code>
                      で定義されています
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg border border-purple-500/20">
                  <h4 className="font-semibold text-purple-300 mb-2">🔄 レンダリングの流れ</h4>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center gap-3">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                        1
                      </span>
                      <span>Next.jsがpage.tsxを読み込む</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                        2
                      </span>
                      <span>metadataを使ってHTMLの&lt;head&gt;を生成</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                        3
                      </span>
                      <span>Homeコンポーネントをレンダリング</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                        4
                      </span>
                      <span>layout.tsxのchildrenとして挿入</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                        5
                      </span>
                      <span>最終的なHTMLがブラウザに送信される</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tips' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-purple-300 mb-4">実装のヒント</h2>

              <div className="space-y-3">
                <div className="bg-linear-to-r from-blue-900/30 to-blue-800/20 p-4 rounded-lg border border-blue-500/30">
                  <h3 className="text-xl font-semibold text-blue-300 mb-2">
                    ✨ 新しいページを追加するには
                  </h3>
                  <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                    <li>
                      <code className="bg-slate-700 px-2 py-1 rounded">src/app/</code>
                      内に新しいフォルダを作成
                    </li>
                    <li>
                      その中に<code className="bg-slate-700 px-2 py-1 rounded">page.tsx</code>を作成
                    </li>
                    <li>metadataとコンポーネントをエクスポート</li>
                    <li>完成! 自動的にルーティングされます</li>
                  </ol>
                  <pre className="bg-slate-950 p-3 rounded mt-3 text-xs overflow-x-auto">
                    <code className="text-gray-300">{`// src/app/news/page.tsx
export const metadata = {
  title: 'ニュース - 地学部'
};

export default function NewsPage() {
  return <div>ニュースページ</div>;
}`}</code>
                  </pre>
                </div>

                <div className="bg-linear-to-r from-purple-900/30 to-purple-800/20 p-4 rounded-lg border border-purple-500/30">
                  <h3 className="text-xl font-semibold text-purple-300 mb-2">
                    🎨 動的なコンテンツを追加
                  </h3>
                  <p className="text-gray-300 mb-2">クライアントコンポーネントが必要な場合:</p>
                  <pre className="bg-slate-950 p-3 rounded text-xs overflow-x-auto">
                    <code className="text-gray-300">{`'use client'; // この行を追加

import { useState } from 'react';

export default function InteractivePage() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>
    クリック数: {count}
  </button>;
}`}</code>
                  </pre>
                </div>

                <div className="bg-linear-to-r from-green-900/30 to-green-800/20 p-4 rounded-lg border border-green-500/30">
                  <h3 className="text-xl font-semibold text-green-300 mb-2">🔗 ページ間のリンク</h3>
                  <pre className="bg-slate-950 p-3 rounded text-xs overflow-x-auto">
                    <code className="text-gray-300">{`import Link from 'next/link';

<Link href="/about">
  地学部について
</Link>`}</code>
                  </pre>
                  <p className="text-gray-300 text-sm mt-2">
                    Next.jsの<code className="bg-slate-700 px-2 py-1 rounded">Link</code>
                    コンポーネントを使うと、ページ遷移が高速化されます!
                  </p>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                  <h3 className="text-yellow-300 font-semibold mb-2">⚠️ よくある間違い</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>
                      ❌ <code className="bg-slate-700 px-2 py-1 rounded">page.tsx</code>
                      を置き忘れる → ページが表示されない
                    </li>
                    <li>
                      ❌ サーバーコンポーネントで
                      <code className="bg-slate-700 px-2 py-1 rounded">useState</code>を使う →
                      エラー
                    </li>
                    <li>
                      ❌ <code className="bg-slate-700 px-2 py-1 rounded">default export</code>
                      を忘れる → ビルドエラー
                    </li>
                    <li>
                      ✅{' '}
                      <code className="bg-slate-700 px-2 py-1 rounded">&apos;use client&apos;</code>
                      は本当に必要な時だけ使いましょう
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>Next.js 15 + React 19 + App Router を使った実装例</p>
        </div>
      </div>
    </div>
  );
}
