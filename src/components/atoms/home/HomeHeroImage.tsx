import DefaultIcon from "../../../shared/ui/icons/defaultIcon";

const HomeHeroImage = ({
  src,
  className,
}: {
  src: string;
  className?: string;
}) => {
  return (
    <DefaultIcon
      src={src}
      alt="Hero"
      className={`h-full w-full object-cover object-[cover_65%] rounded-2xl opacity-60 lg:opacity-100 transition-opacity duration-700 ease-in-out ${className}`}
      width={2048} // dimensiune reală
      height={1000} // păstrează aspect ratio
      priority // nu lazy load → Lighthouse LCP
      fetchPriority="high" // browser descarcă rapid
    />
  );
};

export default HomeHeroImage;
