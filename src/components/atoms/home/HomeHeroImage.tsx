import DefaultIcon from "../../../shared/ui/icons/defaultIcon";

const HomeHeroImage = ({
  src,
  className,
}: {
  src: string;
  className: string;
}) => {
  return (
    <DefaultIcon
      src={src}
      alt={"hero"}
      className={`h-full w-full object-cover object-[cover_65%] rounded-2xl opacity-60 lg:opacity-100 transition-opacity duration-700 ease-in-out  ${className}`}
    />
  );
};

export default HomeHeroImage;
