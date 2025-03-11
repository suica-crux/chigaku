'use client';

type TextProperty = {
  text: string;
  type?: 'normal' | 'small' | 'semi-large';
  color?: 'black' | 'gray' | 'white';
};

export default function Text({
  text,
  type = 'normal',
  color = 'black',
}: TextProperty) {
  const textType =
    type === 'small'
      ? 'text-sm'
      : type === 'semi-large'
      ? 'text-xl'
      : 'text-base';
  const textColor =
    color === 'gray'
      ? 'text-gray-500'
      : color === 'white'
      ? 'text-white'
      : 'text-black';
  return <p className={`mt-4 ${textType} ${textColor}`}>{text}</p>;
}
