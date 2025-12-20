import Title from "@/shared/ui/Title";

const PortfolioHeroTitle = ({ title }: { title: string }) => {
  return (
    <Title
      as="h1"
      className="text-5xl font-extrabold text-(--color-text) md:text-6xl lg:text-7xl"
    >
      {title}
    </Title>
  );
};

export default PortfolioHeroTitle;
