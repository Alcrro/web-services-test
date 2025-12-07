import Image, { ImageProps } from "next/image";
import { ReactNode } from "react";

interface DefaultIconProps {
  src?: string;
  icon?: string | ReactNode;
  alt: string;
  className?: string; // ✅ adăugat
  imageProps?: ImageProps; // optional, dacă vrei să trimiți props suplimentare la Image
}

const DefaultIcon = ({
  src,
  icon,
  alt,
  className,
  ...imageProps
}: DefaultIconProps) => {
  if (src || typeof icon === "string") {
    return (
      <Image
        src={src || (icon as string)}
        alt={alt}
        width={1000}
        height={1000}
        className={className}
        priority
        {...imageProps}
      />
    );
  }

  return <span className={className}>{icon}</span>;
};

export default DefaultIcon;
