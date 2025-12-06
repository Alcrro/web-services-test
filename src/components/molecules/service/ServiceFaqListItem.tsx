import { ServiceFaqItem } from "@/shared/data/consts/servicePage/servicePageContent";
import Description from "@/shared/ui/Description";
import { FC } from "react";

interface IServiceFaqItemProps {
  item: ServiceFaqItem;
}
const ServiceFaqListItem: FC<IServiceFaqItemProps> = ({ item }) => {
  return (
    <details className="faq-item">
      <summary style={{ color: "var(--color-text)" }}>{item.question}</summary>
      <Description as="p" style={{ color: "var(--color-text-secondary)" }}>
        {item.answer}
      </Description>
    </details>
  );
};

export default ServiceFaqListItem;
