import Services from "@/modules/services/components/Services";
import { getFutureService } from "@/services/api/services/servicesApi";
import { getDataCachedFromDB } from "@/shared/utils/getDataCached";

const ServicesList = async () => {
  const services = await getDataCachedFromDB(
    getFutureService,
    "servicesData",
    60,
    {}
  );

  return <Services services={services} />;
};

export default ServicesList;
