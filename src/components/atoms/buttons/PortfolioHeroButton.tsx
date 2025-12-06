import React, { FC } from "react";
import Button from "../../../shared/ui/Button";

interface IPortfolioHeroProps {
  cta: {
    href: string;
    text: string;
  };
}
const PortfolioHeroButton: FC<IPortfolioHeroProps> = ({ cta }) => {
  return (
    <Button href={cta.href} className="cta-button">
      {cta.text}
    </Button>
  );
};

export default PortfolioHeroButton;
