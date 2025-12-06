import Link from "next/link";
import React, { ReactNode } from "react";
import style from "@/components/styles/serviceCard.module.scss";
import ServicesPrice from "../../../atoms/service/ServicesPrice";
import ServiceChoseButton from "../../../atoms/buttons/ServiceChoseButton";
import { priceDisplay } from "@/shared/utils/formatServicesPrice";
import { IService } from "@/modules/services/domain/types/service.types";
import ServiceCardHeader from "../../Cards/services/ServiceCardHeader";
import Boundary from "@/components/internalDev/Boundary";

type ServiceCardProps = {
  service: IService;
  children: ReactNode;
  href?: boolean; // optional, dacă nu există nu se face Link
};

const ServiceCard = ({ service, children, href }: ServiceCardProps) => {
  const CardContent = (
    <div className="flex flex-col h-full  max-[320px]:p-4">
      <div className="head text-center mb-4">
        <ServiceCardHeader
          description={service.description}
          name={service.name}
        />
      </div>

      <div className="flex flex-col gap-2 justify-between h-full">
        {children}

        <div className="flex flex-col gap-1 text-sm text-gray-500 my-4 mt-auto"></div>
      </div>
    </div>
  );

  return (
    <article
      className={`${
        style.service_card
      } flex flex-col justify-between border rounded-xl shadow-lg transition duration-300 h-[640px] p-2 ${
        service.isHighlight
          ? "border-blue-600 shadow-2xl scale-105 "
          : "hover:shadow-xl"
      }`}
    >
      {href ? (
        <Link
          href={`/services/${service.slug}`}
          className="flex flex-col justify-between h-full p-4"
        >
          {CardContent}
        </Link>
      ) : (
        CardContent
      )}

      <div className="footer p-4 pt-0">
        <div className="flex justify-between items-center">
          <ServicesPrice
            price={priceDisplay(service.initialPrice, service.uniqueId)}
          />
          <Boundary hydration="client">
            <ServiceChoseButton slug={service.slug} />
          </Boundary>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
