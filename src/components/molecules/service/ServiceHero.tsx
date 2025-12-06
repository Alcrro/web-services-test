import React from "react";
import { ServiceHeroSection } from "@/shared/data/consts/servicePage/servicePageContent";

import ServiceHeroTitle from "../../atoms/service/ServiceHeroTitle";
import ServiceHeroSubTitle from "../../atoms/service/ServiceHeroSubTitle";
import ServiceCtaHeroBtn from "../../atoms/buttons/ServiceCtaHeroBtn";

const ServiceHero = ({ hero }: { hero: ServiceHeroSection }) => {
  return (
    <>
      <ServiceHeroTitle title={hero.title} />
      <ServiceHeroSubTitle subtitle={hero.subtitle} />
      <ServiceCtaHeroBtn hero={hero.cta} />
    </>
  );
};

export default ServiceHero;
