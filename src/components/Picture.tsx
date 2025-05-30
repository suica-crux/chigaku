'use client';

import React from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { scale } from '@cloudinary/url-gen/actions/resize';
import { AdvancedImage, responsive, placeholder } from '@cloudinary/react';
import { byRadius } from '@cloudinary/url-gen/actions/roundCorners';

type PictureProps = {
  pubId: string;
  width?: number;
  height?: number;
  caption?: string;
  className?: string;
};

export default function Picture({
  pubId,
  width = 400,
  caption = '',
  className = '',
}: PictureProps) {
  const cld = new Cloudinary({ cloud: { cloudName: 'do81opzly' } });

  // Use this sample image or upload your own via the Media Explorer
  const img = cld
    .image(pubId)
    .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
    .quality('auto')
    .resize(scale().width(width)) // Transform the image: auto-crop to square aspect_ratio
    .roundCorners(byRadius(8));

  return (
    <figure className={`mx-auto my-6 text-center ${className}`}>
      <AdvancedImage
        // style={{ width: '50%', height: 'auto' }}
        cldImg={img}
        className="mx-auto shadow-lg w-full md:w-1/2 h-auto"
        plugins={[placeholder({ mode: 'blur' }), responsive()]}
      />
      {caption && (
        <figcaption className="text-sm text-fgfade mt-2">{caption}</figcaption>
      )}
    </figure>
  );
}
