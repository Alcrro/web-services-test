import Title from "@/shared/ui/Title";

const PortfolioHeroTitle = ({ title }: { title: string }) => {
  return (
    <Title
      as="h1"
      className="text-5xl font-extrabold"
      style={{ color: "var(--color-text)" }}
    >
      {title}
    </Title>
  );
};

export default PortfolioHeroTitle;
