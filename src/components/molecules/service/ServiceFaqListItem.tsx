import { ServiceFaqItem } from "@/shared/data/consts/servicePage/servicePageContent";
import Description from "@/shared/ui/Description";
import { FC } from "react";

interface IServiceFaqItemProps {
  item: ServiceFaqItem;
}
const ServiceFaqListItem: FC<IServiceFaqItemProps> = ({ item }) => {
  return (
    <details className="faq-item">
      <summary className={"text-(--color-text)"}>{item.question}</summary>
      <Description as="p" className={"text-(--color-text-secondary)"}>
        {item.answer}
      </Description>
    </details>
  );
};

export default ServiceFaqListItem;
