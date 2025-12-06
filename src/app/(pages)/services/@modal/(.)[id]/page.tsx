import React from "react";
import ServiceCard from "@/components/molecules/service/card/ServiceCard";
import ServicesList from "@/components/molecules/service/card/ServicesList";
import ServiceModal from "@/components/molecules/service/servicesConifigurator/ServiceModal";
import { getFutureServiceById } from "@/services/api/services/servicesApi";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  // Find the service

  const service = await getFutureServiceById(id);

  return (
    <ServiceModal>
      <ServiceCard service={service}>
        <ServicesList features={service.serviceFeatures} />
      </ServiceCard>
    </ServiceModal>
  );
}
