import { ServiceFaqSection } from "@/shared/data/consts/servicePage/servicePageContent";
import Title from "@/shared/ui/Title";
import React from "react";
import ServiceFaqListItem from "./ServiceFaqListItem";

const ServiceFaq = ({ faq }: { faq: ServiceFaqSection }) => {
  return (
    <>
      <Title
        as={"h2"}
        className="text-3xl font-bold text-center mb-8"
        style={{ color: "var(--color-text)" }}
      >
        {faq.title}
      </Title>
      <div className="space-y-4 max-w-3xl mx-auto">
        {faq.items.map((item, i) => (
          <ServiceFaqListItem key={i} item={item} />
        ))}
      </div>
    </>
  );
};

export default ServiceFaq;
