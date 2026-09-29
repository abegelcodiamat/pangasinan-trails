import Image from "next/image";

const BASE_PATH = "/pangasinan-trails";

export default function SiteImage({
  src,
  alt,
  width = 900,
  height = 600,
  className = "",
}) {
  const imageSrc = src.startsWith(BASE_PATH)
    ? src
    : `${BASE_PATH}${src}`;

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={`w-full h-auto ${className}`}
      unoptimized
    />
  );
}