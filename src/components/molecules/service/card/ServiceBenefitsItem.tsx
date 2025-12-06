import { ServiceBenefitItem } from "@/shared/data/consts/servicePage/servicePageContent";
import Description from "@/shared/ui/Description";
import Title from "@/shared/ui/Title";
import React, { FC } from "react";

interface ISerBenefProp {
  item: ServiceBenefitItem;
}
const ServiceBenefitsItem: FC<ISerBenefProp> = ({ item }) => {
  return (
    <div key={item.title} className="benefit-card">
      <Title
        as="h3"
        className="text-xl font-semibold mb-2"
        style={{ color: "var(--color-text)" }}
      >
        {item.title}
      </Title>
      <Description style={{ color: "var(--color-text-secondary)" }}>
        {item.description}
      </Description>
    </div>
  );
};

export default ServiceBenefitsItem;
