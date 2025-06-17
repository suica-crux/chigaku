'use client';

type TextProperty = {
  children?: React.ReactNode;
  size?: 'normal' | 'sm' | 'xl' | 'lg';
  colour?: 'gray' | 'blue' | 'red' | 'fade' | 'base';
  className?: string;
};

export default function Text({
  children,
  size = 'normal',
  colour = 'base',
  className = '',
}: TextProperty) {
  // 文字サイズ
  const textSize =
    size === 'sm'
      ? 'text-sm'
      : size === 'xl'
        ? 'text-2xl'
        : size === 'lg'
          ? 'text-xl'
          : 'text-base';
  // 文字色
  const textColour =
    colour === 'gray'
      ? 'text-gray-700'
      : colour === 'blue'
        ? 'text-blue-500'
        : colour === 'red'
          ? 'text-red-500'
          : colour === 'fade'
            ? 'text-fgfade'
            : colour === 'base'
              ? 'text-foreground'
              : 'text-foreground';
  return <p className={`${className} ${textSize} ${textColour}`}>{children}</p>;
}
