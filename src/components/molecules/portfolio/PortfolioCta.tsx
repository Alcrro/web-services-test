import React, { FC } from "react";
import PortfolioCtaBtn from "@/components/atoms/portfolio/PortfolioCtaBtn";
import PortfolioCtaTitle from "@/components/atoms/portfolio/PortfolioCtaTitle";
interface CTASectionProps {
  title: string;
  buttonText: string;
  buttonHref: string;
}
const PortfolioCta: FC<CTASectionProps> = ({
  title,
  buttonText,
  buttonHref,
}) => {
  return (
    <>
      <PortfolioCtaTitle title={title} />
      <PortfolioCtaBtn href={buttonHref} text={buttonText} />
    </>
  );
};

export default PortfolioCta;
