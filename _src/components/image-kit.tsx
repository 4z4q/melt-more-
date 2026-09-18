import { Image } from "@imagekit/next";

export default function ImageKit({
  src,
  alt,
  priority,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      // loading="lazy"
      fill
      priority={priority}
      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
      className="object-cover"
      transformation={[{ width: 400, quality: 70, format: "webp" }]}
    />
  );
}
