import { ServiceBenefitItem } from "@/shared/data/consts/servicePage/servicePageContent";

import ServiceBenefitsTitle from "../../../atoms/service/ServiceBenefitsTitle";
import ServiceBenefitsItem from "./ServiceBenefitsItem";

const ServicesBenefits = ({ benefits }: { benefits: ServiceBenefitItem[] }) => {
  return (
    <>
      <ServiceBenefitsTitle />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefits, index) => (
          <ServiceBenefitsItem item={benefits} key={index} />
        ))}
      </div>
    </>
  );
};

export default ServicesBenefits;
