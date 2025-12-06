const PortfolioHeroSubTitle = ({ subtitle }: { subtitle: string }) => {
  return (
    <p className="text-lg" style={{ color: "var(--color-text-secondary)" }}>
      {subtitle}
    </p>
  );
};

export default PortfolioHeroSubTitle;
