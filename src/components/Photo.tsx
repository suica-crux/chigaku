type Props = {
  src: string;
  alt?: string;
  caption?: string;
  width?: number;
  height?: number;
  className?: string;
};

export default function Photo({
  src,
  alt,
  caption,
  width = 400,
  height = 300,
  className = '',
}: Props) {
  return (
    <figure className={`mx-auto my-6 text-center ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="mx-auto rounded-lg shadow-lg"
      />
      {caption && (
        <figcaption className="text-sm text-fgfade mt-2">{caption}</figcaption>
      )}
    </figure>
  );
}
