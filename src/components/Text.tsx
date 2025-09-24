'use client';

type TextProperty = {
  children?: React.ReactNode;
  size?: 'normal' | 'sm' | 'xl' | 'lg';
  color?: 'gray' | 'blue' | 'red' | 'fade' | 'base' | string;
  className?: string;
};

export default function Text({
  children,
  size = 'normal',
  color = 'base',
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
  const textColor =
    color === 'gray'
      ? 'text-gray-700'
      : color === 'blue'
        ? 'text-blue-500'
        : color === 'red'
          ? 'text-red-500'
          : color === 'fade'
            ? 'text-fgfade'
            : color === 'base'
              ? 'text-foreground'
              : color === 'yellow'
                ? 'text-yellow-400'
                : 'text-foreground';

  return <p className={`${textSize} ${textColor} ${className}`}>{children}</p>;
}
