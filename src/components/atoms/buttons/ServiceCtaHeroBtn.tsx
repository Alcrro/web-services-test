import Button from "@/shared/ui/Button";
import React, { FC } from "react";

interface IServiceCtaHeroBtnProps {
  hero: { href: string; text: string };
}
const ServiceCtaHeroBtn: FC<IServiceCtaHeroBtnProps> = ({ hero }) => {
  return (
    <Button
      href={hero.href}
      variant="primary"
      className="cta-button w-fit m-fit mx-auto"
    >
      {hero.text}
    </Button>
  );
};

export default ServiceCtaHeroBtn;
