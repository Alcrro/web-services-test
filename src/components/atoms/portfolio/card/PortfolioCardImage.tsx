import DefaultIcon from "@/shared/ui/icons/defaultIcon";

const PortfolioCardImage = ({ image, alt }: { image: string; alt: string }) => {
  return (
    <div
      className="overflow-hidden rounded-t-lg"
      style={{ aspectRatio: "4/3" }}
    >
      <DefaultIcon
        src={image}
        alt={alt}
        className="group-hover:scale-105 transition-transform duration-300 w-full h-full object-cover"
      />
    </div>
  );
};

export default PortfolioCardImage;
