import Image from "next/image";

export default function SiteImage({
  src,
  alt,
  width = 900,
  height = 600,
  className = "",
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`w-full h-auto ${className}`}
      unoptimized
    />
  );
}