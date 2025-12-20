import { FC } from "react";
import PortfolioHeroTitle from "../../atoms/portfolio/PortfolioHeroTitle";
import PortfolioHeroSubTitle from "../../atoms/portfolio/PortfolioHeroSubTitle";
import PortfolioHeroButton from "../../atoms/buttons/PortfolioHeroButton";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  cta: { text: string; href: string };
}

const HeroSection: FC<HeroSectionProps> = ({ title, subtitle, cta }) => (
  <>
    <PortfolioHeroTitle title={title} />
    <PortfolioHeroSubTitle subtitle={subtitle} />
    <PortfolioHeroButton cta={cta} />
  </>
);

export default HeroSection;
