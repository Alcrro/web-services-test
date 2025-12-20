import style from "@/components/styles/servicesCards.module.scss";
import ServiceCard from "./ServiceCard";
import ServicesList from "./ServicesList";
import { IService } from "@/modules/services/domain/types/service.types";

export default function ServicesCards({ services }: { services: IService[] }) {
  return (
    <div className={`${style.service_card_container}`}>
      {services.map((service) => {
        return (
          <ServiceCard service={service} href={true} key={service.id}>
            <ServicesList features={service.serviceFeatures} />
          </ServiceCard>
        );
      })}
    </div>
  );
}
