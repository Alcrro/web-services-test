import Description from "@/shared/ui/Description";
import React from "react";

const ServiceHeroSubTitle = ({ subtitle }: { subtitle: string }) => {
  return (
    <Description
      as="p"
      className="text-lg"
      style={{ color: "var(--color-text-secondary)" }}
    >
      {subtitle}
    </Description>
  );
};

export default ServiceHeroSubTitle;
