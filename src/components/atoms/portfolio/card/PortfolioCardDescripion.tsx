import Description from "@/shared/ui/Description";

const PortfolioCardDescription = ({ description }: { description: string }) => {
  return (
    <Description
      as="p"
      className="text-gray-600 dark:text-gray-300 mb-4 max-h-16 h-full"
      style={{ color: "var(--color-text-secondary)" }}
    >
      {description}
    </Description>
  );
};

export default PortfolioCardDescription;
