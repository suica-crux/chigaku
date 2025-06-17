'use client';

import React from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { scale } from '@cloudinary/url-gen/actions/resize';
import { AdvancedImage, responsive, placeholder } from '@cloudinary/react';
import { byRadius } from '@cloudinary/url-gen/actions/roundCorners';

type PictureProps = {
  pubId: string;
  width?: number;
  caption?: string;
  className?: string;
  variant?: boolean;
};

export default function Picture({
  pubId,
  width = 400,
  caption = '',
  className = '',
  variant = false,
}: PictureProps) {
  const cld = new Cloudinary({ cloud: { cloudName: 'do81opzly' } });

  const img = cld
    .image(pubId)
    .format('auto')
    .quality('auto')
    .resize(scale().width(width))
    .roundCorners(byRadius(8));

  const baseClassName = 'mx-auto shadow-lg';
  const variantClassName =
    variant === true ? 'w-[48px] h-auto md:w-[50px]' : 'w-full md:w-1/2 h-auto';

  const imgClassName = `${baseClassName} ${variantClassName}`;

  return (
    <figure className={`mx-auto my-6 text-center ${className}`}>
      <AdvancedImage
        cldImg={img}
        className={imgClassName}
        plugins={[placeholder({ mode: 'blur' }), responsive()]}
      />
      {caption && <figcaption className="text-sm text-fgfade mt-2">{caption}</figcaption>}
    </figure>
  );
}
