import ServicesCards from "@/components/molecules/service/card/ServicesCards";
import { getFutureService } from "@/services/api/services/servicesApi";
import { getDataCachedFromDB } from "@/shared/utils/getDataCached";

const Services = async () => {
  const services = await getDataCachedFromDB(
    getFutureService,
    "servicesData",
    60,
    {}
  );

  return <ServicesCards services={services} />;
};

export default Services;
