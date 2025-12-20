import Description from "@/shared/ui/Description";

const PortfolioCardDescription = ({ description }: { description: string }) => {
  return (
    <Description
      as="p"
      className=" dark:text-gray-300 mb-4 max-h-16 h-full text-(--color-text-secondary) overflow-hidden"
    >
      {description}
    </Description>
  );
};

export default PortfolioCardDescription;
